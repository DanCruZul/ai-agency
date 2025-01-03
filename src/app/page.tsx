import { Hero } from "@/app/components/hero/Hero";
import { Logo } from "@/app/components/logo/Logo";
import { Solutions } from "@/app/components/solutions/Solutions";
import { Layout } from "@/app/components/features/Layout";
import { Stats } from "@/app/components/stats/Stats";
import { Benefits } from "@/app/components/benefits/Benefits";
import { Layout486 } from "@/app/components/howitworks/Layout486";
import { Testimonials } from "@/app/components/testimonials/Testimonials";
import { Faq } from "@/app/components/faq/Faq";
import { Cta } from "@/app/components/cta/Cta";

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
