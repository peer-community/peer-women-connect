export const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-foreground">
              Your Ultimate Ally in Women's Health
            </h2>
            
            <div className="prose prose-lg md:prose-xl max-w-none text-foreground/80 leading-relaxed">
              <p className="mb-6">
                PEER is a pioneering startup leveraging cutting-edge technologies and inclusive approaches 
                to provide accessible and empowering reproductive health services for every woman.
              </p>
              
              <p className="mb-6 text-xl font-medium text-primary">
                We're dedicated to catalyzing access to vital information, services, and support for both 
                physical and mental well-being across all stages of reproductive life.
              </p>
              
              <p className="mb-4">
                From menstruation to menopause, from conception to pregnancy and postpartum - 
                we're here to break isolation, shatter taboos, and empower women's freedom through 
                knowledge and genuine connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};