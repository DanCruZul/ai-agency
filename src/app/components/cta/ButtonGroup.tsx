import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import type { ButtonProps } from "../ui/Button";

type ButtonGroupProps = {
  buttons: (ButtonProps & { title: string })[];
};

export const ButtonGroup = ({ buttons }: ButtonGroupProps) => {
  const navigate = useNavigate();

  const handlePricingClick = () => {
    navigate('/pricing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Button variant="gradient" onClick={handlePricingClick}>
        {buttons[0].title}
      </Button>
    </div>
  );
};