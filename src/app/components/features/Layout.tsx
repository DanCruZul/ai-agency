import { FeatureSection } from "./FeatureSection";
import type { LayoutSectionProps } from "./types";
import { layoutDefaults } from "./defaults";
import Robot from "./Robot";

export const Layout = (props: LayoutSectionProps) => {
  const {
    tagline,
    heading,
    description,
    leftSections,
    rightSections,
    ...rest
  } = {
    ...layoutDefaults,
    ...props,
  };

  return (
    <section
      id="features"
      className="relative px-[5%] py-16 md:py-24 lg:py-28"
      {...rest}
    >
      <div className="container relative mx-auto">
        {/* 3D Background */}
        <div className="absolute max-lg:hidden inset-0 before:absolute before:inset-0 after:absolute after:inset-0">
          <div className="absolute inset-0 flex items-end justify-center ">
            <div className="lg:size-full lg:pt-40 xl:pt-20 2xl:pt-40">
              <Robot />
            </div>
          </div>
        </div>
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-semibold text-primary md:mb-6">{tagline}</p>
            <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl line-clamp-4">
              {heading}
            </h2>
            <p className="text-lg text-gray-400 md:text-xl">{description}</p>
          </div>
        </div>
        <div className="relative grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <FeatureSection sections={leftSections} />
          <div className="relative max-lg:hidden order-last h-[500px] w-full opacity-0 sm:col-span-2 lg:order-none lg:col-span-1">
            <Robot />
          </div>
          <FeatureSection sections={rightSections} />
        </div>
      </div>
    </section>
  );
};
