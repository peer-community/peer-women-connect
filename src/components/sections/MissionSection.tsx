export const MissionSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
              Our Mission
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">💪</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">EMPOWERMENT</h3>
                <p className="text-muted-foreground">Breaking isolation through knowledge and community support</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-secondary flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">COMMUNITY</h3>
                <p className="text-muted-foreground">Connecting women at every stage of their reproductive journey</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-tertiary flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">💡</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">EDUCATION</h3>
                <p className="text-muted-foreground">Accessible, real information for informed health decisions</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl md:text-2xl font-bold text-foreground bg-gradient-primary bg-clip-text text-transparent">
                Pop • Real • Inclusive • Educational • Easy • Approachable • Fun • Cool
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};