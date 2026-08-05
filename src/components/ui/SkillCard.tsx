import React, { useState } from 'react';
import type { Skill } from '../../types';
import '../../styles/SkillCard.css';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Colores sólidos para cada categoría
  const getColor = (category: string) => {
    const colors = {
      '01': '#2563eb', // Azul
      '02': '#7c3aed', // Morado
      '03': '#059669', // Verde
      '04': '#d97706', // Amarillo
      '05': '#dc2626', // Rojo
      '06': '#9333ea'  // Morado claro
    };
    return colors[category as keyof typeof colors] || '#2563eb';
  };

  return (
    <div 
      className="skill-card-wrapper"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onTouchStart={() => setIsFlipped(!isFlipped)}
    >
      <div className={`skill-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div 
          className="skill-front"
          style={{ backgroundColor: getColor(skill.category) }}
        >
          <div className="skill-number">{skill.category}</div>
          <h3 className="skill-title">{skill.title}</h3>
          
          <div className="skill-icons-grid">
            {skill.skills.map((item, index) => (
              <div key={index} className="skill-icon-box">
                <div className="skill-icon-circle">
                  <img 
                    src={item.icon} 
                    alt={item.name}
                    className="skill-icon-img"
                  />
                </div>
                <span className="skill-icon-name">{item.name}</span>
              </div>
            ))}
          </div>
          
          <div className="skill-badge-front">
            {skill.badgeText}
          </div>
        </div>

        {/* Back */}
        <div 
          className="skill-back"
          style={{ backgroundColor: getColor(skill.category) }}
        >
          <div className="skill-number-back">{skill.category}</div>
          <h3 className="skill-back-title">{skill.title}</h3>
          
          <div className="skill-back-text">
            <p className="skill-description">
              {skill.backDescription}
            </p>
            
            <ul className="skill-points-list">
              {skill.backPoints.map((point, index) => (
                <li key={index} className="skill-point-item">
                  <span className="skill-point-bullet">•</span>
                  <span className="skill-point-text">{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="skill-badge-back">
              {skill.backBadge}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;