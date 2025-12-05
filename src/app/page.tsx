import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import MyWork from '@/components/sections/my-work';
import MySkills from '@/components/sections/my-skills';
import AboutMe from '@/components/sections/about-me';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MyWork />
        <MySkills />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
