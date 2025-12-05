import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FastForward, Settings, ShieldCheck, UserCheck, Handshake, AreaChart } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const features = [
  {
    title: 'Fast and Reliable Service',
    icon: FastForward,
  },
  {
    title: 'Customize Policy',
    icon: Settings,
  },
  {
    title: 'End to End Claim',
    icon: ShieldCheck,
  },
  {
    title: 'Expert Guidance',
    icon: UserCheck,
  },
  {
    title: 'Easy Claim Process',
    icon: Handshake,
  },
  {
    title: 'Rising Awareness',
    icon: AreaChart,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            There are 29 lakh insurance agents and 1.5 lakh financial consultants in India. But BTW Financial services and IMF offer you something that most don’t.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(feature => (
            <Card key={feature.title} className="text-center shadow-lg p-6">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
