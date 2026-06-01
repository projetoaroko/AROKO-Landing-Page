import { useState, FormEvent } from 'react';

export const ContactForm = () => {
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
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

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

    const formDataToSend = new FormData();
    formDataToSend.append('_subject', 'Novo cadastro - ÀROKÒ');
    formDataToSend.append('Nome', formData.name);
    formDataToSend.append('Email', formData.email);
    formDataToSend.append('WhatsApp', formData.phone);

    formDataToSend.append(
      'Interesse',
      {
        ingresso: 'Quero garantir meu ingresso',
        imprensa: 'Imprensa / Criador de Conteúdo',
        marca: 'Patrocínio / Apoio',
        voluntario: 'Voluntário Backstage',
      }[formData.interest] || formData.interest
    );

    if (formData.empresa) {
      formDataToSend.append('Empresa', formData.empresa);
    }

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
        setErrors({});
        setMessageType('success');
        setMessage('✓ Cadastro recebido. Em breve você receberá nossas novidades.');
      } else {
        const data = await response.json();
        setMessageType('error');
        setMessage(data?.errors?.[0]?.message || '❌ Erro ao enviar o formulário.');
      }
    } catch (error) {
      setMessageType('error');
      setMessage('❌ Erro ao enviar o formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

 return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Entre em contato</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Nome" 
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="border p-2"
        />
        
        <input 
          type="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="border p-2"
        />

        <input 
          type="text" 
          placeholder="WhatsApp" 
          value={formData.phone} 
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="border p-2"
        />

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-black text-white p-2 rounded"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </section>
  );
};
