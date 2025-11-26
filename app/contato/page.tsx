import { siteConfig } from '@/config/site-info'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Contact() {
  const whatsappNumber = siteConfig.phone.replace(/\D/g, '')

  return (
    <main className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.contact.title}</h1>
          <p className="text-xl text-gray-600">{siteConfig.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* COLUNA 1: Informações e Botão */}
          <div className="p-10 md:p-12 flex flex-col justify-center space-y-8">
            
            {/* Card Endereço */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Nosso Endereço</h3>
                <p className="text-gray-600">{siteConfig.address}</p>
              </div>
            </div>

            {/* Card Horário */}
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Horário de Atendimento</h3>
                <p className="text-gray-600">{siteConfig.contact.openingHours}</p>
              </div>
            </div>

            {/* Card Contato */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Fale Conosco</h3>
                <p className="text-gray-600">{siteConfig.phone}</p>
                <p className="text-gray-600">{siteConfig.email}</p>
              </div>
            </div>

            <hr className="border-gray-100" />

            <a
              href={`https://wa.me/55${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <span>💬</span> Agendar pelo WhatsApp
            </a>
          </div>

          {/* COLUNA 2: Google Maps (Iframe) */}
          <div className="h-[400px] lg:h-auto bg-gray-200 relative">
            <iframe 
              src={siteConfig.contact.googleMapsEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>

        </div>
      </div>
    </main>
  )
}