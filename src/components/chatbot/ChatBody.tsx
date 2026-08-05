import { useEffect, useRef, useState } from "react";

import type { ChatMessage } from "../../types/chat";

import ChatMessageItem from "./ChatMessage";
import EmptyState from "./EmptyState";
import Typing from "./Typing";
import ScrollButton from "./ScrollButton";

interface Props {
  messages: ChatMessage[];
  loading: boolean;
  onSuggestionClick: (prompt: string) => void;
}

const ChatBody = ({
  messages,
  loading,
  onSuggestionClick,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [showScrollButton, setShowScrollButton] = useState(false);

  /**
   * Auto Scroll cuando llegan mensajes nuevos
   */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  /**
   * Mostrar botón únicamente cuando
   * el usuario no esté al final
   */
  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const distance =
        container.scrollHeight -
        container.scrollTop -
        container.clientHeight;

      setShowScrollButton(distance > 200);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  /**
   * Pantalla inicial
   */
  if (messages.length === 0) {
    return (
      <section className="chat-body">
        <div className="chat-content">
          <EmptyState
            onSuggestionClick={onSuggestionClick}
          />
        </div>
      </section>
    );
  }

  return (
    <section
      className="chat-body"
      ref={containerRef}
    >
      <div className="chat-content">
        {messages.map((message) => (
          <ChatMessageItem
            key={message.id}
            message={message}
          />
        ))}

        {loading && <Typing />}

        <div ref={bottomRef} />
      </div>

      {showScrollButton && (
        <ScrollButton
          onClick={scrollToBottom}
        />
      )}
    </section>
  );
};

export default ChatBody;