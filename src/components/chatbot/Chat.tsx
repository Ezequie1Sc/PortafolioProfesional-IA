import "./Chat.css";
import { useChat } from "../../hooks/useChat";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";

interface ChatProps {
  serverReady: boolean;
}

const Chat = ({ serverReady }: ChatProps) => {
  const { messages, loading, error, sendMessage, clearChat } = useChat();

  return (
    <>
      {/* CORTINA PREMIUM - Se desliza hacia arriba al entrar */}
      <div className="chat-curtain" />

      {/* CONTENIDO DEL CHAT */}
      <main className="chat-page">
        <div className="chat-container">
          <ChatHeader clearChat={clearChat} />

          {!serverReady && (
            <div className="server-status">
              ⚡ Preparando Ezequiel IA...
            </div>
          )}

          <ChatBody
            messages={messages}
            loading={loading}
            onSuggestionClick={sendMessage}
          />

          {error && <div className="chat-error">{error}</div>}

          <ChatInput
            loading={loading || !serverReady}
            onSend={sendMessage}
          />
        </div>
      </main>
    </>
  );
};

export default Chat;