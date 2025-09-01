import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Bot,
  FileText,
  Settings,
  GitBranch,
  Puzzle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Bot,
      title: t('features.ai.title'),
      description: t('features.ai.description')
    },
    {
      icon: Zap,
      title: t('features.speed.title'),
      description: t('features.speed.description')
    },
    {
      icon: FileText,
      title: t('features.templates.title'),
      description: t('features.templates.description')
    },
    {
      icon: Settings,
      title: t('features.customization.title'),
      description: t('features.customization.description')
    },
    {
      icon: Puzzle,
      title: t('features.team.title'),
      description: t('features.team.description')
    },
    {
      icon: GitBranch,
      title: t('features.versioning.title'),
      description: t('features.versioning.description')
    }
  ];



  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in px-4">
          <Badge variant="outline" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            {t('features.badge')}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('features.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('features.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden animate-scale-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 sm:p-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;