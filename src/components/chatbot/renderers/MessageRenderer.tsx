import ReactMarkdown from "react-markdown";

import ProfileCard from "../cards/ProfileCard/ProfileCard";
import GithubCard from "../cards/GithubCard/GithubCard";
import SkillsCard from "../cards/SkillsCard/SkillsCard";

import type { ChatMessage } from "../../../types/chat";

interface Props {

    message: ChatMessage;

}

const MessageRenderer = ({ message }: Props) => {

    const text = message.content.toLowerCase();

    const showGithub =
        text.includes("github");

    const showSkills =
        text.includes("habilidades") ||
        text.includes("tecnologías") ||
        text.includes("tecnologias") ||
        text.includes("stack");

    const showProfile =
        text.includes("desarrollador") ||
        text.includes("ingeniería") ||
        text.includes("ingeniería") ||
        text.includes("perfil") ||
        text.includes("ezequiel salazar");

    return (

        <>

            <ReactMarkdown>

                {message.content}

            </ReactMarkdown>

            {showProfile && (

                <ProfileCard />

            )}

            {showGithub && (

                <GithubCard />

            )}

            {showSkills && (

                <SkillsCard />

            )}

        </>

    );

};

export default MessageRenderer;