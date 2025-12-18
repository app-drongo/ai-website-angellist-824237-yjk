'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'AngelList',
  tagline: 'Streamline fund operations and scale with confidence through expert guidance',
  description:
    'Empowering emerging managers to launch and scale their funds with expert guidance at every stage.',

  // Company Links
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],

  // Product Links
  productLinks: [
    { label: 'Fund Management', href: '/products/fund-management' },
    { label: 'Compliance', href: '/products/compliance' },
    { label: 'Reporting', href: '/products/reporting' },
  ],

  // Resources Links
  resourceLinks: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Support', href: '/support' },
    { label: 'Blog', href: '/blog' },
  ],

  // Legal Links
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],

  // Contact Information
  contactEmail: 'hello@angellist.com',
  contactPhone: '+1 (555) 123-4567',
  address: '123 Financial District, New York, NY 10004',

  // Social Media
  linkedinUrl: 'https://linkedin.com/company/angellist',
  twitterUrl: 'https://twitter.com/angellist',

  // Newsletter
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest insights on fund management and industry trends.',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',

  // Copyright
  copyrightText: '© 2024 AngelList. All rights reserved.',

  // CTA
  ctaTitle: 'Ready to scale your fund?',
  ctaDescription: 'Talk to our experts about streamlining your operations.',
  ctaButtonText: 'Contact Sales',
  ctaButtonHref: '/contact',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
  };

  return (
    <footer id="footer" className="bg-card text-card-foreground border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              <span data-editable="ctaTitle">{config.ctaTitle}</span>
            </h2>
            <p className="text-lg mb-6 opacity-90">
              <span data-editable="ctaDescription">{config.ctaDescription}</span>
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => handleLinkClick(config.ctaButtonHref)}
              data-editable-href="ctaButtonHref"
              data-href={config.ctaButtonHref}
              className="bg-background text-foreground hover:bg-background/90"
            >
              <span data-editable="ctaButtonText">{config.ctaButtonText}</span>
            </Button>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <span data-editable="companyName">{config.companyName}</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span data-editable="contactEmail">{config.contactEmail}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span data-editable="contactPhone">{config.contactPhone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span data-editable="address">{config.address}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {config.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-editable-href={`companyLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {config.productLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-editable-href={`productLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`productLinks[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {config.resourceLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-editable-href={`resourceLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`resourceLinks[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-muted rounded-lg p-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold mb-2">
              <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
            </h4>
            <p className="text-muted-foreground text-sm mb-6">
              <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex gap-2"
              data-form-id="694406a042a68c80d4010aa3"
            >
              <input
                type="email"
                placeholder={config.newsletterPlaceholder}
                className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                data-editable="newsletterPlaceholder"
              />
              <Button type="submit" size="sm">
                <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyrightText">{config.copyrightText}</span>
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            {config.legalLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-editable-href={`legalLinks[${idx}].href`}
                data-href={link.href}
              >
                <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.open(config.linkedinUrl, '_blank')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-editable-href="linkedinUrl"
              data-href={config.linkedinUrl}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </button>
            <button
              onClick={() => window.open(config.twitterUrl, '_blank')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-editable-href="twitterUrl"
              data-href={config.twitterUrl}
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
