import { useLanguage } from "@/contexts/LanguageContext";

export const MissionSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-foreground">
              {t('mission.title')}
            </h2>
            
            <div className="prose prose-lg md:prose-xl max-w-none text-foreground/80 leading-relaxed">
              <p className="mb-6">
                {t('mission.intro')}
              </p>
              
              <p className="mb-6 text-xl font-medium text-primary">
                {t('mission.dedication')}
              </p>
              
              <p className="mb-4">
                {t('mission.scope')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};