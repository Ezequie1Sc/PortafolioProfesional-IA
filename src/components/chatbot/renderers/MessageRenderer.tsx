import ProfileCard from "../cards/ProfileCard/ProfileCard";
import GithubCard from "../cards/GithubCard/GithubCard";
import SkillsCard from "../cards/SkillsCard/SkillsCard";

import type { ChatMessage } from "../../../types/chat";

interface Props {
  message: ChatMessage;
}

// ==========================================
// REGISTRO DE CARDS
// ==========================================

const cardRegistry = {
  profile: ProfileCard,
  github: GithubCard,
  skill: SkillsCard,
} as const;


// ==========================================
// MENSAJES DESPUÉS DE LAS CARDS
// ==========================================

const followUpMessages = {
  profile:
    "También puedes preguntarme sobre mis proyectos, habilidades, tecnologías, experiencia o GitHub.",

  github:
    "También puedes preguntarme sobre mis proyectos, habilidades, tecnologías o experiencia.",

  skill:
    "También puedes preguntarme sobre mis proyectos, experiencia, certificaciones o GitHub.",
} as const;


// ==========================================
// RENDERER
// ==========================================

const MessageRenderer = ({ message }: Props) => {

  const Card =
    message.intent &&
    message.intent in cardRegistry
      ? cardRegistry[
          message.intent as keyof typeof cardRegistry
        ]
      : null;


  const followUp =
    message.intent &&
    message.intent in followUpMessages
      ? followUpMessages[
          message.intent as keyof typeof followUpMessages
        ]
      : null;


  return (
    <>
      {/* ======================================
          MENSAJE DE LA IA
      ====================================== */}

      <div className="message-text">
        {message.content}
      </div>


      {/* ======================================
          CARD
      ====================================== */}

      {Card && (
        <Card />
      )}


      {/* ======================================
          MENSAJE DESPUÉS DE LA CARD
      ====================================== */}

      {Card && followUp && (
        <div className="card-follow-up">

          <span className="card-follow-up-icon">
            💡
          </span>

          <span>
            {followUp}
          </span>

        </div>
      )}
    </>
  );
};

export default MessageRenderer;