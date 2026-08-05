import { useState, useMemo, useCallback, memo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data';
import type { Project } from '../../types';
import ProjectCard from '../ui/ProjectCard';
import ProjectCardMac from '../ui/ProjectCardMac';
import ProjectGallery from '../ui/ProjectGallery';
import '../../styles/Projects.css';
import '../../styles/ProjectCardMac.css';

const PROJECTS_TITLE = "Proyectos";

const ICON_PATHS: Record<string, React.ReactNode> = {
  mobile: (
    <>
      <path d="M12 18h.01" />
      <path d="M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    </>
  ),
  web: (
    <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
  ),
  backend: (
    <>
      <path d="M20 7h-4.5M20 12h-4.5M20 17h-4.5" />
      <path d="M4 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M8 7h3" />
      <path d="M8 12h3" />
      <path d="M8 17h3" />
    </>
  ),
  desktop: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M2 7h20" />
    </>
  ),
};

const DEFAULT_ICON = (
  <>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </>
);

const CATEGORY_LABELS: Record<string, string> = {
  mobile: 'Aplicaciones Móviles',
  web: 'Aplicaciones Web',
  backend: 'Proyectos Backend',
  desktop: 'Aplicaciones Desktop',
};

const CATEGORY_ORDER = ['web', 'mobile', 'desktop', 'backend'] as const;

interface CategoryIconProps {
  type: string;
}

const CategoryIcon = memo(({ type }: CategoryIconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {ICON_PATHS[type] ?? DEFAULT_ICON}
  </svg>
));

CategoryIcon.displayName = 'CategoryIcon';

// ===== FUNCIÓN DE RENDERIZADO =====
const renderProjectCard = (
  project: Project,
  isExpanded: boolean,
  onExpand: (id: number) => void,
  onOpenGallery: (project: Project) => void
) => {
  if (project.type === 'web') {
    return (
      <ProjectCardMac
        project={project}
        isExpanded={isExpanded}
        onExpand={() => onExpand(project.id)}
        onOpenGallery={onOpenGallery}
      />
    );
  }
  return (
    <ProjectCard
      project={project}
      isExpanded={isExpanded}
      onExpand={() => onExpand(project.id)}
      onOpenGallery={onOpenGallery}
    />
  );
};

// ===== ANIMACIONES PREMIUM =====
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
} as const;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.48,
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

interface CategorySectionProps {
  type: string;
  projectList: Project[];
  expandedCardId: number | null;
  onExpand: (id: number) => void;
  onOpenGallery: (project: Project) => void;
}

const CategorySection = memo(({
  type,
  projectList,
  expandedCardId,
  onExpand,
  onOpenGallery,
}: CategorySectionProps) => (
  <div className="project-category">
    <h3 className="category-title">
      <span className="category-icon">
        <CategoryIcon type={type} />
      </span>
      {CATEGORY_LABELS[type]} ({projectList.length})
    </h3>
    
    <motion.div
      className="category-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={containerVariants}
    >
      {projectList.map((project) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          style={{ willChange: "transform, opacity" }}
        >
          {renderProjectCard(project, expandedCardId === project.id, onExpand, onOpenGallery)}
        </motion.div>
      ))}
    </motion.div>
  </div>
));

CategorySection.displayName = 'CategorySection';

const FILTER_TYPES = ['todos', 'web', 'mobile', 'backend', 'desktop'] as const;
type FilterType = (typeof FILTER_TYPES)[number];

const FILTER_LABELS: Record<FilterType, string> = {
  todos: 'Todos',
  web: 'Web',
  mobile: 'Móvil',
  backend: 'Backend',
  desktop: 'Desktop',
};

