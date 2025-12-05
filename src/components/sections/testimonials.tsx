import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Aditya Singh',
    quote: 'Kashmira from BTW Company is truly professional and knowledgeable. Her guidance was clear, honest, and easy to understand. Thank you for the excellent service!',
  },
  {
    id: 'testimonial-2',
    name: 'Puranjay Choudhury',
    quote: 'Had a wonderful experience while securing my travel insurance for my Australia trip from BTW.',
  },
  {
    id: 'testimonial-3',
    name: 'Ziauddin Siddiqui',
    quote: 'Wanted to express my heartfelt thanks to Sufia Khan from BTW Financial Services for an exceptional experience with my motor insurance! She was prompt, professional, and patient in addressing all my queries.',
  },
  {
    id: 'testimonial-4',
    name: 'Arkaay Rane',
    quote: 'I had a great experience with BTW. The service was smooth, the team was super friendly, and the overall vibe was professional yet welcoming.',
  },
  {
    id: 'testimonial-5',
    name: 'Thakur Anagha',
    quote: 'Had a smooth and hassle-free experience renewing my Motor insurance through BTW financial services. A big thanks to Harsh and Vishal for the excellent support and quick service.',
  },
  {
    id: 'testimonial-6',
    name: 'Vishakha Kale',
    quote: 'I had a great experience with BTW Financial Services & Pvt. Ltd. A big thank you to Vishal, who assisted me with my Honda Activa insurance. He was extremely helpful, knowledgeable, and ensured a smooth and hassle-free process.',
  },
  {
    id: 'testimonial-7',
    name: 'Prabodh Desai',
    quote: 'I had a full satisfactory experience with the BTW & Team in renewing my car insurance ! I was highly delighted with the offer & prompt service , would like to recommend their services to all ..!',
  },
  {
    id: 'testimonial-8',
    name: 'Deepak Gupta',
    quote: 'Excellent service provided by the company BTW Financials for renewal of my Insurance for my SUV Seltos.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Testimonials</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover what clients are saying about BTW IMF.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
                const testimonialImage = PlaceHolderImages.find(p => p.id === testimonial.id);
                return (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                            {testimonialImage && (
                                <Image
                                    src={testimonialImage.imageUrl}
                                    alt={testimonial.name}
                                    width={80}
                                    height={80}
                                    data-ai-hint={testimonialImage.imageHint}
                                    className="rounded-full mb-4"
                                />
                            )}
                            <p className="text-lg font-semibold">{testimonial.name}</p>
                            <p className="mt-2 text-foreground/80">&quot;{testimonial.quote}&quot;</p>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
