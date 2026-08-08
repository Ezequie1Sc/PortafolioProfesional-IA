import "./GithubCard.css";

import { useEffect, useState } from "react";

import {
  Github,
  ExternalLink,
  FolderGit2,
} from "lucide-react";

import { knowledgeService } from "../../../../service/knowledgeService";

import type {
  Github as GithubType,
} from "../../../../types/knowledge";

const GithubCard = () => {

  const [github, setGithub] =
    useState<GithubType | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadGithub = async () => {

      try {

        const data =
          await knowledgeService.getGithub();

        setGithub(data);

      } catch (error) {

        console.error(
          "Error loading github:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    loadGithub();

  }, []);

  if (loading) {

    return (

      <div className="github-card github-loading">

        <div className="github-spinner" />

        <span>

          Cargando GitHub...

        </span>

      </div>

    );

  }

  if (!github) {

    return null;

  }

  const username =
    github.username;
      return (

    <div className="github-card">

      {/* ================= HEADER ================= */}

      <div className="github-header">

        <div className="github-avatar-wrapper">

          <img
            className="github-avatar"
            src={`https://github.com/${username}.png`}
            alt={username}
          />

        </div>

        <div className="github-user">

          <div className="github-title">

            <Github size={22} />

            <span>

              GitHub

            </span>

          </div>

          <h2>

            @{username}

          </h2>

          <p>

            {github.description}

          </p>

        </div>

      </div>

      <div className="github-divider" />

      {/* ================= CONTRIBUTIONS ================= */}

      <div className="github-contributions">

        <img

          src={`https://ghchart.rshah.org/22c55e/${username}`}

          alt="GitHub Contributions"

          className="github-chart"

        />

      </div>

      <div className="github-divider" />
            {/* ================= ACTIONS ================= */}

      <div className="github-actions">

        {github.card.show_profile_button && (

          <a
            href={github.profile_url}
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >

            <Github size={18} />

            <span>

              Ver Perfil

            </span>

            <ExternalLink size={16} />

          </a>

        )}

        {github.card.show_repositories_button && (

          <a
            href={github.repositories_url}
            target="_blank"
            rel="noopener noreferrer"
            className="github-button github-button-primary"
          >

            <FolderGit2 size={18} />

            <span>

              Repositorios

            </span>

            <ExternalLink size={16} />

          </a>

        )}

      </div>
          </div>

  );

};

export default GithubCard;