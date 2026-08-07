import { useEffect, useState } from "react";
import axios from "axios";

import {
  Github,
  FolderGit2
} from "lucide-react";

import "./GithubCard.css";

interface GithubProfile {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  html_url: string;
}

const USERNAME = "Ezequie1Sc";

const GithubCard = () => {

  const [profile, setProfile] = useState<GithubProfile | null>(null);

  useEffect(() => {

    const loadProfile = async () => {

      try {

        const { data } = await axios.get<GithubProfile>(
          `https://api.github.com/users/${USERNAME}`
        );

        setProfile(data);

      } catch (error) {

        console.error(error);

      }

    };

    loadProfile();

  }, []);

  if (!profile) {

    return (
      <div className="github-card loading">
        Cargando GitHub...
      </div>
    );

  }

  return (

    <div className="github-card">

      <div className="github-header">

        <img
          src={profile.avatar_url}
          alt={profile.name}
          className="github-avatar"
        />

        <h2>{profile.name}</h2>

        <span>@{profile.login}</span>

        <p>{profile.bio}</p>

      </div>

      <div className="github-divider" />

      <div className="github-calendar">

        <div className="github-calendar-header">

          <h3>Contribuciones</h3>

          <span>Últimos 12 meses</span>

        </div>

        <img
          className="github-contributions"
          src={`https://ghchart.rshah.org/22c55e/${profile.login}`}
          alt="GitHub Contributions"
          loading="lazy"
          draggable={false}
        />

      </div>

      <div className="github-divider" />

      <div className="github-actions">

        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          <Github size={18} />
          Ver Perfil
        </a>

        <a
          href={`${profile.html_url}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="github-button secondary"
        >
          <FolderGit2 size={18} />
          Repositorios
        </a>

      </div>

    </div>

  );

};

export default GithubCard;