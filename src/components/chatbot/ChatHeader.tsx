import { RotateCcw, Mic, ArrowLeft } from "lucide-react";

interface ChatHeaderProps {
  clearChat: () => void;
}

const ChatHeader = ({ clearChat }: ChatHeaderProps) => {

  const handleBackHome = () => {
    // Recarga completamente la aplicación
    // Esto volverá a ejecutar App.tsx y mostrará el SplashScreen.
    window.location.href = "/";
  };

  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <button
          className="back-button"
          onClick={handleBackHome}
          aria-label="Volver al inicio"
        >
          <ArrowLeft size={18} />
        </button>

        <div className="chat-header-title">
          Asistente IA
          <span className="chat-header-badge">BETA</span>
        </div>
      </div>

      <div className="chat-header-right">
        <button
          className="chat-btn btn-voice"
          aria-label="Voz"
        >
          <Mic size={16} />
          <span>Voz</span>
        </button>

        <button
          className="chat-btn"
          onClick={clearChat}
          aria-label="Limpiar chat"
        >
          <RotateCcw size={14} />
          <span>Limpiar</span>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;