import { motion } from "framer-motion";
import { skills } from "../../data";
import SkillCard from "../ui/SkillCard";
import "../../styles/Skills.css";
import { useRef, useEffect, useCallback } from "react";

const SKILLS_TITLE = "Habilidades";

// Animaciones para las tarjetas de la derecha (como en la captura modular)
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const;

const leftReveal = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
} as const;

const titleReveal = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
} as const;

const Skills = () => {
  const titleRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // ===== EFECTO GLITCH DE TEXTO =====
  const scrambleTitle = useCallback((element: HTMLElement) => {
    if (!element) return;
    const finalText = SKILLS_TITLE;
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
      id="habilidades"
      className="skills-section"
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
        margin: "0px 0px -80px 0px",
      }}
    >
      <div className="container">
        
        {/* === TÍTULO CON ILUMINACIÓN Y GLITCH AUTOMÁTICO === */}
        <motion.div
          className="skills-header-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={titleReveal}
        >
          <motion.h2 className="skills-main-title">
            <span
              ref={titleRef}
              className="title-scramble"
              onMouseEnter={handleMouseEnter}
            >
              {SKILLS_TITLE}
            </span>
          </motion.h2>
        </motion.div>

        <div className="skills-layout">
          {/* === COLUMNA IZQUIERDA - SOBRE MÍ (ELEVADOR) === */}
          <motion.div variants={leftReveal} className="about-me-column">
            <div className="about-me-card">
              
              {/* Imagen de perfil */}
              <div className="about-me-image-container">
                <div className="about-me-image-wrapper">
                  <img
                    src="foto.webp"
                    alt="Profile"
                    className="about-me-image"
                  />
                </div>
              </div>

              <div className="about-me-grid">
                <div className="about-me-item">
                  <div className="about-me-item-header">
                    <span className="about-me-item-icon">◈</span>
                    <h4 className="about-me-item-title">Quién soy</h4>
                  </div>
                  <p className="about-me-item-text">
                    Desarrollador de software y estudiante de Ingeniería en Sistemas en 8.º semestre, enfocado en crear aplicaciones y soluciones tecnológicas eficientes.
                  </p>
                </div>

                <div className="about-me-item">
                  <div className="about-me-item-header">
                    <span className="about-me-item-icon">◈</span>
                    <h4 className="about-me-item-title">Mi objetivo</h4>
                  </div>
                  <p className="about-me-item-text">
                    Seguir aprendiendo nuevas tecnologías y construir software con impacto real.
                  </p>
                </div>

                <div className="about-me-item">
                  <div className="about-me-item-header">
                    <span className="about-me-item-icon">◈</span>
                    <h4 className="about-me-item-title">Mi perfil</h4>
                  </div>
                  <p className="about-me-item-text">
                    Me adapto fácilmente a nuevas herramientas, metodologías y desafíos técnicos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* === COLUMNA DERECHA - SKILLS === */}
          <motion.div variants={container} className="skills-column">
            <div className="skills-grid">
              {skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={cardReveal}
                  style={{ willChange: "transform, opacity" }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;