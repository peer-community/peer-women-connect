import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const CompaniesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-8" style={{ backgroundColor: '#FFF8E4' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            {t('b2b.companies.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">T</span>
                </div>
                <CardTitle className="text-xl">{t('b2b.company1.name')}</CardTitle>
                <CardDescription>
                  {t('b2b.company1.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">W</span>
                </div>
                <CardTitle className="text-xl">{t('b2b.company2.name')}</CardTitle>
                <CardDescription>
                  {t('b2b.company2.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">I</span>
                </div>
                <CardTitle className="text-xl">{t('b2b.company3.name')}</CardTitle>
                <CardDescription>
                  {t('b2b.company3.description')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};