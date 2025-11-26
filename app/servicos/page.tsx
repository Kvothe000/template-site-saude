import { siteConfig } from '@/config/site-info'

export default function Services() {
  const whatsappNumber = siteConfig.phone.replace(/\D/g, '')

  return (
    // Removemos min-h-screen, Header e Footer pois o layout já cuida disso
    <main className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {siteConfig.services.title}
          </h1>
          <p className="text-xl text-gray-600">
            Conheça nossas especialidades e como podemos ajudar na sua recuperação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {siteConfig.services.items.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition duration-300 group">
              <h2 className="text-2xl font-bold mb-4 text-blue-600 group-hover:text-blue-700 transition">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed h-24 overflow-hidden">
                {service.description}
              </p>
              
              {/* BOTÃO WHATSAPP DIRETO (Matador de Vendas) */}
              <a
                href={`https://wa.me/55${whatsappNumber}?text=Olá! Gostaria de saber mais sobre o tratamento de ${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-green-500 hover:text-white transition-all duration-300 border border-gray-200 hover:border-green-500"
              >
                <span>💬</span> Agendar {service.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}