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

  // ========================================
  // FRONTEND
  // ========================================

  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",

  angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",

  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",

  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",

  html:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",

  html5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",

  css:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",

  css3:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",

  "tailwind css":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",

  tailwindcss:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",


  // ========================================
  // BACKEND
  // ========================================

  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",

  fastapi:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",

  flask:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",

  java:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",

  csharp:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",

  "c#":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",

  node:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",

  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",

  "node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",

  render:
    "https://cdn.simpleicons.org/render/46E3B7",


  // ========================================
  // MOBILE
  // ========================================

  flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",

  dart:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",

  android:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",

  "android studio":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",


  // ========================================
  // DATABASE
  // ========================================

  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",

  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",

  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",

 sql:
  "/icons/sql.svg",

"sql server":
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",

sqlserver:
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",

"microsoft sql server":
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",

microsoftsqlserver:
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",


  // ========================================
  // IOT
  // ========================================

  arduino:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",

  esp32:
    "https://cdn.simpleicons.org/espressif/E7352C",

  micropython:
    "https://cdn.simpleicons.org/micropython/2B2728",


  // ========================================
  // VERSION CONTROL
  // ========================================

  git:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",

  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",


  // ========================================
  // TOOLS
  // ========================================

  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",

  vite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",

  vscode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",

  "visual studio code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",

  "visual studio 2022":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",

  visualstudio:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",

  "visual studio":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",

  firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",

  vercel:
    "https://cdn.simpleicons.org/vercel/FFFFFF",

  npm:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",

  postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
};


// ==========================================
// COMPONENTE
// ==========================================

const SkillsCard = () => {

  const [skills, setSkills] =
    useState<Skills | null>(null);

  const [loading, setLoading] =
    useState(true);


  // ========================================
  // CARGAR TECNOLOGÍAS
  // ========================================

  useEffect(() => {

    const load = async () => {

      try {

        const data =
          await knowledgeService.getSkills();

        console.log(
          "SKILLS RECIBIDAS:",
          data
        );

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

  const sections =
    Object.entries(skills)
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
  // NORMALIZAR NOMBRE
  // ========================================

  const normalizeName = (
    name: string
  ) => {

    return name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");

  };


  // ========================================
  // FORMATEAR CATEGORÍA
  // ========================================

  const formatTitle = (
    text: string
  ) => {

    return text
      .replaceAll("_", " ")
      .replace(
        /\b\w/g,
        (letter) =>
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


      {/* ====================================
          DIVIDER
      ==================================== */}

      <div className="skills-divider" />


      {/* ====================================
          CATEGORÍAS
      ==================================== */}

      <div className="skills-body">

        {sections.map(
          ([key, section]) => {

            const items =
              getItems(section);


            // ==================================
            // FILTRAR ICONOS
            // ==================================

            const visibleItems =
              items.filter((tech) => {

                const name =
                  normalizeName(
                    tech.name
                  );

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


                {/* ==============================
                    CATEGORÍA
                ============================== */}

                <div className="skills-section-title">

                  <span>
                    {formatTitle(key)}
                  </span>

                </div>


                {/* ==============================
                    ICONOS
                ============================== */}

                <div className="skills-grid">

                  {visibleItems.map(
                    (tech, index) => {

                      const name =
                        normalizeName(
                          tech.name
                        );

                      const icon =
                        icons[name];


                      return (

                        <div
                          key={`${name}-${index}`}
                          className="skill-icon-card"
                          title={tech.name}
                          aria-label={tech.name}
                        >

                          <img
                            src={icon}
                            alt={tech.name}
                            className="skill-icon"
                            loading="lazy"
                            onError={(event) => {

                              console.error(
                                "ERROR ICONO:",
                                tech.name,
                                icon
                              );

                              event.currentTarget.style.display =
                                "none";

                            }}
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