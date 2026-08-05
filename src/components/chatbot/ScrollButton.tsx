import { ArrowDown } from "lucide-react";

interface Props {
  onClick: () => void;
}

const ScrollButton = ({
  onClick,
}: Props) => {
  return (
    <button
      className="scroll-button"
      onClick={onClick}
      title="Ir al final"
    >
      <ArrowDown size={22} />
    </button>
  );
};

export default ScrollButton;