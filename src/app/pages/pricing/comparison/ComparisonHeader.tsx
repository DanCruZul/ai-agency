type ComparisonHeaderProps = {
  tagline: string;
  heading: string;
  description: string;
};

export const ComparisonHeader = ({ tagline, heading, description }: ComparisonHeaderProps) => (
  <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
    <p className="mb-3 font-semibold text-primary md:mb-4">{tagline}</p>
    <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
      {heading}
    </h2>
    <p className="text-lg text-muted-foreground">{description}</p>
  </div>
);