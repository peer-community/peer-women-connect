import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  it: {
    // Header
    'nav.mission': 'Missione',
    'nav.community': 'Community',
    'nav.b2b': 'Servizi B2B',
    'nav.contact': 'Contattaci',
    
    // Hero Section
    'hero.title': 'La prima community digitale dedicata alla',
    'hero.titleHighlight': 'salute e al benessere femminile',
    'hero.subtitle': 'Creiamo connessioni autentiche, offriamo informazione scientifica e affidabile, collaboriamo con esperti e aziende per abbattere i tabù.',
    'hero.subtitleHighlight': '',
    'hero.joinCommunity': 'Unisciti alla Nostra Community',
    'hero.learnMore': 'Scopri di Più',
    
    // Context Section
    'context.title': 'Cosa succede?',
    'context.subtitle': 'In Italia milioni di persone affrontano mestruazioni, maternità e menopausa senza adeguato supporto.',
    'context.loneliness.title': 'Solitudine',
    'context.loneliness.description': 'mancano spazi sicuri e connessioni autentiche.',
    'context.unreliable.title': 'Informazioni poco affidabili',
    'context.unreliable.description': 'spesso posizioni estreme o narrazioni a senso unico, che non supportano la libera scelta.',
    'context.career.title': 'Impatto sulla carriera',
    'context.career.description': 'il 50% delle madri lascia il lavoro entro un anno dal parto; molte donne in ruoli manageriali vivono la perimenopausa senza supporto.',
    
    // Mission Section
    'mission.title': 'La mission di Peer',
    'mission.subtitle': 'Peer è la prima piattaforma digitale che accompagna le persone in tutte le fasi della salute riproduttiva, con un approccio unico:',
    'mission.community.title': 'Community',
    'mission.community.description': 'matching e forum per combattere solitudine e isolamento.',
    'mission.knowledge.title': 'Conoscenza',
    'mission.knowledge.description': 'corsi e risorse digitali su ciclo mestruale, maternità menopausa, sessualità.',
    'mission.ecosystem.title': 'Ecosistema',
    'mission.ecosystem.description': 'rete di esperti certificati e servizi per aziende.',
    
    // Community Section
    'community.title': 'Stai cercando informazioni o qualcuno con cui confrontarti?',
    'community.subtitle': 'Con Peer puoi:',
    'community.point1': 'Incontrare chi vive le tue stesse esperienze.',
    'community.point2': 'Accedere a contenuti e corsi di qualità.',
    'community.point3': 'Sentirti parte di una community inclusiva.',
    'community.joinWaitlist': 'Joina la waitlist',
    
    // B2B Section
    'b2b.title': 'Sei un\'azienda?',
    'b2b.subtitle': 'Peer aiuta le aziende a supportare la salute riproduttiva e creare luoghi di lavoro inclusivi con:',
    'b2b.point1': 'Programmi di formazione.',
    'b2b.point2': 'Politiche innovative (menopausa, fertilità, congedo mestruale).',
    'b2b.point3': 'Workshop per abbattere i tabù.',
    'b2b.point4': 'Accesso a una community attiva e coinvolta.',
    'b2b.partner.title': 'Collabora con Noi',
    'b2b.partner.description': 'Pronta a trasformare la cultura del tuo posto di lavoro? Discutiamo di come possiamo aiutarti.',
    
    // Footer
    'footer.brandDescription': 'Dare potere alle donne attraverso connessione, conoscenza e supporto della community in ogni fase della vita.',
    'footer.quickLinks': 'Link Rapidi',
    'footer.mission': 'La Nostra Missione',
    'footer.communityServices': 'Servizi Community',
    'footer.b2bServices': 'Servizi B2B',
    'footer.getInTouch': 'Mettiti in Contatto',
    'footer.copyright': '© 2024 Peer. Dare potere alla salute delle donne attraverso connessione e conoscenza.',
  },
  en: {
    // Header
    'nav.mission': 'Mission',
    'nav.community': 'Community',
    'nav.b2b': 'B2B Services',
    'nav.contact': 'Contact Us',
    
    // Hero Section
    'hero.title': 'The first digital community dedicated to',
    'hero.titleHighlight': 'reproductive health and well-being',
    'hero.subtitle': 'We create authentic connections, provide reliable, science-based information, and collaborate with experts and companies to break taboos.',
    'hero.subtitleHighlight': '',
    'hero.joinCommunity': 'Join Our Community',
    'hero.learnMore': 'Learn More',
    
    // Context Section
    'context.title': 'What\'s happening?',
    'context.subtitle': 'In Italy, millions of people face menstruation, motherhood, and menopause without adequate support.',
    'context.loneliness.title': 'Loneliness',
    'context.loneliness.description': 'lack of safe spaces and authentic connections.',
    'context.unreliable.title': 'Unreliable information',
    'context.unreliable.description': 'often extreme sources or one-sided narratives that don\'t support free choice.',
    'context.career.title': 'Career impact',
    'context.career.description': '50% of mothers leave their jobs within a year of childbirth; many women in managerial roles experience perimenopause without support.',
    
    // Mission Section
    'mission.title': 'Peer\'s Mission',
    'mission.subtitle': 'Peer is the first digital platform that supports people through every stage of reproductive health, with a unique approach:',
    'mission.community.title': 'Community',
    'mission.community.description': 'matching and forums to fight loneliness and isolation.',
    'mission.knowledge.title': 'Knowledge',
    'mission.knowledge.description': 'digital courses and resources on menstruation, motherhood, menopause, and sexuality.',
    'mission.ecosystem.title': 'Ecosystem',
    'mission.ecosystem.description': 'a network of certified experts and tailored services for companies.',
    
    // Community Section
    'community.title': 'Looking for information or someone to connect with?',
    'community.subtitle': 'With Peer you can:',
    'community.point1': 'Meet others who share your experiences.',
    'community.point2': 'Access high-quality courses and content.',
    'community.point3': 'Feel part of an inclusive community.',
    'community.joinWaitlist': 'Join Waitlist',
    
    // B2B Section
    'b2b.title': 'Are you a company?',
    'b2b.subtitle': 'Peer helps companies support reproductive health and create inclusive workplaces with:',
    'b2b.point1': 'Training programs.',
    'b2b.point2': 'Innovative policies (menopause, fertility, menstrual leave).',
    'b2b.point3': 'Workshops to break taboos.',
    'b2b.point4': 'Access to an active and engaged community.',
    'b2b.partner.title': 'Partner With Us',
    'b2b.partner.description': 'Ready to transform your workplace culture? Let\'s discuss how we can help.',
    
    // Footer
    'footer.brandDescription': 'Empowering women through connection, knowledge, and community support at every stage of life.',
    'footer.quickLinks': 'Quick Links',
    'footer.mission': 'Our Mission',
    'footer.communityServices': 'Community Services',
    'footer.b2bServices': 'B2B Services',
    'footer.getInTouch': 'Get in Touch',
    'footer.copyright': '© 2024 Peer. Empowering women\'s health through connection and knowledge.',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('it'); // Italian as default

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};