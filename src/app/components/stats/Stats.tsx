import { statsDefaults } from "./defaults";
import { StatCard } from "./StatCard";
import type { StatsComponentProps } from "./types";

export const Stats = (props: StatsComponentProps) => {
  const { heading, stats } = {
    ...statsDefaults,
    ...props,
  };

  return (
    <section className="px-[5%] pb-16 md:pb-24 lg:pb-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
