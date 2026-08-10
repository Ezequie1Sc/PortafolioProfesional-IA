import { Bot, User } from "lucide-react";

import type { ChatMessage } from "../../types/chat";

import MessageRenderer from "./renderers/MessageRenderer";

interface Props {
  message: ChatMessage;
}

const ChatMessageItem = ({ message }: Props) => {
  const isUser = message.role === "user";

  const showFollowUp =
    message.role === "assistant" &&
    (
      message.intent === "profile" ||
      message.intent === "github" ||
      message.intent === "skill"
    );

  return (
    <>
      {/* ======================================
          MENSAJE PRINCIPAL
      ====================================== */}

      <div
        className={`message ${
          isUser ? "user" : "bot"
        }`}
      >
        <div
          className={`avatar ${
            isUser ? "user" : "bot"
          }`}
        >
          {isUser ? (
            <User size={18} />
          ) : (
            <Bot size={18} />
          )}
        </div>

        <div className="message-content ai-message">
          <MessageRenderer
            message={message}
          />
        </div>
      </div>


      {/* ======================================
          SEGUNDO MENSAJE DEL ASISTENTE
          SOLO PARA LAS CARDS
      ====================================== */}

      {showFollowUp && (
        <div className="message bot follow-up-message">

          {/* AVATAR */}

          <div className="avatar bot">
            <Bot size={14} />
          </div>


          {/* MENSAJE */}

          <div className="message-content follow-up-content">

            {/* PROFILE */}

            {message.intent === "profile" && (
              <>
                ¡Claro! También puedes preguntarme
                por mis{" "}
                <strong>proyectos</strong>,{" "}
                <strong>habilidades</strong>,{" "}
                <strong>tecnologías</strong>,{" "}
                <strong>experiencia</strong> o{" "}
                <strong>GitHub</strong>. 👋🚀
              </>
            )}


            {/* GITHUB */}

            {message.intent === "github" && (
              <>
                ¡Claro! También puedes preguntarme
                por mis{" "}
                <strong>proyectos</strong>,{" "}
                <strong>tecnologías</strong>,{" "}
                <strong>experiencia</strong> o{" "}
                <strong>habilidades</strong>. 💻🚀
              </>
            )}


            {/* SKILLS */}

            {message.intent === "skill" && (
              <>
                ¡Perfecto! También puedes preguntarme
                por mis{" "}
                <strong>proyectos</strong>,{" "}
                <strong>experiencia</strong>,{" "}
                <strong>certificaciones</strong> o{" "}
                <strong>GitHub</strong>. 🛠️🚀
              </>
            )}

          </div>
        </div>
      )}
    </>
  );
};

export default ChatMessageItem;