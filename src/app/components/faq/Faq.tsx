import { faqDefaults } from "./defaults";
import { AccordionItem } from "./AccordionItem";
import type { FaqComponentProps } from "./types";

export const Faq = (props: FaqComponentProps) => {
  const { heading, description, questions, ...rest } = {
    ...faqDefaults,
    ...props,
  };

  return (
    <section id="faq" className="px-[5%] py-16 md:py-24 lg:py-28" {...rest}>
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16">
          <p className="mb-4 font-semibold text-primary md:mb-6">FAQ</p>
          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {questions?.map((question, index) => (
            <AccordionItem key={index} {...question} />
          ))}
        </div>
      </div>
    </section>
  );
};
