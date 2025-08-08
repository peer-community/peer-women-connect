import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Animated Background Dots */}
      <div className="absolute inset-0">
        {/* Primary brand color dots */}
        <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-[25%] right-[8%] w-3 h-3 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-[30%] left-[12%] w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[60%] right-[15%] w-2.5 h-2.5 bg-primary rounded-full animate-float opacity-45" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Primary glow color dots */}
        <div className="absolute top-[15%] right-[25%] w-1 h-1 bg-primary-glow rounded-full animate-float opacity-70" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-[20%] right-[5%] w-2 h-2 bg-primary-glow rounded-full animate-float opacity-55" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-[45%] left-[8%] w-1.5 h-1.5 bg-primary-glow rounded-full animate-float opacity-60" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute bottom-[50%] right-[30%] w-3 h-3 bg-primary-glow rounded-full animate-float opacity-35" style={{ animationDelay: '1.8s' }}></div>
        
        {/* Secondary color dots */}
        <div className="absolute top-[35%] left-[25%] w-1 h-1 bg-secondary rounded-full animate-float opacity-50" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute bottom-[15%] left-[30%] w-2 h-2 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-[70%] right-[20%] w-1.5 h-1.5 bg-secondary rounded-full animate-float opacity-55" style={{ animationDelay: '1.2s' }}></div>
        
        {/* Accent color dots */}
        <div className="absolute top-[50%] left-[35%] w-1 h-1 bg-accent rounded-full animate-float opacity-45" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute bottom-[35%] right-[35%] w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute bottom-[60%] left-[40%] w-2.5 h-2.5 bg-accent rounded-full animate-float opacity-35" style={{ animationDelay: '1.9s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-foreground leading-tight">
            Empowering Women Through
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Connection & Knowledge
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A social platform where women connect, build communities and find the health information they need.{" "}
            <span className="font-bold text-primary">At every stage of life.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Join Our Community
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};