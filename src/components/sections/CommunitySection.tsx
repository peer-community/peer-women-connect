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
              Community Services & Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building supportive communities and providing educational resources for women's health and wellness.
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
                    Safe Spaces for Connection
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Join communities of women who understand your journey. Share experiences, 
                    ask questions, and find support at every stage of life.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mt-2">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Expert-Led Courses
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Access evidence-based courses on reproductive health, mental wellness, 
                    career development, and life transitions designed specifically for women.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mt-2">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Personal Growth
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Develop skills, build confidence, and create lasting connections 
                    through our comprehensive wellness and empowerment programs.
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