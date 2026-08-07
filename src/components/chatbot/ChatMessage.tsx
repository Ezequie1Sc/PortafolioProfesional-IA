import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ChatMessage } from "../../types/chat";

interface Props {
  message: ChatMessage;
}

const ChatMessageItem = ({ message }: Props) => {
  const isUser = message.role === "user";

  return (
    <div className={`message ${isUser ? "user" : "bot"}`}>
      <div className={`avatar ${isUser ? "user" : "bot"}`}>
        {isUser ? <User size={20} /> : <Bot size={20} />}
      </div>

      <div className="message-content ai-message">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatMessageItem;