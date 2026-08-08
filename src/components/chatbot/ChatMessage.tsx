import { Bot, User } from "lucide-react";
import type { ChatMessage } from "../../types/chat";

import MessageRenderer from "./renderers/MessageRenderer";

interface Props {
  message: ChatMessage;
}

const ChatMessageItem = ({ message }: Props) => {

  const isUser = message.role === "user";

  return (

    <div className={`message ${isUser ? "user" : "bot"}`}>

      <div className={`avatar ${isUser ? "user" : "bot"}`}>

        {isUser ? <User size={18}/> : <Bot size={18}/>}

      </div>

      <div className="message-content ai-message">

        <MessageRenderer

          message={message}

        />

      </div>

    </div>

  );

};

export default ChatMessageItem;