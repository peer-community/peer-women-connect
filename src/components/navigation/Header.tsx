import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export const Header = () => {
  const { t } = useLanguage();
  
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
            <img src="/lovable-uploads/dbfeddee-06d3-46dd-bdee-d0acd32bb946.png" alt="Peer Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold font-heading text-foreground">Peer</span>
          </div>

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
            <Button variant="ghost" className="hidden md:flex">
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};