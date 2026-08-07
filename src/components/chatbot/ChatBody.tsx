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

  return (
    <section
      ref={containerRef}
      className={`chat-body ${
        messages.length === 0 ? "empty" : "has-messages"
      }`}
    >
      {messages.length === 0 ? (
        <EmptyState
          onSuggestionClick={onSuggestionClick}
        />
      ) : (
        <>
          {messages.map((message) => (
            <ChatMessageItem
              key={message.id}
              message={message}
            />
          ))}

          {loading && <Typing />}

          <div ref={bottomRef} />

          {showScrollButton && (
            <ScrollButton
              onClick={scrollToBottom}
            />
          )}
        </>
      )}
    </section>
  );
};

export default ChatBody;