import { benefitsDefaults } from "./defaults";
import { BenefitCard } from "./BenefitCard";
import type { BenefitsComponentProps } from "./types";

export const Benefits = (props: BenefitsComponentProps) => {
  const { tagline, heading, description, cards, className, ...rest } = {
    ...benefitsDefaults,
    ...props,
  };

  return (
    <section
      id="benefits"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      {...rest}
    >
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-4 font-semibold text-primary md:mb-6">{tagline}</p>
          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="text-lg text-gray-400 md:text-xl">{description}</p>
        </div>
        <div className="grid auto-cols-fr gap-6 md:gap-8 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-2">
          {cards.map((card, index) => (
            <BenefitCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
