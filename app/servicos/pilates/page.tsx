// Arquivo: app/servicos/pilates/page.tsx
import Image from 'next/image'; // Adicione no topo do arquivo

export default function PilatesPage() {
  return (
    <article>
      
      {/* Este 'div' é a "caixa" ou "janela" da imagem. 
    Ele é 'relative' para o Next.js saber onde a imagem deve preencher.
    Ele tem uma altura fixa ('h-80' = 320px)
    Ele tem 'overflow-hidden' para "cortar" o que sobrar da imagem.
*/}
<div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg mb-8">
  <Image 
    // Use o 'src' correto para cada página
    src="/gallery/pilates.jpg" 
    alt="Sala de Fisioterapia e Pilates" 
    
    fill // "fill" faz a imagem preencher o 'div' pai
    
    // "cover" é a mágica: ele cobre a área, mantém o aspect ratio,
    // e NUNCA estica a imagem. Ele "corta" as sobras.
    style={{ objectFit: 'cover' }} 
    
    priority // Carrega esta imagem principal mais rápido
    sizes="(max-width: 768px) 100vw, 75vw"
  />
</div>
      
      <h1 className="text-4xl font-bold text-brand-secondary mb-4">
        Pilates
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Fortalecimento do core, melhora da postura e aumento da flexibilidade.
      </p>
      
      {/* Conteúdo do Serviço */}
      <div className="space-y-6 text-gray-700 text-lg">
        <h2 className="text-2xl font-bold text-brand-secondary">O que é Pilates?</h2>
        <p>
          O Pilates é um método de exercício físico e alongamento que utiliza o 
          peso do próprio corpo na sua execução. É uma técnica de reeducação 
          do movimento que visa trabalhar o corpo todo, trazendo equilíbrio 
          muscular e mental.
        </p>
        
        <h2 className="text-2xl font-bold text-brand-secondary">Principais Benefícios</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Aumento da força e tônus muscular, principalmente do abdômen (core).</li>
          <li>Melhora da postura e consciência corporal.</li>
          <li>Aumento da flexibilidade e mobilidade articular.</li>
          <li>Alívio de dores crônicas e tensões musculares.</li>
          <li>Redução do estresse e melhora da concentração.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-brand-secondary">Nossa Abordagem</h2>
        <p>
          Na FisioVitalitá, oferecemos aulas de Pilates com equipamentos e de solo, 
          ministradas por fisioterapeutas. As turmas são reduzidas para garantir 
          atendimento personalizado e a correta execução dos movimentos.
        </p>
      </div>
    </article>
  );
}