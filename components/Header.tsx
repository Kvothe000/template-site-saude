import Link from 'next/link'
import { siteConfig } from '@/config/site-info'

export default function Header() {
  const whatsappNumber = siteConfig.phone.replace(/\D/g, '')
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            {siteConfig.businessName}
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Início
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-blue-600 transition">
              Sobre
            </Link>
            <Link href="/servicos" className="text-gray-700 hover:text-blue-600 transition">
              Serviços
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-blue-600 transition">
              Contato
            </Link>
          </nav>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/55${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition flex items-center space-x-2"
          >
            <span>📱</span>
            <span>{siteConfig.hero.buttonText}</span>
          </a>
        </div>
      </div>
    </header>
  )
}