import { useEffect, useState } from "react";
import { BootLoader } from "@/components/BootLoader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stack } from "@/components/sections/Stack";
import { Work } from "@/components/sections/Work";
import { Projects } from "@/components/sections/Projects";
import { GitHub } from "@/components/sections/GitHub";
import { Writing } from "@/components/sections/Writing";
import { Terminal } from "@/components/sections/Terminal";
import { Contact, Footer } from "@/components/sections/Contact";

const Index = () => {
  const [booted, setBooted] = useState(false);

  // lock scroll while booting
  useEffect(() => {
    document.body.style.overflow = booted ? "" : "hidden";
  }, [booted]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!booted && <BootLoader onDone={() => setBooted(true)} />}

      <div className={booted ? "animate-fade-in-slow" : "opacity-0"}>
        <Navbar />
        <main>
          <Hero />
          <Stack />
          <Work />
          <Projects />
          <Writing />
          <Terminal />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
