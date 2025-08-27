import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background Shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/b4936589-7821-4a15-a571-7ca14e16d227.png"
          alt="Abstract organic background shape"
          className="w-full h-full object-contain opacity-20 scale-150"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-foreground leading-tight">
            {t('hero.title')}
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};