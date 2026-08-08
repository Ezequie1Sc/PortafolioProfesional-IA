import { useState } from "react";
import { chatService } from "../service/chat.service";

import type {
  ChatMessage,
  ChatIntent,
} from "../types/chat";

export const useChat = () => {

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createMessage = (
    role: "user" | "assistant",
    content: string,
    intent?: ChatIntent
  ): ChatMessage => ({

    id: crypto.randomUUID(),

    role,

    content,

    createdAt: new Date().toISOString(),

    intent,

  });

  const sendMessage = async (text: string) => {

    if (!text.trim()) return;

    setError(null);

    const userMessage = createMessage(
      "user",
      text
    );

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    try {

      setLoading(true);

      const response =
        await chatService.sendMessage({

          message: text,

        });

      const assistantMessage =
        createMessage(

          "assistant",

          response.response,

          response.intent

        );

      setMessages((prev) => [

        ...prev,

        assistantMessage,

      ]);

    } catch (error) {

      console.error(error);

      setError("Error al conectar con la IA.");

      setMessages((prev) => [

        ...prev,

        createMessage(

          "assistant",

          "Lo siento, ocurrió un error."

        ),

      ]);

    } finally {

      setLoading(false);

    }

  };

  const clearChat = () => {

    setMessages([]);

    setError(null);

  };

  return {

    messages,

    loading,

    error,

    sendMessage,

    clearChat,

  };

};