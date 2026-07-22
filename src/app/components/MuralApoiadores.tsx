import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { useSupportersSheet, Supporter, SupporterTier } from "./useSupportersSheet";

// ─── CONFIG ──────────────────────────────────────────────────────────────────

// Valor de referência de cada cota (Benfeitoria) — usado só para estimar o
// total arrecadado a partir da contagem de apoiadores por tier.
// Ajuste aqui se os valores das cotas mudarem.
const TIER_VALUE: Record<SupporterTier, number> = {
  "Owo Eyo": 300,
  "Ọsàn": 80,
  "Pákò": 30,
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function formatCurrency(v: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);
}

function formatDateBR(iso?: string) {
  const d = iso ? new Date(iso) : new Date();
  if (isNaN(d.getTime())) return iso ?? "";
  return new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric" }).format(d);
}

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

// ─── SYMBOL ──────────────────────────────────────────────────────────────────

function SymbolOwoEyo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="#D83A22" strokeWidth="2" />
      <circle cx="24" cy="24" r="11" stroke="#F3F2F1" strokeWidth="1" opacity="0.4" />
      <circle cx="24" cy="24" r="4" fill="#D83A22" />
    </svg>
  );
}

// ─── MINI-HERO (estatísticas) ───────────────────────────────────────────────

function MuralIntro({ supporters, loading }: { supporters: Supporter[]; loading: boolean }) {
  const totalApoiadores = supporters.length;
  const totalEstimado = supporters.reduce((sum, s) => sum + (TIER_VALUE[s.tier] ?? 0), 0);

  const ultimaData = supporters
    .map((s) => s.data)
    .filter(Boolean)
    .sort()
    .at(-1);

  const { count: countA, ref: refA } = useCountUp(totalApoiadores, 1400);
  const { count: countV } = useCountUp(totalEstimado, 1800);

  return (
    <div className="relative w-full py-24 md:py-36 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#D83A22] uppercase mb-6"
          style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "11px", letterSpacing: ".24em" }}
        >
          ÀROKÒ — Campanha de Financiamento Coletivo
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.65, 0.2, 1] }}
          className="font-black uppercase text-[#F3F2F1] leading-none mb-8"
          style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(2.6rem, 8vw, 7rem)", letterSpacing: "-.01em" }}
        >
          Quem Fortalece<br />o ÀROKÒ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[#F3F2F1] max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(14px, 1.8vw, 18px)", opacity: 0.8 }}
        >
          Cada nome registrado aqui ajudou a transformar uma pesquisa acadêmica em uma experiência coletiva de moda, cultura e comunicação afro-soteropolitana.
        </motion.p>

        <div ref={refA as React.RefObject<HTMLDivElement>} className="flex items-center justify-center gap-8 md:gap-16 mb-12 flex-wrap">
          {[
            { label: "apoiadores", value: loading ? "—" : `${countA}` },
            { label: "arrecadados (estimado)", value: loading ? "—" : formatCurrency(countV) },
            { label: "atualizado em", value: formatDateBR(ultimaData) },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-[#D83A22] font-black"
                style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", lineHeight: 1 }}
              >
                {s.value}
              </div>
              <div
                className="text-[#F3F2F1] uppercase mt-1"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "10px", letterSpacing: ".18em", opacity: 0.55 }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          href="#owoEyo"
          className="inline-flex items-center gap-2 border border-[#F3F2F1] border-opacity-30 text-[#F3F2F1] hover:bg-[#D83A22] hover:border-[#D83A22] transition-all duration-300 px-8 py-4 uppercase"
          style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "11px", letterSpacing: ".2em" }}
        >
          Conheça os apoiadores
          <ArrowDown size={13} strokeWidth={2} />
        </motion.a>
      </div>
    </div>
  );
}

// ─── OWO EYO ─────────────────────────────────────────────────────────────────

