import type { LogoProps } from "./types";
import { logoSources } from "./logoSources";

export const logoDefaults: LogoProps = {
  heading: "Trusted by industry leaders worldwide",
  logos: Object.values(logoSources),
};
