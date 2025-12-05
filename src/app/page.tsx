import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import MyWork from '@/components/sections/my-work';
import MySkills from '@/components/sections/my-skills';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import Partners from '@/components/sections/partners';
import CtaSection from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MyWork />
        <MySkills />
        <CtaSection />
        <Partners />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
