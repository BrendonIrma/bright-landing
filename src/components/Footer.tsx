import { Button } from "@/components/ui/button";
import { 
  Github, 
  Send, 
  ArrowUpRight,
  Youtube
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import VkIcon from "@/components/icons/VkIcon";

const Footer = () => {
  const { t } = useLanguage();
  


  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/dradns/AI-IDE-BAS" },
    { name: "Telegram", icon: Send, href: "https://t.me/AI_IDE_BAS" },
    { name: "VK", icon: VkIcon, href: "https://vk.com/ai_ide_bas" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UC5OIZ9y0DScRQ3qGxfg1w?ysclid=mf10fagtyd602830080" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-glass-border relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Info - слева */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <img 
                  src="/логоAIFirstIDEBAS .png" 
                  alt="AI IDE BAS Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  AI IDE BAS
                </span>
              </div>
              
              <p className="text-muted-foreground max-w-md leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Community - справа */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Сообщество</h3>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="sm"
                      className="hover:scale-110 transition-transform duration-300"
                      asChild
                    >
                      <a 
                        href={social.href} 
                        aria-label={social.name}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {social.name === "VK" ? (
                          <IconComponent className="w-5 h-5" />
                        ) : (
                          <IconComponent className="w-4 h-4" />
                        )}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;