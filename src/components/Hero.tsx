import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Sparkles, Zap, Brain, Code2, Settings, Palette, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const [activeDemo, setActiveDemo] = useState("ba");
  const { t } = useLanguage();

  const demoModes = {
    ba: {
      title: t('hero.mode.ba.title'),
      description: t('hero.mode.ba.description'),
      code: `# US-XXX: [Краткое название функциональности]

Как <роль пользователя>,
я хочу <желаемое действие/функциональность>,
чтобы <ожидаемый результат/выгода>.

## Критерии приемки
- [ ] Пользователь может выполнить действие
- [ ] Система обрабатывает запрос корректно
- [ ] Результат соответствует ожиданиям`,
      icon: Sparkles,
    },
    sa: {
      title: t('hero.mode.sa.title'),
      description: t('hero.mode.sa.description'),
      code: `@startuml
title Процесс установки расширения AI IDE BAS

actor Пользователь
participant "VS Code" as VSCode

Пользователь -> VSCode: Нажимает "Установить"
VSCode -> VSCode: Устанавливает расширение
VSCode -> Пользователь: Дает суперсилу
@enduml`,
      icon: Brain,
    },
    architect: {
      title: t('hero.mode.architect.title'),
      description: t('hero.mode.architect.description'),
      code: `@startuml
title Архитектура системы

package "Frontend" {
  [React App]
  [UI Components]
}

package "Backend" {
  [API Gateway]
  [User Service]
  [Data Service]
}

database "Database" {
  [PostgreSQL]
}
@enduml`,
      icon: Settings,
    },
    reviewer: {
      title: t('hero.mode.reviewer.title'),
      description: t('hero.mode.reviewer.description'),
      code: `**Проверка логической целостности:**
- [ ] AS IS логически предшествует TO BE
- [ ] Роли соответствуют реальным участникам процесса
- [ ] Действия выполнимы в рамках предметной области
- [ ] Результаты достижимы и измеримы

**Статус:** ✅ Требования корректны`,
      icon: Zap,
    },
    designer: {
      title: t('hero.mode.designer.title'),
      description: t('hero.mode.designer.description'),
      code: `Header
==================
[Logo] [Menu] [Search] [User]

Main Content Area
==================`,
      icon: Palette,
    },
    pm: {
      title: t('hero.mode.pm.title'),
      description: t('hero.mode.pm.description'),
      code: `@startuml
title Диаграмма Ганта - Проект AI IDE BAS

[Анализ требований] starts 2025-01-01 and lasts 14 days
[Проектирование] starts 2025-01-15 and lasts 21 days
[Разработка] starts 2025-02-05 and lasts 30 days
[Тестирование] starts 2025-03-07 and lasts 14 days
[Внедрение] starts 2025-03-21 and lasts 7 days
@enduml`,
      icon: Calendar,
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            {t('hero.badge')}
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            {t('hero.title').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4">
            <Button 
              variant="hero" 
              size="hero" 
              className="animate-scale-in w-full sm:w-auto"
              asChild
            >
              <a href="https://marketplace.visualstudio.com/items?itemName=8eton.ai-ide-bas" target="_blank" rel="noopener noreferrer">
                {t('hero.startFree')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button 
              variant="glass" 
              size="hero" 
              className="animate-scale-in w-full sm:w-auto"
              onClick={() => window.open('https://vkvideo.ru/video-231325948_456239030', '_blank')}
            >
              <Play className="w-5 h-5 mr-2" />
              {t('hero.watchDemo')}
            </Button>
          </div>
        </div>

        {/* Demo Section */}
        <div className="max-w-6xl mx-auto animate-slide-up px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">{t('hero.tryModes')}</h3>
            <div className="flex flex-col gap-3">
              {/* Первая строка - первые 3 режима */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {Object.entries(demoModes).slice(0, 3).map(([key, mode]) => {
                  const IconComponent = mode.icon;
                  return (
                    <Button
                      key={key}
                      variant={activeDemo === key ? "default" : "glass"}
                      size="sm"
                      onClick={() => setActiveDemo(key)}
                      className="transition-all duration-300 text-xs sm:text-sm"
                    >
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="hidden xs:inline">{mode.title}</span>
                      <span className="xs:hidden">{mode.title.split(' ')[0]}</span>
                    </Button>
                  );
                })}
              </div>
              {/* Вторая строка - последние 3 режима */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {Object.entries(demoModes).slice(3).map(([key, mode]) => {
                  const IconComponent = mode.icon;
                  return (
                    <Button
                      key={key}
                      variant={activeDemo === key ? "default" : "glass"}
                      size="sm"
                      onClick={() => setActiveDemo(key)}
                      className="transition-all duration-300 text-xs sm:text-sm"
                    >
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="hidden xs:inline">{mode.title}</span>
                      <span className="xs:hidden">{mode.title.split(' ')[0]}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-4 sm:p-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-start">
                <div>
                  <div className="flex items-center mb-4">
                    {React.createElement(demoModes[activeDemo].icon, {
                      className: "w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-primary"
                    })}
                    <h4 className="text-lg sm:text-xl font-semibold">
                      {demoModes[activeDemo].title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground whitespace-pre-line text-sm sm:text-base">
                    {demoModes[activeDemo].description}
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-3 sm:p-4 border border-glass-border">
                  <pre className="text-xs sm:text-sm font-mono text-muted-foreground overflow-x-auto">
                    <code>{demoModes[activeDemo].code}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;