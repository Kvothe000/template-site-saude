'use client' // <--- Necessário para funcionar o clique

import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site-info'
import { Menu, X } from 'lucide-react' // Ícones prontos

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const whatsappNumber = siteConfig.phone.replace(/\D/g, '')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600 z-50">
            {siteConfig.businessName}
          </Link>

          {/* --- MENU DESKTOP (Telas Grandes) --- */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Início</Link>
            <Link href="/sobre" className="text-gray-700 hover:text-blue-600 transition">Sobre</Link>
            <Link href="/servicos" className="text-gray-700 hover:text-blue-600 transition">Serviços</Link>
            <Link href="/contato" className="text-gray-700 hover:text-blue-600 transition">Contato</Link>
            
            {/* Botão Desktop */}
            <a
              href={`https://wa.me/55${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition flex items-center space-x-2"
            >
              <span>📱</span>
              <span>{siteConfig.hero.buttonText}</span>
            </a>
          </nav>

          {/* --- BOTÃO MOBILE (Hamburguer) --- */}
          <button 
            className="md:hidden text-gray-700 z-50"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* --- MENU MOBILE (Gaveta) --- */}
      {/* Só aparece se isMenuOpen for true */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5 duration-200">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-blue-600 text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            href="/sobre" 
            className="text-gray-700 hover:text-blue-600 text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link 
            href="/servicos" 
            className="text-gray-700 hover:text-blue-600 text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Serviços
          </Link>
          <Link 
            href="/contato" 
            className="text-gray-700 hover:text-blue-600 text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </Link>

          {/* Botão Mobile */}
          <a
            href={`https://wa.me/55${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white w-full py-3 rounded-lg hover:bg-green-600 transition flex justify-center items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>📱</span>
            <span>{siteConfig.hero.buttonText}</span>
          </a>
        </div>
      )}
    </header>
  )
}