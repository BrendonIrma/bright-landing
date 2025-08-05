import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Sparkles, 
  Settings, 
  Shield, 
  Palette, 
  ArrowRight,
  Lightbulb,
  Code,
  Users
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ModeCards = () => {
  const { t } = useLanguage();
  
  const modes = [
    {
      id: "ba",
      title: t('modes.ba.title'),
      shortTitle: "BA",
      description: t('modes.ba.description'),
      features: [
        t('modes.ba.features.0'),
        t('modes.ba.features.1'), 
        t('modes.ba.features.2'),
        t('modes.ba.features.3')
      ],
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/10",
    },
    {
      id: "sa",
      title: t('modes.sa.title'),
      shortTitle: "SA",
      description: t('modes.sa.description'),
      features: [
        t('modes.sa.features.0'),
        t('modes.sa.features.1'),
        t('modes.sa.features.2'),
        t('modes.sa.features.3')
      ],
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/10",
    },
    {
      id: "architect",
      title: t('modes.architect.title'),
      shortTitle: "Architect",
      description: t('modes.architect.description'),
      features: [
        t('modes.architect.features.0'),
        t('modes.architect.features.1'),
        t('modes.architect.features.2'),
        t('modes.architect.features.3')
      ],
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      bgGlow: "bg-purple-500/10",
    },
    {
      id: "reviewer",
      title: t('modes.reviewer.title'),
      shortTitle: "Reviewer",
      description: t('modes.reviewer.description'),
      features: [
        t('modes.reviewer.features.0'),
        t('modes.reviewer.features.1'),
        t('modes.reviewer.features.2'),
        t('modes.reviewer.features.3')
      ],
      icon: Shield,
      color: "from-red-500 to-orange-500",
      bgGlow: "bg-red-500/10",
    },
    {
      id: "designer",
      title: t('modes.designer.title'),
      shortTitle: "Designer",
      description: t('modes.designer.description'),
      features: [
        t('modes.designer.features.0'),
        t('modes.designer.features.1'),
        t('modes.designer.features.2'),
        t('modes.designer.features.3')
      ],
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      bgGlow: "bg-pink-500/10",
    },
  ];

  return (
    <section id="modes" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            {t('modes.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('modes.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('modes.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {modes.map((mode, index) => {
            const IconComponent = mode.icon;
            return (
              <Card 
                key={mode.id} 
                className="group relative overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 ${mode.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${mode.color} flex items-center justify-center text-white shadow-lg`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {mode.shortTitle}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {mode.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {mode.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {mode.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                </CardContent>
              </Card>
            );
          })}
        </div>

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