// Arquivo: components/TeamMemberCard.tsx
import Image from 'next/image';
import { User } from 'lucide-react'; // Ícone de placeholder

// Definimos as props que o card vai receber
interface TeamMemberCardProps {
  imageUrl?: string; // A URL da foto (opcional)
  name: string;
  title: string;
  crefito: string; // Número do registro (CREFITO, etc.)
}

export default function TeamMemberCard({ imageUrl, name, title, crefito }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">

      {/* Imagem */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={name} 
            width={256} 
            height={256} 
            className="w-full h-full object-cover" 
          />
        ) : (
          // Placeholder se não tiver foto
          <User className="w-20 h-20 text-gray-400" />
        )}
      </div>

      {/* Informações */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-brand-secondary">{name}</h3>
        <p className="text-[#5B21B6] font-medium text-lg">{title}</p>
        <p className="text-gray-500 mt-2">{crefito}</p>
      </div>
    </div>
  );
}