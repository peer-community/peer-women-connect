
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Users, BookOpen } from "lucide-react";

export const CommunitySection = () => {
  const { t } = useLanguage();

  const handleJoinWaitlist = () => {
    const email = "hello@peer-community.com";
    const subject = encodeURIComponent("Joina la waitlist");
    const body = encodeURIComponent("Ciao! Vorrei unirmi alla waitlist di Peer.");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20" style={{backgroundColor: '#FFF8E4'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              {t('community.title')}
            </h2>
            
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              {t('community.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            <div className="text-center p-8 hover:scale-105 transition-transform duration-300 ease-out">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(135deg, #C52344, #FF8574)'}}>
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('community.box1.title')}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('community.box1.text')}
              </p>
            </div>
            
            <div className="text-center p-8 hover:scale-105 transition-transform duration-300 ease-out">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(135deg, #C52344, #FF8574)'}}>
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('community.box2.title')}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('community.box2.text')}
              </p>
            </div>
            
            <div className="text-center p-8 hover:scale-105 transition-transform duration-300 ease-out">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(135deg, #C52344, #FF8574)'}}>
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('community.box3.title')}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('community.box3.text')}
              </p>
            </div>
          </div>
          
          {/* Call to Action Section */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 text-center border border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('community.ctaTitle')}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('community.ctaDescription')}
            </p>
            <Button 
              onClick={handleJoinWaitlist}
              variant="default" 
              size="default"
              className="text-base px-8 py-3 h-auto rounded-full shadow-medium hover:shadow-strong transition-all duration-300 bg-primary hover:bg-primary/90"
            >
              {t('community.joinWaitlist')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
