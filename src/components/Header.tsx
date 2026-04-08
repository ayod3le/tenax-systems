import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-wide">
        <nav className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Tenax Systems" style={{ height: '40px', width: 'auto', display: 'block' }} />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-small text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#approach"
              className="text-small text-muted-foreground hover:text-foreground transition-colors"
            >
              Approach
            </a>
            <a
              href="#why-tenax"
              className="text-small text-muted-foreground hover:text-foreground transition-colors"
            >
              Why Tenax Systems
            </a>
          </div>

          <Button variant="default" size="sm" asChild>
            <a href="#contact">Book Consultation</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
