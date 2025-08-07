import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
    <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              Community Services & Courses
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Building supportive communities and providing educational resources for women's health and wellness.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-12 animate-fade-in">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-colorful">
                  <span className="text-2xl">🌸</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Safe Spaces for Connection
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Join communities of women who understand your journey. Share experiences, 
                    ask questions, and find support at every stage of life.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center shadow-colorful">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Expert-Led Courses
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Access evidence-based courses on reproductive health, mental wellness, 
                    career development, and life transitions designed specifically for women.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-tertiary flex items-center justify-center shadow-colorful">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Personal Growth
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Develop skills, build confidence, and create lasting connections 
                    through our comprehensive wellness and empowerment programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup Card */}
            <div className="animate-scale-in">
              <Card className="shadow-colorful border-2 border-accent bg-background rounded-3xl overflow-hidden">
                <CardHeader className="text-center space-y-6 pb-8 bg-gradient-subtle">
                  <CardTitle className="text-3xl font-bold text-foreground">
                    🚧 Work in Progress
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    We're crafting something <span className="font-bold text-accent">amazing</span> for you. Be the first to know when we launch!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                  <form onSubmit={handleNewsletterSignup} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 text-base border-2 border-border focus:border-accent rounded-2xl px-6"
                      required
                    />
                    <Button 
                      type="submit" 
                      variant="default" 
                      size="lg" 
                      className="w-full text-base h-14 rounded-2xl bg-gradient-primary hover:shadow-colorful transition-all duration-300"
                    >
                      Join Our Newsletter 💌
                    </Button>
                  </form>
                  <p className="text-sm text-muted-foreground text-center">
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