import { useState, memo } from 'react';
import type { Project } from '../../types';
import '../../styles/ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onExpand: () => void;
  onOpenGallery: (project: Project) => void;
}

interface AccordionProps {
  active: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function Accordion({ active, onToggle, icon, label, children }: AccordionProps) {
  return (
    <div className={`info-accordion${active ? ' active' : ''}`}>
      <button
        className={`accordion-trigger${active ? ' active' : ''}`}
        onClick={onToggle}
        aria-expanded={active}
        type="button"
      >
        <div className="trigger-left">
          {icon}
          <span>{label}</span>
        </div>
        <svg
          className={`trigger-chevron${active ? ' rotated' : ''}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={`accordion-body${active ? ' open' : ''}`}>
        <div className="accordion-body-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

const ProjectCard = memo(({ 
  project, 
  isExpanded, 
  onExpand, 
  onOpenGallery 
}: ProjectCardProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const getColorClass = (color: string): string => {
    const colors: Record<string, string> = {
      blue: 'project-blue',
      purple: 'project-purple',
      green: 'project-green',
      orange: 'project-orange',
    };
    return colors[color] ?? 'project-blue';
  };

  const getDemoBtnClass = (color: string): string => {
    const colors: Record<string, string> = {
      blue: 'demo-blue',
      purple: 'demo-purple',
      green: 'demo-green',
      orange: 'demo-orange',
    };
    return colors[color] ?? 'demo-blue';
  };

  const handleDemoClick = () => {
    if (project.type === 'web') {
      window.open(project.demoUrl ?? project.github, '_blank', 'noopener,noreferrer');
    } else {
      onOpenGallery(project);
    }
  };

  const toggleExpand = () => {
    onExpand();
    if (isExpanded) {
      setTimeout(() => setActiveSection(null), 300);
    }
  };

  const toggleSection = (section: string) => {
    setActiveSection(prev => (prev === section ? null : section));
  };

  const hasExtraInfo = !!(
    project.technologies.length > 0 ||
    project.problem ||
    project.solution ||
    (project.howItWorks && project.howItWorks.length > 0) ||
    project.impact ||
    project.github
  );

  const typeLabel: Record<string, string> = {
    web: 'Web',
    mobile: 'Móvil',
    desktop: 'Escritorio',
    backend: 'Backend',
  };

  return (
    <div className={`project-card ${getColorClass(project.color)}`} data-type={project.color}>
      {/* ===== IMAGEN ===== */}
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder-project.jpg';
          }}
        />
        <div className="project-type-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {project.type === 'web' && (
              <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
            )}
            {project.type === 'mobile' && (
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            )}
            {project.type === 'desktop' && (
              <>
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </>
            )}
            {project.type === 'backend' && (
              <>
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <line x1="4" y1="14" x2="20" y2="14" />
                <line x1="4" y1="18" x2="16" y2="18" />
              </>
            )}
          </svg>
          <span>{typeLabel[project.type] ?? project.type}</span>
        </div>
      </div>

      {/* ===== CONTENIDO ===== */}
      <div className="project-content">
        {/* Título con icono */}
        <div className="project-header">
          <div className="project-icon">
            <img src={project.icon} alt="" aria-hidden="true" />
          </div>
          <h3 className="project-title">{project.title}</h3>
        </div>

        {/* Resumen visible siempre */}
        <p className="project-description">{project.description}</p>

        {/* Botón Ver sitio / Ver demo */}
        <button
          onClick={handleDemoClick}
          className={`demo-btn ${getDemoBtnClass(project.color)}`}
          type="button"
        >
          <svg className="btn-icon-small" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          {project.type === 'web' ? 'Ver sitio' : 'Ver demo'}
        </button>

        {/* Botón Más información */}
        {hasExtraInfo && (
          <button
            className="expand-btn"
            onClick={toggleExpand}
            aria-expanded={isExpanded}
            type="button"
          >
            <svg
              className={`expand-icon${isExpanded ? ' rotated' : ''}`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
            <span>{isExpanded ? 'Ocultar información' : 'Más información'}</span>
          </button>
        )}

        {/* ===== CONTENIDO EXPANDIBLE ===== */}
        <div className={`expandable-wrapper${isExpanded ? ' open' : ''}`} aria-hidden={!isExpanded}>
          <div className="expandable-inner">
            <div className="expandable-content">
              
              {/* Tecnologías */}
              {project.technologies.length > 0 && (
                <div className="project-tech">
                  <div className="tech-label">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    <span>Tecnologías</span>
                  </div>
                  <div className="tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech.name} className="tech-item">
                        <img src={tech.icon} alt="" aria-hidden="true" className="tech-icon" />
                        <span className="tech-name">{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Problema */}
              {project.problem && (
                <Accordion
                  active={activeSection === 'problem'}
                  onToggle={() => toggleSection('problem')}
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  }
                  label="Problema"
                >
                  <p>{project.problem}</p>
                </Accordion>
              )}

              {/* Solución */}
              {project.solution && (
                <Accordion
                  active={activeSection === 'solution'}
                  onToggle={() => toggleSection('solution')}
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  }
                  label="Solución"
                >
                  <p>{project.solution}</p>
                </Accordion>
              )}

              {/* Cómo funciona */}
              {project.howItWorks && project.howItWorks.length > 0 && (
                <Accordion
                  active={activeSection === 'howItWorks'}
                  onToggle={() => toggleSection('howItWorks')}
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  }
                  label="Cómo funciona"
                >
                  <ul>
                    {project.howItWorks.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </Accordion>
              )}

              {/* Impacto */}
              {project.impact && (
                <Accordion
                  active={activeSection === 'impact'}
                  onToggle={() => toggleSection('impact')}
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  }
                  label="Impacto"
                >
                  <p>{project.impact}</p>
                </Accordion>
              )}

              {/* Código / GitHub */}
              {project.github && (
                <div className="project-actions" style={{ marginTop: '0.5rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="code-btn"
                  >
                    <svg className="btn-icon-small" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Código
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;