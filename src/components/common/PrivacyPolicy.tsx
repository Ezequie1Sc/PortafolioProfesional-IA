import '../../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <section className="privacy-page">
      <div className="privacy-container">
        <div className="privacy-card">
          <span className="privacy-badge">Portafolio personal</span>

          <h1>Política de Privacidad</h1>

          <p className="privacy-updated">
            Última actualización: Junio 2026
          </p>

          <div className="info-section">
            <svg className="info-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
            <svg className="info-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
            <svg className="info-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
            <svg className="info-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
            <svg className="info-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
            <svg className="owner-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <div>
              <strong>Orlando Ezequiel Salazar Cruz</strong>
              <span>Desarrollador de Software</span>
            </div>
          </div>

          <a href="/" className="privacy-back">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Volver al portafolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;