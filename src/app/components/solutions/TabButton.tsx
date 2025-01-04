"use client";
import { memo } from "react";
import type { LucideIcon } from "lucide-react";

type TabButtonProps = {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const TabButton = memo(
  ({ icon: Icon, label, isActive, onClick }: TabButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200 ${
          isActive
            ? "border-primary bg-primary/10 text-primary"
            : "border-border text-white hover:bg-primary/5"
        }`}
      >
        <Icon
          className={`h-5 w-5 ${
            isActive ? "text-primary" : "text-muted-foreground"
          }`}
        />
        <span className="font-medium">{label}</span>
      </button>
    );
  }
);

TabButton.displayName = "TabButton";
