"use client";
import { memo } from "react";
import { Button } from "../ui/Button";
import type { BenefitCard as BenefitCardType } from "./types";
import Image from "next/image";
import { motion } from "framer-motion";

export const BenefitCard = memo(
  ({ tagline, image, heading, description, button }: BenefitCardType) => {
    const IconRight = button.iconRight;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.3 }}
        className="grid auto-cols-fr grid-cols-1 rounded-2xl bg-card text-card-foreground border border-border last:row-span-2 last:flex last:flex-col sm:grid-cols-2 lg:col-span-2 lg:last:col-span-1 overflow-hidden backdrop-blur-sm"
      >
        <div className="flex h-64 w-full sm:h-full">
          <Image
            src={image.src}
            alt={image.alt ?? "Default alt text"}
            width={500}
            height={300}
            className="h-full w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
        <div className="block p-8 last:flex-1 sm:flex sm:flex-col sm:justify-center">
          <div>
            <p className="mb-2 font-semibold text-sm text-primary">{tagline}</p>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-foreground">
              {heading}
            </h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="mt-6 md:mt-8">
            <Button {...button} iconRight={IconRight}>
              {button.title}
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }
);

BenefitCard.displayName = "BenefitCard";
