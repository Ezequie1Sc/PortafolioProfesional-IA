import { useState } from 'react';
import './Footer.css';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
];

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ezequiel-salazar-194975340/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853
          0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
          1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337
          7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063
          2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0
          0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24
          23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Ezequie1Sc',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205
          11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724
          -4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087
          -.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07
          1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665
          -.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303
          -.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399
          3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23
          .645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61
          -2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015
          2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24
          12.297c0-6.627-5.373-12-12"/>
      </svg>
    ),
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-rule" />

        <div className="footer-container">
          <div className="footer-top">
            {/* Marca */}
            <div className="footer-brand-section">
              <div className="footer-logo-wrapper">
                <img src="./e_logo.png" alt="Ezequiel Salazar Logo" className="footer-logo-img" />
                <h2 className="footer-logo">
                  Ezequiel<span className="footer-logo-accent">.</span>Salazar
                </h2>
              </div>
              <p className="footer-description">
                Creando experiencias digitales que combinan elegancia visual con
                precisión técnica. Cada línea de código cuenta una historia.
              </p>
            </div>

            {/* Navegación */}
            <div className="footer-links-section">
              <h4>Navegación</h4>
              <div className="footer-links-grid">
                {NAV_LINKS.map(({ label, href }) => (
                  <a 
                    key={href} 
                    href={href} 
                    className="footer-link"
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    <span className="link-arrow">→</span>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="footer-contact-section">
              <h4>Conectemos</h4>
              <div className="footer-social-links">
                {SOCIAL_LINKS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
              <a
                href="mailto:ezequielsc017@gmail.com"
                className="footer-email-link"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M22 6L12 13L2 6M4 6h16v12H4V6z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                ezequielsc017@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-legal">
              <button 
                className="footer-legal-link"
                onClick={() => setShowPrivacyPolicy(true)}
              >
                Política de Privacidad
              </button>
            </div>

            <p className="footer-copyright">
              <span className="copyright-icon">©</span>
              {year} Ezequiel Salazar
            </p>
          </div>
        </div>
      </footer>

      {/* Modal de Política de Privacidad */}
      {showPrivacyPolicy && (
        <div className="privacy-modal-overlay" onClick={() => setShowPrivacyPolicy(false)}>
          <div className="privacy-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="privacy-modal-close" onClick={() => setShowPrivacyPolicy(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="privacy-modal-content">
              <span className="privacy-badge">Portafolio personal</span>
              <h1>Política de Privacidad</h1>
              <p className="privacy-updated">Última actualización: Junio 2026</p>

              <div className="info-section">
                <svg className="info-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div>
                  <h2>Recopilación de información</h2>
                  <p>
                    Este sitio web recopila información proporcionada voluntariamente
                    por los usuarios a través del formulario de contacto, incluyendo
                    nombre, correo electrónico y mensaje.
                  </p>
                </div>
              </div>

              <div className="info-section">
                <svg className="info-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9.5"></path>
                  <polyline points="16 2 22 8 16 8"></polyline>
                  <line x1="10" y1="14" x2="21" y2="14"></line>
                  <line x1="10" y1="18" x2="18" y2="18"></line>
                  <line x1="3" y1="10" x2="8" y2="10"></line>
                </svg>
                <div>
                  <h2>Uso de la información</h2>
                  <p>
                    La información enviada se utiliza únicamente para responder
                    consultas, propuestas, solicitudes de contacto o mensajes
                    relacionados con proyectos profesionales.
                  </p>
                </div>
              </div>

              <div className="info-section">
                <svg className="info-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-10 7L2 7"></path>
                </svg>
                <div>
                  <h2>Uso de EmailJS</h2>
                  <p>
                    Este portafolio utiliza EmailJS para gestionar el envío de mensajes
                    desde el formulario de contacto. Los datos ingresados pueden ser
                    procesados por este servicio para permitir la entrega del correo.
                  </p>
                </div>
              </div>

              <div className="info-section">
                <svg className="info-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <div>
                  <h2>Protección de datos</h2>
                  <p>
                    No vendo, alquilo ni comparto información personal con terceros para
                    fines comerciales. La información recibida se maneja únicamente con
                    fines de comunicación.
                  </p>
                </div>
              </div>

              <div className="info-section">
                <svg className="info-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"></path>
                  <path d="M16 2h6v6"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="M12 15h3v-3"></path>
                </svg>
                <div>
                  <h2>Eliminación de datos</h2>
                  <p>
                    Si deseas solicitar la eliminación de tus datos o realizar alguna
                    consulta relacionada con esta política, puedes contactarme a través
                    del formulario de contacto de este sitio.
                  </p>
                </div>
              </div>

              <div className="privacy-owner">
                <svg className="owner-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <div>
                  <strong>Orlando Ezequiel Salazar Cruz</strong>
                  <span>Desarrollador de Software</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;