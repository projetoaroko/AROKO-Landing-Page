import { useState } from 'react';
import type { FormEvent } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    empresa: '',
    acceptEmail: false,
    acceptWhatsapp: false,
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};

    if (!formData.name.trim()) newErrors.nome = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.whatsapp = true;
    if (!formData.interest) newErrors.motivo = true;
    if (!formData.acceptEmail && !formData.acceptWhatsapp) newErrors.termos = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    // Prepare data for Formspree
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('interest', formData.interest);
    if (formData.empresa) formDataToSend.append('empresa', formData.empresa);
    formDataToSend.append('acceptEmail', formData.acceptEmail ? 'Sim' : 'Não');
    formDataToSend.append('acceptWhatsapp', formData.acceptWhatsapp ? 'Sim' : 'Não');

    try {
      const response = await fetch('https://formspree.io/f/3014118703156427813', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '',
          empresa: '',
          acceptEmail: false,
          acceptWhatsapp: false,
        });
        setMessageType('success');
        setMessage('✓ Cadastro recebido. Em breve você receberá nossas novidades.');
        
        setTimeout(() => setMessage(''), 5000);
      } else {
        setMessageType('error');
        setMessage('❌ Erro ao enviar o formulário. Tente novamente.');
        setTimeout(() => setMessage(''), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setMessageType('error');
      setMessage('❌ Erro ao enviar o formulário. Tente novamente.');
      setTimeout(() => setMessage(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="formulario"
      className="w-full bg-[#fbfaf7] py-20 md:py-28"
      style={{ borderTop: '1px solid #D9D4CC' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24 items-start">
        <div className="lg:sticky" style={{ top: '80px' }} data-reveal="left">
          <h2
            className="font-extrabold uppercase text-[#1B1B1B]"
            style={{
              fontSize: 'clamp(2.2rem,4vw,3.2rem)',
              lineHeight: 0.96,
              letterSpacing: '0',
            }}
          >
            A passarela abre
            <br />
            primeiro para você!
          </h2>
          <p
            className="mt-6 leading-7 text-[#5f5951]"
            style={{ fontSize: '14px', maxWidth: '320px' }}
          >
            Cadastre-se para receber os lançamentos de ingressos em primeira mão
            e acompanhar de perto as marcas que estão redefinindo a moda
            afro-soteropolitana.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7" data-reveal="right">
          <div>
            <Label
              htmlFor="name"
              className="font-bold uppercase"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '10px',
                letterSpacing: '.18em',
              }}
            >
              Nome Completo *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-0 border-b-[1.5px] border-[#1B1B1B] rounded-none bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-[#d83a22] transition-all duration-400"
            />
            {errors.nome && (
              <p className="text-[#d83a22] mt-1" style={{ fontSize: '12px' }}>
                Nome é obrigatório.
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="email"
              className="font-bold uppercase"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '10px',
                letterSpacing: '.18em',
              }}
            >
              E-mail *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border-0 border-b-[1.5px] border-[#1B1B1B] rounded-none bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-[#d83a22] transition-all duration-400"
            />
            {errors.email && (
              <p className="text-[#d83a22] mt-1" style={{ fontSize: '12px' }}>
                E-mail inválido.
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="phone"
              className="font-bold uppercase"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '10px',
                letterSpacing: '.18em',
              }}
            >
              WhatsApp *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(71) 99999-9999"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border-0 border-b-[1.5px] border-[#1B1B1B] rounded-none bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-[#d83a22] transition-all duration-400"
            />
            {errors.whatsapp && (
              <p className="text-[#d83a22] mt-1" style={{ fontSize: '12px' }}>
                WhatsApp é obrigatório.
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="interest"
              className="font-bold uppercase"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '10px',
                letterSpacing: '.18em',
              }}
            >
              Qual o motivo de interesse? *
            </Label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={(e) =>
                setFormData({ ...formData, interest: e.target.value })
              }
              className="w-full border-0 border-b-[1.5px] border-[#1B1B1B] rounded-none bg-transparent px-0 py-3 text-sm cursor-pointer focus:outline-none focus:border-[#d83a22] transition-all duration-400"
              style={{ appearance: 'none' }}
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              <option value="ingresso">Quero garantir meu ingresso</option>
              <option value="imprensa">
                Sou da Imprensa / Criador de Conteúdo
              </option>
              <option value="marca">
                Represento uma marca e quero patrocinar/apoiar
              </option>
              <option value="voluntario">
                Quero ser voluntário no Backstage
              </option>
            </select>
            {errors.motivo && (
              <p className="text-[#d83a22] mt-1" style={{ fontSize: '12px' }}>
                Selecione uma opção.
              </p>
            )}
          </div>

          {formData.interest === 'marca' && (
            <div className="conditional-field">
              <Label
                htmlFor="empresa"
                className="font-bold uppercase"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '.18em',
                }}
              >
                Nome da Empresa/Marca
              </Label>
              <Input
                id="empresa"
                name="empresa"
                type="text"
                placeholder="Nome da sua marca"
                value={formData.empresa}
                onChange={(e) =>
                  setFormData({ ...formData, empresa: e.target.value })
                }
                className="w-full border-0 border-b-[1.5px] border-[#1B1B1B] rounded-none bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-[#d83a22] transition-all duration-400"
              />
            </div>
          )}

          <div
            className="space-y-3 pt-4"
            style={{ borderTop: '1px solid #D9D4CC' }}
          >
            <div className="flex items-start gap-3">
              <Checkbox
                id="accept-email"
                checked={formData.acceptEmail}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, acceptEmail: checked as boolean })
                }
                className="mt-0.5"
              />
              <label
                htmlFor="accept-email"
                className="text-[#5f5951] leading-5 cursor-pointer"
                style={{ fontSize: '13px' }}
              >
                Aceito receber novidades, informações sobre ingressos e conteúdos
                exclusivos do <strong className="text-[#1B1B1B]">ÀROKÒ</strong> por{' '}
                <strong className="text-[#1B1B1B]">e-mail</strong>.
              </label>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox
                id="accept-whatsapp"
                checked={formData.acceptWhatsapp}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, acceptWhatsapp: checked as boolean })
                }
                className="mt-0.5"
              />
              <label
                htmlFor="accept-whatsapp"
                className="text-[#5f5951] leading-5 cursor-pointer"
                style={{ fontSize: '13px' }}
              >
                Aceito receber comunicações do{' '}
                <strong className="text-[#1B1B1B]">ÀROKÒ</strong> via{' '}
                <strong className="text-[#1B1B1B]">WhatsApp</strong>.
              </label>
            </div>
            {errors.termos && (
              <p className="text-[#d83a22]" style={{ fontSize: '12px' }}>
                Aceite pelo menos um canal para continuar.
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button w-full bg-[#1B1B1B] text-white py-5 font-bold uppercase hover:bg-[#d83a22] transition-colors relative overflow-hidden"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '10px',
                letterSpacing: '.18em',
                opacity: isSubmitting ? 0.7 : 1,
              }}
            >
              {isSubmitting
                ? 'Enviando...'
                : 'Quero receber as novidades em primeira mão'}
            </button>
            {message && (
              <p
                className="submit-message mt-4 font-semibold"
                style={{
                  fontSize: '13px',
                  color: messageType === 'success' ? '#2e7d32' : '#d83a22',
                }}
              >
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
