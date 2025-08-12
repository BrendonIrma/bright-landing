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
    'features.description': 'Современные AI технологии для автоматизации документирования, визуализации требований и упрощения рутинных процессов прямо в VS Code.',
    'features.ai.title': 'Выбор любой LLM',
    'features.ai.description': 'Интеграция с LLM по вашему API-ключу',
    'features.speed.title': 'Экономия времени',
    'features.speed.description': 'Сократите затраты на рутинные операции более чем в два раза',
    'features.integration.title': 'Интеграция VS Code',
    'features.integration.description': 'Полная интеграция с VS Code, Git, терминалом и другими инструментами',
    'features.validation.title': 'Валидация а не генерация',
    'features.validation.description': 'Забудьте про проблему чистого листа',
    'features.templates.title': 'Качественные шаблоны',
    'features.templates.description': 'AI IDE BAS включает шаблоны артефактов разработанные признанными экспертами отрасли',
    'features.customization.title': 'Гибкая настройка',
    'features.customization.description': 'Доработайте режимы с учетом потребностей вашего проекта',
    // In Development Features
    'features.indev.badge': 'В разработке',
    'features.indev.title': 'Скоро в AI IDE BAS',
    'features.indev.description': 'Функции, которые мы активно разрабатываем для улучшения вашего опыта',
    'features.team.title': 'Командная работа',
    'features.team.description': 'Совместная работа над проектами с общим контекстом',
    'features.versioning.title': 'Версионирование',
    'features.versioning.description': 'Полная история изменений и возможность откатов',
    'features.stats.developers': 'Разработчиков',
    'features.stats.projects': 'Проектов',
    'features.stats.uptime': 'Uptime',
    'features.stats.support': 'Поддержка',
    
    // Quick Start
    'quickstart.badge': 'Быстрый старт',
    'quickstart.title': 'Начните за 5 простых шагов',
    'quickstart.description': 'До первых результатов осталось меньше 5 минут',
    'quickstart.step1.title': 'Установите VS Code',
    'quickstart.step1.description': 'Используйте официальный сайт для загрузки и установки',
    'quickstart.step2.title': 'Установите AI IDE BAS',
    'quickstart.step2.description': 'AI IDE BAS доступен в маркетплейсе расширений VS Code',
    'quickstart.step3.title': 'Вставьте API ключ',
    'quickstart.step3.description': 'Используйте личный ключ для подключения LLM',
    'quickstart.step4.title': 'Выберите режим',
    'quickstart.step4.description': 'Выберите режим для вашей задачи или воспользуйтесь встроенным режимом помощника',
    'quickstart.step5.title': 'Начните работу',
    'quickstart.step5.description': 'Опишите задачу и получите сформированный артефакт',
    'quickstart.button': 'Установить AI IDE BAS',
    'quickstart.copy': 'Копировать',
    'quickstart.features.0': 'Нативная интеграция с VS Code',
    'quickstart.features.1': 'Работа с Git из коробки',
    'quickstart.features.2': 'Синхронизация с командой',
    'quickstart.features.3': 'Поддержка всех языков VS Code',
    'quickstart.help.title': 'Нужна помощь с настройкой?',
    'quickstart.help.description': 'Вы можете связаться с нами через наши социальные сети.',
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
    'footer.copyright': '© 2025 AI IDE BAS. Все права защищены.',
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
    'features.description': 'Modern AI technologies for automating documentation, visualizing requirements and simplifying routine processes right in VS Code.',
    'features.ai.title': 'Any LLM Choice',
    'features.ai.description': 'Integration with LLM via your API key',
    'features.speed.title': 'Time Savings',
    'features.speed.description': 'Reduce costs on routine operations by more than half',
    'features.integration.title': 'VS Code Integration',
    'features.integration.description': 'Full integration with VS Code, Git, terminal and other tools',
    'features.validation.title': 'Validation not Generation',
    'features.validation.description': 'Forget about the blank page problem',
    'features.templates.title': 'Quality Templates',
    'features.templates.description': 'AI IDE BAS includes artifact templates developed by recognized industry experts',
    'features.customization.title': 'Flexible Configuration',
    'features.customization.description': 'Refine modes according to your project needs',
    // In Development Features
    'features.indev.badge': 'In Development',
    'features.indev.title': 'Coming Soon to AI IDE BAS',
    'features.indev.description': 'Features we are actively developing to improve your experience',
    'features.team.title': 'Team Collaboration',
    'features.team.description': 'Collaborative work on projects with shared context',
    'features.versioning.title': 'Versioning',
    'features.versioning.description': 'Complete change history and rollback capabilities',
    'features.stats.developers': 'Developers',
    'features.stats.projects': 'Projects',
    'features.stats.uptime': 'Uptime',
    'features.stats.support': 'Support',
    
    // Quick Start
    'quickstart.badge': 'Quick Start',
    'quickstart.title': 'Get Started in 5 Simple Steps',
    'quickstart.description': 'Less than 5 minutes to first results',
    'quickstart.step1.title': 'Install VS Code',
    'quickstart.step1.description': 'Use the official website to download and install',
    'quickstart.step2.title': 'Install AI IDE BAS',
    'quickstart.step2.description': 'AI IDE BAS is available in the VS Code extensions marketplace',
    'quickstart.step3.title': 'Insert API Key',
    'quickstart.step3.description': 'Use your personal key to connect LLM',
    'quickstart.step4.title': 'Choose Mode',
    'quickstart.step4.description': 'Select mode for your task or use the built-in assistant mode',
    'quickstart.step5.title': 'Start Working',
    'quickstart.step5.description': 'Describe your task and get the formed artifact',
    'quickstart.button': 'Install AI IDE BAS',
    'quickstart.copy': 'Copy',
    'quickstart.features.0': 'Native VS Code integration',
    'quickstart.features.1': 'Git support out of the box',
    'quickstart.features.2': 'Team synchronization',
    'quickstart.features.3': 'Support for all VS Code languages',
    'quickstart.help.title': 'Need help with setup?',
    'quickstart.help.description': 'You can contact us through our social networks.',
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
    'footer.copyright': '© 2025 AI IDE BAS. All rights reserved.',
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