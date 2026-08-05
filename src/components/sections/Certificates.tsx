import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as data from '../../data';
import type { Certificate } from '../../types';
import CertificateCard from '../ui/CertificateCard';
import '../../styles/Certificates.css';

const CERTIFICATES_TITLE = "Certificados";

// ===== ANIMACIONES =====
const sectionReveal = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
} as const;

const titleReveal = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
} as const;

const filterReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
} as const;

const gridReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
} as const;

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: "easeOut",
    },
  },
} as const;

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const titleRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const counts = {
    todos: data.certificates.length,
    programacion: data.certificates.filter(c => c.category === 'programacion').length,
    datos: data.certificates.filter(c => c.category === 'datos').length,
    ia: data.certificates.filter(c => c.category === 'ia').length,
    ciberseguridad: data.certificates.filter(c => c.category === 'ciberseguridad').length,
    idiomas: data.certificates.filter(c => c.category === 'idiomas').length,
    profesional: data.certificates.filter(c => c.category === 'profesional').length,
  };

  const filteredCertificates = activeFilter === 'todos'
    ? data.certificates
    : data.certificates.filter(c => c.category === activeFilter);

  const getCategoryOrder = (category: string) => {
    const order = {
      programacion: 1,
      datos: 2,
      ia: 3,
      ciberseguridad: 4,
      idiomas: 5,
      profesional: 6
    };
    return order[category as keyof typeof order] || 999;
  };

  const sortedCertificates = [...filteredCertificates].sort((a, b) => {
    if (activeFilter === 'todos') {
      const orderA = getCategoryOrder(a.category);
      const orderB = getCategoryOrder(b.category);
      return orderA - orderB;
    }
    return 0;
  });

  // ===== EFECTO GLITCH DE TEXTO =====
  const scrambleTitle = useCallback((element: HTMLElement) => {
    if (!element) return;
    const finalText = CERTIFICATES_TITLE;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%#$@";

    let frame = 0;
    const totalFrames = 18;

    const interval = window.setInterval(() => {
      const progress = frame / totalFrames;

      element.textContent = finalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";

          if (index < progress * finalText.length) {
            return finalText[index];
          }

          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      frame++;

      if (frame > totalFrames) {
        window.clearInterval(interval);
        element.textContent = finalText;
      }
    }, 28);
  }, []);

  // ===== GLITCH AUTOMÁTICO AL ENTRAR =====
  useEffect(() => {
    const element = titleRef.current;
    const section = sectionRef.current;

    if (!element || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrambleTitle(element);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [scrambleTitle]);

  // ===== GLITCH AL HOVER =====
  const handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
    scrambleTitle(event.currentTarget);
  };

  return (
    <motion.section
      id="certificados"
      className="certificates-section"
      ref={sectionRef}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionReveal}
    >
      <div className="container">
        
        {/* === TÍTULO CON GLITCH === */}
        <motion.div
          className="certificates-header-wrapper"
          variants={titleReveal}
        >
          <motion.h2 className="certificates-main-title">
            <span
              ref={titleRef}
              className="title-scramble"
              onMouseEnter={handleMouseEnter}
            >
              {CERTIFICATES_TITLE}
            </span>
          </motion.h2>

          <motion.p
            className="certificates-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Actualización profesional y aprendizaje continuo
          </motion.p>
        </motion.div>

        {/* === FILTROS === */}
        <motion.div
          className="certificate-filters"
          variants={filterReveal}
        >
          {Object.keys(counts).map((filterKey) => (
            <button
              key={filterKey}
              className={`certificate-filter-btn ${activeFilter === filterKey ? 'active' : ''}`}
              onClick={() => setActiveFilter(filterKey)}
            >
              {filterKey === 'todos' ? 'Todos' : 
                filterKey === 'programacion' ? 'Programación' :
                filterKey === 'datos' ? 'Datos' :
                filterKey === 'ia' ? 'IA' :
                filterKey === 'ciberseguridad' ? 'Ciberseguridad' :
                filterKey === 'idiomas' ? 'Idiomas' : 'Profesional'}
              <span className="filter-count">{counts[filterKey as keyof typeof counts]}</span>
            </button>
          ))}
        </motion.div>

        {/* === TÍTULO DE CATEGORÍA ACTIVA === */}
        {activeFilter !== 'todos' && (
          <motion.h3
            className="category-active-title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeFilter === 'programacion' && ' Programación'}
            {activeFilter === 'datos' && ' Bases de Datos'}
            {activeFilter === 'ia' && ' Inteligencia Artificial'}
            {activeFilter === 'ciberseguridad' && ' Ciberseguridad'}
            {activeFilter === 'idiomas' && ' Idiomas'}
            {activeFilter === 'profesional' && ' Habilidades Profesionales'}
          </motion.h3>
        )}

        {/* === GRID DE CERTIFICADOS === */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="certificates-grid"
            variants={gridReveal}
            initial="hidden"
            animate="visible"
          >
            {sortedCertificates.map((certificate: Certificate) => (
              <motion.div
                key={certificate.id}
                variants={cardReveal}
                style={{ willChange: "transform, opacity" }}
              >
                <CertificateCard certificate={certificate} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* === ESTADO VACÍO === */}
        {sortedCertificates.length === 0 && (
          <motion.div
            className="certificates-empty"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            No hay certificados en esta categoría
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Certificates;