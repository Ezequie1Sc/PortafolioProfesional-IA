import "./SkillsCard.css";
import { skills } from "../../../../data";

interface SkillsCardProps {
  title?: string;
}

const SkillsCard = ({
  title = "Tecnologías y Habilidades",
}: SkillsCardProps) => {
  return (
    <div className="skills-card">

      <div className="skills-card-header">
        <h3>{title}</h3>
        <span>{skills.length} categorías</span>
      </div>

      <div className="skills-categories">

        {skills.map((category) => (
          <div
            key={category.id}
            className="skills-category"
          >
            <div className="skills-category-title">
              {category.title}
            </div>

            <div className="skills-items">

              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-chip"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    loading="lazy"
                  />

                  <span>
                    {skill.name}
                  </span>
                </div>
              ))}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default SkillsCard;