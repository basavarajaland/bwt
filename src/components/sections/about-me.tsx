import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutMe() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-me');

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex justify-center">
            {aboutImage && (
              <div className="relative w-[300px] h-[360px] lg:w-[350px] lg:h-[420px]">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={500}
                  height={600}
                  data-ai-hint={aboutImage.imageHint}
                  className="rounded-lg object-cover shadow-2xl"
                />
              </div>
            )}
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">About Me</h2>
            <div className="text-lg text-foreground/80 space-y-4">
              <p>
                I am a UI/UX Designer from India, passionate about creating clean, beautiful, and user-friendly designs. With a background in graphic design, I have a strong understanding of visual hierarchy, color theory, and typography.
              </p>
              <p>
                As a self-taught designer, I am constantly learning and seeking new challenges to grow my skills. My goal is to bridge the gap between user needs and business goals through thoughtful and engaging design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
