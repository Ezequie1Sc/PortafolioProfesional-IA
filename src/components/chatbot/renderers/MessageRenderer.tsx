import ProfileCard from "../cards/ProfileCard/ProfileCard";
import GithubCard from "../cards/GithubCard/GithubCard";
import SkillsCard from "../cards/SkillsCard/SkillsCard";

import type { ChatMessage } from "../../../types/chat";

interface Props {
  message: ChatMessage;
}

const cardRegistry = {
  profile: ProfileCard,
  github: GithubCard,
  skill: SkillsCard,
} as const;

const MessageRenderer = ({ message }: Props) => {

  const Card =
    message.intent &&
    message.intent in cardRegistry
      ? cardRegistry[
          message.intent as keyof typeof cardRegistry
        ]
      : null;

  return (
    <>
      {/* ======================================
          RESPUESTA DE LA IA
      ====================================== */}

      <div className="message-text">
        {message.content}
      </div>


      {/* ======================================
          CARD
      ====================================== */}

      {Card && <Card />}

    </>
  );
};

export default MessageRenderer;