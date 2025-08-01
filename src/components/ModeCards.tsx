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

const ModeCards = () => {
  const modes = [
    {
      id: "ba",
      title: "Business Analyst",
      shortTitle: "BA",
      description: "Анализируйте бизнес-требования, создавайте user stories и планируйте функциональность продукта",
      features: [
        "Анализ требований",
        "User Story генерация", 
        "Планирование MVP",
        "Stakeholder mapping"
      ],
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/10",
    },
    {
      id: "architect",
      title: "System Architect",
      shortTitle: "Architect",
      description: "Проектируйте архитектуру системы, выбирайте технологии и создавайте диаграммы компонентов",
      features: [
        "Архитектурные паттерны",
        "Выбор технологий",
        "Диаграммы системы",
        "Масштабируемость"
      ],
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      bgGlow: "bg-purple-500/10",
    },
    {
      id: "sa",
      title: "System Analyst",
      shortTitle: "SA",
      description: "Анализируйте системные процессы, оптимизируйте workflow и документируйте интеграции",
      features: [
        "Процессный анализ",
        "Интеграционные схемы",
        "Workflow оптимизация",
        "Техническая документация"
      ],
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/10",
    },
    {
      id: "reviewer",
      title: "Code Reviewer",
      shortTitle: "Reviewer",
      description: "Проводите ревью кода, находите уязвимости и предлагайте улучшения архитектуры",
      features: [
        "Code review",
        "Поиск уязвимостей",
        "Рефакторинг",
        "Best practices"
      ],
      icon: Shield,
      color: "from-red-500 to-orange-500",
      bgGlow: "bg-red-500/10",
    },
    {
      id: "designer",
      title: "UX/UI Designer",
      shortTitle: "Designer",
      description: "Создавайте пользовательские интерфейсы, проводите UX-исследования и прототипируйте",
      features: [
        "UI/UX дизайн",
        "Прототипирование",
        "User research",
        "Design системы"
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
            Режимы работы
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Пять экспертов в одном инструменте
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Каждый режим специализируется на определенной области разработки, 
            обеспечивая экспертный уровень помощи на каждом этапе проекта
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

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary/10 transition-colors"
                  >
                    Попробовать режим
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
                Готовы попробовать все режимы?
              </h3>
              <p className="text-muted-foreground mb-6">
                Начните с бесплатного аккаунта и получите доступ ко всем режимам работы
              </p>
              <Button variant="hero" size="lg">
                Начать бесплатно
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