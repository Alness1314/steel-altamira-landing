import { useEffect, useState } from "react";
import { SiteHeader } from "./components/layout/SiteHeader";
import { LoadingSkeleton } from "./components/layout/LoadingSkeleton";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { landingContent } from "./data/landingContent";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = globalThis.setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => {
      globalThis.clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(74,144,226,0.2),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(138,201,255,0.1),transparent_18%),linear-gradient(180deg,#060b14_0%,#0a1320_42%,#08111b_100%)] text-stone-50">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[72px_72px] opacity-[0.08]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-184 bg-[url('/section_1.png')] bg-cover bg-center opacity-22 blur-2xl" />
      <div className="pointer-events-none absolute -left-56 top-20 h-80 w-80 rounded-full bg-sky-500/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-128 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />

      <SiteHeader
        brand={landingContent.brand}
        navigation={landingContent.navigation}
        cta={landingContent.hero.primaryAction}
      />

      <main className="relative w-full pb-14 pt-18 sm:pb-16 sm:pt-22 md:pt-0">
        <div className="mx-auto w-full max-w-355 px-4 sm:px-6 lg:px-8 2xl:max-w-420">
          <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">
            <HeroSection hero={landingContent.hero} />
            <ServicesSection services={landingContent.services} />
            <AboutSection about={landingContent.about} />
            <ProcessSection process={landingContent.process} />
            <ContactSection contact={landingContent.contact} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
