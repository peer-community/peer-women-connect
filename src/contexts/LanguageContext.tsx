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
    'mission.subtitle': 'Peer è la prima piattaforma digitale che accompagna le persone in tutte le fasi della salute riproduttiva, con un approccio unico.',
    'mission.community.title': 'Community',
    'mission.community.description': 'matching e forum per combattere solitudine e isolamento.',
    'mission.knowledge.title': 'Conoscenza',
    'mission.knowledge.description': 'corsi e risorse digitali su ciclo mestruale, maternità menopausa, sessualità.',
    'mission.ecosystem.title': 'Ecosistema',
    'mission.ecosystem.description': 'rete di esperti certificati e servizi per aziende.',
    
    // Community Section
    'community.title': 'Unisciti alla nostra community',
    'community.subtitle': 'Se stai cercando informazioni o qualcuno con cui confrontarti, scopri cosa rende unica la nostra community.',
    'community.box1.title': 'Incontra persone come te',
    'community.box1.text': 'Connettiti con donne che stanno vivendo le tue stesse esperienze',
    'community.box2.title': 'Accedi ai corsi',
    'community.box2.text': 'Scopri i nostri contenuti realizzati da esperti del settore',
    'community.box3.title': 'Fai parte di una community inclusiva',
    'community.box3.text': 'Unisciti ad un gruppo di donne e di professionisti',
    'community.joinWaitlist': 'Unisciti alla lista d\'attesa',
    'community.ctaTitle': 'Pronta a far parte della community?',
    'community.ctaDescription': 'Unisciti alla nostra waitlist per essere tra le prime a scoprire quando lanciamo e ottenere accesso esclusivo in anteprima.',
    
    // B2B Section
    'b2b.title': 'Sei un\'azienda?',
    'b2b.subtitle': 'Peer aiuta le aziende a supportare la salute femminile e a creare un ambiente inclusivo con:',
    'b2b.box1.title': 'Corsi',
    'b2b.box1.text': 'Programmi di formazione',
    'b2b.box2.title': 'Politiche innovative',
    'b2b.box2.text': 'Menopausa, fertilità, congedo mestruale',
    'b2b.box3.title': 'Workshop',
    'b2b.box3.text': 'Sessioni interattive progettate per abbattere i tabù',
    'b2b.box4.title': 'Community',
    'b2b.box4.text': 'Connetti la tua organizzazione alla nostra community attiva e consapevole',
    'b2b.partner.title': 'Collabora con Peer',
    'b2b.cta.question': 'Pronto ad investire nel futuro del tuo team?',
    
    // Footer
    'footer.brandDescription': 'Peer nasce per rivoluzionare il modo in cui viviamo e raccontiamo la salute riproduttiva. Connettiti, impara, condividi. È solo l\'inizio.',
    'footer.quickLinks': 'Link Rapidi',
    'footer.mission': 'La Nostra Missione',
    'footer.communityServices': 'Servizi Community',
    'footer.b2bServices': 'Servizi B2B',
    'footer.getInTouch': 'Mettiti in Contatto',
    'footer.followUs': 'Seguici',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2025 Peer. Dare potere alla salute delle donne attraverso connessione e conoscenza.',

    // Privacy Policy
    'privacy.title': 'Privacy & Cookie Policy',
    'privacy.lastUpdated': 'Ultimo aggiornamento: 02 Settembre 2025',
    'privacy.dataController.title': '1) Titolare del Trattamento',
    'privacy.dataController.content': 'Arianna Marchente\nEmail: hello@peer-community.com',
    'privacy.whatData.title': '2) Quali dati trattiamo',
    'privacy.whatData.content': 'Questo sito web non raccoglie dati personali e non utilizza cookies.\n\nSe scegli di contattarci via email, tratteremo i dati personali che fornisci (come il tuo indirizzo email e il contenuto del tuo messaggio) esclusivamente per rispondere alla tua richiesta.',
    'privacy.cookies.title': '3) Cookies',
    'privacy.cookies.content': 'Questo sito web non imposta cookies.',
    'privacy.rights.title': '4) I tuoi diritti',
    'privacy.rights.content': 'Puoi richiedere l\'accesso, la rettifica o la cancellazione dei tuoi dati personali, o opporti al loro trattamento, contattando hello@peer-community.com\n\nHai anche il diritto di presentare un reclamo presso la tua autorità di controllo locale (in Italia: Garante Privacy).',
    'privacy.changes.title': '5) Modifiche',
    'privacy.changes.content': 'Potremmo aggiornare questa Policy di tanto in tanto. La data "Ultimo aggiornamento" indicherà sempre la versione più recente.',
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
    'mission.subtitle': 'Peer is the first digital platform that supports women through every stage of reproductive health, with a unique approach.',
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
    'b2b.cta.question': 'Ready to invest in your team\'s future?',
    
    // Footer
    'footer.brandDescription': 'Peer was created to revolutionize the way we experience and talk about reproductive health. Connect, learn, share. This is just the beginning.',
    'footer.quickLinks': 'Quick Links',
    'footer.mission': 'Our Mission',
    'footer.communityServices': 'Community Services',
    'footer.b2bServices': 'B2B Services',
    'footer.getInTouch': 'Get in Touch',
    'footer.followUs': 'Follow Us',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2025 Peer. Empowering women\'s health through connection and knowledge.',

    // Privacy Policy
    'privacy.title': 'Privacy & Cookie Policy',
    'privacy.lastUpdated': 'Last updated: 02 September 2025',
    'privacy.dataController.title': '1) Data Controller',
    'privacy.dataController.content': 'Arianna Marchente\nEmail: hello@peer-community.com',
    'privacy.whatData.title': '2) What data we process',
    'privacy.whatData.content': 'This website does not collect personal data and does not use cookies.\n\nIf you choose to contact us via email, we will process the personal data you provide (such as your email address and the content of your message) solely for the purpose of responding to your request.',
    'privacy.cookies.title': '3) Cookies',
    'privacy.cookies.content': 'This website does not set cookies.',
    'privacy.rights.title': '4) Your rights',
    'privacy.rights.content': 'You may request access, rectification, or erasure of your personal data, or object to its processing, by contacting hello@peer-community.com\n\nYou also have the right to lodge a complaint with your local supervisory authority (in Italy: Garante Privacy).',
    'privacy.changes.title': '5) Changes',
    'privacy.changes.content': 'We may update this Policy from time to time. The "Last updated" date will always indicate the latest version.',
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