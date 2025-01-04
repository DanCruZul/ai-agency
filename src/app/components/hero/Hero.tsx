import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import type { HeroProps } from "./types";
import { heroDefaults } from "./defaults";

export const Hero = (props: Partial<HeroProps>) => {
  const { heading, description, buttons, image } = {
    ...heroDefaults,
    ...props,
  };

  return (
    <section className="2xl:mx-[2%] relative py-16 md:py-24 lg:py-28 before:inset-0 before:bg-[radial-gradient(120%_120%_at_50%_0%,transparent_40%,#6633ee_70%,#ffffff_100%)] before:-z-50 before:absolute before:w-full before:top-0 before:left-1/2 before:-translate-x-1/2 before:rounded-3xl">
      <div className="mx-[5%]">
        <div className="flex flex-col items-center">
          <HeroContent
            heading={heading}
            description={description}
            buttons={buttons}
          />
          <HeroImage {...image} />
        </div>
      </div>
    </section>
  );
};
