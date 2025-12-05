import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'UI/UX Design',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Wireframing'],
  },
  {
    title: 'Prototyping',
    skills: ['Invision', 'Marvel', 'Principle', 'Framer'],
  },
  {
    title: 'Graphic Design',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Brand Identity', 'Logo Design'],
  },
  {
    title: 'Web Development',
    skills: ['HTML5', 'CSS3 / SCSS', 'JavaScript', 'React', 'Next.js', 'WordPress'],
  },
];

export default function MySkills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">My Skills</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A look at the technologies and tools I use to bring ideas to life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map(category => (
            <Card key={category.title} className="text-center shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map(skill => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
