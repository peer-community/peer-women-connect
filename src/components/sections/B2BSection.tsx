import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle } from "@mui/icons-material";

export const B2BSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-foreground">
              {t('b2b.title')}
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12">
              {t('b2b.subtitle')}
            </p>
            
            <div className="space-y-6 mb-12 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <CheckCircle sx={{ fontSize: 24, color: "#C52344", marginTop: "2px" }} />
                <p className="text-lg text-foreground">
                  {t('b2b.point1')}
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle sx={{ fontSize: 24, color: "#C52344", marginTop: "2px" }} />
                <p className="text-lg text-foreground">
                  {t('b2b.point2')}
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle sx={{ fontSize: 24, color: "#C52344", marginTop: "2px" }} />
                <p className="text-lg text-foreground">
                  {t('b2b.point3')}
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle sx={{ fontSize: 24, color: "#C52344", marginTop: "2px" }} />
                <p className="text-lg text-foreground">
                  {t('b2b.point4')}
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