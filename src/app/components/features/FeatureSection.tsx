import type { SectionProps } from "./types";

export const FeatureSection = ({ sections }: { sections: SectionProps[] }) => (
  <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
    {sections.map((section, index) => {
      const Icon = section.icon.icon;
      return (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="mb-5 bg-[linear-gradient(325deg,#000000_0%,#6633ee_55%,#000000_90%)] flex items-center p-3 rounded-full gap-4 md:mb-6">
            <Icon className="size-8 text-white" />
          </div>
          <h3 className="mb-3 text-xl font-bold leading-tight md:mb-4 md:text-2xl">
            {section.heading}
          </h3>
          <p className="text-gray-400">{section.description}</p>
        </div>
      );
    })}
  </div>
);
