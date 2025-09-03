import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { Link, useLocation } from "react-router-dom";
import { PeerLogo } from "@/components/ui/PeerLogo";
import { PeerLogotype } from "@/components/ui/PeerLogotype";

export const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // If on homepage, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {location.pathname === "/" ? (
            <button 
              onClick={handleLogoClick}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <PeerLogo className="w-8 h-8" />
              <PeerLogotype className="h-8" />
            </button>
          ) : (
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <PeerLogo className="w-8 h-8" />
              <PeerLogotype className="h-8" />
            </Link>
          )}

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {t('nav.mission')}
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {t('nav.community')}
            </button>
            <button 
              onClick={() => scrollToSection('b2b')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {t('nav.b2b')}
            </button>
          </div>

          {/* Language Toggle and CTA Button */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <Button 
              variant="ghost" 
              className="hidden md:flex"
              onClick={() => scrollToSection('contact')}
            >
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};