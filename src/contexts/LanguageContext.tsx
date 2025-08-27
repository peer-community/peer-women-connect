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
    'community.title': 'Looking for information or someone to talk to?',
    'community.subtitle': 'With Peer you can:',
    'community.point1': 'Meet people who share your experiences.',
    'community.point2': 'Access quality content and courses.',
    'community.point3': 'Feel part of an inclusive community.',
    'community.joinWaitlist': 'Join the waitlist',
    
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