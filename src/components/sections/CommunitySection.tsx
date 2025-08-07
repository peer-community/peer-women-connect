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
                <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-accent"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-foreground mb-4">
                    Safe Spaces for Connection
                  </h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    Join communities of women who understand your journey. Share experiences, 
                    ask questions, and find support at every stage of life.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-accent"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-foreground mb-4">
                    Expert-Led Courses
                  </h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    Access evidence-based courses on reproductive health, mental wellness, 
                    career development, and life transitions designed specifically for women.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-accent"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-foreground mb-4">
                    Personal Growth
                  </h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    Develop skills, build confidence, and create lasting connections 
                    through our comprehensive wellness and empowerment programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup Card */}
            <div className="animate-scale-in">
              <Card className="shadow-soft border border-border bg-background">
                <CardHeader className="text-center space-y-6 pb-8">
                  <CardTitle className="text-3xl font-light text-foreground">
                    Work in Progress
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground font-light">
                    We're crafting something amazing for you. Be the first to know when we launch.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleNewsletterSignup} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-base border-border focus:border-accent rounded-lg"
                      required
                    />
                    <Button 
                      type="submit" 
                      variant="minimal" 
                      size="lg" 
                      className="w-full text-base h-12"
                    >
                      Join Our Newsletter
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