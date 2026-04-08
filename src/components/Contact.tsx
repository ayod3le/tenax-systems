import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="section-spacing">
      <div className="container-narrow text-center">
        <p className="text-small font-medium text-accent-secondary mb-3">Get started</p>
        <h2 className="text-display-sm text-foreground mb-6 text-balance">
          Ready to modernise your operations?
        </h2>
        <p className="text-body-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Book a consultation to discuss your challenges and explore how the right technology can help your team work smarter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="mailto:hello@tenaxsystems.ai">
              <Mail className="mr-2 h-4 w-4" />
              Book a consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <p className="text-small text-muted-foreground mt-8">
          Or email us directly at{" "}
          <a href="mailto:hello@tenaxsystems.ai" className="hover:underline text-muted-foreground">
            hello@tenaxsystems.ai
          </a>
        </p>
      </div>
    </section>;
};
export default Contact;
