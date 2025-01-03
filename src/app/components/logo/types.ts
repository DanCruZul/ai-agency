export type ImageProps = {
  src: string;
  alt?: string;
};

export type LogoProps = {
  heading: string;
  logos: ImageProps[];
};

export type Logo1Props = React.ComponentPropsWithoutRef<"section"> & Partial<LogoProps>;