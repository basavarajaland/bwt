import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LinkedinIcon } from '../icons/linkedin-icon';
import { DribbbleIcon } from '../icons/dribbble-icon';
import { BehanceIcon } from '../icons/behance-icon';

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: LinkedinIcon },
  { name: 'Dribbble', href: '#', icon: DribbbleIcon },
  { name: 'Behance', href: '#', icon: BehanceIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Let's Talk</h2>
            <p className="text-lg text-foreground/70">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" className="text-base" />
              <Input type="email" placeholder="Your Email" className="text-base" />
              <Textarea placeholder="Your Message" rows={5} className="text-base" />
              <Button type="submit" size="lg" className="w-full md:w-auto">Send Message</Button>
            </form>
          </div>
          <div className="space-y-6 flex flex-col justify-center items-center md:items-start">
            <h3 className="text-2xl font-bold font-headline">Connect with me</h3>
            <div className="flex gap-6">
              {socialLinks.map(social => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-8 h-8 text-foreground/70 hover:text-primary transition-colors" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
            <div className="text-lg text-foreground/70 text-center md:text-left">
              <p className="font-semibold">Email Me At</p>
              <a href="mailto:hello@bwtcreations.com" className="hover:text-primary transition-colors">hello@bwtcreations.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
