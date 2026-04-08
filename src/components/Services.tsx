import { Bot, Monitor, BarChart3 } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const services = [{
  icon: Bot,
  title: "Building AI Agents",
  description: "Custom AI agents that automate complex tasks, integrate with your existing tools, and operate reliably in production environments with proper monitoring and guardrails."
}, {
  icon: Monitor,
  title: "Modern Workplace",
  description: "Transform how your team works with modern collaboration tools, cloud infrastructure, and streamlined digital workflows that reduce friction and increase productivity."
}, {
  icon: BarChart3,
  title: "Business Intelligence",
  description: "Turn your data into clear, actionable insights. We build dashboards, reporting pipelines, and analytics systems that help you make better decisions faster."
}];

const Services = () => {
  return <section id="services" className="section-spacing bg-secondary/30">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <p className="font-medium mb-3 text-foreground text-display-sm">
            Services
          </p>
          <h2 className="text-display-sm text-foreground mb-4 font-extralight">
            Technology that delivers results
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Practical consulting across AI, workspace modernisation, and data analytics. Solutions built for your constraints, not ours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="group relative p-6 lg:p-8 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-300" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <GlowingEffect 
                blur={0} 
                borderWidth={1} 
                spread={40} 
                glow={true} 
                disabled={false} 
                proximity={80} 
                inactiveZone={0.01} 
              />
              <div className="w-12 h-12 rounded-lg bg-accent-secondary/20 flex items-center justify-center mb-5 border border-accent-secondary/30">
                <service.icon className="w-6 h-6 text-accent-secondary" strokeWidth={1.5} />
              </div>
              <h3 className="text-heading mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>;
};

export default Services;
