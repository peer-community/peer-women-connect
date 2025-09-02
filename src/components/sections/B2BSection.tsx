import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, FileText, Users, Building } from "lucide-react";

export const B2BSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20" style={{backgroundColor: '#FFE8B6'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-foreground">
              {t('b2b.title')}
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t('b2b.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border-0 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{borderBottomLeftRadius: '16px'}}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #C52344, #FF8574)'}}>
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <p className="text-base text-gray-800 leading-relaxed font-medium">
                {t('b2b.point1')}
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border-0 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{borderBottomLeftRadius: '16px'}}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #C52344, #FF8574)'}}>
                <FileText className="w-7 h-7 text-white" />
              </div>
              <p className="text-base text-gray-800 leading-relaxed font-medium">
                {t('b2b.point2')}
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border-0 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{borderBottomLeftRadius: '16px'}}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #C52344, #FF8574)'}}>
                <Users className="w-7 h-7 text-white" />
              </div>
              <p className="text-base text-gray-800 leading-relaxed font-medium">
                {t('b2b.point3')}
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border-0 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{borderBottomLeftRadius: '16px'}}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #C52344, #FF8574)'}}>
                <Building className="w-7 h-7 text-white" />
              </div>
              <p className="text-base text-gray-800 leading-relaxed font-medium">
                {t('b2b.point4')}
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 text-center border border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronta a investire nel futuro del tuo team?
            </h3>
            <a 
              href="mailto:hello@peer-community.com" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold transition-all duration-300 shadow-medium hover:shadow-strong text-base group"
            >
              {t('b2b.partner.title')}
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};