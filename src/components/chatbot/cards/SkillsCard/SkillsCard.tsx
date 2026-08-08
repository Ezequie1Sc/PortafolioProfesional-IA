import "./SkillsCard.css";

import {
  useEffect,
  useState,
} from "react";

import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { knowledgeService } from "../../../../service/knowledgeService";

import type {
  Skills,
  Technology,
} from "../../../../types/knowledge";

const icons: Record<string, string> = {
  react: "https://cdn.simpleicons.org/react/61DAFB",
  angular: "https://cdn.simpleicons.org/angular/DD0031",
  typescript: "https://cdn.simpleicons.org/typescript/3178C6",
  javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  "tailwind css": "https://cdn.simpleicons.org/tailwindcss/38BDF8", // Corregido con comillas
  html5: "https://cdn.simpleicons.org/html5/E34F26",
  css3: "https://cdn.simpleicons.org/css3/1572B6",
  python: "https://cdn.simpleicons.org/python/3776AB",
  fastapi: "https://cdn.simpleicons.org/fastapi/009688",
  flask: "https://cdn.simpleicons.org/flask/FFFFFF",
  flutter: "https://cdn.simpleicons.org/flutter/02569B",
  dart: "https://cdn.simpleicons.org/dart/0175C2",
  postgresql: "https://cdn.simpleicons.org/postgresql/4169E1",
  mysql: "https://cdn.simpleicons.org/mysql/4479A1",
  "sql server": "/icons/sql.svg",
  sql: "/icons/sql.svg",
  arduino: "https://cdn.simpleicons.org/arduino/00979D",
  esp32: "https://cdn.simpleicons.org/espressif/E7352C",
  micropython: "https://cdn.simpleicons.org/micropython/FFFFFF",
  git: "https://cdn.simpleicons.org/git/F05032",
  github: "https://cdn.simpleicons.org/github/FFFFFF",
};

const SkillsCard = () => {
  const [skills, setSkills] = useState<Skills | null>(null);
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState("frontend");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await knowledgeService.getSkills();
        setSkills(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="skills-card skills-loading">
        <div className="skills-spinner" />
        <span>Cargando tecnologías...</span>
      </div>
    );
  }

  if (!skills) {
    return null;
  }

  // CORREGIDO: Se omite 'key' usando [, value] para evitar el warning de variable no leída
  const sections = Object.entries(skills).filter(([, value]) => {
    if (!value) return false;
    if (Array.isArray(value)) return false;
    if (typeof value !== "object") return false;
    return "technologies" in value || "tools" in value || "experience" in value;
  });

  const getItems = (section: any): Technology[] => {
    if (section.technologies) return section.technologies;
    if (section.tools)
      return section.tools.map((tool: string) => ({
        name: tool,
      }));
    if (section.experience)
      return section.experience.map((item: string) => ({
        name: item,
      }));
    return [];
  };

  const formatTitle = (text: string) =>
    text.replaceAll("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="skills-card">
      <div className="skills-header">
        <h2>Tecnologías</h2>
        <p>Stack tecnológico y herramientas utilizadas.</p>
      </div>
      <div className="skills-divider" />
      <div className="skills-body">
        {sections.map(([key, section]) => {
          const items = getItems(section);
          const openedSection = opened === key;

          return (
            <div key={key} className="skills-section">
              <button
                className="skills-section-header"
                onClick={() => setOpened(openedSection ? "" : key)}
              >
                <div className="skills-section-title">
                  {openedSection ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                  <span>{formatTitle(key)}</span>
                </div>
                <span className="skills-count">{items.length}</span>
              </button>

              {openedSection && (
                <div className="skills-grid">
                  {items.map((tech, index) => {
                    const icon = icons[tech.name.toLowerCase()];

                    return (
                      <div key={index} className="skill-chip">
                        <div className="skill-chip-header">
                          {icon && (
                            <img
                              src={icon}
                              alt={tech.name}
                              className="skill-icon"
                            />
                          )}
                          <span className="skill-name">{tech.name}</span>
                        </div>

                        {tech.level && (
                          <span className="skill-level">{tech.level}</span>
                        )}

                        {tech.experience && (
                          <p className="skill-experience">{tech.experience}</p>
                        )}

                        {tech.used_in && tech.used_in.length > 0 && (
                          <div className="skill-tags">
                            {tech.used_in.map((project) => (
                              <span key={project} className="skill-tag">
                                {project}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsCard;