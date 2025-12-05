import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bike, Car, Dumbbell, Globe, HeartHandshake, Home, ShieldCheck, Ship, UserCheck, Users } from 'lucide-react';
import Link from 'next/link';
import { FireInsuranceIcon } from '../icons/fire-insurance';
import { FamilyHealthInsuranceIcon } from '../icons/family-health-insurance';
import { CriticalIllnessInsuranceIcon } from '../icons/critical-illness-insurance';
import { TermInsuranceIcon } from '../icons/term-insurance-icon';
import { TopUpHealthInsuranceIcon } from '../icons/top-up-health-insurance';
import { HealthInsuranceIcon } from '../icons/health-insurance-icon';
import { PersonalAccidentInsuranceIcon } from '../icons/personal-accident-insurance';

const products = [
  { id: 'car-insurance', title: 'Car Insurance', icon: Car },
  { id: 'bike-insurance', title: 'Bike Insurance', icon: Bike },
  { id: 'health-insurance', title: 'Health Insurance', icon: HealthInsuranceIcon },
  { id: 'life-insurance', title: 'Life Insurance', icon: HeartHandshake },
  { id: 'travel-insurance', title: 'Travel Insurance', icon: Globe },
  { id: 'marine-insurance', title: 'Marine Insurance', icon: Ship },
  { id: 'home-insurance', title: 'Home Insurance', icon: Home },
  { id: 'term-life-insurance', title: 'Term Life Insurance', icon: TermInsuranceIcon },
  { id: 'group-health-insurance', title: 'Employee Group Health Insurance', icon: Users },
  { id: 'personal-accident-insurance', title: 'Personal Accident Insurance', icon: PersonalAccidentInsuranceIcon },
  { id: 'fire-insurance', title: 'Fire Insurance', icon: FireInsuranceIcon },
  { id: 'family-health-insurance', title: 'Family Health Insurance', icon: FamilyHealthInsuranceIcon },
  { id: 'critical-illness-insurance', title: 'Critical Illness Insurance', icon: CriticalIllnessInsuranceIcon },
  { id: 'top-up-health-insurance', title: 'Top-Up Health Insurance', icon: TopUpHealthInsuranceIcon },
  { id: 'cyber-insurance', title: 'Cyber Insurance', icon: ShieldCheck },
];

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Products</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our wide range of insurance and financial products.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <Card key={product.id} className="text-center p-4 flex flex-col items-center justify-start transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <product.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-base font-medium h-12 flex items-center">{product.title}</CardTitle>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="#">View More <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
