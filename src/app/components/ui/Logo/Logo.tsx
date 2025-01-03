import { Cpu } from "lucide-react";
import { cn } from "@/utils/cn";
import { LogoProps, SizeConfig } from "./types";

const sizeConfig: SizeConfig = {
  sm: {
    icon: "h-5 w-5",
    text: "text-lg"
  },
  md: {
    icon: "h-6 w-6",
    text: "text-xl"
  },
  lg: {
    icon: "h-8 w-8",
    text: "text-2xl"
  }
};

export const Logo = ({ className, size = "md" }: LogoProps) => {
  const { icon, text } = sizeConfig[size];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <div className={cn(icon, "absolute inset-0 bg-primary/30 rounded-lg blur-[8px]")} />
        <Cpu className={cn(icon, "relative z-10")} />
      </div>
      <span className={cn(text, "font-heading font-bold")}>
        AI Platform
      </span>
    </div>
  );
};