// src/config/site-info.ts
export const siteConfig = {
  // Informações básicas do negócio
  businessName: "Fisio Vitalita",
  phone: "(51) 99999-9999",
  address: "Rua Exemplo, 123 - Porto Alegre, RS",
  email: "contato@fisiovitalita.com.br",
  
  // Redes sociais
  instagram: "@fisiovitalita",
  facebook: "fisiovitalita",
  googleMapsLink: "https://maps.google.com/?q=Fisio+Vitalita+Porto+Alegre",
  
  // Conteúdo das seções
  hero: {
    title: "Recupere sua qualidade de vida",
    subtitle: "Especialistas em Fisioterapia e Pilates",
    buttonText: "Agendar Consulta",
    backgroundImage: "/gallery/hero-bg.jpg"
  },
  
  about: {
    title: "Sobre Nós",
    description: "Na Fisio Vitalita, acreditamos que cada paciente é único. Nossa abordagem humanizada e técnica especializada garantem os melhores resultados na sua reabilitação.",
    image: "/gallery/about-image.jpg",
    features: [
      "Atendimento personalizado",
      "Profissionais especializados", 
      "Equipamentos modernos",
      "Ambiente acolhedor"
    ]
  },
  
  services: {
    title: "Nossos Serviços",
    items: [
      {
        title: "Fisioterapia Ortopédica",
        description: "Tratamento de lesões musculoesqueléticas"
      },
      {
        title: "Pilates",
        description: "Melhora da postura e fortalecimento muscular"
      },
      {
        title: "Fisioterapia Neurológica",
        description: "Reabilitação para condições neurológicas"
      },
      {
        title: "RPG",
        description: "Reeducação Postural Global"
      }
    ]
  },
  
  contact: {
    title: "Entre em Contato",
    subtitle: "Estamos aqui para ajudar na sua recuperação",
    openingHours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h"
  }
}