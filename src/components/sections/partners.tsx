import Image from 'next/image';

const partners = [
  { name: 'Luminous', logo: '/placeholder.svg' },
  { name: 'Greenish', logo: '/placeholder.svg' },
  { name: 'Sitemark', logo: '/placeholder.svg' },
  { name: 'ProNature', logo: '/placeholder.svg' },
  { name: 'Lightbox', logo: '/placeholder.svg' },
  { name: 'GlobalBank', logo: '/placeholder.svg' },
];

export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Partners</h2>
          <p className="text-lg text-foreground/70">
            We are proud to work with leading companies.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partners.map(partner => (
            <div key={partner.name} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-2xl font-semibold text-muted-foreground">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
