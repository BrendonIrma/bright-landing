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
    'hero.badge': 'Революция в аналитике',
    'hero.title': 'Умное расширение\nдля VS Code',
    'hero.description': 'В AI IDE BAS встроены специализированные режимы работы: Business Analyst, Architect, System Analyst, Code Reviewer и Designer. Один инструмент для всего цикла разработки требований прямо в VS Code.',
    'hero.startFree': 'Установить AI IDE BAS',
    'hero.watchDemo': 'Посмотреть демо',
    'hero.tryModes': 'Попробуйте разные режимы',
    'hero.tryMode': 'Попробовать режим',
    
    // Hero Demo Modes  
    'hero.mode.ba.title': 'Режим Бизнес Аналитика',
    'hero.mode.ba.description': 'US, UC, бизнес-процессы, критерии приемки, создает Глоссарий',
    'hero.mode.sa.title': 'Режим Системного Аналитика', 
    'hero.mode.sa.description': 'Sequence-диаграммы, OpenAPI, AsyncAPI, логика работы фичи, модель данных + ERD, создает НФТ',
    'hero.mode.reviewer.title': 'Режим Ревьюера',
    'hero.mode.reviewer.description': 'Проверка артефактов: на полноту требований, на соответствие правилам архитектуры, на соответствие правилам кибербезопасности, а также проверка от инженера поддержки',
    
    // Mode Cards
    'modes.badge': 'Режимы работы',
    'modes.title': 'Разработка полного комплекта требований в специализированных режимах',
    'modes.description': 'Каждый режим специализируется на определенной области разработки требований, обеспечивая экспертный уровень помощи на каждом этапе проекта',
    'modes.ba.title': 'Business Analyst',
    'modes.ba.description': 'Создает User Stories, Use Cases, бизнес-процессы, критерии приемки и Глоссарий',
    'modes.ba.features.0': 'User Stories (US)',
    'modes.ba.features.1': 'Use Cases (UC)', 
    'modes.ba.features.2': 'Критерии приемки',
    'modes.ba.features.3': 'Глоссарий',
    'modes.sa.title': 'System Analyst',
    'modes.sa.description': 'Создает Sequence-диаграммы, OpenAPI, AsyncAPI, логику работы фичи, модель данных + ERD и нефункциональные требования',
    'modes.sa.features.0': 'Sequence-диаграммы',
    'modes.sa.features.1': 'OpenAPI/AsyncAPI',
    'modes.sa.features.2': 'Модель данных + ERD',
    'modes.sa.features.3': 'Нефункциональные требования',
    'modes.architect.title': 'Architect',
    'modes.architect.description': 'Создает Component-диаграммы для проектирования архитектуры системы',
    'modes.architect.features.0': 'Component-диаграммы',
    'modes.architect.features.1': 'C4 (в разработке)',
    'modes.architect.features.2': 'Архитектурные паттерны',
    'modes.architect.features.3': 'Масштабируемость',
    'modes.designer.title': 'Designer',
    'modes.designer.description': 'Создает макеты интерфейсов и UI компоненты',
    'modes.designer.features.0': 'Макеты интерфейсов',
    'modes.designer.features.1': 'UI компоненты',
    'modes.designer.features.2': 'Прототипирование',
    'modes.designer.features.3': 'Design системы',
    'modes.reviewer.title': 'Reviewer',
    'modes.reviewer.description': 'Проверяет артефакты на полноту требований, соответствие правилам архитектуры и кибербезопасности',
    'modes.reviewer.features.0': 'Проверка полноты требований',
    'modes.reviewer.features.1': 'Проверка архитектуры',
    'modes.reviewer.features.2': 'Проверка кибербезопасности',
    'modes.reviewer.features.3': 'Проверка инженера поддержки',
    'modes.cta.title': 'Готовы попробовать все режимы?',
    'modes.cta.description': 'Скачайте расширение AI IDE BAS и получите доступ ко всем режимам работ',
    'modes.cta.button': 'Установить AI IDE BAS',
    
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
    'hero.badge': 'Analytics Revolution',
    'hero.title': 'Smart Extension\nfor VS Code',
    'hero.description': 'AI IDE BAS includes specialized work modes: Business Analyst, Architect, System Analyst, Code Reviewer, and Designer. One tool for the entire requirements development cycle right in VS Code.',
    'hero.startFree': 'Install AI IDE BAS',
    'hero.watchDemo': 'Watch Demo',
    'hero.tryModes': 'Try Different Modes',
    'hero.tryMode': 'Try Mode',
    
    // Hero Demo Modes  
    'hero.mode.ba.title': 'Business Analyst Mode',
    'hero.mode.ba.description': 'US, UC, business processes, acceptance criteria, creates Glossary',
    'hero.mode.sa.title': 'System Analyst Mode',
    'hero.mode.sa.description': 'Sequence diagrams, OpenAPI, AsyncAPI, feature logic, data model + ERD, creates NFR',
    'hero.mode.reviewer.title': 'Reviewer Mode',
    'hero.mode.reviewer.description': 'Artifact checks: requirements completeness, architecture compliance, cybersecurity compliance, and support engineer checks',
    
    // Mode Cards
    'modes.badge': 'Work Modes',
    'modes.title': 'Comprehensive Requirements Development in Specialized Modes',
    'modes.description': 'Each mode specializes in a specific area of requirements development, providing expert-level assistance at every stage of the project',
    'modes.ba.title': 'Business Analyst',
    'modes.ba.description': 'Creates User Stories, Use Cases, business processes, acceptance criteria and Glossary',
    'modes.ba.features.0': 'User Stories (US)',
    'modes.ba.features.1': 'Use Cases (UC)',
    'modes.ba.features.2': 'Acceptance criteria',
    'modes.ba.features.3': 'Glossary',
    'modes.sa.title': 'System Analyst',
    'modes.sa.description': 'Creates Sequence diagrams, OpenAPI, AsyncAPI, feature logic, data model + ERD and non-functional requirements',
    'modes.sa.features.0': 'Sequence diagrams',
    'modes.sa.features.1': 'OpenAPI/AsyncAPI',
    'modes.sa.features.2': 'Data model + ERD',
    'modes.sa.features.3': 'Non-functional requirements',
    'modes.architect.title': 'Architect',
    'modes.architect.description': 'Creates Component diagrams for system architecture design',
    'modes.architect.features.0': 'Component diagrams',
    'modes.architect.features.1': 'C4 (in development)',
    'modes.architect.features.2': 'Architectural patterns',
    'modes.architect.features.3': 'Scalability',
    'modes.designer.title': 'Designer',
    'modes.designer.description': 'Creates interface mockups and UI components',
    'modes.designer.features.0': 'Interface mockups',
    'modes.designer.features.1': 'UI components',
    'modes.designer.features.2': 'Prototyping',
    'modes.designer.features.3': 'Design systems',
    'modes.reviewer.title': 'Reviewer',
    'modes.reviewer.description': 'Checks artifacts for requirements completeness, architecture compliance and cybersecurity',
    'modes.reviewer.features.0': 'Requirements completeness check',
    'modes.reviewer.features.1': 'Architecture compliance check',
    'modes.reviewer.features.2': 'Cybersecurity check',
    'modes.reviewer.features.3': 'Support engineer check',
    'modes.cta.title': 'Ready to try all modes?',
    'modes.cta.description': 'Download AI IDE BAS extension and get access to all work modes',
    'modes.cta.button': 'Install AI IDE BAS',
    
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