import { motion } from "framer-motion";
import { logoSources } from "@/components/logo/logoSources";

export const LogoSection = () => {
  const logos = Object.values(logoSources);

  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-10 w-full max-w-lg text-center text-lg font-semibold text-muted-foreground md:text-xl">
          Trusted by industry leaders worldwide
        </h2>
        <div className="relative">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

          {/* Logos grid */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 px-6">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl transition-all duration-500 group-hover:bg-primary/10" />
                <div className="relative flex h-12 w-24 items-center justify-center md:h-14 md:w-28">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto opacity-50 transition-all duration-300 hover:opacity-100 [filter:invert(1)]"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};