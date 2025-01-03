import { comparisonDefaults } from './defaults';
import { ComparisonHeader } from './ComparisonHeader';
import { ComparisonGrid } from './ComparisonGrid';
import type { ComparisonProps } from './types';

export const Comparison = (props: Partial<ComparisonProps>) => {
  const { tagline, heading, description, products, features } = {
    ...comparisonDefaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <ComparisonHeader 
          tagline={tagline} 
          heading={heading} 
          description={description} 
        />
        <div className="mx-auto max-w-4xl">
          <ComparisonGrid 
            products={products} 
            features={features} 
          />
        </div>
      </div>
    </section>
  );
};