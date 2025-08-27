import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const { t } = useLanguage();
  
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
              {t('footer.brandDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#mission" className="text-background/80 hover:text-background transition-colors">
                  {t('footer.mission')}
                </a>
              </li>
              <li>
                <a href="#community" className="text-background/80 hover:text-background transition-colors">
                  {t('footer.communityServices')}
                </a>
              </li>
              <li>
                <a href="#b2b" className="text-background/80 hover:text-background transition-colors">
                  {t('footer.b2bServices')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.getInTouch')}</h3>
            <div className="space-y-4">
              <p className="text-background/80">
                <a href="mailto:hello@peer.it" className="hover:text-background transition-colors">
                  hello@peer.it
                </a>
              </p>
              
              <div>
                <h4 className="text-md font-medium mb-2">{t('footer.followUs')}</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/peer_community/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/80 hover:text-background transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/80 hover:text-background transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};