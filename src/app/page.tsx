import { Hero } from "@/components/home/Hero";
import { Impact } from "@/components/home/Impact";
import { WhySolar } from "@/components/home/WhySolar";
import { AboutPreview } from "@/components/home/AboutPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <Impact />
      <WhySolar />
      <AboutPreview />
    </main>
  );
}