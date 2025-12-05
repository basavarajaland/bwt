import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-profile');

  return (
    <section id="home" className="pt-24 md:pt-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-primary">
              Hey there, I am Bal.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-headline">
              UI/UX Designer, Web Designer &amp; Graphic Designer
            </p>
            <p className="max-w-xl mx-auto md:mx-0 text-lg text-foreground/70">
              I design and build beautiful websites. I am passionate about creating intuitive and engaging user experiences.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#work">See my work</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            {heroImage && (
              <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={500}
                  height={500}
                  data-ai-hint={heroImage.imageHint}
                  className="rounded-full object-cover border-8 border-card shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
