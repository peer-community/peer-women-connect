import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Diverse women connecting and supporting each other in a welcoming community environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-primary-foreground leading-tight">
            Empowering Women Through
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Connection & Knowledge
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            A social platform where women connect, build communities and find the health information they need.{" "}
            <span className="font-bold text-primary-glow">At every stage of life.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Join Our Community
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};