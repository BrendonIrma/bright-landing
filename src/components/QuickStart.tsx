import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Download,
  Puzzle,
  Key,
  Settings,
  Rocket,
  CheckCircle,
  Copy,
  Terminal
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const QuickStart = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      step: "01",
      title: t('quickstart.step1.title'),
      description: t('quickstart.step1.description'),
      icon: Download,
      time: "1 мин"
    },
    {
      step: "02", 
      title: t('quickstart.step2.title'),
      description: t('quickstart.step2.description'),
      icon: Puzzle,
      time: "1 мин"
    },
    {
      step: "03",
      title: t('quickstart.step3.title'),
      description: t('quickstart.step3.description'),
      icon: Key,
      time: "30 сек"
    },
    {
      step: "04",
      title: t('quickstart.step4.title'),
      description: t('quickstart.step4.description'),
      icon: Settings,
      time: "30 сек"
    },
    {
      step: "05",
      title: t('quickstart.step5.title'),
      description: t('quickstart.step5.description'),
      icon: Rocket,
      time: "2 мин"
    }
  ];

  const codeExample = `# Установка расширения
1. Откройте VS Code
2. Перейдите в Extensions (Ctrl+Shift+X)
3. Найдите "AI IDE BAS"
4. Нажмите Install

# Быстрый старт
Ctrl+Shift+P -> AI IDE BAS: Start
Выберите режим: BA | Architect | SA | Reviewer | Designer

# Анализ текущего файла
Ctrl+Shift+P -> AI IDE BAS: Review Current File`;

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

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card 
                  key={index} 
                  className="group animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {step.time}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {step.description}
                        </p>
                      </div>
                      <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <div className="pt-4">
              <Button variant="hero" size="lg" className="w-full">
                {t('quickstart.button')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Code Example */}
          <div className="animate-scale-in" style={{ animationDelay: "600ms" }}>
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">VS Code Extension Setup</CardTitle>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Copy className="w-4 h-4 mr-2" />
                    {t('quickstart.copy')}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-muted-foreground overflow-x-auto">
                    <code>{codeExample}</code>
                  </pre>
                </div>
                
                <div className="mt-6 space-y-3">
                  {[
                    t('quickstart.features.0'),
                    t('quickstart.features.1'),
                    t('quickstart.features.2'),
                    t('quickstart.features.3')
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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