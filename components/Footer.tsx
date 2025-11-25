import Link from 'next/link'
import { siteConfig } from '@/config/site-info'

export default function Footer() {
  const whatsappNumber = siteConfig.phone.replace(/\D/g, '')
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.businessName}</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                {siteConfig.address}
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                {siteConfig.phone}
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                {siteConfig.email}
              </p>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <Link href="/" className="block hover:text-blue-300 transition">
                Início
              </Link>
              <Link href="/sobre" className="block hover:text-blue-300 transition">
                Sobre Nós
              </Link>
              <Link href="/servicos" className="block hover:text-blue-300 transition">
                Serviços
              </Link>
              <Link href="/contato" className="block hover:text-blue-300 transition">
                Contato
              </Link>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
            <div className="space-y-2">
              {siteConfig.instagram && (
                <a
                  href={`https://instagram.com/${siteConfig.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-pink-400 transition"
                >
                  <span className="mr-2">📷</span>
                  Instagram
                </a>
              )}
              {siteConfig.facebook && (
                <a
                  href={`https://facebook.com/${siteConfig.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-400 transition"
                >
                  <span className="mr-2">👥</span>
                  Facebook
                </a>
              )}
              <a
                href={`https://wa.me/55${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-green-400 transition"
              >
                <span className="mr-2">💬</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} {siteConfig.businessName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}