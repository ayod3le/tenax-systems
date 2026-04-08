import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Abstract technology consulting"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          <p className="text-small font-medium text-accent-secondary mb-4 animate-fade-in opacity-0">
            Technology Consulting
          </p>

          <h1 className="text-display-sm md:text-display text-foreground mb-6 animate-fade-in-up opacity-0 delay-100 text-balance">
            Technology that works for your business
          </h1>

          <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in-up opacity-0 delay-200 text-balance">
            We help organisations build AI agents, modernise their workspace, and turn data into decisions. Practical solutions designed for real operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 delay-300">
            <Button size="lg" asChild>
              <a href="#contact">
                Start a conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#approach">Our approach</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
