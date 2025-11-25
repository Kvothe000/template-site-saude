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
  },
// NOVO: Seção da Equipe
  team: {
    title: "Conheça Nossa Equipe",
    members: [
      {
        name: "Dra. Ana Silva",
        role: "Fisioterapeuta",
        crefito: "CREFITO 123456-F",
        image: "/team/member-placeholder.jpg" // Foto genérica
      },
      {
        name: "Dr. Carlos Santos",
        role: "Osteopata",
        crefito: "CREFITO 654321-F",
        image: "/team/member2-placeholder.jpg" // Foto genérica
      }
    ]
  },

  // NOVO: Seção de Depoimentos (Prova Social)
  testimonials: {
    title: "O que dizem nossos pacientes",
    items: [
      {
        name: "Maria Oliveira",
        role: "Paciente de Pilates",
        quote: "Cheguei com dores nas costas e hoje sou outra pessoa. O ambiente é maravilhoso e os profissionais muito atenciosos.",
        image: "" // Pode deixar vazio se não tiver foto
      },
      {
        name: "João Pereira",
        role: "Reabilitação de Joelho",
        quote: "Recuperação muito mais rápida do que eu esperava. Recomendo a todos que precisam de fisioterapia séria.",
        image: ""
      },
      {
        name: "Fernanda Costa",
        role: "RPG",
        quote: "Minha postura melhorou 100%. As sessões são ótimas e o atendimento é pontual.",
        image: ""
      }
    ]
  }
}