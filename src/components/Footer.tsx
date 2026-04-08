const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left gap-6">
          {/* Brand & Legal */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-body font-semibold text-foreground">
              Tenax Systems
            </span>
            <span className="text-small text-muted-foreground">
              Tenax Systems Ltd
            </span>
          </div>

          {/* Contact & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="mailto:hello@tenaxsystems.ai"
              className="text-small text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@tenaxsystems.ai
            </a>
            <span className="text-small text-muted-foreground">
              © {currentYear} All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
