import { Bot } from "lucide-react";

const Typing = () => {
  return (
    <div className="message bot">

      <div className="avatar bot">
        <Bot size={20} />
      </div>

      <div className="message-content">

        <div
          style={{
            color: "#9aa8c3",
            fontSize: 13,
            marginBottom: 10,
          }}
        >
          EzeAI está escribiendo...
        </div>

        <div className="typing">
          <span />
          <span />
          <span />
        </div>

      </div>

    </div>
  );
};

export default Typing;