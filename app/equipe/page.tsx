// Arquivo: app/equipe/page.tsx
import TeamMemberCard from '@/components/TeamMemberCard';

// Vamos usar este array como placeholder.
// Assim que você tiver as fotos e infos, só precisamos atualizar aqui.
const teamMembers = [
  {
    name: "Profissional 1",
    title: "Especialidade (ex: Fisioterapeuta)",
    crefito: "Registro Profissional",
    imageUrl: "/team/member1-placeholder.jpg", // Deixe em branco para usar o placeholder
  },
  // ...
  {
    name: "Profissional 2",
    title: "Especialidade (ex: Pilates)",
    crefito: "Registro Profissional",
    imageUrl: "/team/member-placeholder.jpg", // <--- O CAMINHO CORRETO
  },
// ...
  {
    name: "Profissional 3",
    title: "Especialidade (ex: Acupuntura)",
    crefito: "Registro Profissional",
    imageUrl: "",
  },
  {
    name: "Profissional 4",
    title: "Especialidade (ex: Massoterapia)",
    crefito: "Registro Profissional",
    imageUrl: "",
  },
];

export default function EquipePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* === Seção Hero da Página "Equipe" === */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary">
            Nossa Equipe
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Profissionais dedicados e qualificados, prontos para cuidar de você.
          </p>
        </div>
      </section>

      {/* === Seção dos Cards da Equipe === */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {/* Usamos .map() para criar um card para cada item do nosso array */}
            {teamMembers.map((member) => (
              <TeamMemberCard 
                key={member.name}
                name={member.name}
                title={member.title}
                crefito={member.crefito}
                imageUrl={member.imageUrl}
              />
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}