export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-accent"></div>
              <span className="text-2xl font-light">Peer</span>
            </div>
            <p className="text-background/70 font-light leading-relaxed">
              Empowering women through connection, knowledge, and community support 
              at every stage of life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-normal">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#mission" className="text-background/70 hover:text-background transition-colors font-light">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#community" className="text-background/70 hover:text-background transition-colors font-light">
                  Community Services
                </a>
              </li>
              <li>
                <a href="#b2b" className="text-background/70 hover:text-background transition-colors font-light">
                  B2B Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-normal">Get in Touch</h3>
            <div className="space-y-3">
              <p className="text-background/70 font-light">
                <a href="mailto:hello@peer-health.com" className="hover:text-background transition-colors">
                  hello@peer-health.com
                </a>
              </p>
              <p className="text-background/70 font-light">
                <a href="mailto:partnerships@peer-health.com" className="hover:text-background transition-colors">
                  partnerships@peer-health.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/50 font-light">
            © 2024 Peer. Empowering women's health through connection and knowledge.
          </p>
        </div>
      </div>
    </footer>
  );
};