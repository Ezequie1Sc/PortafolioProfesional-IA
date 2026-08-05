import "./Chat.css";
import { useChat } from "../../hooks/useChat";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";

const Chat = () => {
  const { messages, loading, error, sendMessage, clearChat } = useChat();

  return (
    <>
      {/* CORTINA PREMIUM - Se desliza hacia arriba al entrar */}
      <div className="chat-curtain" />

      {/* CONTENIDO DEL CHAT */}
      <main className="chat-page">
        <div className="chat-container">
          <ChatHeader clearChat={clearChat} />

          <ChatBody
            messages={messages}
            loading={loading}
            onSuggestionClick={sendMessage}
          />

          {error && <div className="chat-error">{error}</div>}

          <ChatInput
            loading={loading}
            onSend={sendMessage}
          />
        </div>
      </main>
    </>
  );
};

export default Chat;