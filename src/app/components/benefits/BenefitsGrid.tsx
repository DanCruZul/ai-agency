"use client";
import { memo } from "react";
import { BenefitCard } from "./BenefitCard";
import type { BenefitCard as BenefitCardType } from "./types";

type BenefitsGridProps = {
  cards: BenefitCardType[];
};

export const BenefitsGrid = memo(({ cards }: BenefitsGridProps) => {
  return (
    <div className="grid auto-cols-fr gap-6 md:gap-8 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-2">
      {cards.map((card, index) => (
        <BenefitCard key={index} {...card} />
      ))}
    </div>
  );
});

BenefitsGrid.displayName = "BenefitsGrid";
