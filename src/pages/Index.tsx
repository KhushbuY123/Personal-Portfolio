import { useEffect, useState } from "react";
import { BootLoader } from "@/components/BootLoader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stack } from "@/components/sections/Stack";
import { Work } from "@/components/sections/Work";
import { Projects } from "@/components/sections/Projects";
import { GitHub } from "@/components/sections/GitHub";
import { Freelance } from "@/components/sections/Freelance";
import { Quote } from "@/components/sections/Quote";

import { Terminal } from "@/components/sections/Terminal";
import { Contact, Footer } from "@/components/sections/Contact";
import { Recommendations } from "@/components/sections/Recommendations";
import { Likes } from "@/components/sections/Likes";
import { ScrollToTop } from "@/components/ScrollToTop";

const BOOT_KEY = "khushbu_booted";

const Index = () => {
  const [booted, setBooted] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(BOOT_KEY) === "1";
  });

  // lock scroll while booting
  useEffect(() => {
    document.body.style.overflow = booted ? "" : "hidden";
  }, [booted]);

  const handleBooted = () => {
    sessionStorage.setItem(BOOT_KEY, "1");
    setBooted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!booted && <BootLoader onDone={handleBooted} />}

      <div className={booted ? "animate-fade-in-slow" : "opacity-0"}>
        <Navbar />
        <main>
          <Hero />
          <Stack />
          <Work />
          <Projects />
          <GitHub />
          <Freelance />
          <Quote />
          <Recommendations />
          <Terminal />
          <Likes />
          <Contact />
        </main>
        <Footer />
      </div>
      {booted && <ScrollToTop />}
    </div>
  );
};

export default Index;
