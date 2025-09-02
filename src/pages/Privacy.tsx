import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/sections/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-foreground">
              {t('privacy.title')}
            </h1>
            
            <p className="text-muted-foreground mb-12">
              {t('privacy.lastUpdated')}
            </p>
            
            <div className="space-y-8">
              {/* Data Controller */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  {t('privacy.dataController.title')}
                </h2>
                <div className="text-muted-foreground whitespace-pre-line">
                  {t('privacy.dataController.content')}
                </div>
              </section>

              {/* What data we process */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  {t('privacy.whatData.title')}
                </h2>
                <div className="text-muted-foreground whitespace-pre-line">
                  {t('privacy.whatData.content')}
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  {t('privacy.cookies.title')}
                </h2>
                <div className="text-muted-foreground whitespace-pre-line">
                  {t('privacy.cookies.content')}
                </div>
              </section>

              {/* Your rights */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  {t('privacy.rights.title')}
                </h2>
                <div className="text-muted-foreground whitespace-pre-line">
                  {t('privacy.rights.content')}
                </div>
              </section>

              {/* Changes */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  {t('privacy.changes.title')}
                </h2>
                <div className="text-muted-foreground whitespace-pre-line">
                  {t('privacy.changes.content')}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;