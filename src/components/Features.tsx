import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  Bot,
  Clock,
  GitBranch,
  Database,
  Puzzle
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "ИИ нового поколения",
      description: "Современные LLM модели, обученные на актуальных практиках разработки",
      highlight: "GPT-4 & Claude"
    },
    {
      icon: Zap,
      title: "Мгновенные результаты",
      description: "Получайте качественные решения за секунды, а не часы",
      highlight: "< 2 сек"
    },
    {
      icon: Shield,
      title: "Безопасность данных",
      description: "Корпоративный уровень защиты с шифрованием и приватными инстансами",
      highlight: "SOC 2 Type II"
    },
    {
      icon: Globe,
      title: "Поддержка языков",
      description: "Работает с любыми языками программирования и фреймворками",
      highlight: "50+ языков"
    },
    {
      icon: Cpu,
      title: "Умная интеграция",
      description: "Прямая интеграция с IDE, Git, Jira и другими инструментами разработки",
      highlight: "20+ интеграций"
    },
    {
      icon: Clock,
      title: "24/7 доступность",
      description: "Ваш AI-помощник всегда готов помочь в любое время суток",
      highlight: "99.9% uptime"
    },
    {
      icon: GitBranch,
      title: "Версионирование",
      description: "Полная история изменений и возможность откатов",
      highlight: "Git-like"
    },
    {
      icon: Database,
      title: "База знаний",
      description: "Огромная база паттернов, best practices и решений",
      highlight: "10M+ примеров"
    },
    {
      icon: Puzzle,
      title: "Командная работа",
      description: "Совместная работа над проектами с общим контекстом",
      highlight: "Team-ready"
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
            Возможности платформы
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Почему выбирают DevMode AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мощные возможности и современные технологии для ускорения разработки 
            и повышения качества кода
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-mono">
                      {feature.highlight}
                    </Badge>
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

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50K+", label: "Разработчиков" },
            { value: "1M+", label: "Проектов" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Поддержка" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;