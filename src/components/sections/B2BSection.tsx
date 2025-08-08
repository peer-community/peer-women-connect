import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Building2, BarChart3 } from "lucide-react";

export const B2BSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              {t('b2b.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('b2b.subtitle')}
            </p>
          </div>

          {/* Services - Horizontal Layout */}
          <div className="mb-16 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Heart size={48} color="#308CEB" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t('b2b.service1.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('b2b.service1.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building2 size={48} color="#308CEB" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t('b2b.service2.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('b2b.service2.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 size={48} color="#308CEB" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t('b2b.service3.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('b2b.service3.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Partner With Us - Minimal Section */}
          <div className="mb-2 animate-scale-in text-center max-w-2xl mx-auto border-2 border-primary/20 rounded-lg p-8 bg-card">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {t('b2b.partner.title')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('b2b.partner.description')}
            </p>
            <a 
              href="mailto:hello@peer.it" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors"
            >
              hello@peer.it
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};