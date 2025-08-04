import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Определяем все переводы
const translations = {
  ru: {
    // Header
    'header.features': 'Возможности',
    'header.modes': 'Режимы',
    'header.quickstart': 'Начать',
    'header.integrations': 'Интеграции',
    'header.community': 'Сообщество',
    'header.github': 'GitHub',
    'header.tryNow': 'Попробовать',
    
    // Hero
    'hero.badge': 'Революция в разработке',
    'hero.title': 'Умное расширение\nдля VS Code',
    'hero.description': 'AI IDE BAS объединяет в себе пять специализированных режимов работы: Business Analyst, Architect, System Analyst, Code Reviewer и Designer. Один инструмент для всего цикла разработки прямо в VS Code.',
    'hero.startFree': 'Начать бесплатно',
    'hero.watchDemo': 'Посмотреть демо',
    'hero.tryModes': 'Попробуйте разные режимы',
    'hero.tryMode': 'Попробовать режим',
    
    // Hero Demo Modes
    'hero.mode.architect.title': 'Режим Архитектора',
    'hero.mode.architect.description': 'Проектирование системной архитектуры',
    'hero.mode.ba.title': 'Режим BA',
    'hero.mode.ba.description': 'Анализ бизнес-требований',
    'hero.mode.reviewer.title': 'Режим Ревьюера',
    'hero.mode.reviewer.description': 'Проверка кода и архитектуры',
    
    // Mode Cards
    'modes.badge': 'Режимы работы',
    'modes.title': 'Пять экспертов в одном инструменте',
    'modes.description': 'Каждый режим специализируется на определенной области разработки, обеспечивая экспертный уровень помощи на каждом этапе проекта',
    'modes.ba.title': 'Business Analyst',
    'modes.ba.description': 'Анализируйте бизнес-требования, создавайте user stories и планируйте функциональность продукта',
    'modes.ba.features.0': 'Анализ требований',
    'modes.ba.features.1': 'User Story генерация',
    'modes.ba.features.2': 'Планирование MVP',
    'modes.ba.features.3': 'Stakeholder mapping',
    'modes.architect.title': 'System Architect',
    'modes.architect.description': 'Проектируйте архитектуру системы, выбирайте технологии и создавайте диаграммы компонентов',
    'modes.architect.features.0': 'Архитектурные паттерны',
    'modes.architect.features.1': 'Выбор технологий',
    'modes.architect.features.2': 'Диаграммы системы',
    'modes.architect.features.3': 'Масштабируемость',
    'modes.sa.title': 'System Analyst',
    'modes.sa.description': 'Анализируйте системные процессы, оптимизируйте workflow и документируйте интеграции',
    'modes.sa.features.0': 'Процессный анализ',
    'modes.sa.features.1': 'Интеграционные схемы',
    'modes.sa.features.2': 'Workflow оптимизация',
    'modes.sa.features.3': 'Техническая документация',
    'modes.reviewer.title': 'Code Reviewer',
    'modes.reviewer.description': 'Проводите ревью кода, находите уязвимости и предлагайте улучшения архитектуры',
    'modes.reviewer.features.0': 'Code review',
    'modes.reviewer.features.1': 'Поиск уязвимостей',
    'modes.reviewer.features.2': 'Рефакторинг',
    'modes.reviewer.features.3': 'Best practices',
    'modes.designer.title': 'UX/UI Designer',
    'modes.designer.description': 'Создавайте пользовательские интерфейсы, проводите UX-исследования и прототипируйте',
    'modes.designer.features.0': 'UI/UX дизайн',
    'modes.designer.features.1': 'Прототипирование',
    'modes.designer.features.2': 'User research',
    'modes.designer.features.3': 'Design системы',
    'modes.tryMode': 'Попробовать режим',
    'modes.cta.title': 'Готовы попробовать все режимы?',
    'modes.cta.description': 'Начните с бесплатного аккаунта и получите доступ ко всем режимам работы',
    'modes.cta.button': 'Начать бесплатно',
    
    // Features
    'features.badge': 'Возможности платформы',
    'features.title': 'Почему выбирают AI IDE BAS',
    'features.description': 'Мощные возможности и современные технологии для ускорения разработки прямо в VS Code с повышением качества кода',
    'features.ai.title': 'ИИ нового поколения',
    'features.ai.description': 'Современные LLM модели, обученные на актуальных практиках разработки',
    'features.speed.title': 'Мгновенные результаты',
    'features.speed.description': 'Получайте качественные решения за секунды, а не часы',
    'features.security.title': 'Безопасность данных',
    'features.security.description': 'Корпоративный уровень защиты с шифрованием и приватными инстансами',
    'features.languages.title': 'Поддержка языков',
    'features.languages.description': 'Работает с любыми языками программирования и фреймворками',
    'features.integration.title': 'Интеграция VS Code',
    'features.integration.description': 'Полная интеграция с VS Code, Git, терминалом и другими инструментами',
    'features.availability.title': '24/7 доступность',
    'features.availability.description': 'Ваш AI-помощник всегда готов помочь в любое время суток',
    'features.versioning.title': 'Версионирование',
    'features.versioning.description': 'Полная история изменений и возможность откатов',
    'features.knowledge.title': 'База знаний',
    'features.knowledge.description': 'Огромная база паттернов, best practices и решений',
    'features.team.title': 'Командная работа',
    'features.team.description': 'Совместная работа над проектами с общим контекстом',
    'features.stats.developers': 'Разработчиков',
    'features.stats.projects': 'Проектов',
    'features.stats.uptime': 'Uptime',
    'features.stats.support': 'Поддержка',
    
    // Quick Start
    'quickstart.badge': 'Быстрый старт',
    'quickstart.title': 'Начните за 3 простых шага',
    'quickstart.description': 'От регистрации до первых результатов — меньше 5 минут',
    'quickstart.step1.title': 'Создайте аккаунт',
    'quickstart.step1.description': 'Быстрая регистрация через GitHub или email за 30 секунд',
    'quickstart.step2.title': 'Выберите режим',
    'quickstart.step2.description': 'Определите задачу и выберите подходящий режим работы AI',
    'quickstart.step3.title': 'Начните работу',
    'quickstart.step3.description': 'Опишите задачу и получите экспертные рекомендации',
    'quickstart.button': 'Начать бесплатно',
    'quickstart.copy': 'Копировать',
    'quickstart.features.0': 'Нативная интеграция с VS Code',
    'quickstart.features.1': 'Работа с Git из коробки',
    'quickstart.features.2': 'Синхронизация с командой',
    'quickstart.features.3': 'Поддержка всех языков VS Code',
    'quickstart.help.title': 'Нужна помощь с настройкой?',
    'quickstart.help.description': 'Наша команда поможет настроить AI IDE BAS под ваши процессы разработки',
    'quickstart.help.docs': 'Посмотреть документацию',
    'quickstart.help.contact': 'Связаться с нами',
    
    // Footer
    'footer.description': 'Революционный AI-инструмент для команд разработки. Пять экспертных режимов в одной платформе для ускорения всего цикла разработки.',
    'footer.product': 'Продукт',
    'footer.support': 'Поддержка',
    'footer.company': 'Компания',
    'footer.product.features': 'Возможности',
    'footer.product.modes': 'Режимы работы',
    'footer.product.integrations': 'Интеграции',
    'footer.product.pricing': 'Цены',
    'footer.support.docs': 'Документация',
    'footer.support.api': 'API Reference',
    'footer.support.community': 'Сообщество',
    'footer.support.help': 'Поддержка',
    'footer.company.about': 'О нас',
    'footer.company.blog': 'Блог',
    'footer.company.careers': 'Карьера',
    'footer.company.press': 'Пресса',
    'footer.legal.privacy': 'Политика конфиденциальности',
    'footer.legal.terms': 'Условия использования',
    'footer.legal.cookies': 'Cookies',
    'footer.legal.security': 'Безопасность',
    'footer.newsletter.title': 'Будьте в курсе новостей',
    'footer.newsletter.description': 'Получайте обновления о новых функциях и режимах работы',
    'footer.newsletter.placeholder': 'Ваш email',
    'footer.newsletter.subscribe': 'Подписаться',
    'footer.copyright': '© 2024 AI IDE BAS. Все права защищены.',
    'footer.madeWith': 'Сделано с',
    'footer.forDevelopers': 'для разработчиков',
  },
  en: {
    // Header
    'header.features': 'Features',
    'header.modes': 'Modes',
    'header.quickstart': 'Get Started',
    'header.integrations': 'Integrations',
    'header.community': 'Community',
    'header.github': 'GitHub',
    'header.tryNow': 'Try Now',
    
    // Hero
    'hero.badge': 'Development Revolution',
    'hero.title': 'Smart Extension\nfor VS Code',
    'hero.description': 'AI IDE BAS combines five specialized work modes: Business Analyst, Architect, System Analyst, Code Reviewer, and Designer. One tool for the entire development cycle right in VS Code.',
    'hero.startFree': 'Start Free',
    'hero.watchDemo': 'Watch Demo',
    'hero.tryModes': 'Try Different Modes',
    'hero.tryMode': 'Try Mode',
    
    // Hero Demo Modes
    'hero.mode.architect.title': 'Architect Mode',
    'hero.mode.architect.description': 'System architecture design',
    'hero.mode.ba.title': 'BA Mode',
    'hero.mode.ba.description': 'Business requirements analysis',
    'hero.mode.reviewer.title': 'Reviewer Mode',
    'hero.mode.reviewer.description': 'Code and architecture review',
    
    // Mode Cards
    'modes.badge': 'Work Modes',
    'modes.title': 'Five Experts in One Tool',
    'modes.description': 'Each mode specializes in a specific area of development, providing expert-level assistance at every stage of the project',
    'modes.ba.title': 'Business Analyst',
    'modes.ba.description': 'Analyze business requirements, create user stories and plan product functionality',
    'modes.ba.features.0': 'Requirements analysis',
    'modes.ba.features.1': 'User Story generation',
    'modes.ba.features.2': 'MVP planning',
    'modes.ba.features.3': 'Stakeholder mapping',
    'modes.architect.title': 'System Architect',
    'modes.architect.description': 'Design system architecture, choose technologies and create component diagrams',
    'modes.architect.features.0': 'Architectural patterns',
    'modes.architect.features.1': 'Technology selection',
    'modes.architect.features.2': 'System diagrams',
    'modes.architect.features.3': 'Scalability',
    'modes.sa.title': 'System Analyst',
    'modes.sa.description': 'Analyze system processes, optimize workflows and document integrations',
    'modes.sa.features.0': 'Process analysis',
    'modes.sa.features.1': 'Integration schemes',
    'modes.sa.features.2': 'Workflow optimization',
    'modes.sa.features.3': 'Technical documentation',
    'modes.reviewer.title': 'Code Reviewer',
    'modes.reviewer.description': 'Conduct code reviews, find vulnerabilities and suggest architecture improvements',
    'modes.reviewer.features.0': 'Code review',
    'modes.reviewer.features.1': 'Vulnerability detection',
    'modes.reviewer.features.2': 'Refactoring',
    'modes.reviewer.features.3': 'Best practices',
    'modes.designer.title': 'UX/UI Designer',
    'modes.designer.description': 'Create user interfaces, conduct UX research and prototyping',
    'modes.designer.features.0': 'UI/UX design',
    'modes.designer.features.1': 'Prototyping',
    'modes.designer.features.2': 'User research',
    'modes.designer.features.3': 'Design systems',
    'modes.tryMode': 'Try Mode',
    'modes.cta.title': 'Ready to try all modes?',
    'modes.cta.description': 'Start with a free account and get access to all work modes',
    'modes.cta.button': 'Start Free',
    
    // Features
    'features.badge': 'Platform Features',
    'features.title': 'Why Choose AI IDE BAS',
    'features.description': 'Powerful capabilities and modern technologies to accelerate development right in VS Code with improved code quality',
    'features.ai.title': 'Next-Gen AI',
    'features.ai.description': 'Modern LLM models trained on current development practices',
    'features.speed.title': 'Instant Results',
    'features.speed.description': 'Get quality solutions in seconds, not hours',
    'features.security.title': 'Data Security',
    'features.security.description': 'Enterprise-level protection with encryption and private instances',
    'features.languages.title': 'Language Support',
    'features.languages.description': 'Works with any programming languages and frameworks',
    'features.integration.title': 'VS Code Integration',
    'features.integration.description': 'Full integration with VS Code, Git, terminal and other tools',
    'features.availability.title': '24/7 Availability',
    'features.availability.description': 'Your AI assistant is always ready to help at any time',
    'features.versioning.title': 'Versioning',
    'features.versioning.description': 'Complete change history and rollback capabilities',
    'features.knowledge.title': 'Knowledge Base',
    'features.knowledge.description': 'Huge database of patterns, best practices and solutions',
    'features.team.title': 'Team Collaboration',
    'features.team.description': 'Collaborative work on projects with shared context',
    'features.stats.developers': 'Developers',
    'features.stats.projects': 'Projects',
    'features.stats.uptime': 'Uptime',
    'features.stats.support': 'Support',
    
    // Quick Start
    'quickstart.badge': 'Quick Start',
    'quickstart.title': 'Get Started in 3 Simple Steps',
    'quickstart.description': 'From registration to first results — less than 5 minutes',
    'quickstart.step1.title': 'Create Account',
    'quickstart.step1.description': 'Quick registration via GitHub or email in 30 seconds',
    'quickstart.step2.title': 'Choose Mode',
    'quickstart.step2.description': 'Define your task and select the appropriate AI work mode',
    'quickstart.step3.title': 'Start Working',
    'quickstart.step3.description': 'Describe your task and get expert recommendations',
    'quickstart.button': 'Start Free',
    'quickstart.copy': 'Copy',
    'quickstart.features.0': 'Native VS Code integration',
    'quickstart.features.1': 'Git support out of the box',
    'quickstart.features.2': 'Team synchronization',
    'quickstart.features.3': 'Support for all VS Code languages',
    'quickstart.help.title': 'Need help with setup?',
    'quickstart.help.description': 'Our team will help configure AI IDE BAS for your development processes',
    'quickstart.help.docs': 'View Documentation',
    'quickstart.help.contact': 'Contact Us',
    
    // Footer
    'footer.description': 'Revolutionary AI tool for development teams. Five expert modes in one platform to accelerate the entire development cycle.',
    'footer.product': 'Product',
    'footer.support': 'Support',
    'footer.company': 'Company',
    'footer.product.features': 'Features',
    'footer.product.modes': 'Work Modes',
    'footer.product.integrations': 'Integrations',
    'footer.product.pricing': 'Pricing',
    'footer.support.docs': 'Documentation',
    'footer.support.api': 'API Reference',
    'footer.support.community': 'Community',
    'footer.support.help': 'Support',
    'footer.company.about': 'About',
    'footer.company.blog': 'Blog',
    'footer.company.careers': 'Careers',
    'footer.company.press': 'Press',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms of Service',
    'footer.legal.cookies': 'Cookies',
    'footer.legal.security': 'Security',
    'footer.newsletter.title': 'Stay Updated',
    'footer.newsletter.description': 'Get updates about new features and work modes',
    'footer.newsletter.placeholder': 'Your email',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.copyright': '© 2024 AI IDE BAS. All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.forDevelopers': 'for developers',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Получаем язык из localStorage или используем системный
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['ru', 'en'].includes(savedLang)) {
      return savedLang;
    }
    // Определяем язык браузера
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('ru') ? 'ru' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};