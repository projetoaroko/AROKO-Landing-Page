import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
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

  const handleSubmit = async (e: FormEvent) => {
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

    // Preparação dos dados
    const formDataToSend = new FormData();
    formDataToSend.append('_subject', 'Novo cadastro - ÀROKÒ');
    formDataToSend.append('Nome', formData.name);
    formDataToSend.append('Email', formData.email);
    formDataToSend.append('WhatsApp', formData.phone);
    formDataToSend.append('Interesse', formData.interest);
    if (formData.empresa) formDataToSend.append('Empresa', formData.empresa);
    formDataToSend.append('Aceita Email', formData.acceptEmail ? 'Sim' : 'Não');
    formDataToSend.append('Aceita WhatsApp', formData.acceptWhatsapp ? 'Sim' : 'Não');

    try {
      const response = await fetch('https://formspree.io/f/xeedbeok', {
        method: 'POST',
        body: formDataToSend,
        headers: { 'Accept': 'application/json' },
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
        setMessage('✓ Cadastro recebido. Em breve você receberá nossas novidades.');
      } else {
        setMessage('❌ Erro ao enviar. Tente novamente mais tarde.');
      }
    } catch (error) {
      setMessage('❌ Erro de conexão. Tente novamente.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <section
      id="formulario"
      className="w-full bg-[#fbfaf7] py-20 md:py-28"
      style={{ borderTop: '1px solid #D9D4CC' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24 items-start">
        {/* Left Side */}
        <motion.div
          className="lg:sticky"
          style={{ top: '80px' }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.2, 1] }}
        >
          <h2
            className="font-extrabold uppercase text-[#1B1B1B]"
            style={{
              fontSize: 'clamp(2.2rem,4vw,3.2rem)',
              lineHeight: 0.96,
              letterSpacing: '-.02em',
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
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-7"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.65, 0.2, 1] }}
        >
          {/* Nome */}
          <div>
            <Label htmlFor="name" className="font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '.18em' }}>Nome Completo *</Label>
            <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border-0 border-b-[1.5px] border-[#1B1B1B] rounded-none bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-[#d83a22]" />
            {errors.nome && <p className="text-[#d83a22] mt-1" style={{ fontSize: '12px' }}>Nome é obrigatório.</p>}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '.18em' }}>E-mail *</Label>
            <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border-0 border-b-[1.5px] border-[#1B1B1B] rounded-none bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-[#d83a22]" />
            {errors.email && <p className="text-[#d83a22] mt-1" style={{ fontSize: '12px' }}>E-mail inválido.</p>}
          </div>

          {/* WhatsApp */}
          <div>
            <Label htmlFor="phone" className="font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '.18em' }}>WhatsApp *</Label>
            <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border-0 border-b-[1.5px] border-[#1B1B1B] rounded-none bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-[#d83a22]" />
            {errors.whatsapp && <p className="text-[#d83a22] mt-1" style={{ fontSize: '12px' }}>WhatsApp é obrigatório.</p>}
          </div>

          {/* Interesse */}
          <div>
            <Label htmlFor="interest" className="font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '.18em' }}>Motivo de interesse? *</Label>
            <select id="interest" value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} className="w-full border-0 border-b-[1.5px] border-[#1B1B1B] rounded-none bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-[#d83a22]" style={{ appearance: 'none' }}>
              <option value="" disabled>Selecione uma opção</option>
              <option value="ingresso">Quero garantir meu ingresso</option>
              <option value="imprensa">Imprensa / Criador de Conteúdo</option>
              <option value="marca">Represento uma marca</option>
              <option value="voluntario">Voluntário Backstage</option>
            </select>
          </div>

          {/* Empresa (Condicional) */}
          {formData.interest === 'marca' && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
              <Label htmlFor="empresa" className="font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '.18em' }}>Nome da Marca</Label>
              <Input id="empresa" value={formData.empresa} onChange={(e) => setFormData({ ...formData, empresa: e.target.value })} className="w-full border-0 border-b-[1.5px] border-[#1B1B1B] rounded-none bg-transparent px-0 py-3" />
            </motion.div>
          )}

          {/* Termos */}
          <div className="space-y-3 pt-4" style={{ borderTop: '1px solid #D9D4CC' }}>
            <div className="flex items-start gap-3">
              <Checkbox id="accept-email" checked={formData.acceptEmail} onCheckedChange={(c) => setFormData({ ...formData, acceptEmail: c as boolean })} />
              <label htmlFor="accept-email" className="text-[#5f5951]" style={{ fontSize: '13px' }}>Aceito receber novidades do <strong className="text-[#1B1B1B]">ÀROKÒ</strong> por e-mail.</label>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="accept-whatsapp" checked={formData.acceptWhatsapp} onCheckedChange={(c) => setFormData({ ...formData, acceptWhatsapp: c as boolean })} />
              <label htmlFor="accept-whatsapp" className="text-[#5f5951]" style={{ fontSize: '13px' }}>Aceito receber comunicações via <strong className="text-[#1B1B1B]">WhatsApp</strong>.</label>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" disabled={isSubmitting} className="w-full bg-[#1B1B1B] text-white py-5 font-bold uppercase hover:bg-[#d83a22] transition-colors disabled:opacity-70" style={{ fontSize: '10px', letterSpacing: '.18em' }}>
            {isSubmitting ? 'Enviando...' : 'Quero receber as novidades'}
          </button>
          
          {message && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#2e7d32', fontSize: '13px' }}>{message}</motion.p>}
        </motion.form>
      </div>
    </section>
  );
}
