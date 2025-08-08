import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import communityIcon from "@/assets/community-icon.png";

export const CommunitySection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

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
              Reproductive Health Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with women who understand your journey. Access expert-led courses and supportive 
              communities for every stage of reproductive life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src={communityIcon} 
                  alt="Community connection icon representing women supporting each other"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Safe Spaces for Every Stage
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From first periods to menopause, pregnancy to postpartum - connect with women 
                who truly understand your reproductive health journey. Share experiences in judgment-free spaces.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Evidence-Based Education
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn from healthcare experts about menstrual health, fertility, pregnancy, 
                mental wellness, and reproductive rights. Knowledge that empowers real decisions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Empowerment & Support
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Build confidence in your body, your choices, and your voice. Break free from 
                taboos and stereotypes with our inclusive wellness and empowerment programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};