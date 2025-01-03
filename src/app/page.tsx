import { Hero } from "@/components/sections/hero/Hero";
import { Logo } from "@/components/sections/logo/Logo";
import { Solutions } from "@/components/sections/solutions/Solutions";
import { Layout } from "@/components/sections/features/Layout";
import { Stats } from "@/components/sections/stats/Stats";
import { Benefits } from "@/components/sections/benefits/Benefits";
import { Layout486 } from "@/components/sections/howitworks/Layout486";
import { Testimonials } from "@/components/sections/testimonials/Testimonials";
import { Faq } from "@/components/sections/faq/Faq";
import { Cta } from "@/components/sections/cta/Cta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Logo />
      <Layout />
      <Solutions />
      <Stats />
      <Benefits />
      <Layout486 />
      <Testimonials />
      <Faq />
      <Cta />
    </main>
  );
}