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
    "https://cdn.simpleicons.org/react/61DAFB",

  angular:
    "https://cdn.simpleicons.org/angular/DD0031",

  typescript:
    "https://cdn.simpleicons.org/typescript/3178C6",

  javascript:
    "https://cdn.simpleicons.org/javascript/F7DF1E",

  "tailwind css":
    "https://cdn.simpleicons.org/tailwindcss/06B6D4",

  tailwindcss:
    "https://cdn.simpleicons.org/tailwindcss/06B6D4",

  html:
    "https://cdn.simpleicons.org/html5/E34F26",

  html5:
    "https://cdn.simpleicons.org/html5/E34F26",

  css:
    "https://cdn.simpleicons.org/css/663399",

  css3:
    "https://cdn.simpleicons.org/css/663399",


  // ========================================
  // BACKEND
  // ========================================

  python:
    "https://cdn.simpleicons.org/python/3776AB",

  fastapi:
    "https://cdn.simpleicons.org/fastapi/009688",

  flask:
    "https://cdn.simpleicons.org/flask/000000",

  node:
    "https://cdn.simpleicons.org/nodedotjs/5FA04E",

  nodejs:
    "https://cdn.simpleicons.org/nodedotjs/5FA04E",

  "node.js":
    "https://cdn.simpleicons.org/nodedotjs/5FA04E",

  java:
    "https://cdn.simpleicons.org/openjdk/F89820",

  csharp:
    "https://cdn.simpleicons.org/csharp/512BD4",

  "c#":
    "https://cdn.simpleicons.org/csharp/512BD4",

  render:
    "https://cdn.simpleicons.org/render/46E3B7",


  // ========================================
  // MOBILE
  // ========================================

  flutter:
    "https://cdn.simpleicons.org/flutter/02569B",

  dart:
    "https://cdn.simpleicons.org/dart/0175C2",

  android:
    "https://cdn.simpleicons.org/android/3DDC84",

  "android studio":
    "https://cdn.simpleicons.org/androidstudio/3DDC84",


  // ========================================
  // DATABASE
  // ========================================

  postgresql:
    "https://cdn.simpleicons.org/postgresql/4169E1",

  mysql:
    "https://cdn.simpleicons.org/mysql/4479A1",

  mongodb:
    "https://cdn.simpleicons.org/mongodb/47A248",

  sql:
    "https://cdn.simpleicons.org/microsoftsqlserver/CC2927",

  "sql server":
    "https://cdn.simpleicons.org/microsoftsqlserver/CC2927",

  sqlserver:
    "https://cdn.simpleicons.org/microsoftsqlserver/CC2927",

  "microsoft sql server":
    "https://cdn.simpleicons.org/microsoftsqlserver/CC2927",

  microsoftsqlserver:
    "https://cdn.simpleicons.org/microsoftsqlserver/CC2927",


  // ========================================
  // IOT
  // ========================================

  arduino:
    "https://cdn.simpleicons.org/arduino/00979D",

  esp32:
    "https://cdn.simpleicons.org/espressif/E7352C",

  micropython:
    "https://cdn.simpleicons.org/micropython/2B2728",


  // ========================================
  // VERSION CONTROL
  // ========================================

  git:
    "https://cdn.simpleicons.org/git/F05032",

  github:
    "https://cdn.simpleicons.org/github/181717",


  // ========================================
  // TOOLS
  // ========================================

  docker:
    "https://cdn.simpleicons.org/docker/2496ED",

  vite:
    "https://cdn.simpleicons.org/vite/646CFF",

  vscode:
    "https://cdn.simpleicons.org/visualstudiocode/007ACC",

  "visual studio code":
    "https://cdn.simpleicons.org/visualstudiocode/007ACC",

  "visual studio 2022":
    "https://cdn.simpleicons.org/visualstudio/5C2D91",

  visualstudio:
    "https://cdn.simpleicons.org/visualstudio/5C2D91",

  "visual studio":
    "https://cdn.simpleicons.org/visualstudio/5C2D91",

  firebase:
    "https://cdn.simpleicons.org/firebase/FFCA28",

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
  // OBTENER SECCIONES
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
            // SOLO TECNOLOGÍAS CON ICONO
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


            // Si la categoría no tiene
            // ningún icono, no se muestra.

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
                    NOMBRE DE CATEGORÍA
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
                                `No se pudo cargar el icono: ${tech.name}`,
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