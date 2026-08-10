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
      {/* ==========================================
          MENSAJE PRINCIPAL
      ========================================== */}

      <div
        className={`message ${
          isUser ? "user" : "bot"
        }`}
      >

        {/* AVATAR */}

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


        {/* BURBUJA PRINCIPAL */}

        <div className="message-content ai-message">

          <MessageRenderer
            message={message}
          />

        </div>

      </div>


      {/* ==========================================
          SEGUNDO MENSAJE DEL ASISTENTE
      ========================================== */}

      {showFollowUp && (

        <div className="message bot follow-up-message">

          {/* AVATAR DEL ASISTENTE */}

          <div className="avatar bot">

            <Bot size={14} />

          </div>


          {/* BURBUJA DEL SEGUNDO MENSAJE */}

          <div className="message-content follow-up-content">

            {message.intent === "profile" && (
              <>
                También puedes preguntarme sobre mis{" "}
                <strong>proyectos</strong>,{" "}
                <strong>habilidades</strong>,{" "}
                <strong>tecnologías</strong>,{" "}
                <strong>experiencia</strong> o{" "}
                <strong>GitHub</strong>.
              </>
            )}


            {message.intent === "github" && (
              <>
                También puedes preguntarme sobre mis{" "}
                <strong>proyectos</strong>,{" "}
                <strong>habilidades</strong>,{" "}
                <strong>tecnologías</strong> o{" "}
                <strong>experiencia</strong>.
              </>
            )}


            {message.intent === "skill" && (
              <>
                También puedes preguntarme sobre mis{" "}
                <strong>proyectos</strong>,{" "}
                <strong>experiencia</strong>,{" "}
                <strong>certificaciones</strong> o{" "}
                <strong>GitHub</strong>.
              </>
            )}

          </div>

        </div>

      )}

    </>
  );
};

export default ChatMessageItem;