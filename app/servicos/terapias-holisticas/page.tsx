// Arquivo: app/servicos/terapias-holisticas/page.tsx (CORRIGIDO DE NOVO)
import Image from 'next/image';

export default function TerapiasHolisticasPage() {
  return (
    <article>
      
<div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg mb-8">
  <Image 
    src="/gallery/physio.jpg" 
    alt="Sala de Massoterapia" 
    fill
    
    // === A MUDANÇA ESTÁ AQUI ===
    // Removemos 'style={{ objectFit: 'cover' }}' e usamos classes
    // 'object-cover' = (Não esticar)
    // 'object-center' = (Focar o corte no centro da imagem)
    className="object-cover object-center" 
    
    priority
    sizes="(max-width: 768px) 100vw, 75vw"
  />
</div>
      
      <h1 className="text-4xl font-bold text-brand-secondary mb-4">
        Terapias Holísticas
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Cuidado integral que une corpo, mente e espírito para uma saúde plena.
      </p> {/* <-- ERRO 2 CORRIGIDO: Era </S> */}
      
      {/* Conteúdo do Serviço */}
      <div className="space-y-6 text-gray-700 text-lg">
        <h2 className="text-2xl font-bold text-brand-secondary">O que é a Abordagem Holística?</h2>
        <p>
          A terapia holística, ou integrativa, enxerga o ser humano como um 
          todo – físico, mental, emocional e espiritual. Em vez de tratar 
          apenas o sintoma (como a dor nas costas), buscamos entender o 
          desequilíbrio que gerou esse sintoma (como o estresse ou a ansiedade).
        </p>
        
        <h2 className="text-2xl font-bold text-brand-secondary">Nossas Práticas Integrativas</h2>
        <p>
          Na FisioVitalitá, integramos técnicas modernas e ancestrais para 
          promover o equilíbrio completo. Nossas terapias podem incluir:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Reiki:</strong> Técnica japonesa de canalização de energia vital universal para reequilibrar os chakras e promover o relaxamento.</li>
          <li><strong>Aromaterapia:</strong> Uso de óleos essenciais para estimular diferentes partes do cérebro, aliviando o estresse e melhorando o humor.</li>
          
          {/* --- ERRO 1 CORRIGIDO: Usando &apos; --- */}
          <li><strong>Ventosaterapia:</strong> Aplicação de &apos;copos&apos; que criam sucção para melhorar a circulação sanguínea e aliviar dores musculares.</li>
          
          <li><strong>Barras de Access:</strong> Terapia quântica que, através de toques suaves na cabeça, libera padrões de pensamento e crenças limitantes.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-brand-secondary">Para Quem é Indicado?</h2>
        <p>
          As terapias holísticas são indicadas para qualquer pessoa que busca 
          não apenas o alívio de um sintoma físico, mas também uma maior 
          conexão consigo mesma, redução do estresse e uma vida mais 
          equilibrada e consciente.
        </p>
      </div>
    </article>
  );
}