import Image from "next/image";
import type { ImageProps } from "./types";

export const LogoImage = ({ src, alt = "Logo" }: ImageProps) => (
  <div className="relative flex h-16 w-full max-w-[120px] items-center justify-center transition-transform duration-300 hover:scale-110 md:h-20 md:max-w-[140px]">
    <Image
      src={src}
      alt={alt}
      width={120} // Set the width of the image
      height={60} // Set the height of the image
      className="h-8 w-auto opacity-50 transition-all duration-300 hover:opacity-100 [filter:invert(1)] md:h-10"
      loading="lazy"
    />
  </div>
);
