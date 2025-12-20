'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

const DEFAULT_CONTACT_INFO = {
  title: 'Other ways to reach us',
  subtitle: 'Choose the method that works best for you.',
  contactMethods: [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours.',
      value: 'hello@angellist.com',
      action: 'Send Email',
      href: 'mailto:hello@angellist.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team during business hours.',
      value: '+1 (555) 123-4567',
      action: 'Call Now',
      href: 'tel:+15551234567'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a 30-minute consultation with our experts.',
      value: 'Available Mon-Fri',
      action: 'Book Meeting',
      href: 'https://calendly.com/angellist'
    }
  ],
  officeInfo: {
    title: 'Visit Our Office',
    address: '123 Financial District\nSan Francisco, CA 94105\nUnited States',
    hours: 'Monday - Friday\n9:00 AM - 6:00 PM PST'
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'How long does it take to set up a fund?',
        answer: 'Typically 4-8 weeks depending on fund complexity and regulatory requirements.'
      },
      {
        question: 'What are your pricing plans?',
        answer: 'We offer flexible pricing based on fund size and needs. Contact us for a custom quote.'
      },
      {
        question: 'Do you provide ongoing support?',
        answer: 'Yes, we provide 24/7 support and dedicated account management for all clients.'
      }
    ]
  }
} as const;

type ContactInfoProps = Partial<typeof DEFAULT_CONTACT_INFO>;

export default function ContactInfo(props: ContactInfoProps) {
  const config = { ...DEFAULT_CONTACT_INFO, ...props };

  const handleContactClick = (href: string) => {
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.location.href = href;
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {config.contactMethods.map((method, idx) => {
                const IconComponent = method.icon;
                return (
                  <Card key={idx} className="bg-card hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">
                        <span data-editable={`contactMethods[${idx}].title`}>{method.title}</span>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        <span data-editable={`contactMethods[${idx}].description`}>{method.description}</span>
                      </p>
                      <p className="font-medium mb-4">
                        <span data-editable={`contactMethods[${idx}].value`}>{method.value}</span>
                      </p>
                      <Button
                        onClick={() => handleContactClick(method.href)}
                        data-editable-href={`contactMethods[${idx}].href`}
                        data-href={method.href}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        <span data-editable={`contactMethods[${idx}].action`}>{method.action}</span>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Office Info & FAQ */}
          <div className="space-y-8">
            {/* Office Information */}
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">
                    <span data-editable="officeInfo.title">{config.officeInfo.title}</span>
                  </h3>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="whitespace-pre-line">
                      <span data-editable="officeInfo.address">{config.officeInfo.address}</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 mt-0.5 text-primary" />
                    <p className="whitespace-pre-line">
                      <span data-editable="officeInfo.hours">{config.officeInfo.hours}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">
                    <span data-editable="faq.title">{config.faq.title}</span>
                  </h3>
                </div>
                <div className="space-y-4">
                  {config.faq.items.map((item, idx) => (
                    <div key={idx} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <h4 className="font-medium text-sm mb-2">
                        <span data-editable={`faq.items[${idx}].question`}>{item.question}</span>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        <span data-editable={`faq.items[${idx}].answer`}>{item.answer}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
