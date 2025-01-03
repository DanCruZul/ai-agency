import React from "react";
import { cn } from "@/app/utils/cn";
import { LucideIcon } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link" | "gradient";
  title?: string;
  iconRight?: LucideIcon;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "gradient",
      title,
      iconRight: IconRight,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center text-base font-medium transition-all",
          // Gradient variant (default)
          variant === "gradient" && [
            "min-h-[44px] min-w-[120px] cursor-pointer px-6 py-3.5",
            "bg-[linear-gradient(325deg,#000000_0%,#6633ee_55%,#000000_90%)]",
            "bg-[length:280%_auto] bg-[0%_0%] text-white",
            "rounded-lg shadow-[0px_0px_20px_rgba(102,51,238,0.5),0px_5px_5px_-1px_rgba(102,51,238,0.25),inset_4px_4px_8px_rgba(147,112,219,0.5),inset_-4px_-4px_8px_rgba(76,38,178,0.35)]",
            "hover:bg-[100%_0%] transition-[background-position] duration-800 ease-linear",
            "focus:outline-none focus:ring-4 focus:ring-[#6633ee] focus:ring-offset-2 focus:ring-offset-background",
            "active:outline-none active:ring-4 active:ring-[#6633ee] active:ring-offset-2 active:ring-offset-background",
            "motion-reduce:transition-none",
          ],
          // Secondary variant
          variant === "secondary" && [
            "min-h-[44px] min-w-[120px] cursor-pointer px-6 py-3.5",
            "bg-secondary/10 text-secondary-foreground",
            "rounded-lg border border-secondary/20",
            "hover:bg-secondary/20 transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-secondary/50",
          ],
          // Link variant
          variant === "link" && [
            "text-primary hover:text-primary/80",
            "underline-offset-4 hover:underline",
            "transition-colors duration-200",
          ],
          className
        )}
        {...props}
      >
        {title || children}
        {IconRight && <IconRight className="ml-2 h-5 w-5" />}
      </button>
    );
  }
);
