import { Check } from "lucide-react";
const differentiators = ["Deep expertise across AI, cloud infrastructure, and data analytics", "Experience working with teams in regulated and complex environments", "Focus on operational outcomes over technology showcases", "Transparent communication and realistic timelines", "Long-term commitment. We stay engaged after delivery"];
const WhyTenax = () => {
  return <section id="why-tenax" className="section-spacing bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <p className="font-medium text-accent-secondary mb-3 text-display-sm">
              Why Tenax Systems
            </p>
            <h2 className="mb-6 text-display-sm font-extralight">
              Technology partners who understand operations
            </h2>
            <p className="text-body-lg opacity-80 mb-6">
              We work with teams who need technology that fits their business, not the other way around. From AI agents to workspace tools to analytics, we bring clarity to complex decisions.
            </p>
            <p className="text-body opacity-80 mb-8">
              Our approach is grounded in understanding your constraints first. We design solutions that your team can adopt, operate, and extend over time.
            </p>

            <ul className="space-y-4">
              {differentiators.map((item, index) => <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent-secondary" />
                  </div>
                  <span className="text-body opacity-90">{item}</span>
                </li>)}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/10">
              <h3 className="text-subheading mb-4">How we work</h3>
              <p className="text-body opacity-80 mb-4">
                Every engagement begins with understanding your operational context. What problems need solving? What tools does your team already use? What does success look like?
              </p>
              <p className="text-body opacity-80 mb-4">
                We build incrementally, with clear checkpoints and honest assessments. If something is not working, we say so early.
              </p>
              <p className="text-body opacity-80">
                The goal is a solution your team can own, operate, and extend. Not a dependency that requires us to stay forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyTenax;
