import { useEffect, useState } from 'react';
import './Hero.css';

// Definimos el tipo para cada elemento del array de tecnologías
interface TechLogo {
  name: string;
  icon: string;
}

const Hero: React.FC = () => {
  // Array de saludos en diferentes idiomas
  const greetings: string[] = [
    'Hola', 'Hello', 'Ciao', 'Bonjour', 'Salut', 
    'Hallo', 'Olá', 'Namaste', 'Konnichiwa', 'Nihao'
  ];
  const [greetingIndex, setGreetingIndex] = useState<number>(0);
  const [fadeGreeting, setFadeGreeting] = useState<boolean>(true);

  // Array de tecnologías (TRIPLICADO para efecto infinito perfecto)
  // Agregados: React, Angular, Tailwind
  const baseTechLogos: TechLogo[] = [
    { name: 'Flutter', icon: '/icons/flutter.svg' },
    { name: 'Dart', icon: '/icons/dart.svg' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'C#', icon: '/icons/csharp.svg' },
    { name: 'HTML', icon: '/icons/html.svg' },
    { name: 'CSS', icon: '/icons/css.svg' },
    { name: 'TypeScript', icon: '/icons/tp.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Angular', icon: '/icons/angular.svg.svg' },
    { name: 'Tailwind', icon: '/icons/tailwind.svg' },
  ];

  // Triplicamos el array para garantizar que siempre haya contenido de sobra
  const techLogos: TechLogo[] = [
    ...baseTechLogos,
    ...baseTechLogos,
    ...baseTechLogos,
  ];

  // Efecto para el cambio de saludos
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeGreeting(false);
      setTimeout(() => {
        setGreetingIndex((prev) => (prev + 1) % greetings.length);
        setFadeGreeting(true);
      }, 550);
      return () => clearInterval(interval);
    }, 3500);
    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <section id="inicio" className="hero">
      
      {/* Fondo de cuadrícula */}
      <div className="hero-grid-background">
        <div className="grid-pattern"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Contenedor Principal */}
      <div className="hero-main-container">
        
        {/* Imagen a la izquierda */}
        <div className="hero-visual">
          <div className="profile-polygon-wrapper">
            <div className="hero-shape-background"></div>
            <div className="hero-photo-reveal">
              <img src="/ezequielemovebg.webp" alt="Ezequiel Salazar" className="hero-person-img" />
              <img src="/ezequielemovebg.webp" alt="" className="hero-img-glitch glitch-blue" />
              <img src="/ezequielemovebg.webp" alt="" className="hero-img-glitch glitch-purple" />
            </div>
          </div>
        </div>

        {/* Texto a la derecha */}
        <div className="hero-content">
          
          {/* SALUDO */}
          <h2 className="hero-greeting">
            <span className="greeting-word">
              {greetings[greetingIndex].split('').map((letter, index) => {
                const direction = index % 2 === 0 ? '-18px' : '18px';
                const rotation = index % 2 === 0 ? '-10deg' : '10deg';
                return (
                  <span
                    key={`${letter}-${index}-${greetingIndex}`}
                    className={`greeting-letter ${fadeGreeting ? 'letter-in' : 'letter-out'}`}
                    style={
                      {
                        animationDelay: `${index * 40}ms`,
                        '--x': direction,
                        '--r': rotation,
                      } as React.CSSProperties
                    }
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
            <span className="greeting-world">World!</span>
          </h2>

          {/* TÍTULO CON BADGE */}
          <h1 className="hero-title">
            Im{" "}
            <span className="hero-title-name-wrap">
              <span className="hero-title-name">Ezequiel Salazar</span>
              <span className="verified-badge" title="Verificado">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.25 12l-2.1 2.4.3 3.2-3.1.7-1.6 2.8L12.9 20 10 21.1l-1.6-2.8-3.1-.7.3-3.2L3.5 12l2.1-2.4-.3-3.2 3.1-.7L10 2.9 12.9 4 15.8 2.9l1.6 2.8 3.1.7-.3 3.2L22.25 12z" />
                  <path d="M10.8 14.8l-2.4-2.4 1.2-1.2 1.2 1.2 3.8-3.8 1.2 1.2-5 5z" />
                </svg>
              </span>
            </span>
          </h1>

          <p className="hero-description">
          Desarrollador de software con pensamiento creativo. Me apasiona crear soluciones tecnológicas desde cero, combinando diseño, funcionalidad y buenas prácticas para desarrollar productos modernos, eficientes y fáciles de usar.
          </p>

          {/* BOTONES */}
          <div className="hero-buttons">
            <a href="/Orlando_Ezequiel_Salazar_Cruz_CV_.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <span>Descargar CV</span>
            </a>
            <a href="#proyectos" className="btn-secondary">
              <span>Mis Proyectos</span>
            </a>
          </div>

          {/* REDES SOCIALES */}
          <div className="hero-socials">
            <a href="https://github.com/Ezequie1Sc" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
              <svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/ezequiel-salazar-194975340/" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:ezequielsc017@gmail.com" className="social-btn" title="Gmail">
              <svg viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-1.023.92-1.804 1.885-1.393L12 10.53l10.115-6.466C23.08 3.653 24 4.434 24 5.457z"/></svg>
            </a>
          </div>

        </div>
      </div>

      {/* Carrusel de Logos / Tecnologías */}
      <div className="hero-tech-footer">
        <div className="tech-scroll-container">
          <div className="tech-scroll-track">
            {techLogos.map((tech: TechLogo, index: number) => (
              <div key={`${tech.name}-${index}`} className="tech-logo-item">
                <img src={tech.icon} alt={tech.name} className="tech-logo-img" title={tech.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;