import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
            <span className="text-2xl font-bold font-heading text-foreground">Peer</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Mission
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Community
            </button>
            <button 
              onClick={() => scrollToSection('b2b')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              B2B Services
            </button>
          </div>

          {/* CTA Button */}
          <Button variant="ghost" className="hidden md:flex">
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
};