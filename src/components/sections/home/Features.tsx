'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, TrendingUp, Users, FileText, BarChart3, Clock, Zap, Globe, Lock } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { useState, useEffect } from 'react';

const DEFAULT_FEATURES = {
  title: 'Everything you need to launch and scale your fund',
  subtitle: 'From formation to fundraising, our comprehensive platform handles every aspect of fund management so you can focus on what matters most.',
  features: [
    {
      icon: Shield,
      title: 'SEC Compliance',
      description: 'Built-in compliance tools and automated reporting to keep your fund compliant with all regulatory requirements.'
    },
    {
      icon: Users,
      title: 'Investor Management',
      description: 'Streamlined investor onboarding, communications, and relationship management in one centralized platform.'
    },
    {
      icon: FileText,
      title: 'Document Automation',
      description: 'Generate legal documents, subscription agreements, and investor reports automatically with our templates.'
    },
    {
      icon: BarChart3,
      title: 'Portfolio Analytics',
      description: 'Real-time portfolio tracking, performance analytics, and comprehensive reporting for investors.'
    },
    {
      icon: TrendingUp,
      title: 'Fundraising Tools',
      description: 'Manage your fundraising process with investor CRM, deal rooms, and automated follow-ups.'
    },
    {
      icon: Clock,
      title: 'Fast Setup',
      description: 'Launch your fund in weeks, not months, with our streamlined formation and setup process.'
    }
  ],
  pricing: {
    title: 'Simple, transparent pricing',
    subtitle: 'Choose the plan that fits your fund size and needs. All plans include our core features.',
    plans: [
      {
        name: 'Starter',
        price: '$2,500',
        period: '/month',
        description: 'Perfect for emerging managers launching their first fund',
        features: [
          'Up to $10M AUM',
          'Up to 25 investors',
          'Basic compliance tools',
          'Document templates',
          'Email support',
          'Quarterly reporting'
        ],
        popular: false,
        ctaText: 'Start Free Trial',
        ctaHref: '/contact'
      },
      {
        name: 'Professional',
        price: '$5,000',
        period: '/month',
        description: 'For growing funds that need advanced features and support',
        features: [
          'Up to $50M AUM',
          'Up to 100 investors',
          'Advanced compliance suite',
          'Custom document generation',
          'Priority support',
          'Monthly reporting',
          'Investor portal',
          'API access'
        ],
        popular: true,
        ctaText: 'Get Started',
        ctaHref: '/contact'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For established funds with complex needs and high volume',
        features: [
          'Unlimited AUM',
          'Unlimited investors',
          'Full compliance automation',
          'Custom integrations',
          'Dedicated support team',
          'Real-time reporting',
          'White-label options',
          'Custom workflows'
        ],
        popular: false,
        ctaText: 'Contact Sales',
        ctaHref: '/contact'
      }
    ]
  }
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('features');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlanClick = (href: string) => {
    navigate(href);
  };

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
          {config.features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={idx}
                className={`bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="pricing.title">{config.pricing.title}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="pricing.subtitle">{config.pricing.subtitle}</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.pricing.plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative bg-card border-border hover:shadow-lg transition-all duration-300 ${
                plan.popular
                  ? 'ring-2 ring-primary border-primary/50 scale-105'
                  : 'hover:border-primary/30'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">
                  <span data-editable={`pricing.plans[${idx}].name`}>{plan.name}</span>
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    <span data-editable={`pricing.plans[${idx}].price`}>{plan.price}</span>
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-1">
                      <span data-editable={`pricing.plans[${idx}].period`}>{plan.period}</span>
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mt-2">
                  <span data-editable={`pricing.plans[${idx}].description`}>{plan.description}</span>
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">
                        <span data-editable={`pricing.plans[${idx}].features[${featureIdx}]`}>{feature}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={() => handlePlanClick(plan.ctaHref)}
                  data-editable-href={`pricing.plans[${idx}].ctaHref`}
                  data-href={plan.ctaHref}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  <span data-editable={`pricing.plans[${idx}].ctaText`}>{plan.ctaText}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Bank-Level Security</h3>
              <p className="text-sm text-muted-foreground">SOC 2 Type II certified with 256-bit encryption</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">99.9% Uptime</h3>
              <p className="text-sm text-muted-foreground">Enterprise-grade infrastructure you can rely on</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Global Support</h3>
              <p className="text-sm text-muted-foreground">24/7 support team across multiple time zones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}