export const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-foreground">
              Our Mission
            </h2>
            
            <div className="prose prose-lg md:prose-xl max-w-none text-foreground/80 leading-relaxed">
              <p className="mb-6">
                We support women at different stages of their lives, helping them connect, 
                build communities, and find the information they need.
              </p>
              
              <p className="mb-6 text-xl font-medium text-primary">
                Because knowledge and connection are the true keys to breaking isolation 
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