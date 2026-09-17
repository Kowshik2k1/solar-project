import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Process } from "@/components/home/Process";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Vision } from "@/components/home/Vision";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Process />
      <FeaturedProject />
      <WhyChooseUs />
      <Vision />
      <ContactCTA />
    </main>
  );
}