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

    // Preparação dos dados para o Formspree
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
        headers: {
          'Accept': 'application/json',
        },
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

  console.error('Formspree error:', data);

  setMessageType('error');
  setMessage(
    data?.errors?.[0]?.message ||
    '❌ Erro ao enviar o formulário.'
  );
}
