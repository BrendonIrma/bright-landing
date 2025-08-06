import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Cpu, 
  Bot,
  ClipboardCheck,
  FileText,
  Settings,
  GitBranch,
  Puzzle,
  Clock
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
      icon: Cpu,
      title: t('features.integration.title'),
      description: t('features.integration.description')
    },
    {
      icon: ClipboardCheck,
      title: t('features.validation.title'),
      description: t('features.validation.description')
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
    }
  ];

  const inDevFeatures = [
    {
      icon: Puzzle,
      title: t('features.team.title'),
      description: t('features.team.description')
    },
    {
      icon: GitBranch,
      title: t('features.versioning.title'),
      description: t('features.versioning.description')
    },
    {
      icon: Settings,
      title: t('features.customization.title'),
      description: t('features.customization.description')
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            {t('features.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('features.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('features.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden animate-scale-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* In Development Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Clock className="w-4 h-4 mr-2" />
              {t('features.indev.badge')}
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('features.indev.title')}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('features.indev.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {inDevFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden opacity-75 hover:opacity-100 transition-opacity duration-300"
                >
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-muted-foreground">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;