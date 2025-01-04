"use client";
import { memo } from "react";
import { benefitsDefaults } from "./defaults";
import { BenefitsHeader } from "./BenfitsHeader";
import { BenefitsGrid } from "./BenefitsGrid";
import type { BenefitsComponentProps } from "./types";

export const Benefits = memo((props: BenefitsComponentProps) => {
  const { tagline, heading, description, cards, ...rest } = {
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
        <BenefitsHeader
          tagline={tagline}
          heading={heading}
          description={description}
        />
        <BenefitsGrid cards={cards} />
      </div>
    </section>
  );
});

Benefits.displayName = "Benefits";
