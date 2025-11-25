
import { siteConfig } from '@/config/site-info'

export default function Services() {
  const whatsappNumber = siteConfig.phone.replace(/\D/g, '')

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            {siteConfig.services.title}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {siteConfig.services.items.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/55${whatsappNumber}?text=Olá! Gostaria de saber mais sobre ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition inline-block"
                >
                  Saber Mais
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  )
}