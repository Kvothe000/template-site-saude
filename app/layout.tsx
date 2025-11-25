// Arquivo: /src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// 1. IMPORTE SEUS COMPONENTES
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FisioVitalitá - Sua Saúde em Equilíbrio',
  description: 'Clínica de fisioterapia, pilates, acupuntura e terapias holísticas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* 2. ADICIONE O HEADER AQUI */}
        <Header />

        {/* O {children} é onde o conteúdo da sua página (ex: page.tsx) será renderizado */}
        <main>{children}</main>

        {/* 3. ADICIONE O FOOTER AQUI */}
        <Footer />
      </body>
    </html>
  );
}