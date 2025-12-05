import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-profile');

  return (
    <section id="home" className="pt-32 md:pt-40 pb-16 md:pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg text-primary font-semibold">Trusted by 10,000+ Indian Families</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Best Value Insurance and Financial Products
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 text-lg text-foreground/80">
              We create strong financial portfolios and optimize your taxes with expert insurance advice tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="https://wa.me/">Get your Free Insurance Quote on WhatsApp</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="#">Download Brochure</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {heroImage && (
              <div className="relative w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={500}
                  height={500}
                  data-ai-hint={heroImage.imageHint}
                  className="rounded-lg object-cover shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
