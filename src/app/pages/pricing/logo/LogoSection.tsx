import { LogoGrid } from "./LogoGrid";
import { logoSources } from "@/components/logo/logoSources";

export const LogoSection = () => {
  const logos = Object.values(logoSources);

  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-10 w-full max-w-lg text-center text-lg font-semibold text-muted-foreground md:text-xl">
          Trusted by industry leaders worldwide
        </h2>
        <LogoGrid logos={logos} />
      </div>
    </section>
  );
};