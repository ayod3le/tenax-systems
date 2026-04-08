const principles = [{
  number: "01",
  title: "Understand before building",
  description: "We start with your operational context, constraints, and goals. Every recommendation is grounded in what your team actually needs, not what looks good in a slide deck."
}, {
  number: "02",
  title: "Practical over theoretical",
  description: "We focus on solutions that work in your environment with your people. Technology choices are driven by fit, not trends."
}, {
  number: "03",
  title: "Measurable outcomes",
  description: "Every engagement has clear success criteria. We track impact on efficiency, cost, and decision quality so you know exactly what you are getting."
}, {
  number: "04",
  title: "Built to evolve",
  description: "Business needs shift. Tools improve. Regulations change. We design systems that adapt without requiring a complete rebuild."
}];
const Approach = () => {
  return <section id="approach" className="section-spacing">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="font-medium mb-3 text-foreground text-display-sm">
              Our approach
            </p>
            <h2 className="text-display-sm text-foreground mb-6 font-extralight">
              Consulting that delivers
            </h2>
            <p className="text-body-lg text-muted-foreground mb-6">
              Most technology projects fail not because the tools are wrong, but
              because they were chosen without understanding the problem.
            </p>
            <p className="text-body text-muted-foreground">
              We take a different approach. Every engagement starts with
              understanding your operational context, constraints, and what
              success actually looks like for your team.
            </p>
          </div>

          <div className="space-y-8">
            {principles.map(principle => <div key={principle.number} className="flex gap-4 md:gap-5 group">
                <span className="text-lg md:text-xl font-bold text-accent-secondary shrink-0 tabular-nums">
                  {principle.number}
                </span>
                <div>
                  <h3 className="text-subheading text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Approach;
