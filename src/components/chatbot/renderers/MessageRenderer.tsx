import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {message.content}
      </ReactMarkdown>

      {Card && <Card />}
    </>
  );
};

export default MessageRenderer;