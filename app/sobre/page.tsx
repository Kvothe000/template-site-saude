
import { siteConfig } from '@/config/site-info'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            {siteConfig.about.title}
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg text-gray-700 mb-6">
                {siteConfig.about.description}
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
              <p className="text-gray-700 mb-6">
                Proporcionar atendimento de excelência em fisioterapia, promovendo 
                saúde, qualidade de vida e bem-estar através de tratamentos 
                personalizados e humanizados.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Diferenciais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteConfig.about.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}