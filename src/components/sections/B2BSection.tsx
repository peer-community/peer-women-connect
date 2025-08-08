import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import b2bIcon from "@/assets/b2b-icon.png";

export const B2BSection = () => {

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

          {/* Services - Horizontal Layout */}
          <div className="mb-16 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src={b2bIcon} 
                    alt="B2B services icon representing corporate collaboration and growth"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Reproductive Health Workplace Programs
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive programs addressing menstrual health, fertility support, pregnancy 
                  and postpartum care, and menopause - topics often ignored in traditional corporate wellness.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Inclusive Policy Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create forward-thinking policies for menstrual leave, fertility benefits, 
                  postpartum support, and menopause accommodations that truly support women's careers.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Taboo-Breaking Education
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Evidence-based workshops that normalize conversations around periods, fertility, 
                  pregnancy, and menopause - creating genuinely supportive workplace cultures.
                </p>
              </div>
            </div>
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

          {/* Partner With Us - Minimal Section */}
          <div className="animate-scale-in text-center max-w-2xl mx-auto border-2 border-primary/20 rounded-lg p-8 bg-card">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Partner With Us
            </h3>
            <p className="text-muted-foreground mb-6">
              Ready to transform your workplace culture? Let's discuss how we can help.
            </p>
            <a 
              href="mailto:hello@peer.it" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors"
            >
              hello@peer.it
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};