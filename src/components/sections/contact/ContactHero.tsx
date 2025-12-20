'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';

const DEFAULT_CONTACT_HERO = {
  title: 'Get in touch with our team',
  subtitle: 'Ready to launch your fund? Have questions about our platform? Our experts are here to help you every step of the way.',
  ctaText: 'Schedule a call',
  ctaHref: '#contact-form',
  features: [
    'Free consultation',
    'Expert guidance',
    'Custom solutions'
  ]
} as const;

type ContactHeroProps = Partial<typeof DEFAULT_CONTACT_HERO>;

export default function ContactHero(props: ContactHeroProps) {
  const config = { ...DEFAULT_CONTACT_HERO, ...props };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCtaClick = () => {
    const element = document.querySelector(config.ctaHref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-background via-background to-muted/20 text-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <MessageCircle className="w-4 h-4" />
              <span data-editable="badge">Contact Our Experts</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span
                  data-editable="title"
                  className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
                >
                  {config.title}
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span data-editable={`features[${idx}]`} className="text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button
                onClick={handleCtaClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group px-8 py-6 text-lg font-semibold"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
    </section>
  );
}
