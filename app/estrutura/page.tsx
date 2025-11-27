// Arquivo: app/estrutura/page.tsx
import Image from 'next/image';

// --- TAREFA: ATUALIZE ESTE ARRAY ---
// Coloque os nomes exatos dos arquivos de imagem que você colocou na pasta /public/gallery/
// Adicione uma descrição para cada imagem (bom para acessibilidade e SEO)
// SUBSTITUA O ARRAY 'galleryImages' ANTIGO POR ESTE:
const galleryImages = [
  { src: "/gallery/fachada.jpg", alt: "Fachada da clínica" },
  { src: "/gallery/fisioterapia-pilates.jpg", alt: "Equipamentos de Pilates e Fisioterapia" },
  { src: "/gallery/massagem-holisticas.jpg", alt: "Sala de massoterapia e terapias holísticas" },
  // Adicione mais fotos aqui quando ela te mandar
];
// ------------------------------------
// ------------------------------------

export default function EstruturaPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* === Seção Hero da Página "Estrutura" === */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary">
            Nossa Estrutura
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Um ambiente pensado para seu conforto, recuperação e bem-estar.
          </p>
        </div>
      </section>

          
          {/* === Seção da Galeria === */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              
              {/* A MUDANÇA ESTÁ AQUI:
                Troquei 'columns-...' por 'grid'.
                Isso força todas as "caixas" de imagem a terem o mesmo tamanho.
              */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                
                {galleryImages.map((image) => (
                  // Este 'div' é a "caixa" que define o tamanho
                  <div 
                    key={image.src} 
                    className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg
                               transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <Image 
                      src={image.src} 
                      alt={image.alt}
                      fill // "fill" para preencher o <div>
                      style={{ objectFit: 'cover' }} // "cover" para cortar e não esticar
                      
                      // O 'sizes' ajuda o Next.js a carregar a imagem do tamanho certo
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}

                {/* --- Caso não tenha imagens ainda, use este placeholder --- */}
                {galleryImages.length === 0 && (
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <span className="text-gray-500">Galeria de fotos em breve...</span>
                  </div>
                )}
                
              </div>
            </div>
          </section>
    </main>
  );
}