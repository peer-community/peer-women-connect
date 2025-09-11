import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden bg-cover bg-center bg-no-repeat lg:bg-none pt-20 md:pt-24 lg:pt-0"
      style={{
        backgroundImage: 'url(./lovable-uploads/cea9c662-5d5c-4d64-9ef9-2f5759c51908.png)'
      }}
    >
      {/* Background Shape - Desktop Only */}
      <div className="absolute inset-0 flex items-center justify-center lg:block hidden">
        <img 
          src="./lovable-uploads/b4416b20-b0f9-41ea-bd8c-31155331a509.png"
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
                <span className="text-foreground">Women's </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">wellbeing</span>
                <span className="text-foreground">, powered by </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">community</span>
              </>
            ) : (
              // Italian version
              <>
                <span className="text-foreground">La community della</span>
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  salute femminile
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