import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../../styles/Header.css';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Certificados', href: '#certificados' },
    { name: 'IA Chat', href: '/chat', route: true },
    { name: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      navLinks.forEach((link) => {
        if (link.route) return;
        const section = document.getElementById(link.href.substring(1));
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(link.href.substring(1));
        }
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    route?: boolean
  ) => {
    e.preventDefault();
    
    if (route) {
      setMobileMenuOpen(false);
      navigate(href);
      return;
    }

    const targetId = href.substring(1);

    // ===== INICIO =====
    if (targetId === 'inicio') {
      setMobileMenuOpen(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(targetId);
    if (!element) return;

    // ===== RESTO DE SECCIONES =====
    setMobileMenuOpen(false);
    setIsTransitioning(true);

    setTimeout(() => {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setActiveSection(targetId);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    }, 600);
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        
        <motion.img
          src="/e_logo.png"
          alt="Ezequiel Logo"
          className="header-logo"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'mobile-menu-toggle-hidden' : ''}`} 
          aria-label="Menú" 
          initial={{ opacity: 0, y: -16 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <span className="toggle-text">MENU</span>
        </motion.button>
      </div>

      {/* --- CORTINA DE TRANSICIÓN PREMIUM --- */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="transition-overlay"
            initial={{
              opacity: 0,
              scaleY: 0,
            }}
            animate={{
              opacity: 1,
              scaleY: 1,
            }}
            exit={{
              opacity: 0,
              scaleY: 0,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: 'top',
            }}
          />
        )}
      </AnimatePresence>

      {/* MENÚ DESPLEGABLE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu" 
            initial={{ opacity: 0, scale: 0.86, x: 32, y: -28, filter: 'blur(14px)' }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, x: 24, y: -24, filter: 'blur(12px)' }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: 'top right' }}
          >
            <button 
              className="mobile-menu-close-btn" 
              onClick={() => setMobileMenuOpen(false)}
            >
              CERRAR
            </button>

            <nav className="mobile-nav">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`mobile-nav-link ${
                    activeSection === link.href.substring(1) ? 'mobile-nav-link-active' : ''
                  }`}
                  onClick={(e) => handleNavClick(e, link.href, link.route)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.45 }}
                >
                  {link.name.toUpperCase().split('').map((char, i) => (
                    <span className="letter-wrap" key={`${link.name}-${i}`}>
                      <span
                        className="letter-front"
                        style={{ '--i': i } as React.CSSProperties}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>

                      <span
                        className="letter-back"
                        style={{ '--i': i } as React.CSSProperties}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    </span>
                  ))}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;