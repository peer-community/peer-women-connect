
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
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-foreground">
              {t('community.title')}
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t('community.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 hover:scale-105 transition-transform duration-300 ease-out">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(135deg, #C52344, #FF8574)'}}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                {t('community.point1')}
              </p>
            </div>
            
            <div className="text-center p-8 hover:scale-105 transition-transform duration-300 ease-out">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(135deg, #C52344, #FF8574)'}}>
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                {t('community.point2')}
              </p>
            </div>
            
            <div className="text-center p-8 hover:scale-105 transition-transform duration-300 ease-out">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(135deg, #C52344, #FF8574)'}}>
                <Heart className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                {t('community.point3')}
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handleJoinWaitlist}
              variant="default" 
              size="lg"
              className="text-lg px-12 py-6 h-auto rounded-full shadow-medium hover:shadow-strong transition-all duration-300"
            >
              {t('community.joinWaitlist')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
