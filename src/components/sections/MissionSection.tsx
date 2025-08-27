import { useLanguage } from "@/contexts/LanguageContext";
import { Groups, School, Business } from "@mui/icons-material";

export const MissionSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
            {t('mission.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('mission.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Groups sx={{ fontSize: 48, color: "#C52344" }} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {t('mission.community.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('mission.community.description')}
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <School sx={{ fontSize: 48, color: "#C52344" }} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {t('mission.knowledge.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('mission.knowledge.description')}
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Business sx={{ fontSize: 48, color: "#C52344" }} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {t('mission.ecosystem.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('mission.ecosystem.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};