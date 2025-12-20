import ContactHero from '@/components/sections/contact/ContactHero'
import ContactForm from '@/components/sections/contact/ContactForm'
import ContactInfo from '@/components/sections/contact/ContactInfo'

export const metadata = {
  title: 'Contact Us - AngelList',
  description: 'Get in touch with our team to learn more about launching and scaling your fund.',
}

export default function ContactPage() {
  return (
    <>
      <section id="contact-hero">
        <ContactHero />
      </section>
      <section id="contact-form">
        <ContactForm />
      </section>
      <section id="contact-info">
        <ContactInfo />
      </section>
    </>
  )
}
