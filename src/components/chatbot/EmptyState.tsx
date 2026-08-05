import { Sparkles, Briefcase, Github, GraduationCap } from "lucide-react";
import SuggestionCard from "./SuggestionCard";

interface Props {
  onSuggestionClick: (prompt: string) => void;
}

const suggestions = [
  {
    icon: <Briefcase size={22} />,
    title: "Información de Perfil",
    description: "'Muéstrame su tarjeta de perfil'",
    prompt: "Muéstrame tu tarjeta de perfil",
  },
  {
    icon: <Github size={22} />,
    title: "Perfil de GitHub",
    description: "'Enséñame su perfil de GitHub'",
    prompt: "Enséñame tu perfil de GitHub",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Educación",
    description: "'¿Cuál es su formación académica?'",
    prompt: "¿Cuál es tu formación académica?",
  },
];

const EmptyState = ({ onSuggestionClick }: Props) => {
  return (
    <div className="chat-empty">
      <div className="chat-empty-container">

        <div className="chat-empty-icon-wrapper">
          <Sparkles size={22} />
        </div>

        <h1 className="chat-empty-title">
          ¿Cómo puedo <span className="highlight-blue">ayudarte</span> hoy?
        </h1>

        <p className="chat-empty-subtitle">
          Puedo responder preguntas sobre Ezequiel, sus proyectos, habilidades o
          cómo ponerse en contacto con él.
        </p>

        <div className="suggestion-grid">
          {suggestions.map((item) => (
            <SuggestionCard
              key={item.title}
              icon={<div className="suggestion-icon">{item.icon}</div>}
              title={item.title}
              description={item.description}
              prompt={item.prompt}
              onClick={onSuggestionClick}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default EmptyState;