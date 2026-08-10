import "./ProfileCard.css";

import { useEffect, useState } from "react";

import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Github,
  ExternalLink,
} from "lucide-react";

import { knowledgeService } from "../../../../service/knowledgeService";
import type { Profile } from "../../../../types/knowledge";

const ProfileCard = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await knowledgeService.getProfile();

        setProfile(data);
      } catch (error) {
        console.error("Error loading profile:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="profile-card profile-loading">
        <div className="profile-spinner" />

        <span>
          Cargando perfil...
        </span>
      </div>
    );
  }

  // ==========================================
  // ERROR / SIN DATOS
  // ==========================================

  if (!profile) {
    return null;
  }

  // ==========================================
  // DATA
  // ==========================================

  const personal = profile.personal_information;

  const summary = profile.professional_summary;

  const location =
    `${personal.location.city}, ` +
    `${personal.location.state}, ` +
    `${personal.location.country}`;

  // ==========================================
  // CARD
  // ==========================================

  return (
    <article className="profile-card">

      {/* ======================================
          HEADER
      ====================================== */}

      <section className="profile-top">

        {/* FOTO */}

        <div className="profile-avatar-wrapper">

          <img
            src="/fondoazul.png"
            alt={personal.preferred_name}
            className="profile-avatar"
          />

          <span
            className="profile-status"
            title="Disponible para oportunidades"
          />

        </div>


        {/* INFORMACIÓN PRINCIPAL */}

        <div className="profile-main">

          <h2 className="profile-name">
            {personal.preferred_name}
          </h2>

          <p className="profile-title">
            {summary.experience_level}
          </p>

          <p className="profile-description">
            {summary.headline}
          </p>

        </div>

      </section>


      {/* ======================================
          DIVIDER
      ====================================== */}

      <div className="profile-divider" />


      {/* ======================================
          INFORMATION
      ====================================== */}

      <section className="profile-info">

        {/* ====================================
            LEFT COLUMN
        ==================================== */}

        <div className="profile-info-column">

          {/* FORMACIÓN */}

          <div className="profile-info-item">

            <GraduationCap
              size={20}
              strokeWidth={1.8}
            />

            <div>

              <span className="profile-info-label">
                Formación
              </span>

              <span className="profile-info-value">
                Ingeniería en Sistemas Computacionales
              </span>

            </div>

          </div>


          {/* UBICACIÓN */}

          <div className="profile-info-item">

            <MapPin
              size={20}
              strokeWidth={1.8}
            />

            <div>

              <span className="profile-info-label">
                Ubicación
              </span>

              <span className="profile-info-value">
                {location}
              </span>

            </div>

          </div>

        </div>


        {/* ====================================
            VERTICAL DIVIDER
        ==================================== */}

        <div className="profile-vertical-divider" />


        {/* ====================================
            RIGHT COLUMN
        ==================================== */}

        <div className="profile-info-column">

          {/* EMAIL */}

          <a
            href={`mailto:${personal.email}`}
            className="profile-contact-item"
          >

            <Mail
              size={19}
              strokeWidth={1.8}
            />

            <span>
              {personal.email}
            </span>

          </a>


          {/* TELÉFONO */}

          <a
            href={`tel:${personal.phone}`}
            className="profile-contact-item"
          >

            <Phone
              size={19}
              strokeWidth={1.8}
            />

            <span>
              {personal.phone}
            </span>

          </a>


          {/* ==================================
              PORTAFOLIO
          ================================== */}

          <a
            href="https://ezequiel-dev-ia.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-contact-item"
          >

            <ExternalLink
              size={19}
              strokeWidth={1.8}
            />

            <span>
              ezequiel-dev-ia.vercel.app
            </span>

          </a>


          {/* ==================================
              GITHUB
          ================================== */}

          <a
            href="https://github.com/Ezequie1Sc"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-contact-item"
          >

            <Github
              size={19}
              strokeWidth={1.8}
            />

            <span>
              github.com/Ezequie1Sc
            </span>

          </a>

        </div>

      </section>


      {/* ======================================
          DIVIDER
      ====================================== */}

      <div className="profile-divider" />


      {/* ======================================
          ACTION BUTTONS
      ====================================== */}

      <section className="profile-actions">

        {/* ====================================
            GITHUB BUTTON
        ==================================== */}

        <a
          href="https://github.com/Ezequie1Sc"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-button profile-button-github"
        >

          <Github
            size={18}
            strokeWidth={1.8}
          />

          <span>
            GitHub
          </span>

        </a>


        {/* ====================================
            CV / RESUMEN BUTTON
        ==================================== */}

        <a
          href="/Orlando_Ezequiel_Salazar_Cruz_CV_.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-button profile-button-resume"
        >

          <ExternalLink
            size={18}
            strokeWidth={1.8}
          />

          <span>
            Ver Resumen
          </span>

        </a>

      </section>

    </article>
  );
};

export default ProfileCard;