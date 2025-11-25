import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/config/site-info'

export default function Home() {
  const whatsappNumber = siteConfig.phone.replace(/\D/g, '')

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {siteConfig.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {siteConfig.hero.subtitle}
          </p>
          <a
            href={`https://wa.me/55${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition inline-block"
          >
            {siteConfig.hero.buttonText}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {siteConfig.about.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              {siteConfig.about.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteConfig.about.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {siteConfig.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.services.items.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {siteConfig.contact.title}
          </h2>
          <p className="text-xl mb-8">
            {siteConfig.contact.subtitle}
          </p>
          <p className="mb-8">
            {siteConfig.contact.openingHours}
          </p>
          <a
            href={`https://wa.me/55${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition inline-block"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}