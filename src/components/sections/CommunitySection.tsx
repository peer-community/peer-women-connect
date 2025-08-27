
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle } from "@mui/icons-material";

export const CommunitySection = () => {
  const { t } = useLanguage();

  const handleJoinWaitlist = () => {
    const email = "hello@peer.it";
    const subject = encodeURIComponent("Joina la waitlist");
    const body = encodeURIComponent("Ciao! Vorrei unirmi alla waitlist di Peer.");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-foreground">
              {t('community.title')}
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12">
              {t('community.subtitle')}
            </p>
            
            <div className="space-y-6 mb-12 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <CheckCircle sx={{ fontSize: 24, color: "#C52344", marginTop: "2px" }} />
                <p className="text-lg text-foreground">
                  {t('community.point1')}
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle sx={{ fontSize: 24, color: "#C52344", marginTop: "2px" }} />
                <p className="text-lg text-foreground">
                  {t('community.point2')}
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle sx={{ fontSize: 24, color: "#C52344", marginTop: "2px" }} />
                <p className="text-lg text-foreground">
                  {t('community.point3')}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={handleJoinWaitlist}
                variant="default" 
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                {t('community.joinWaitlist')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
