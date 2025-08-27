import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, FileText, Users, Building } from "lucide-react";

export const B2BSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
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
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 text-center hover:shadow-soft transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <p className="text-base text-foreground leading-relaxed">
                {t('b2b.point1')}
              </p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 text-center hover:shadow-soft transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <p className="text-base text-foreground leading-relaxed">
                {t('b2b.point2')}
              </p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 text-center hover:shadow-soft transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <p className="text-base text-foreground leading-relaxed">
                {t('b2b.point3')}
              </p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 text-center hover:shadow-soft transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-7 h-7 text-primary" />
              </div>
              <p className="text-base text-foreground leading-relaxed">
                {t('b2b.point4')}
              </p>
            </div>
          </div>

          {/* Partner CTA Button */}
          <div className="text-center">
            <a 
              href="mailto:hello@peer.it" 
              className="inline-flex items-center justify-center px-12 py-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold transition-all duration-300 shadow-medium hover:shadow-strong text-lg"
            >
              {t('b2b.partner.title')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};