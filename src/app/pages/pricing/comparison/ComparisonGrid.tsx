import { ProductsHeader } from './ProductsHeader';
import { FeaturesList } from './FeaturesList';
import type { ComparisonProduct, ComparisonFeature } from './types';

type ComparisonGridProps = {
  products: ComparisonProduct[];
  features: ComparisonFeature[];
};

export const ComparisonGrid = ({ products, features }: ComparisonGridProps) => (
  <div className="overflow-hidden rounded-2xl border border-border bg-card backdrop-blur-sm">
    <div className="grid grid-cols-[1fr_1fr] border-b border-border sm:grid-cols-[1.75fr_1fr_1fr]">
      <div className="hidden h-full flex-col items-start justify-end p-6 sm:flex">
        <h3 className="text-xl font-bold">Features</h3>
      </div>
      <ProductsHeader products={products} />
    </div>
    <FeaturesList features={features} />
  </div>
);