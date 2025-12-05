import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  { id: 'car-insurance', title: 'Car Insurance' },
  { id: 'bike-insurance', title: 'Bike Insurance' },
  { id: 'health-insurance', title: 'Health Insurance' },
  { id: 'life-insurance', title: 'Life Insurance' },
  { id: 'travel-insurance', title: 'Travel Insurance' },
  { id: 'marine-insurance', title: 'Marine Insurance' },
  { id: 'home-insurance', title: 'Home Insurance' },
  { id: 'term-life-insurance', title: 'Term Life Insurance' },
  { id: 'group-health-insurance', title: 'Employee Group Health Insurance' },
  { id: 'personal-accident-insurance', title: 'Personal Accident Insurance' },
  { id: 'fire-insurance', title: 'Fire Insurance' },
  { id: 'family-health-insurance', title: 'Family Health Insurance' },
  { id: 'critical-illness-insurance', title: 'Critical Illness Insurance' },
  { id: 'top-up-health-insurance', title: 'Top-Up Health Insurance' },
  { id: 'cyber-insurance', title: 'Cyber Insurance' },
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
            <Card key={product.id} className="text-center p-4 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardTitle className="text-base font-medium">{product.title}</CardTitle>
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
