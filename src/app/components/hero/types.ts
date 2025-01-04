export type ImageProps = {
  src: string;
  alt?: string;
};

export type ButtonProps = {
  title: string;
  variant?: "primary" | "secondary";
};

export type HeroProps = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type HeroContentProps = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};
