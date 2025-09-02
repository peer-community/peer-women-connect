import { useLanguage } from "@/contexts/LanguageContext";
import { Users, BookOpen, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const MissionSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20" style={{backgroundColor: '#FFE8B6'}}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
            {t('mission.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('mission.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-sm rounded-3xl" style={{borderBottomLeftRadius: '16px'}}>
            <CardContent className="text-center p-6">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {t('mission.community.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm first-letter:uppercase">
                {t('mission.community.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-sm rounded-3xl" style={{borderBottomLeftRadius: '16px'}}>
            <CardContent className="text-center p-6">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {t('mission.knowledge.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm first-letter:uppercase">
                {t('mission.knowledge.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-sm rounded-3xl" style={{borderBottomLeftRadius: '16px'}}>
            <CardContent className="text-center p-6">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {t('mission.ecosystem.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm first-letter:uppercase">
                {t('mission.ecosystem.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};