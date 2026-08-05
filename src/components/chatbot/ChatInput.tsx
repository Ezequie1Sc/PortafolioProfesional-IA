import { useState } from "react";
import { SendHorizontal } from "lucide-react";

interface Props {
  loading: boolean;
  onSend: (message: string) => Promise<void>;
}

const ChatInput = ({ loading, onSend }: Props) => {
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    const text = message.trim();

    if (!text || loading) return;

    await onSend(text);

    setMessage("");
  };

  const handleKeyDown = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await handleSend();
    }
  };

  return (
    <footer className="chat-footer">
      <div className="chat-input-container">

        <input
          className="chat-input"
          type="text"
          placeholder="Pregúntame sobre mis proyectos, experiencia o tecnologías..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          className="send-button"
          disabled={loading}
          onClick={handleSend}
        >
          <SendHorizontal size={20} />
        </button>

      </div>
    </footer>
  );
};

export default ChatInput;