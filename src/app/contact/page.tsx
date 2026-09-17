import ContactHero from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with us for project enquiries, business opportunities and infrastructure development.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
