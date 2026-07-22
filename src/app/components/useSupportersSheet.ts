import { useEffect, useState } from "react";

export type SupporterTier = "Pákò" | "Ọsàn" | "Owo Eyo";

export interface Supporter {
  nome: string;
  tier: SupporterTier;
  data?: string;
}

// URL do CSV publicado da planilha (nome, tier, data)
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRqJlQBGt7mDg1zfwk8jwv9fzsEt3Ib_SkloJ2aWBmdESdGzM_oo7hlZ01XBsh_opqPAPZfiOqwZKla/pub?output=csv&gid=54642034&single=true";

// Ordem de prestígio, do maior para o menor (ajuste conforme seus tiers reais)
const TIER_ORDER: Record<string, number> = {
  "Owo Eyo": 0,
  "Ọsàn": 1,
  "Pákò": 2,
};

/**
 * Remove acentos e normaliza para minúsculas/trim, para comparação tolerante
 * (ex.: "osan", "Ọsàn ", "OSAN" devem todos bater com o mesmo tier).
 */
function normalizeKey(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .trim()
    .toLowerCase();
}

// Mapa de qualquer variação plausível de escrita -> tier canônico usado no app
const TIER_ALIASES: Record<string, SupporterTier> = {
  "owo eyo": "Owo Eyo",
  "owoeyo": "Owo Eyo",
  "osan": "Ọsàn",
  "o san": "Ọsàn",
  "pako": "Pákò",
  "pak o": "Pákò",
};

function resolveTier(raw: string): SupporterTier | null {
  const key = normalizeKey(raw);
  return TIER_ALIASES[key] ?? null;
}

/**
 * Faz parse simples de uma linha CSV, respeitando aspas (para vírgulas
 * dentro de mensagens, por exemplo).
 */
function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (insideQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === "," && !insideQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

function parseCsv(text: string): Supporter[] {
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) return [];

  const headers = parseCsvLine(lines[0]).map((h) =>
    h.toLowerCase().trim()
  );

  const idxNome = headers.indexOf("nome");
  const idxTier = headers.indexOf("tier");
  const idxData = headers.indexOf("data");

  return lines
    .slice(1)
    .map((line) => {
      const cols = parseCsvLine(line);
      const nome = cols[idxNome]?.trim();
      const tierRaw = cols[idxTier]?.trim();
      const tier = tierRaw ? resolveTier(tierRaw) : null;

      if (!nome) return null;

      if (!tier) {
        console.warn(
          `[useSupportersSheet] Tier não reconhecido para "${nome}": "${tierRaw}". ` +
            `Linha ignorada. Valores aceitos: Owo Eyo, Ọsàn, Pákò (com variações de acento/maiúscula).`
        );
        return null;
      }

      return {
        nome,
        tier,
        data: idxData >= 0 ? cols[idxData]?.trim() : undefined,
      } as Supporter;
    })
    .filter((s): s is Supporter => s !== null)
    .sort((a, b) => {
      const ta = TIER_ORDER[a.tier] ?? 99;
      const tb = TIER_ORDER[b.tier] ?? 99;
      if (ta !== tb) return ta - tb;
      return a.nome.localeCompare(b.nome, "pt-BR");
    });
}

interface UseSupportersResult {
  supporters: Supporter[];
  loading: boolean;
  error: string | null;
}

export function useSupportersSheet(
  url: string = SHEET_CSV_URL
): UseSupportersResult {
  const [supporters, setSupporters] = useState<Supporter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchSupporters() {
      try {
        setLoading(true);
        // cache-buster leve para evitar cache agressivo do Google
        const res = await fetch(`${url}&_=${Date.now()}`);
        if (!res.ok) throw new Error(`Erro ao buscar planilha: ${res.status}`);
        const text = await res.text();
        const parsed = parseCsv(text);
        if (!cancelled) {
          setSupporters(parsed);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Erro desconhecido");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchSupporters();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { supporters, loading, error };
}
