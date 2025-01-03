export const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
        <div className="absolute inset-2 animate-pulse rounded-full bg-primary/40" />
      </div>
    </div>
  );
};