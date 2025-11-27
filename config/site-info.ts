// src/config/site-info.ts
export const siteConfig = {
  // Informações básicas do negócio
  businessName: "Poliana Espíndola Nutrição",
  phone: "(51) 980106108",
  address: "Rua Exemplo, 123 - Porto Alegre, RS",
  email: "azirmatheus@gmail.com.br",
  
  // Redes sociais
  instagram: "@matheusazir",
  facebook: "exemplo",
  googleMapsLink: "https://maps.google.com/?q=Fisio+Vitalita+Porto+Alegre",
  
  // Conteúdo das seções
  hero: {
    title: "Nutrição focada em emagrecimento.",
    subtitle: "Especialista em longevidade sem dietas restritivas",
    buttonText: "Agendar Consulta",
    backgroundImage: "/gallery/nutricao.jpg"
  },
  
  about: {
    title: "Sobre Nós",
    description: "Na Fisio exemplo, acreditamos que cada paciente é único. Nossa abordagem humanizada e técnica especializada garantem os melhores resultados na sua reabilitação.",
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
    openingHours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.8576937276!2d-51.2294719!3d-30.1346347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951981f07dc13de1%3A0x795ab148f0cf20c0!2sAv.%20Tramanda%C3%AD%2C%20435%20-%20Ipanema%2C%20Porto%20Alegre%20-%20RS%2C%2091760-050!5e0!3m2!1spt-BR!2sbr!4v1716234567890!5m2!1spt-BR!2sbr"

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