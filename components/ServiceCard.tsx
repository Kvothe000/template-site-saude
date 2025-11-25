// Arquivo: components/ServiceCard.tsx (Atualizado com fundo sólido no ícone)

import Link from 'next/link';
import React from 'react'; // Necessário para o tipo genérico

// Definimos as "props" que o card vai receber
interface ServiceCardProps {
  // Mantemos o tipo genérico, que funciona para Lucide também
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ Icon, title, description, href }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105"> 
      {/* Ícone */}
      <div className="flex justify-center items-center mb-4">
        {/* 1. MUDANÇA: Fundo roxo SÓLIDO, ícone BRANCO */}
        <div className="bg-[#5B21B6] p-4 rounded-full"> {/* Padding p-4 */}
          <Icon className="w-8 h-8 text-white" /> {/* Ícone branco */}
        </div>
      </div>
      
      {/* Título */}
      <h3 className="text-xl font-bold text-[#1F2937] mb-2">{title}</h3> 
      
      {/* Descrição */}
      <p className="text-gray-600 mb-4">{description}</p>
      
      {/* Link "Saiba Mais" */}
      <Link 
        href={href} 
        className="font-medium text-[#5B21B6] hover:underline" 
      >
        Saiba Mais
      </Link>
    </div>
  );
}