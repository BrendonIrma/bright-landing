import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Code
} from "lucide-react";
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




        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">
                {t('modes.cta.title')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('modes.cta.description')}
              </p>
              <Button variant="hero" size="lg">
                {t('modes.cta.button')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModeCards;