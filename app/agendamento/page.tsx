// Arquivo: app/agendamento/page.tsx
"use client"; // IMPORTANTE! O widget do Calendly é interativo

// 1. Importe o widget do pacote que instalamos
import { InlineWidget } from "react-calendly";

export default function AgendamentoPage() {

  // 2. !! SUA TAREFA !!
  // Substitua este link pelo link REAL do Calendly da sua tia
  // (Pode ser o link geral dela ou de um evento específico)
  const calendlyUrl = "https://calendly.com/daianeborges/avaliacao-fisio"; // <-- SUBSTITUA AQUI

  return (
    <main className="min-h-screen bg-gray-50">

      {/* === Seção Hero === */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary">
            Agende sua Consulta
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Escolha o melhor horário para você. Nossa agenda é sincronizada 
            em tempo real com nossos profissionais.
          </p>
        </div>
      </section>

      {/* === Seção do Widget === */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* O widget fica mais profissional dentro de um "card" */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">

            {/* 3. Este é o componente mágico do Calendly */}
            <InlineWidget 
              url={calendlyUrl} 

              // Define a altura do widget
              styles={{
                height: '800px',
                minWidth: '320px',
              }}

              // BÔNUS: Vamos estilizar o Calendly com a cor da nossa marca!
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '5B21B6', // Nosso Roxo!
                textColor: '1F2937', // Nosso Verde/Preto
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}