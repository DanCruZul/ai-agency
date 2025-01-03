import type { BenefitPoint } from './types';
import { CheckCircle } from 'lucide-react';

export const BenefitList = ({ benefits }: { benefits: BenefitPoint[] }) => (
  <div className="mt-8 grid gap-4 md:grid-cols-2">
    {benefits.map((benefit, index) => (
      <div key={index} className="flex items-start gap-3">
        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-indigo-600" />
        <div>
          <h3 className="font-semibold">{benefit.title}</h3>
          <p className="text-sm text-gray-600">{benefit.description}</p>
        </div>
      </div>
    ))}
  </div>
);