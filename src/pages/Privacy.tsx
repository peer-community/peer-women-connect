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
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-foreground">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              {/* Content will be added here */}
              <p className="text-muted-foreground">
                Privacy policy content will be added here.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;