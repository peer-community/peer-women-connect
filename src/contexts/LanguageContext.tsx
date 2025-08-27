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
    'hero.title': 'Dare Potere alle Donne Attraverso',
    'hero.titleHighlight': 'Connessione e Conoscenza',
    'hero.subtitle': 'Una social platform dove le donne si connettono, creano comunità e trovano le informazioni sulla salute di cui hanno bisogno.',
    'hero.subtitleHighlight': 'In ogni fase della vita.',
    'hero.joinCommunity': 'Unisciti alla Nostra Community',
    'hero.learnMore': 'Scopri di Più',
    
    // Mission Section
    'mission.title': 'La Tua Alleata Definitiva nella Salute Femminile',
    'mission.intro': 'Sosteniamo il benessere e la salute delle donne, nelle diverse fasi della loro vita, aiutandole a incontrarsi, creare comunità e trovare le informazioni di cui hanno bisogno.',
    'mission.dedication': 'Perché conoscenza e condivisione sono le uniche chiavi per combattere isolamento, solitudine e sostenere la libera scelta.',
    'mission.scope': 'Aiutiamo le aziende a comprendere ad abbattere tabù e stereotipi sulla salute femminile, promuovendo un cambiamento positivo e consapevole.',
    
    // Community Section
    'community.title': 'Community di Salute Riproduttiva',
    'community.subtitle': 'Connettiti con donne che capiscono il tuo viaggio. Accedi a corsi guidati da esperti e comunità di supporto per ogni fase della vita riproduttiva.',
    'community.safeSpaces.title': 'Spazi Sicuri per Ogni Fase',
    'community.safeSpaces.description': 'Dalle prime mestruazioni alla menopausa, dalla gravidanza al post-parto - connettiti con donne che comprendono veramente il tuo viaggio di salute riproduttiva. Condividi esperienze in spazi liberi da giudizi.',
    'community.education.title': 'Educazione Basata su Evidenze',
    'community.education.description': 'Impara da esperti sanitari sulla salute mestruale, fertilità, gravidanza, benessere mentale e diritti riproduttivi. Conoscenza che alimenta decisioni reali.',
    'community.empowerment.title': 'Empowerment e Supporto',
    'community.empowerment.description': 'Costruisci fiducia nel tuo corpo, nelle tue scelte e nella tua voce. Liberati da tabù e stereotipi con i nostri programmi inclusivi di benessere e empowerment.',
    
    // B2B Section
    'b2b.title': 'Soluzioni di Benessere Aziendale',
    'b2b.subtitle': 'Trasforma il tuo luogo di lavoro in uno spazio dove la salute riproduttiva delle donne è supportata, compresa e celebrata. Rompiamo insieme i tabù sul posto di lavoro.',
    'b2b.service1.title': 'Programmi di Salute Riproduttiva sul Posto di Lavoro',
    'b2b.service1.description': 'Programmi completi che affrontano la salute mestruale, il supporto alla fertilità, la gravidanza e l\'assistenza post-parto, e la menopausa - argomenti spesso ignorati nel benessere aziendale tradizionale.',
    'b2b.service2.title': 'Sviluppo di Politiche Inclusive',
    'b2b.service2.description': 'Crea politiche progressiste per il congedo mestruale, i benefici per la fertilità, il supporto post-parto e le agevolazioni per la menopausa che supportano davvero le carriere delle donne.',
    'b2b.service3.title': 'Educazione Che Rompe i Tabù',
    'b2b.service3.description': 'Workshop basati su evidenze che normalizzano le conversazioni su mestruazioni, fertilità, gravidanza e menopausa - creando culture del lavoro genuinamente supportive.',
    'b2b.companies.title': 'Aziende di Fiducia che Guardano al Futuro',
    'b2b.company1.name': 'TechFlow Solutions',
    'b2b.company1.description': 'Implementazione di programmi completi di supporto alla salute delle donne per i loro oltre 500 dipendenti donne.',
    'b2b.company2.name': 'WellCorp Industries',
    'b2b.company2.description': 'Rompere i tabù sul posto di lavoro riguardo la salute mestruale e la menopausa con i nostri workshop educativi.',
    'b2b.company3.name': 'Innovate Healthcare',
    'b2b.company3.description': 'Creare politiche inclusive e reti di supporto per le donne in posizioni di leadership.',
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
    
    // Mission Section
    'mission.title': 'Your Ultimate Ally in Women\'s Health',
    'mission.intro': 'We support women at different stages of their lives, helping them connect, build communities, and find the information they need.',
    'mission.dedication': 'Because knowledge and connection are the true keys to breaking isolation and empowering women\'s freedom.',
    'mission.scope': 'We also help companies recognize the immense value of breaking taboos and stereotypes around female health, driving meaningful change and awareness.',
    
    // Community Section
    'community.title': 'Reproductive Health Community',
    'community.subtitle': 'Connect with women who understand your journey. Access expert-led courses and supportive communities for every stage of reproductive life.',
    'community.safeSpaces.title': 'Safe Spaces for Every Stage',
    'community.safeSpaces.description': 'From first periods to menopause, pregnancy to postpartum - connect with women who truly understand your reproductive health journey. Share experiences in judgment-free spaces.',
    'community.education.title': 'Evidence-Based Education',
    'community.education.description': 'Learn from healthcare experts about menstrual health, fertility, pregnancy, mental wellness, and reproductive rights. Knowledge that empowers real decisions.',
    'community.empowerment.title': 'Empowerment & Support',
    'community.empowerment.description': 'Build confidence in your body, your choices, and your voice. Break free from taboos and stereotypes with our inclusive wellness and empowerment programs.',
    
    // B2B Section
    'b2b.title': 'Corporate Wellness Solutions',
    'b2b.subtitle': 'Transform your workplace into a space where women\'s reproductive health is supported, understood, and celebrated. Break workplace taboos together.',
    'b2b.service1.title': 'Reproductive Health Workplace Programs',
    'b2b.service1.description': 'Comprehensive programs addressing menstrual health, fertility support, pregnancy and postpartum care, and menopause - topics often ignored in traditional corporate wellness.',
    'b2b.service2.title': 'Inclusive Policy Development',
    'b2b.service2.description': 'Create forward-thinking policies for menstrual leave, fertility benefits, postpartum support, and menopause accommodations that truly support women\'s careers.',
    'b2b.service3.title': 'Taboo-Breaking Education',
    'b2b.service3.description': 'Evidence-based workshops that normalize conversations around periods, fertility, pregnancy, and menopause - creating genuinely supportive workplace cultures.',
    'b2b.companies.title': 'Trusted by Forward-Thinking Companies',
    'b2b.company1.name': 'TechFlow Solutions',
    'b2b.company1.description': 'Implementing comprehensive women\'s health support programs for their 500+ female employees.',
    'b2b.company2.name': 'WellCorp Industries',
    'b2b.company2.description': 'Breaking workplace taboos around menstrual health and menopause with our educational workshops.',
    'b2b.company3.name': 'Innovate Healthcare',
    'b2b.company3.description': 'Creating inclusive policies and support networks for women in leadership positions.',
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