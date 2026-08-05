import { useState, memo } from 'react';
import type { Project } from '../../types';
import '../../styles/ProjectCardMac.css';

interface ProjectCardMacProps {
  project: Project;
  isExpanded: boolean;
  onExpand: () => void;
  onOpenGallery: (project: Project) => void;
}

interface MacAccordionProps {
  active: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function MacAccordion({ active, onToggle, icon, label, children }: MacAccordionProps) {
  return (
    <div className={`mac-accordion${active ? ' active' : ''}`}>
      <button
        className={`mac-accordion-trigger${active ? ' active' : ''}`}
        onClick={onToggle}
        aria-expanded={active}
        type="button"
      >
        <div className="mac-accordion-left">
          {icon}
          <span>{label}</span>
        </div>
        <svg
          className={`mac-accordion-chevron${active ? ' rotated' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={`mac-accordion-body${active ? ' open' : ''}`}>
        <div className="mac-accordion-inner">{children}</div>
      </div>
    </div>
  );
}

const ProjectCardMac = memo(
  ({ project, isExpanded, onExpand, onOpenGallery }: ProjectCardMacProps) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const getProjectUrl = () => project.demoUrl || project.github;

    const handleVisitProject = () => {
      if (project.type === 'web') {
        window.open(getProjectUrl(), '_blank', 'noopener,noreferrer');
        return;
      }
      onOpenGallery(project);
    };

    const toggleExpand = () => {
      onExpand();
      if (!isExpanded) setActiveSection(null);
    };

    const toggleSection = (section: string) => {
      setActiveSection((prev) => (prev === section ? null : section));
    };

    const hasExtraInfo = Boolean(
      project.description ||
        project.technologies.length > 0 ||
        project.problem ||
        project.solution ||
        (project.howItWorks && project.howItWorks.length > 0) ||
        project.impact
    );

    const mockUrl = project.demoUrl || `https://${project.title.toLowerCase().replace(/\s+/g, '-')}.app`;

    return (
      <article className="project-card-mac">
        {/* BARRA MAC BLANCA */}
        <div className="mac-browser-bar">
          <div className="mac-dots">
            <span className="mac-dot red"></span>
            <span className="mac-dot yellow"></span>
            <span className="mac-dot green"></span>
          </div>
          <div className="mac-url-bar">
            <span>{mockUrl}</span>
          </div>
        </div>

        {/* IMAGEN Y BOTÓN DE ENLACE */}
        <button
          className="mac-image-wrapper"
          onClick={handleVisitProject}
          type="button"
          aria-label={`Visitar ${project.title}`}
        >
          <img src={project.image} alt={project.title} loading="lazy" onError={(e) => { e.currentTarget.src = '/placeholder-project.jpg'; }} />
          <span className="mac-image-overlay"></span>
          
          {/* BOTÓN DE ENLACE (SIEMPRE VISIBLE) */}
          <span className="mac-image-link-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </span>
        </button>

        {/* CONTENIDO */}
        <div className={`mac-content${isExpanded ? ' expanded' : ''}`}>
          
          {/* TÍTULO SIN FONDO AZUL (SOLO TEXTO BLANCO) */}
          <div className="mac-header">
            <span className="mac-title-text">{project.title}</span>
          </div>

          {hasExtraInfo && (
            <button
              className="mac-expand-btn"
              onClick={toggleExpand}
              aria-expanded={isExpanded}
              type="button"
            >
              <span className="mac-expand-btn-content">
                <span>{isExpanded ? 'Ocultar detalles' : 'Más información'}</span>
              </span>
              <svg className={`mac-expand-chevron${isExpanded ? ' rotated' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          )}

          {/* CONTENIDO EXPANDIDO */}
          <div className={`mac-expandable-wrapper${isExpanded ? ' open' : ''}`} aria-hidden={!isExpanded}>
            <div className="mac-expandable-inner">
              <div className="mac-expandable-content">
                <div className="mac-expand-icon-container">
                  <img src={project.icon} alt="" className="mac-expand-icon-img" />
                </div>

                {project.description && (
                  <div className="mac-full-description">
                    <p>{project.description}</p>
                  </div>
                )}

                {project.technologies.length > 0 && (
                  <div className="mac-tech-section">
                    <div className="mac-tech-label">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                      <span>Tecnologías</span>
                    </div>
                    <div className="mac-tech-list">
                      {project.technologies.map((tech) => (
                        <span key={tech.name} className="mac-tech-item">
                          <img src={tech.icon} alt="" aria-hidden="true" />
                          <span>{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.problem && (
                  <MacAccordion active={activeSection === 'problem'} onToggle={() => toggleSection('problem')} icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>} label="Problema"><p>{project.problem}</p></MacAccordion>
                )}

                {project.solution && (
                  <MacAccordion active={activeSection === 'solution'} onToggle={() => toggleSection('solution')} icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>} label="Solución"><p>{project.solution}</p></MacAccordion>
                )}

                {project.impact && (
                  <MacAccordion active={activeSection === 'impact'} onToggle={() => toggleSection('impact')} icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} label="Impacto"><p>{project.impact}</p></MacAccordion>
                )}

                {project.github && (
                  <div className="mac-github-section">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="mac-btn-secondary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                      Ver código en GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
);

ProjectCardMac.displayName = 'ProjectCardMac';

export default ProjectCardMac;