"use client"; // Mark this component as a Client Component

import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";
import type { ButtonProps } from "../ui/Button";

type ButtonGroupProps = {
  buttons: (ButtonProps & { title: string })[];
};

export const ButtonGroup = ({ buttons }: ButtonGroupProps) => {
  const router = useRouter();

  const handlePricingClick = () => {
    router.push("/pricing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Button variant="gradient" onClick={handlePricingClick}>
        {buttons[0].title}
      </Button>
    </div>
  );
};
