import { Check } from "lucide-react";

type TrialFeaturesProps = {
  duration: string;
  features: string[];
};

export const TrialFeatures = ({ duration, features }: TrialFeaturesProps) => (
  <div className="mt-8">
    <h3 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
      Start your {duration} free trial and get
    </h3>
    <div className="mx-auto max-w-2xl">
      <ul className="grid gap-3 text-left">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center border p-2 rounded-xl border-border gap-2"
          >
            <div className="mt-1 rounded-full bg-primary/20 p-1 text-primary">
              <Check className="h-4 w-4" />
            </div>
            <span className="text-white">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
