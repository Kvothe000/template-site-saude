// Arquivo: app/servicos/acupuntura/page.tsx

export default function AcupunturaPage() {
  return (
    <article>
      
      {/* Imagem de Destaque (Placeholder) */}
      <div className="bg-gray-200 rounded-lg w-full h-64 flex items-center justify-center mb-6">
        <span className="text-gray-500">Imagem de Acupuntura (placeholder)</span>
      </div>
      
      <h1 className="text-4xl font-bold text-brand-secondary mb-4">
        Acupuntura
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Técnica milenar para alívio da dor, redução de estresse e equilíbrio energético.
      </p>
      
      {/* Conteúdo do Serviço */}
      <div className="space-y-6 text-gray-700 text-lg">
        <h2 className="text-2xl font-bold text-brand-secondary">O que é Acupuntura?</h2>
        <p>
          A Acupuntura é uma terapia milenar originária da Medicina Tradicional 
          Chinesa, que consiste na aplicação de agulhas muito finas em pontos 
          específicos do corpo. O objetivo é estimular as terminações nervosas, 
          promovendo o reequilíbrio energético e a homeostase do organismo.
        </p>
        
        <h2 className="text-2xl font-bold text-brand-secondary">Como funciona e o que trata?</h2>
        <p>
          A estimulação dos pontos de acupuntura ativa o sistema nervoso e 
          libera substâncias químicas, como endorfinas e serotonina, que 
          atuam como analgésicos e antidepressivos naturais do corpo.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Alívio de dores crônicas e agudas (enxaqueca, dor lombar, fibromialgia).</li>
          <li>Redução significativa do estresse, ansiedade e sintomas de depressão.</li>
          <li>Melhora da qualidade do sono e combate à insônia.</li>
          <li>Tratamento de distúrbios digestivos e respiratórios.</li>
          <li>Fortalecimento do sistema imunológico.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-brand-secondary">Nossa Abordagem</h2>
        <p>
          Na FisioVitalitá, a Acupuntura é realizada por profissionais 
          fisioterapeutas com especialização na área. Utilizamos materiais 
          totalmente descartáveis e seguimos um rigoroso protocolo de 
          segurança e higiene. A sessão é projetada para ser um momento 
          relaxante e restaurador.
        </p>
      </div>
    </article>
  );
}