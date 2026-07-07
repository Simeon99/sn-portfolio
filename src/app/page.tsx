import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { ZoomText } from "@/components/zoom-text";
import { BrandStatement } from "@/components/brand-statement";
import { PriorityFeatures } from "@/components/priority-features";
import { SelectedWork } from "@/components/selected-work";
import { ServicesList } from "@/components/services-list";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Stats />
        <ZoomText />
        <BrandStatement />
        <PriorityFeatures />
        <SelectedWork />
        <ServicesList />
        <Pricing />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
