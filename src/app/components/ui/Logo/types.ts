export type LogoSize = "sm" | "md" | "lg";

export type SizeConfig = {
  [key in LogoSize]: {
    icon: string;
    text: string;
  };
};

export type LogoProps = {
  className?: string;
  size?: LogoSize;
};