const Projects = () => {
  const [filter, setFilter] = useState<FilterType>('todos');
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const categorized = useMemo(
    () => ({
      mobile: projects.filter((p) => p.type === 'mobile'),
      web: projects.filter((p) => p.type === 'web'),
      backend: projects.filter((p) => p.type === 'backend'),
      desktop: projects.filter((p) => p.type === 'desktop'),
    }),
    []
  );

  const filteredProjects = useMemo(
    () => (filter === 'todos' ? projects : projects.filter((p) => p.type === filter)),
    [filter]
  );

  const handleFilterChange = useCallback((newFilter: FilterType) => {
    setFilter(newFilter);
    setExpandedCardId(null);
  }, []);

  const handleCardExpand = useCallback((cardId: number) => {
    setExpandedCardId((prev) => (prev === cardId ? null : cardId));
  }, []);

  const handleOpenGallery = useCallback((project: Project) => {
    setGalleryProject(project);
  }, []);

  const handleCloseGallery = useCallback(() => {
    setGalleryProject(null);
  }, []);

  const counts: Record<FilterType, number> = {
    todos: projects.length,
    web: categorized.web.length,
    mobile: categorized.mobile.length,
    backend: categorized.backend.length,
    desktop: categorized.desktop.length,
  };

  const getGalleryImages = (project: Project): string[] => {
    if (project.images && project.images.length > 0) {
      return project.images;
    }
    return [project.image];
  };

  const getOrderedCategories = (): [string, Project[]][] => {
    const entries = Object.entries(categorized) as [string, Project[]][];
    return entries
      .filter(([, list]) => list.length > 0)
      .sort(([typeA], [typeB]) => {
        const indexA = CATEGORY_ORDER.indexOf(typeA as any);
        const indexB = CATEGORY_ORDER.indexOf(typeB as any);
        return indexA - indexB;
      });
  };

  // ===== EFECTO GLITCH DE TEXTO =====
  const scrambleTitle = useCallback((element: HTMLElement) => {
    if (!element) return;
    const finalText = PROJECTS_TITLE;
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

  // ===== GLITCH AUTOMÁTICO AL ENTRAR EN PANTALLA =====
  useEffect(() => {
    const element = titleRef.current;
    const section = sectionRef.current;

    if (!element || !section) return;

    // Configurar IntersectionObserver para detectar cuando la sección entra en pantalla
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Activar glitch cada vez que la sección sea visible
            scrambleTitle(element);
          }
        });
      },
      { threshold: 0.3 } // Se activa cuando el 30% de la sección es visible
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [scrambleTitle]);

  // ===== GLITCH AL HOVER (por si el usuario vuelve a pasar el mouse) =====
  const handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
    scrambleTitle(event.currentTarget);
  };

  return (
    <>
      <section id="proyectos" className="projects-section" ref={sectionRef}>
        <div className="container">
          
          {/* === TÍTULO CON EFECTO GLITCH AUTOMÁTICO === */}
          <motion.div
            className="projects-header-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={titleReveal}
          >
            <motion.h2 className="projects-main-title">
              <span
                ref={titleRef}
                className="title-scramble"
                onMouseEnter={handleMouseEnter}
              >
                {PROJECTS_TITLE}
              </span>
            </motion.h2>

            <motion.p
              className="projects-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Una selección de mis mejores trabajos en diferentes áreas del desarrollo
            </motion.p>
          </motion.div>

          {/* === FILTROS CON ANIMACIÓN === */}
          <motion.nav
            className="projects-filter"
            aria-label="Filtrar proyectos por tipo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {FILTER_TYPES.map((type) => (
              <button
                key={type}
                className={`filter-btn${filter === type ? ' active' : ''}`}
                onClick={() => handleFilterChange(type)}
                aria-pressed={filter === type}
                type="button"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  {type === 'todos' ? (
                    <>
                      <path d="M3 6h18M3 12h18M3 18h18" />
                      <rect x="8" y="4" width="8" height="4" rx="1" />
                      <rect x="10" y="10" width="4" height="4" rx="1" />
                      <rect x="12" y="16" width="4" height="4" rx="1" />
                    </>
                  ) : (
                    ICON_PATHS[type] ?? DEFAULT_ICON
                  )}
                </svg>
                {FILTER_LABELS[type]} ({counts[type]})
              </button>
            ))}
          </motion.nav>

          {/* === CONTENEDOR DE CATEGORÍAS === */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="view-container"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {filter === 'todos' ? (
                <div className="projects-categories">
                  {getOrderedCategories().map(([type, list]) => (
                    <CategorySection
                      key={type}
                      type={type}
                      projectList={list}
                      expandedCardId={expandedCardId}
                      onExpand={handleCardExpand}
                      onOpenGallery={handleOpenGallery}
                    />
                  ))}
                </div>
              ) : (
                <div className="filtered-view">
                  <h3 className="category-title">
                    <span className="category-icon">
                      <CategoryIcon type={filter} />
                    </span>
                    {CATEGORY_LABELS[filter]}
                  </h3>
                  <motion.div
                    className="category-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    variants={containerVariants}
                  >
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        variants={itemVariants}
                        style={{ willChange: "transform, opacity" }}
                      >
                        {renderProjectCard(
                          project,
                          expandedCardId === project.id,
                          handleCardExpand,
                          handleOpenGallery
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {galleryProject && (
        <ProjectGallery
          isOpen={true}
          onClose={handleCloseGallery}
          projectTitle={galleryProject.title}
          images={getGalleryImages(galleryProject)}
          videoUrl={galleryProject.type === 'mobile' ? galleryProject.demoVideo : undefined}
          isMobileProject={galleryProject.type === 'mobile'}
        />
      )}
    </>
  );
};

export default Projects;