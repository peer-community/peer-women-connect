import { useLanguage } from "@/contexts/LanguageContext";
import { SentimentDissatisfied, Warning, TrendingDown } from "@mui/icons-material";

export const ContextSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20" style={{backgroundColor: '#FFF8E4'}}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
            {t('context.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('context.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <SentimentDissatisfied sx={{ fontSize: 48, color: "#C52344" }} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {t('context.loneliness.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('context.loneliness.description')}
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Warning sx={{ fontSize: 48, color: "#C52344" }} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {t('context.unreliable.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('context.unreliable.description')}
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <TrendingDown sx={{ fontSize: 48, color: "#C52344" }} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {t('context.career.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('context.career.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};