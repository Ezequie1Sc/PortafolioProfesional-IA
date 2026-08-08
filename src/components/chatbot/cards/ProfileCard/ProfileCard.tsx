import "./ProfileCard.css";

import { useEffect, useState } from "react";

import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Globe,
  Github,
  FileText,
} from "lucide-react";

import { knowledgeService } from "../../../../service/knowledgeService";
import type { Profile } from "../../../../types/knowledge";

const ProfileCard = () => {

  const [profile, setProfile] = useState<Profile | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadProfile = async () => {

      try {

        const data =
          await knowledgeService.getProfile();

        setProfile(data);

      } catch (error) {

        console.error(
          "Error loading profile:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    loadProfile();

  }, []);

  if (loading) {

    return (

      <div className="profile-card profile-loading">

        <div className="profile-spinner" />

        <span>Cargando perfil...</span>

      </div>

    );

  }

  if (!profile) {

    return null;

  }

  const personal =
    profile.personal_information;

  const summary =
    profile.professional_summary;

  const location =
    `${personal.location.city}, ${personal.location.state}, ${personal.location.country}`;
      return (

    <div className="profile-card">

      {/* ================= HEADER ================= */}

      <div className="profile-header">

        <div className="profile-avatar-wrapper">

          <img
            src="/ezequielemovebg.webp"
            alt={personal.preferred_name}
            className="profile-avatar"
          />

          <span
            className="profile-status"
            title="Disponible para trabajar"
          />

        </div>

        <h2 className="profile-name">
          {personal.preferred_name}
        </h2>

        <p className="profile-title">

          {summary.experience_level}

        </p>

      </div>

      <div className="profile-divider" />

      {/* ================= INFO ================= */}

      <div className="profile-content">

        <div className="profile-row">

          <GraduationCap
            size={18}
            strokeWidth={2}
          />

          <span>

            Ingeniería en Sistemas Computacionales

          </span>

        </div>

        <div className="profile-row">

          <MapPin
            size={18}
            strokeWidth={2}
          />

          <span>

            {location}

          </span>

        </div>

      </div>

      <div className="profile-divider" />
            {/* ================= CONTACT ================= */}

      <div className="profile-content">

        <div className="profile-row">

          <Mail
            size={18}
            strokeWidth={2}
          />

          <a
            href={`mailto:${personal.email}`}
            className="profile-link"
          >
            {personal.email}
          </a>

        </div>

        <div className="profile-row">

          <Phone
            size={18}
            strokeWidth={2}
          />

          <a
            href={`tel:${personal.phone}`}
            className="profile-link"
          >
            {personal.phone}
          </a>

        </div>

        <div className="profile-row">

          <Globe
            size={18}
            strokeWidth={2}
          />

          <a
            href="https://ezequiel.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            ezequiel.dev
          </a>

        </div>

      </div>

      <div className="profile-divider" />

      {/* ================= ACTIONS ================= */}

      <div className="profile-actions">

        <a
          href="https://github.com/Ezequie1Sc"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-button"
        >

          <Github size={18} />

          <span>
            GitHub
          </span>

        </a>

        <a
          href="/Orlando_Ezequiel_Salazar_Cruz_CV_.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-button profile-button-primary"
        >

          <FileText size={18} />

          <span>
            Ver Resumen
          </span>

        </a>

      </div>  
          </div>

  );

};

export default ProfileCard;