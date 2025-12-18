'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, TrendingUp, Shield } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { useState, useEffect } from 'react';

const DEFAULT_HERO = {
  title: 'Launch and scale your fund with confidence',
  subtitle:
    'Streamline your fund operations. At every stage, our expert team makes it easy for you to start, manage, and scale your fund so you can focus on what matters most — investing.',
  ctaText: 'Talk to an expert',
  ctaHref: '/contact',
  secondaryCtaText: 'Learn more',
  secondaryCtaHref: '/solutions',
  features: ['Expert guidance at every stage', 'Streamlined operations', 'Focus on investing'],
  stats: [
    { label: 'Funds Launched', value: '500+' },
    { label: 'Assets Under Management', value: '$2.5B+' },
    { label: 'Success Rate', value: '98%' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/20 text-foreground overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
          {/* Left Column - Content */}
          <div
            className={`lg:col-span-7 space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <TrendingUp className="w-4 h-4" />
              <span data-editable="badge">AngelList for Emerging Managers</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span
                  data-editable="title"
                  className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
                >
                  {config.title}
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-4">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span data-editable={`features[${idx}]`} className="text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group px-8 py-6 text-lg font-semibold"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                variant="outline"
                size="lg"
                className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 px-8 py-6 text-lg"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {config.stats.map((stat, idx) => (
                <Card
                  key={idx}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="space-y-2">
                      <div className="text-3xl lg:text-4xl font-bold text-primary group-hover:scale-105 transition-transform">
                        <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Trust Indicator */}
              <Card className="bg-primary/5 border-primary/20 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Shield className="w-6 h-6" />
                    <span className="font-semibold">SEC Compliant & Secure</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
    </section>
  );
}
