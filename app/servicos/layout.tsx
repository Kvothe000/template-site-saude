// Arquivo: app/servicos/layout.tsx (Com as melhorias)
import Link from 'next/link';
import { HeartPulse, Activity, Dna, Waves, Leaf } from 'lucide-react';

const allServices = [
  {
    Icon: HeartPulse,
    title: "Fisioterapia",
    href: "/servicos/fisioterapia",
  },
  {
    Icon: Activity,
    title: "Pilates",
    href: "/servicos/pilates",
  },
  {
    Icon: Dna,
    title: "Acupuntura",
    href: "/servicos/acupuntura",
  },
  {
    Icon: Waves,
    title: "Massoterapia",
    href: "/servicos/massoterapia",
  },
  {
    Icon: Leaf,
    title: "Terapias Holísticas",
    href: "/servicos/terapias-holisticas",
  },
];

export default function ServicosLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* === Conteúdo Principal (75%) === */}
          <div className="md:col-span-3 bg-white p-8 rounded-lg shadow-lg">
            {children}
          </div>

          {/* === Sidebar (25%) === */}
          {/* MELHORIA 1: ADICIONAMOS 'sticky' E 'top-28'
            - 'sticky' faz a coluna "grudar"
            - 'top-28' (112px) é o espaço abaixo do nosso Header principal 
            - 'self-start' alinha a coluna ao topo para o sticky funcionar
          */}
          <aside className="md:col-span-1 space-y-8 self-start sticky top-28">
            
            {/* Card do Menu de Serviços */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-brand-secondary mb-4">
                Nossos Serviços
              </h3>
              {/* MELHORIA 2: Mudamos o 'space-y-3' para 'space-y-1' */}
              <ul className="space-y-1">
                {allServices.map((service) => (
                  <li key={service.title}>
                    {/* MELHORIA 2: Aplicamos estilo de botão
                      - 'flex', 'items-center', 'space-x-3' para alinhar ícone e texto
                      - 'p-2', 'rounded-md', 'hover:bg-gray-100' para parecer um botão
                      - 'text-gray-600', 'font-medium', 'hover:text-[#5B21B6]'
                    */}
                    <Link 
                      href={service.href} 
                      className="text-gray-600 hover:text-[#5B21B6] transition-colors flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 font-medium"
                    >
                      {/* Renderizamos o Ícone */}
                      <service.Icon className="w-5 h-5" /> 
                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            

          </aside>
        </div>
      </section>
    </main>
  );
}