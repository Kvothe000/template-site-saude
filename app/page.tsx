import Image from 'next/image'
import { siteConfig } from '@/config/site-info'
import TeamMemberCard from '@/components/TeamMemberCard'
import TestimonialCard from '@/components/TestimonialCard'

export default function Home() {
  const whatsappNumber = siteConfig.phone.replace(/\D/g, '')

  return (
    // Mudança 1: Fundo geral agora é cinza suave (slate-50)
    <div className="min-h-screen flex flex-col bg-slate-50">
      
      {/* --- HERO (Mantido, pois tem imagem) --- */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={siteConfig.hero.backgroundImage}
          alt="Background Clínica"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="container mx-auto px-4 text-center z-20 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">
            {siteConfig.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md max-w-2xl mx-auto text-gray-100">
            {siteConfig.hero.subtitle}
          </p>
          <a
            href={`https://wa.me/55${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition inline-block shadow-lg hover:scale-105 transform duration-200"
          >
            {siteConfig.hero.buttonText}
          </a>
        </div>
      </section>

      {/* --- SOBRE NÓS (Fundo Cinza Suave) --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src={siteConfig.about.image}
                alt="Sobre a Clínica"
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 relative inline-block">
                {siteConfig.about.title}
                {/* Detalhe visual: sublinhado sutil */}
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {siteConfig.about.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {siteConfig.about.features.map((feature, index) => (
                  // Cards brancos pequenos para destacar os diferenciais
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm border border-slate-100">
                    <span className="text-green-500 text-xl font-bold">✓</span>
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SERVIÇOS (Fundo Branco para Contraste) --- */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 relative inline-block">
        {siteConfig.services.title}
        {/* Detalhe visual sutil no título */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-100 rounded-full"></span>
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mt-4">Conheça nossas especialidades</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {siteConfig.services.items.map((service, index) => (
        // Card com fundo cinza bem claro e borda sutil
        <div 
          key={index} 
          className="bg-slate-50 flex flex-col h-full p-6 rounded-2xl border border-slate-100 transition-all duration-300 group hover:shadow-xl hover:border-blue-100 hover:-translate-y-1"
        >
          {/* Título Maior e em Azul */}
          <h3 className="text-xl font-bold mb-4 text-blue-700 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          
          {/* Descrição */}
          <p className="text-gray-600 leading-relaxed text-sm mb-8 flex-grow">
            {service.description}
          </p>

          {/* Botão de Agendar Elegante */}
          <a
            href={`https://wa.me/55${whatsappNumber}?text=Olá! Gostaria de saber mais sobre o agendamento de ${encodeURIComponent(service.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all duration-300
                     bg-white text-blue-600 border border-blue-100 shadow-sm
                     hover:bg-blue-600 hover:text-white hover:border-transparent hover:shadow-md"
          >
            <span className="text-lg">📅</span> {/* Ícone de calendário neutro */}
            Agendar
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* --- EQUIPE (Fundo Cinza Novamente - Alternância Visual) --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {siteConfig.team.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center">
            {siteConfig.team.members.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                title={member.role}
                crefito={member.crefito}
                imageUrl={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- DEPOIMENTOS (Fundo Branco) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {siteConfig.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.testimonials.items.map((item, index) => (
              <TestimonialCard
                key={index}
                name={item.name}
                role={item.role}
                quote={item.quote}
                imageUrl={item.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {siteConfig.contact.title}
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            {siteConfig.contact.subtitle}
          </p>
          <div className="inline-block bg-blue-800/50 backdrop-blur-sm px-8 py-3 rounded-full mb-10 border border-blue-700">
            🕒 {siteConfig.contact.openingHours}
          </div>
          <br />
          <a
            href={`https://wa.me/55${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-green-400 transition shadow-xl hover:shadow-green-900/20 transform hover:-translate-y-1"
          >
            Agendar Agora
          </a>
        </div>
      </section>

    </div>
  )
}