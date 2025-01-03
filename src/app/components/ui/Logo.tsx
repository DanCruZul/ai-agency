import { Cpu } from "lucide-react";
import { cn } from "@/utils/cn";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

const textSizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
};

export const Logo = ({ className, size = "md" }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <div
          className={cn(
            sizeClasses[size],
            "absolute inset-0 bg-primary/30 rounded-lg blur-[8px]"
          )}
        />
        <Cpu className={cn(sizeClasses[size], "relative z-10 ")} />
      </div>
      <span className={cn(textSizeClasses[size], "font-heading font-bold")}>
        AI Platform
      </span>
    </div>
  );
};
