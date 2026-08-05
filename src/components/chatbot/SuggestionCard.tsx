interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  prompt: string;
  onClick: (prompt: string) => void;
}

const SuggestionCard = ({
  icon,
  title,
  description,
  prompt,
  onClick,
}: Props) => {
  return (
    <button className="suggestion-card" onClick={() => onClick(prompt)}>
      {icon}
      <h3 className="suggestion-title">{title}</h3>
      <p className="suggestion-description">{description}</p>
    </button>
  );
};

export default SuggestionCard;