import { testimonialsDefaults } from "./defaults";
import { TestimonialCard } from "./TestimonialCard";
import type { TestimonialsComponentProps } from "./types";

export const Testimonials = (props: TestimonialsComponentProps) => {
  const { heading, description, testimonials, ...rest } = {
    ...testimonialsDefaults,
    ...props,
  };

  return (
    <section
      id="testimonials"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      {...rest}
    >
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-4 font-semibold text-primary md:mb-6">
            Testimonials
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
