import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Lightbulb, Users, Building } from "lucide-react";

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
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                {t('b2b.box1.title')}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed text-center">
                {t('b2b.box1.text')}
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border-0 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{borderBottomLeftRadius: '16px'}}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #C52344, #FF8574)'}}>
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                {t('b2b.box2.title')}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed text-center">
                {t('b2b.box2.text')}
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border-0 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{borderBottomLeftRadius: '16px'}}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #C52344, #FF8574)'}}>
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                {t('b2b.box3.title')}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed text-center">
                {t('b2b.box3.text')}
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border-0 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{borderBottomLeftRadius: '16px'}}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #C52344, #FF8574)'}}>
                <Building className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                {t('b2b.box4.title')}
              </h3>
              <p className="text-base text-gray-800 leading-relaxed text-center">
                {t('b2b.box4.text')}
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-6">
              {t('b2b.cta.question')}
            </p>
            <a 
              href="mailto:hello@peer-community.com" 
              className="inline-flex items-center justify-center text-primary hover:text-primary/80 font-semibold transition-all duration-300 text-lg group story-link"
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