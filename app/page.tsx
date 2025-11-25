import Image from 'next/image'
import { siteConfig } from '@/config/site-info'
import TeamMemberCard from '@/components/TeamMemberCard' // <--- Importe
import TestimonialCard from '@/components/TestimonialCard' // <--- Importe

export default function Home() {
  const whatsappNumber = siteConfig.phone.replace(/\D/g, '')

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* --- HERO (Mantido Igual) --- */}
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
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md max-w-2xl mx-auto">
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

      {/* --- SOBRE (Mantido Igual) --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={siteConfig.about.image}
                alt="Sobre a Clínica"
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {siteConfig.about.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {siteConfig.about.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {siteConfig.about.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded bg-gray-50">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVIÇOS (Mantido Igual) --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {siteConfig.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.services.items.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-blue-600">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EQUIPE (NOVA SEÇÃO) --- */}
      <section className="py-20 bg-white">
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

      {/* --- DEPOIMENTOS (NOVA SEÇÃO) --- */}
      <section className="py-20 bg-blue-50">
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
                // imageUrl={item.image} // Se tiver foto, descomente
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL (Mantido Igual) --- */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {siteConfig.contact.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {siteConfig.contact.subtitle}
          </p>
          <p className="mb-8 font-medium bg-blue-700 inline-block px-6 py-2 rounded-full">
            {siteConfig.contact.openingHours}
          </p>
          <br />
          <a
            href={`https://wa.me/55${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition inline-flex items-center gap-2 shadow-lg"
          >
            <span>👋</span> Falar no WhatsApp
          </a>
        </div>
      </section>

    </div>
  )
}