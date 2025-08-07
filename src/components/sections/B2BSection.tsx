import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const B2BSection = () => {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company && formData.email) {
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch within 24 hours to discuss how we can support your organization.",
      });
      setFormData({ company: "", email: "", message: "" });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              B2B Services
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Partner with us to create inclusive, supportive workplace cultures that recognize 
              and address women's health needs.
            </p>
          </div>

          {/* Company Partners */}
          <div className="mb-20 animate-fade-in">
            <h3 className="text-2xl font-light text-center text-foreground mb-12">
              Trusted by Forward-Thinking Companies
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-minimal hover:shadow-soft transition-all duration-200 border border-border">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-accent-soft rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-light text-accent">T</span>
                  </div>
                  <CardTitle className="text-xl font-normal">TechFlow Solutions</CardTitle>
                  <CardDescription className="text-muted-foreground font-light">
                    Implementing comprehensive women's health support programs for their 500+ female employees.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center shadow-minimal hover:shadow-soft transition-all duration-200 border border-border">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-accent-soft rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-light text-accent">W</span>
                  </div>
                  <CardTitle className="text-xl font-normal">WellCorp Industries</CardTitle>
                  <CardDescription className="text-muted-foreground font-light">
                    Breaking workplace taboos around menstrual health and menopause with our educational workshops.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center shadow-minimal hover:shadow-soft transition-all duration-200 border border-border">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-accent-soft rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-light text-accent">I</span>
                  </div>
                  <CardTitle className="text-xl font-normal">Innovate Healthcare</CardTitle>
                  <CardDescription className="text-muted-foreground font-light">
                    Creating inclusive policies and support networks for women in leadership positions.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Services */}
            <div className="space-y-12 animate-fade-in">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-accent"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-foreground mb-4">
                    Workplace Wellness Programs
                  </h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    Custom programs that address women's health topics often overlooked in traditional 
                    corporate wellness initiatives.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-accent"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-foreground mb-4">
                    Policy Consulting
                  </h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    Help organizations develop inclusive policies that support women throughout 
                    their reproductive health journey and career progression.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-accent"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-foreground mb-4">
                    Training & Education
                  </h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    Evidence-based workshops and training sessions that break down barriers 
                    and create supportive workplace cultures.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-scale-in">
              <Card className="shadow-soft border border-border bg-background">
                <CardHeader className="space-y-4">
                  <CardTitle className="text-3xl font-light text-foreground">
                    Partner With Us
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground font-light">
                    Ready to transform your workplace culture? Let's discuss how we can help.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <Input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="h-12 text-base border-border focus:border-accent rounded-lg"
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Work email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 text-base border-border focus:border-accent rounded-lg"
                      required
                    />
                    <Textarea
                      name="message"
                      placeholder="Tell us about your organization's needs..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="min-h-24 text-base border-border focus:border-accent resize-none rounded-lg"
                      rows={4}
                    />
                    <Button 
                      type="submit" 
                      variant="minimal" 
                      size="lg" 
                      className="w-full text-base h-12"
                    >
                      Get In Touch
                    </Button>
                  </form>
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center mb-2">
                      Prefer email? Reach us directly at:
                    </p>
                    <a 
                      href="mailto:partnerships@peer-health.com" 
                      className="text-accent hover:text-accent/80 font-normal text-center block transition-colors"
                    >
                      partnerships@peer-health.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};