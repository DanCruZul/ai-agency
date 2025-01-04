import { ctaDefaults } from "./defaults";
import { AnimatedText } from "./AnimatedText";
import { ButtonGroup } from "./ButtonGroup";
import { TrialFeatures } from "./TrialFeatures";
import type { CtaComponentProps } from "./types";

export const Cta = (props: CtaComponentProps) => {
  const { headers, description, benefits, buttons, trial, ...rest } = {
    ...ctaDefaults,
    ...props,
  };

  return (
    <section
      id="cta"
      className="relative px-[5%] py-16 md:py-24 lg:py-28"
      {...rest}
    >
      {/* Background gradient */}

      <div className="container relative mx-auto">
        <div className="mx-auto w-full max-w-4xl">
          <div className="rounded-2xl bg-card text-card-foreground border border-border p-8 shadow-xl md:p-12 lg:p-16 backdrop-blur-sm">
            <div className="mx-auto w-full max-w-3xl text-center">
              <p className="mb-4 font-semibold text-primary md:mb-6">
                Get Started
              </p>
              <h2 className="relative">
                {headers.map((heading, index) => (
                  <AnimatedText key={index} text={heading} index={index} />
                ))}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
                {description}
              </p>

              <div className="mt-12 grid gap-8 md:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-6 text-left shadow-sm border border-border"
                  >
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-card px-4 text-sm text-gray-400">
                    Free Trial Benefits
                  </span>
                </div>
              </div>

              <TrialFeatures {...trial} />

              <ButtonGroup buttons={buttons} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
