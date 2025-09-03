import { ArrowDown } from "lucide-react";
import React, { useEffect, useState } from "react";

const HeroSections = () => {
  const [hideScroll, setHideScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Ayush
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Kumar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in-delay-3">
            I design and develop modern web applications with a focus on
            performance and user experience. Passionate about front-end
            development, I build interfaces that are intuitive, responsive, and
            visually engaging.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 animate-bounce ${
          hideScroll ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSections;
