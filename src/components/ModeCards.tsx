
import { useLanguage } from "@/contexts/LanguageContext";

const ModeCards = () => {
  const { t } = useLanguage();
  



  return (
    <section id="modes" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">





      </div>
    </section>
  );
};

export default ModeCards;