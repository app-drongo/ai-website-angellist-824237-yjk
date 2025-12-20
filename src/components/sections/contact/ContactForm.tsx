'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const DEFAULT_CONTACT_FORM = {
  title: 'Send us a message',
  subtitle: 'Fill out the form below and we\'ll get back to you within 24 hours.',
  submitText: 'Send Message',
  successMessage: 'Thank you for your message! We\'ll get back to you soon.',
  fields: {
    name: { label: 'Full Name', placeholder: 'Enter your full name', required: true },
    email: { label: 'Email Address', placeholder: 'Enter your email address', required: true },
    company: { label: 'Company', placeholder: 'Enter your company name', required: false },
    fundSize: { label: 'Fund Size', placeholder: 'Select fund size', required: false },
    message: { label: 'Message', placeholder: 'Tell us about your fund and how we can help...', required: true }
  },
  fundSizeOptions: [
    'Under $5M',
    '$5M - $25M',
    '$25M - $100M',
    '$100M - $500M',
    'Over $500M'
  ]
} as const;

type ContactFormProps = Partial<typeof DEFAULT_CONTACT_FORM>;

export default function ContactForm(props: ContactFormProps) {
  const config = { ...DEFAULT_CONTACT_FORM, ...props };
  const { handleSubmit, isSubmitting, isSuccess, message } = useFormSubmit();
  const [fundSize, setFundSize] = useState('');

  return (
    <section id="contact-form" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span data-editable="title">{config.title}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>
          </div>

          {/* Form Card */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form 
                onSubmit={handleSubmit}
                data-form-id="contact-form"
                className="space-y-6"
              >
                {/* Name and Email Row */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      <span data-editable="fields.name.label">{config.fields.name.label}</span>
                      {config.fields.name.required && <span className="text-destructive ml-1">*</span>}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={config.fields.name.placeholder}
                      required={config.fields.name.required}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <span data-editable="fields.email.label">{config.fields.email.label}</span>
                      {config.fields.email.required && <span className="text-destructive ml-1">*</span>}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={config.fields.email.placeholder}
                      required={config.fields.email.required}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Company and Fund Size Row */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">
                      <span data-editable="fields.company.label">{config.fields.company.label}</span>
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder={config.fields.company.placeholder}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fundSize">
                      <span data-editable="fields.fundSize.label">{config.fields.fundSize.label}</span>
                    </Label>
                    <Select value={fundSize} onValueChange={setFundSize} disabled={isSubmitting}>
                      <SelectTrigger>
                        <SelectValue placeholder={config.fields.fundSize.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {config.fundSizeOptions.map((option, idx) => (
                          <SelectItem key={idx} value={option}>
                            <span data-editable={`fundSizeOptions[${idx}]`}>{option}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="fundSize" value={fundSize} />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    <span data-editable="fields.message.label">{config.fields.message.label}</span>
                    {config.fields.message.required && <span className="text-destructive ml-1">*</span>}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={config.fields.message.placeholder}
                    required={config.fields.message.required}
                    disabled={isSubmitting}
                    rows={5}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        <span data-editable="submitText">{config.submitText}</span>
                      </>
                    )}
                  </Button>
                </div>

                {/* Status Message */}
                {message && (
                  <div className={`flex items-center gap-2 p-4 rounded-md ${
                    isSuccess 
                      ? 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
                      : 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
                  }`}>
                    {isSuccess ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>{message}</span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
