import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Rocket
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const QuickStart = () => {
  const { t } = useLanguage();

  return (
    <section id="quickstart" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            <Rocket className="w-4 h-4 mr-2" />
            {t('quickstart.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('quickstart.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('quickstart.description')}
          </p>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Video Tutorial Button */}
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full h-20 text-lg"
              asChild
            >
              <a href="https://vkvideo.ru/video-231325948_456239030" target="_blank" rel="noopener noreferrer">
                {t('quickstart.video.button')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>

            {/* Text Tutorial Button */}
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full h-20 text-lg border-2 hover:border-primary hover:text-primary transition-all duration-300"
              asChild
            >
              <a href="https://telegra.ph/Instrukciya-po-ustanovke-i-nastrojke-AI-IDE-BAS-07-30" target="_blank" rel="noopener noreferrer">
                {t('quickstart.text.button')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          {/* Install Button */}
          <div className="mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="px-8 py-6 text-lg"
              asChild
            >
              <a href="https://marketplace.visualstudio.com/items?itemName=8eton.ai-ide-bas" target="_blank" rel="noopener noreferrer">
                {t('quickstart.button')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-glass">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                {t('quickstart.help.title')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('quickstart.help.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  {t('quickstart.help.docs')}
                </Button>
                <Button variant="default">
                  {t('quickstart.help.contact')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;