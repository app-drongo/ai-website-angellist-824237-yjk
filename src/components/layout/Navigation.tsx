'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brand: 'AngelList',
  items: [
    { label: 'Features', href: '#features' },
  ],
  cta: {
    text: 'Get Started',
    href: '/contact'
  }
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    navigate(href);
  };

  const handleCtaClick = () => {
    navigate(config.cta.href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('/')}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              <span data-editable="brand">{config.brand}</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {config.items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.href)}
                data-editable-href={`items[${idx}].href`}
                data-href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                <span data-editable={`items[${idx}].label`}>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              onClick={handleCtaClick}
              data-editable-href="cta.href"
              data-href={config.cta.href}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <span data-editable="cta.text">{config.cta.text}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Brand */}
                  <div className="text-xl font-bold text-foreground">
                    <span data-editable="brand">{config.brand}</span>
                  </div>

                  {/* Mobile Navigation Items */}
                  <div className="flex flex-col space-y-4">
                    {config.items.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick(item.href)}
                        data-editable-href={`items[${idx}].href`}
                        data-href={item.href}
                        className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                      >
                        <span data-editable={`items[${idx}].label`}>{item.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-border">
                    <Button
                      onClick={handleCtaClick}
                      data-editable-href="cta.href"
                      data-href={config.cta.href}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <span data-editable="cta.text">{config.cta.text}</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
