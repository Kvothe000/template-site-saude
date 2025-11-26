'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site-info'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // Estado do Dropdown Mobile
  
  const whatsappNumber = siteConfig.phone.replace(/\D/g, '')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  
  // Dropdown Links
  const clinicaLinks = [
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Nossa Equipe", href: "/equipe" },
    { name: "Estrutura", href: "/estrutura" },
  ]

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          <Link href="/" className="text-2xl font-bold text-blue-600 z-50">
            {siteConfig.businessName}
          </Link>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Início</Link>
            
            {/* DROPDOWN DESKTOP (Hover CSS puro + Group) */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition focus:outline-none">
                A Clínica <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200"/>
              </button>
              
              {/* Menu Flutuante */}
              <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                  {clinicaLinks.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href} 
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/servicos" className="text-gray-700 hover:text-blue-600 font-medium transition">Serviços</Link>
            <Link href="/contato" className="text-gray-700 hover:text-blue-600 font-medium transition">Contato</Link>
            
            <a
              href={`https://wa.me/55${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2.5 rounded-full hover:bg-green-600 transition flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>📱</span>
              <span className="font-bold text-sm">{siteConfig.hero.buttonText}</span>
            </a>
          </nav>

          {/* --- MOBILE TOGGLE --- */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg py-4 px-4 flex flex-col space-y-2 h-screen">
          <Link href="/" className="text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium" onClick={() => setIsMenuOpen(false)}>
            Início
          </Link>

          {/* Dropdown Mobile (Click) */}
          <div>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex justify-between items-center text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium"
            >
              A Clínica <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}/>
            </button>
            
            {/* Sub-itens Mobile */}
            {isDropdownOpen && (
              <div className="pl-4 flex flex-col space-y-1 border-l-2 border-gray-100 ml-4 mt-1">
                {clinicaLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 p-2 hover:text-blue-600 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/servicos" className="text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium" onClick={() => setIsMenuOpen(false)}>
            Serviços
          </Link>
          <Link href="/contato" className="text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium" onClick={() => setIsMenuOpen(false)}>
            Contato
          </Link>

          <div className="pt-4">
            <a
              href={`https://wa.me/55${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white w-full py-4 rounded-xl hover:bg-green-600 transition flex justify-center items-center space-x-2 text-lg font-bold shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>📱</span>
              <span>Agendar Agora</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}