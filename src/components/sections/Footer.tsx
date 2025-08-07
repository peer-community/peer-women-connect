export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
              <span className="text-2xl font-bold font-heading">Peer</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Empowering women through connection, knowledge, and community support 
              at every stage of life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#mission" className="text-background/80 hover:text-background transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#community" className="text-background/80 hover:text-background transition-colors">
                  Community Services
                </a>
              </li>
              <li>
                <a href="#b2b" className="text-background/80 hover:text-background transition-colors">
                  B2B Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <p className="text-background/80">
                <a href="mailto:hello@peer-health.com" className="hover:text-background transition-colors">
                  hello@peer-health.com
                </a>
              </p>
              <p className="text-background/80">
                <a href="mailto:partnerships@peer-health.com" className="hover:text-background transition-colors">
                  partnerships@peer-health.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Peer. Empowering women's health through connection and knowledge.
          </p>
        </div>
      </div>
    </footer>
  );
};