import "./ProfileCard.css";

import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Globe,
  Github,
  FileText,
} from "lucide-react";

interface ProfileCardProps {
  data: any;
}

const ProfileCard = ({ data }: ProfileCardProps) => {

  const info = data.personal_information;

  return (

    <article className="profile-card">

      {/* HEADER */}

      <header className="profile-card__header">

        <div className="profile-card__avatar">

          <img
            src="/ezequielemovebg.webp"
            alt={info.preferred_name}
          />

          <span className="profile-card__status" />

        </div>

        <h2 className="profile-card__name">
          {info.preferred_name}
        </h2>

        <p className="profile-card__title">
          {info.title}
        </p>

      </header>

      {/* INFORMACIÓN */}

      <section className="profile-card__section">

        <div className="profile-card__item">

          <GraduationCap size={18} />

          <span>
            Ingeniería en Sistemas Computacionales
          </span>

        </div>

        <div className="profile-card__item">

          <MapPin size={18} />

          <span>

            {info.location.city},
            {" "}
            {info.location.state},
            {" "}
            {info.location.country}

          </span>

        </div>

      </section>

      {/* CONTACTO */}

      <section className="profile-card__section">

        <div className="profile-card__item">

          <Mail size={18} />

          <span>{info.email}</span>

        </div>

        <div className="profile-card__item">

          <Phone size={18} />

          <span>{info.phone}</span>

        </div>

        <div className="profile-card__item">

          <Globe size={18} />

          <span>ezequiel.dev</span>

        </div>

      </section>

      {/* BOTONES */}

      <footer className="profile-card__footer">

        <button className="profile-card__button">

          <Github size={18} />

          <span>GitHub</span>

        </button>

        <button className="profile-card__button">

          <FileText size={18} />

          <span>Ver Resumen</span>

        </button>

      </footer>

    </article>

  );

};

export default ProfileCard;