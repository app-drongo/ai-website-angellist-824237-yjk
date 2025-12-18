'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brandName: 'AngelList',
  brandHref: '#hero',
  navItems: [
    { label: 'Products', href: '#products', hasDropdown: true },
    { label: 'Solutions', href: '#solutions', hasDropdown: true },
    { label: 'Pricing', href: '#pricing', hasDropdown: false },
    { label: 'Resources', href: '#resources', hasDropdown: true },
  ],
  ctaText: 'Contact sales',
  ctaHref: '#contact',
  signInText: 'Sign in',
  signInHref: '#signin',
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBrandClick = () => {
    navigate(config.brandHref);
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
    setIsMobileMenuOpen(false);
  };

  const handleSignInClick = () => {
    navigate(config.signInHref);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section
      id="navigation"
      className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50"
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={handleBrandClick}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-200"
              data-editable-href="brandHref"
              data-href={config.brandHref}
              aria-label="Go to homepage"
            >
              <span data-editable="brandName">{config.brandName}</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {config.navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                  data-editable-href={`navItems[${idx}].href`}
                  data-href={item.href}
                  aria-label={`Navigate to ${item.label}`}
                >
                  <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleSignInClick}
              className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors duration-200"
              data-editable-href="signInHref"
              data-href={config.signInHref}
            >
              <span data-editable="signInText">{config.signInText}</span>
            </button>
            <Button
              onClick={handleCTAClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-muted-foreground hover:text-foreground p-2 rounded-md transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card">
              {config.navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors duration-200"
                  data-editable-href={`navItems[${idx}].href`}
                  data-href={item.href}
                >
                  <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                </button>
              ))}
              <div className="pt-4 pb-3 border-t border-border">
                <button
                  onClick={handleSignInClick}
                  className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors duration-200"
                  data-editable-href="signInHref"
                  data-href={config.signInHref}
                >
                  <span data-editable="signInText">{config.signInText}</span>
                </button>
                <div className="mt-3 px-3">
                  <Button
                    onClick={handleCTAClick}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full transition-colors duration-200"
                    data-editable-href="ctaHref"
                    data-href={config.ctaHref}
                  >
                    <span data-editable="ctaText">{config.ctaText}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </section>
  );
}
