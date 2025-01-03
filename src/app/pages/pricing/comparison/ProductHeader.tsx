import { cn } from '@/utils/cn';
import type { ComparisonProduct } from './types';

type ProductHeaderProps = {
  product: ComparisonProduct;
  index: number;
};

export const ProductHeader = ({ product, index }: ProductHeaderProps) => {
  const Icon = product.logo.icon;
  
  return (
    <div className={cn(
      "flex h-full flex-col justify-between p-4 sm:p-6",
      index === 0 && "bg-primary/5"
    )}>
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="rounded-xl bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-bold">{product.name}</h3>
      </div>
    </div>
  );
};