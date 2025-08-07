import { Button } from "@/components/ui/button";
import minimalHero from "@/assets/minimal-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={minimalHero} 
          alt="Minimal geometric design representing connection and support for women's health"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl pt-20">
        <div className="animate-fade-in space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Your Ultimate Ally in
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Women's Health</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-normal max-w-4xl mx-auto leading-relaxed">
              We support women at different stages of their lives, helping them connect, build communities, and find the information they need.
              <br /><br />
              Because knowledge and connection are the true keys to breaking isolation and empowering women's freedom.
              <br /><br />
              We also help companies recognize the immense value of breaking taboos and stereotypes around female health, driving meaningful change and awareness.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="minimal" 
              size="lg"
              className="text-base px-8 py-3 h-auto"
            >
              Join Our Community
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-base px-8 py-3 h-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};