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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-start space-x-4">
                <img 
                  src={communityIcon} 
                  alt="Community connection icon representing women supporting each other"
                  className="w-16 h-16 mt-2"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Safe Spaces for Every Stage
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From first periods to menopause, pregnancy to postpartum - connect with women 
                    who truly understand your reproductive health journey. Share experiences in judgment-free spaces.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mt-2">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Evidence-Based Education
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Learn from healthcare experts about menstrual health, fertility, pregnancy, 
                    mental wellness, and reproductive rights. Knowledge that empowers real decisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mt-2">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Empowerment & Support
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Build confidence in your body, your choices, and your voice. Break free from 
                    taboos and stereotypes with our inclusive wellness and empowerment programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup Card */}
            <div className="animate-scale-in">
              <Card className="shadow-medium border-2 border-primary/20 bg-gradient-subtle">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-foreground mb-2">
                    Work in Progress
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    We're crafting something amazing for you. Be the first to know when we launch!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewsletterSignup} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 text-base border-2 focus:border-primary"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="gradient" 
                      size="lg" 
                      className="w-full text-lg h-12"
                    >
                      Join Our Newsletter
                    </Button>
                  </form>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    No spam, just empowering updates and early access to our platform.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};