'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site-info'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode integrar com um serviço de email ou CRM
    const whatsappMessage = `Olá! Me chamo ${formData.name}. ${formData.message} Email: ${formData.email} Telefone: ${formData.phone}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/55${siteConfig.phone.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            {siteConfig.contact.title}
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            {siteConfig.contact.subtitle}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Informações</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">📍</span>
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-gray-600">{siteConfig.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">📞</span>
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-gray-600">{siteConfig.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">{siteConfig.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">🕒</span>
                  <div>
                    <p className="font-semibold">Horário de Funcionamento</p>
                    <p className="text-gray-600">{siteConfig.contact.openingHours}</p>
                  </div>
                </div>
              </div>

              {/* Botão WhatsApp */}
              <a
                href={`https://wa.me/55${siteConfig.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition inline-flex items-center space-x-2"
              >
                <span>💬</span>
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Formulário de Contato */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}