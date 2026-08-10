import "./SkillsCard.css";

import { useEffect, useState } from "react";

import { knowledgeService } from "../../../../service/knowledgeService";

import type {
  Skills,
  Technology,
} from "../../../../types/knowledge";


// ==========================================
// ICONOS
// ==========================================

const icons: Record<string, string> = {
  react:
    "https://cdn.simpleicons.org/react/61DAFB",

  angular:
    "https://cdn.simpleicons.org/angular/DD0031",

  typescript:
    "https://cdn.simpleicons.org/typescript/3178C6",

  javascript:
    "https://cdn.simpleicons.org/javascript/F7DF1E",

  "tailwind css":
    "https://cdn.simpleicons.org/tailwindcss/38BDF8",

  tailwindcss:
    "https://cdn.simpleicons.org/tailwindcss/38BDF8",

  html:
    "https://cdn.simpleicons.org/html5/E34F26",

  html5:
    "https://cdn.simpleicons.org/html5/E34F26",

  css:
    "https://cdn.simpleicons.org/css3/1572B6",

  css3:
    "https://cdn.simpleicons.org/css3/1572B6",

  python:
    "https://cdn.simpleicons.org/python/3776AB",

  fastapi:
    "https://cdn.simpleicons.org/fastapi/009688",

  flask:
    "https://cdn.simpleicons.org/flask/FFFFFF",

  flutter:
    "https://cdn.simpleicons.org/flutter/02569B",

  dart:
    "https://cdn.simpleicons.org/dart/0175C2",

  postgresql:
    "https://cdn.simpleicons.org/postgresql/4169E1",

  mysql:
    "https://cdn.simpleicons.org/mysql/4479A1",

  "sql server":
    "/icons/sql.svg",

  sql:
    "/icons/sql.svg",

  arduino:
    "https://cdn.simpleicons.org/arduino/00979D",

  esp32:
    "https://cdn.simpleicons.org/espressif/E7352C",

  micropython:
    "https://cdn.simpleicons.org/micropython/FFFFFF",

  git:
    "https://cdn.simpleicons.org/git/F05032",

  github:
    "https://cdn.simpleicons.org/github/FFFFFF",

  node:
    "https://cdn.simpleicons.org/nodedotjs/5FA04E",

  nodejs:
    "https://cdn.simpleicons.org/nodedotjs/5FA04E",

  "node.js":
    "https://cdn.simpleicons.org/nodedotjs/5FA04E",

  java:
    "https://cdn.simpleicons.org/openjdk/FFFFFF",

  csharp:
    "https://cdn.simpleicons.org/csharp/512BD4",

  "c#":
    "https://cdn.simpleicons.org/csharp/512BD4",

  mongodb:
    "https://cdn.simpleicons.org/mongodb/47A248",

  docker:
    "https://cdn.simpleicons.org/docker/2496ED",

  vite:
    "https://cdn.simpleicons.org/vite/646CFF",

  vscode:
    "https://cdn.simpleicons.org/visualstudiocode/007ACC",

  "visual studio code":
    "https://cdn.simpleicons.org/visualstudiocode/007ACC",

  android:
    "https://cdn.simpleicons.org/android/3DDC84",

  "android studio":
    "https://cdn.simpleicons.org/androidstudio/3DDC84",

  firebase:
    "https://cdn.simpleicons.org/firebase/DD2C00",

  vercel:
    "https://cdn.simpleicons.org/vercel/FFFFFF",

  npm:
    "https://cdn.simpleicons.org/npm/CB3837",

  postman:
    "https://cdn.simpleicons.org/postman/FF6C37",
};


// ==========================================
// COMPONENTE
// ==========================================

const SkillsCard = () => {
  const [skills, setSkills] = useState<Skills | null>(null);

  const [loading, setLoading] = useState(true);


  // ========================================
  // CARGAR TECNOLOGÍAS
  // ========================================

  useEffect(() => {
    const load = async () => {
      try {
        const data =
          await knowledgeService.getSkills();

        setSkills(data);

      } catch (error) {
        console.error(
          "Error loading skills:",
          error
        );

      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);


  // ========================================
  // LOADING
  // ========================================

  if (loading) {
    return (
      <div className="skills-card skills-loading">

        <div className="skills-spinner" />

        <span>
          Cargando tecnologías...
        </span>

      </div>
    );
  }


  // ========================================
  // SIN INFORMACIÓN
  // ========================================

  if (!skills) {
    return null;
  }


  // ========================================
  // SECCIONES
  // ========================================

  const sections = Object.entries(skills)
    .filter(([, value]) => {

      if (!value) {
        return false;
      }

      if (Array.isArray(value)) {
        return false;
      }

      if (typeof value !== "object") {
        return false;
      }

      return (
        "technologies" in value ||
        "tools" in value ||
        "experience" in value
      );
    });


  // ========================================
  // OBTENER ELEMENTOS
  // ========================================

  const getItems = (
    section: any
  ): Technology[] => {

    if (section.technologies) {
      return section.technologies;
    }

    if (section.tools) {
      return section.tools.map(
        (tool: string) => ({
          name: tool,
        })
      );
    }

    if (section.experience) {
      return section.experience.map(
        (item: string) => ({
          name: item,
        })
      );
    }

    return [];
  };


  // ========================================
  // TITULO DE CATEGORIA
  // ========================================

  const formatTitle = (
    text: string
  ) => {
    return text
      .replaceAll("_", " ")
      .replace(/\b\w/g, (letter) =>
        letter.toUpperCase()
      );
  };


  // ========================================
  // RENDER
  // ========================================

  return (
    <div className="skills-card">

      {/* ====================================
          HEADER
      ==================================== */}

      <div className="skills-header">

        <h2>
          Tecnologías
        </h2>

        <p>
          Stack tecnológico y herramientas
          utilizadas.
        </p>

      </div>


      <div className="skills-divider" />


      {/* ====================================
          CATEGORÍAS
      ==================================== */}

      <div className="skills-body">

        {sections.map(
          ([key, section]) => {

            const items =
              getItems(section);


            // Solo mostramos tecnologías
            // que tengan icono configurado.

            const visibleItems =
              items.filter((tech) => {

                const name =
                  tech.name
                    .toLowerCase()
                    .trim();

                return Boolean(
                  icons[name]
                );
              });


            if (
              visibleItems.length === 0
            ) {
              return null;
            }


            return (
              <section
                key={key}
                className="skills-section"
              >

                {/* ==========================
                    TITULO
                ========================== */}

                <div className="skills-section-title">

                  <span>
                    {formatTitle(key)}
                  </span>

                </div>


                {/* ==========================
                    ICONOS
                ========================== */}

                <div className="skills-grid">

                  {visibleItems.map(
                    (tech, index) => {

                      const name =
                        tech.name
                          .toLowerCase()
                          .trim();

                      const icon =
                        icons[name];


                      return (
                        <div
                          key={`${name}-${index}`}
                          className="skill-icon-card"
                          title={tech.name}
                        >

                          <img
                            src={icon}
                            alt=""
                            className="skill-icon"
                          />

                        </div>
                      );

                    }
                  )}

                </div>

              </section>
            );

          }
        )}

      </div>

    </div>
  );
};

export default SkillsCard;