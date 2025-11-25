// Arquivo: components/TestimonialCard.tsx
import Image from 'next/image';
import { User } from 'lucide-react'; // Ícone de placeholder para foto

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string; // Ex: "Paciente de Fisioterapia", "Aluna de Pilates"
  imageUrl?: string; // Opcional: URL da foto do paciente
}

export default function TestimonialCard({ quote, name, role, imageUrl }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      {/* Foto/Avatar */}
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#D2B48C]"> {/* Usando a cor de acento Bege */}
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={name} 
            width={80} 
            height={80} 
            className="w-full h-full object-cover" 
          />
        ) : (
          // Placeholder se não tiver foto
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <User className="w-10 h-10 text-gray-400" />
          </div>
        )}
      </div>

      {/* Citação (Depoimento) */}
      {/* Adicionando aspas estilizadas */}
      <blockquote className="text-gray-600 italic mb-4 relative px-4">
        <span className="absolute top-0 left-0 text-4xl text-[#D2B48C] opacity-50">&ldquo;</span>
        {quote}
        <span className="absolute bottom-0 right-0 text-4xl text-[#D2B48C] opacity-50">&rdquo;</span>
      </blockquote>

      {/* Nome e Cargo/Papel */}
      <p className="font-bold text-[#1F2937]">{name}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}