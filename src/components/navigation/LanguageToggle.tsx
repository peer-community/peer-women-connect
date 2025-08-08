import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
      className="text-sm font-medium"
    >
      {language === 'it' ? 'EN' : 'IT'}
    </Button>
  );
};