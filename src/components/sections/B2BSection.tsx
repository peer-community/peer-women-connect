import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import b2bIcon from "@/assets/b2b-icon.png";

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
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              Corporate Wellness Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your workplace into a space where women's reproductive health is supported, 
              understood, and celebrated. Break workplace taboos together.
            </p>
          </div>

          {/* Company Partners */}
          <div className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
              Trusted by Forward-Thinking Companies
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">T</span>
                  </div>
                  <CardTitle className="text-xl">TechFlow Solutions</CardTitle>
                  <CardDescription>
                    Implementing comprehensive women's health support programs for their 500+ female employees.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-foreground">W</span>
                  </div>
                  <CardTitle className="text-xl">WellCorp Industries</CardTitle>
                  <CardDescription>
                    Breaking workplace taboos around menstrual health and menopause with our educational workshops.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">I</span>
                  </div>
                  <CardTitle className="text-xl">Innovate Healthcare</CardTitle>
                  <CardDescription>
                    Creating inclusive policies and support networks for women in leadership positions.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Services */}
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-start space-x-4">
                <img 
                  src={b2bIcon} 
                  alt="B2B services icon representing corporate collaboration and growth"
                  className="w-16 h-16 mt-2"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Reproductive Health Workplace Programs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive programs addressing menstrual health, fertility support, pregnancy 
                    and postpartum care, and menopause - topics often ignored in traditional corporate wellness.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mt-2">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Inclusive Policy Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Create forward-thinking policies for menstrual leave, fertility benefits, 
                    postpartum support, and menopause accommodations that truly support women's careers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mt-2">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Taboo-Breaking Education
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Evidence-based workshops that normalize conversations around periods, fertility, 
                    pregnancy, and menopause - creating genuinely supportive workplace cultures.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="animate-scale-in">
              <Card className="shadow-medium border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground">
                    Partner With Us
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    Ready to transform your workplace culture? Let's discuss how we can help.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center py-12">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-6">
                      <span className="text-3xl">✉️</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Contact Us
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Get in touch to learn how we can support your organization's women's health initiatives.
                    </p>
                    <a 
                      href="mailto:hello@peer.it" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium text-lg transition-colors"
                    >
                      hello@peer.it
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