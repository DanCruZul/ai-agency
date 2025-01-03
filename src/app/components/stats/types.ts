export type StatsProps = {
  percentage: string;
  heading: string;
  description: string;
};

export type StatsContainerProps = {
  heading: string;
  stats: StatsProps[];
};

export type StatsComponentProps = React.ComponentPropsWithoutRef<"section"> & 
  Partial<StatsContainerProps>;