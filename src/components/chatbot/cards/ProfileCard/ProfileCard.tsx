import "./ProfileCard.css";

import {
  GraduationCap,
  MapPin,
  Briefcase,
  Mail,
  Phone,
  Globe,
  Github,
  Download,
  MessageCircle,
} from "lucide-react";

import CardLayout from "../CardLayout";

export interface ProfileCardProps {
  avatar?: string;
  name: string;
  role: string;
  education: string;
  location: string;
  company: string;
  email: string;
  phone?: string;
  website?: string;
  github?: string;
  cv?: string;
  skills: string[];
}

const ProfileCard = ({
  avatar,
  name,
  role,
  education,
  location,
  company,
  email,
  phone,
  website,
  github,
  cv,
  skills,
}: ProfileCardProps) => {
  return (
    <CardLayout>

      <section className="profile-header">

        <div className="profile-avatar">

          {avatar ? (
            <img src={avatar} alt={name} />
          ) : (
            <div className="profile-avatar-placeholder">
              {name.charAt(0)}
            </div>
          )}

          <span className="profile-status" />

        </div>

        <div className="profile-user">

          <h2>{name}</h2>

          <p>{role}</p>

        </div>

      </section>

      <section className="profile-grid">

        <div className="profile-box">
          <GraduationCap />
          <span>{education}</span>
        </div>

        <div className="profile-box">
          <MapPin />
          <span>{location}</span>
        </div>

        <div className="profile-box">
          <Briefcase />
          <span>{company}</span>
        </div>

      </section>

      <section className="profile-contact">

        <div className="contact-item">
          <Mail />
          <span>{email}</span>
        </div>

        {phone && (
          <div className="contact-item">
            <Phone />
            <span>{phone}</span>
          </div>
        )}

        {website && (
          <div className="contact-item">
            <Globe />
            <span>{website}</span>
          </div>
        )}

      </section>

      <section className="profile-skills">

        {skills.map((skill) => (
          <span
            key={skill}
            className="skill-badge"
          >
            {skill}
          </span>
        ))}

      </section>

      <section className="profile-actions">

        {github && (
          <button>
            <Github size={18} />
            GitHub
          </button>
        )}

        {cv && (
          <button>
            <Download size={18} />
            CV
          </button>
        )}

        <button className="primary">
          <MessageCircle size={18} />
          Contactar
        </button>

      </section>

    </CardLayout>
  );
};

export default ProfileCard;