function OwoEyoSection({ supporters }: { supporters: Supporter[] }) {
  if (supporters.length === 0) return null;

  return (
    <section id="owoEyo" className="w-full py-24 md:py-36" style={{ background: "#111010" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex items-start justify-between flex-wrap gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#D83A22] uppercase mb-3"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "10px", letterSpacing: ".24em" }}
            >
              Nível de apoio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.2, 0.65, 0.2, 1] }}
              className="font-black uppercase text-[#F3F2F1]"
              style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-.01em", lineHeight: 0.9 }}
            >
              OWO EYO
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#F3F2F1] max-w-sm leading-relaxed self-end"
            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "14px", opacity: 0.6 }}
          >
            Apoiadores que reconheceram o valor cultural do ÀROKÒ através de um gesto de prestígio e fortalecimento.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-[rgba(243,242,241,0.06)]">
          {supporters.map((p, i) => (
            <motion.div
              key={`${p.nome}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: Math.min(i * 0.08, 0.8) }}
              className="bg-[#111010] p-8 md:p-10 hover:bg-[#1B1B1B] transition-colors duration-300"
            >
              <div className="mb-4">
                <SymbolOwoEyo />
              </div>
              <p
                className="text-[#F3F2F1] font-bold uppercase"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "14px", letterSpacing: ".12em" }}
              >
                {p.nome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ỌSÀN ────────────────────────────────────────────────────────────────────

function OsanSection({ supporters }: { supporters: Supporter[] }) {
  if (supporters.length === 0) return null;

  return (
    <section id="osan" className="w-full bg-[#1B1B1B] py-24 md:py-36" style={{ borderTop: "1px solid rgba(243,242,241,0.06)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D83A22] uppercase mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "10px", letterSpacing: ".24em" }}
          >
            Nível de apoio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.2, 1] }}
            className="font-black uppercase text-[#F3F2F1] mb-4"
            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-.01em", lineHeight: 0.9 }}
          >
            ỌSÀN
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#F3F2F1] max-w-lg"
            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "14px", opacity: 0.6 }}
          >
            Apoiadores que garantiram sua presença e contribuíram para tornar esta experiência possível.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[rgba(243,242,241,0.06)]">
          {supporters.map((p, i) => (
            <motion.div
              key={`${p.nome}-${i}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.8) }}
              className="bg-[#1B1B1B] px-6 py-7 hover:bg-[#222] transition-colors duration-200"
            >
              <p
                className="text-[#F3F2F1] font-semibold uppercase"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", letterSpacing: ".1em" }}
              >
                {p.nome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PÁKÒ (mural, scroll infinito) ─────────────────────────────────────────

const PAKO_BATCH = 60;

function PakoSection({ supporters }: { supporters: Supporter[] }) {
  const [visibleCount, setVisibleCount] = useState(PAKO_BATCH);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + PAKO_BATCH, supporters.length));
        }
      },
      { rootMargin: "500px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [supporters.length]);

  if (supporters.length === 0) return null;

  const visible = supporters.slice(0, visibleCount);

  return (
    <section id="pako" className="w-full py-24 md:py-36" style={{ background: "#0E0E0E", borderTop: "1px solid rgba(243,242,241,0.06)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D83A22] uppercase mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "10px", letterSpacing: ".24em" }}
          >
            Nível de apoio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.2, 1] }}
            className="font-black uppercase text-[#F3F2F1] mb-4"
            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-.01em", lineHeight: 0.9 }}
          >
            PÁKÒ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#F3F2F1] max-w-lg"
            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "14px", opacity: 0.6 }}
          >
            A força coletiva que sustenta a estrutura do projeto.
          </motion.p>
        </div>

        <div
          className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-x-12"
          style={{ borderTop: "1px solid rgba(243,242,241,0.1)", paddingTop: "3rem" }}
        >
          {visible.map((p, i) => (
            <p
              key={`${p.nome}-${i}`}
              className="text-[#F3F2F1] mb-4 break-inside-avoid"
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontSize: "13px",
                opacity: 0.7,
                lineHeight: 1.4,
                animation: "aroko-fade-in 0.5s ease-out both",
                animationDelay: `${Math.min((i % PAKO_BATCH) * 0.02, 0.6)}s`,
              }}
            >
              {p.nome}
            </p>
          ))}
        </div>

        {visibleCount < supporters.length && <div ref={sentinelRef} className="h-10 w-full" />}
      </div>

      <style>{`
        @keyframes aroko-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 0.7; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

// ─── ENCERRAMENTO ────────────────────────────────────────────────────────────

function Encerramento() {
  return (
    <section className="w-full bg-[#1B1B1B] py-28 md:py-44" style={{ borderTop: "1px solid rgba(243,242,241,0.06)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="origin-left h-px bg-[#D83A22] mb-12 w-24"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.2, 0.65, 0.2, 1] }}
            className="text-[#F3F2F1] font-black uppercase leading-tight mb-10"
            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(2rem, 6vw, 5rem)", letterSpacing: "-.01em", lineHeight: 0.92 }}
          >
            ÀROKÒ existe porque muitas pessoas decidiram sustentar uma mesma mensagem.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#F3F2F1] leading-relaxed mb-14"
            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "16px", opacity: 0.65, maxWidth: "560px" }}
          >
            A cada contribuição, fortalecemos estilistas negros, cultura afro-brasileira e novas formas de comunicar através da moda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <a
              href="https://www.instagram.com/projetoaroko/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D83A22] text-[#F3F2F1] hover:bg-[#F3F2F1] hover:text-[#1B1B1B] transition-all duration-300 px-8 py-4 uppercase"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "11px", letterSpacing: ".2em" }}
            >
              Conheça o projeto
              <ChevronRight size={13} strokeWidth={2} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── MURAL APOIADORES (export principal) ────────────────────────────────────

export function MuralApoiadores() {
  const { supporters, loading, error } = useSupportersSheet();

  const owoEyo = supporters.filter((s) => s.tier === "Owo Eyo");
  const osan = supporters.filter((s) => s.tier === "Ọsàn");
  const pako = supporters.filter((s) => s.tier === "Pákò");

  if (error) {
    return (
      <section className="w-full py-24 text-center" style={{ background: "#1B1B1B" }}>
        <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "13px", color: "#F3F2F1", opacity: 0.6 }}>
          Não foi possível carregar o mural de apoiadores agora. Tente novamente em instantes.
        </p>
      </section>
    );
  }

  return (
    <div className="w-full" style={{ background: "#1B1B1B" }}>
      <MuralIntro supporters={supporters} loading={loading} />
      <OwoEyoSection supporters={owoEyo} />
      <OsanSection supporters={osan} />
      <PakoSection supporters={pako} />
      <Encerramento />
    </div>
  );
}
