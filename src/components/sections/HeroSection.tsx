import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden bg-cover bg-center bg-no-repeat lg:bg-none"
      style={{
        backgroundImage: 'url(/lovable-uploads/86d87104-9398-4f3b-aef7-646fc33a405c.png)'
      }}
    >
      {/* Background Shape - Desktop Only */}
      <div className="absolute inset-0 flex items-center justify-center lg:block hidden">
        <img 
          src="/lovable-uploads/b4416b20-b0f9-41ea-bd8c-31155331a509.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
            {t('nav.mission') === 'Mission' ? (
              // English version
              <>
                <span className="text-foreground">The first digital community dedicated to </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">reproductive health</span>
                <span className="text-foreground"> and </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">well-being</span>
              </>
            ) : (
              // Italian version
              <>
                <span className="text-foreground">La prima community digitale dedicata alla </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">salute</span>
                <span className="text-foreground"> e al</span>
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  benessere femminile
                </span>
              </>
            )}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};