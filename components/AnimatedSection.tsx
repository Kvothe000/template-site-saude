// Arquivo: components/AnimatedSection.tsx
"use client"; // Precisa ser um client component para usar hooks e animação

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string; // Para passar classes adicionais se necessário
  delay?: number; // Opcional: atraso para a animação começar (em segundos)
}

export default function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef(null); // Referência para o elemento DOM da seção
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Detecta se a seção está visível (só uma vez, quando 20% dela aparecer)
  const mainControls = useAnimation(); // Controles para iniciar a animação

  useEffect(() => {
    if (isInView) {
      // Quando a seção entra na tela, inicia a animação
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    // Usamos motion.div em vez de div normal
    <motion.div
      ref={ref} // Conecta a referência
      className={className} // Aplica classes passadas
      variants={{
        // Estado inicial (antes de aparecer)
        hidden: { opacity: 0, y: 50 }, // Começa invisível e 50px abaixo
        // Estado final (quando visível)
        visible: { opacity: 1, y: 0 }, // Fica visível e na posição original
      }}
      initial="hidden" // Começa no estado 'hidden'
      animate={mainControls} // Anima para 'visible' quando mainControls.start("visible") é chamado
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }} // Configura a animação
    >
      {children}
    </motion.div>
  );
}