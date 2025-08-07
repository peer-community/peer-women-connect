export const MissionSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
              Our Mission
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              <p>
                We support women at different stages of their lives, helping them connect, 
                build communities, and find the information they need.
              </p>
              
              <p className="text-foreground font-normal text-xl md:text-2xl">
                Knowledge and connection are the true keys to breaking isolation 
                and empowering women's freedom.
              </p>
              
              <p>
                We also help companies recognize the immense value of breaking taboos and 
                stereotypes around female health, driving meaningful change and awareness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};