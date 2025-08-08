import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import Female from '@mui/icons-material/Female';
import Book from '@mui/icons-material/Book';

export const CommunitySection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for your interest!",
        description: "We'll keep you updated on our community services and courses.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              {t('community.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('community.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Female sx={{ fontSize: 48, color: '#C52344' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t('community.safeSpaces.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('community.safeSpaces.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Book sx={{ fontSize: 48, color: '#C52344' }} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t('community.education.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('community.education.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t('community.empowerment.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('community.empowerment.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};