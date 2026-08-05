import type { Certificate } from '../../types';
import '../../styles/CertificateCard.css';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  // Función para obtener el color según la categoría
  const getCategoryColor = (category: string) => {
    const colors = {
      programacion: '#3776AB',
      datos: '#DC2626', 
      ia: '#8B5CF6',
      ciberseguridad: '#9391ac',
      idiomas: '#10B981', 
      profesional: '#F59E0B',
    };
    return colors[category as keyof typeof colors] || '#3B82F6';
  };

  const AwardIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const PdfIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const handleOpenCredential = () => {
    if (certificate.credentialUrl) {
      const baseUrl = window.location.origin;
      const pdfUrl = certificate.credentialUrl.startsWith('http') 
        ? certificate.credentialUrl 
        : `${baseUrl}${certificate.credentialUrl}`;
      window.open(pdfUrl, '_blank');
    }
  };

  const categoryColor = getCategoryColor(certificate.category);

  return (
    <div className="certificate-card">
      <div className="certificate-image">
        <img src={certificate.image} alt={certificate.title} />
        <div className="certificate-badge" style={{ backgroundColor: categoryColor }}>
          <AwardIcon />
        </div>
      </div>

      <div className="certificate-content">
        <h3 className="certificate-title">{certificate.title}</h3>

        <div className="certificate-meta">
          <span className="certificate-issuer">{certificate.issuer}</span>
          <span className="certificate-date">{certificate.date}</span>
        </div>

        <div className="certificate-description">
          {certificate.skills.slice(0, 3).join(' • ')}
        </div>

        <div className="certificate-skills">
          {certificate.skills.map((skill, index) => (
            <span key={index} className="certificate-skill">
              {skill}
            </span>
          ))}
        </div>

        {certificate.credentialUrl && (
          <button
            onClick={handleOpenCredential}
            className="certificate-link"
            style={{ borderColor: categoryColor, color: categoryColor }}
          >
            <PdfIcon />
            Ver Certificado
          </button>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;