import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-accent"></div>
            <span className="text-2xl font-light text-foreground">Peer</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#mission" className="text-muted-foreground hover:text-foreground transition-colors font-light">
              Mission
            </a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors font-light">
              Community
            </a>
            <a href="#b2b" className="text-muted-foreground hover:text-foreground transition-colors font-light">
              B2B Services
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="ghost" className="hidden md:flex font-light">
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
};