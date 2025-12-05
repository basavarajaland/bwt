import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 'project-shopper',
    title: 'UI/UX Case Study - Shopper',
    description: 'A mobile application for a seamless online shopping experience, focusing on user-centric design and intuitive navigation.',
    tags: ['UI/UX', 'Mobile App'],
  },
  {
    id: 'project-foodies',
    title: 'Website Design - Foodies',
    description: 'A vibrant and engaging website for a food delivery service, enhancing brand identity and user engagement.',
    tags: ['Web Design', 'Branding'],
  },
  {
    id: 'project-portfolio',
    title: 'Website Redesign - Portfolio',
    description: 'A complete redesign of a personal portfolio to showcase creative work with a modern and minimalist aesthetic.',
    tags: ['Web Design', 'UI/UX'],
  },
];

export default function MyWork() {
  return (
    <section id="work" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">My Work</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.id} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                {projectImage && (
                  <div className="aspect-video relative">
                     <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        data-ai-hint={projectImage.imageHint}
                      />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
