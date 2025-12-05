import Link from "next/link";
import { LinkedinIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

const socialLinks = [
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Twitter', href: '#', icon: TwitterIcon },
  { name: 'Instagram', href: '#', icon: InstagramIcon },
  { name: 'LinkedIn', href: '#', icon: LinkedinIcon },
];

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">General Insurance</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Car Insurance</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Bike Insurance</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Travel Insurance</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Marine Cargo Insurance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Health Insurance</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Family Health Insurance</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Group Health Insurance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Life Insurance</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Term Life Insurance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Policies</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Cancellation & Refund</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 mb-4 md:mb-0">
            {socialLinks.map(social => (
              <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">&copy; {new Date().getFullYear()} BTW Financial Services & IMF Pvt Ltd. All rights reserved.</p>
        </div>
        <div className="mt-4 text-xs text-muted-foreground text-center">
            <p>Insurance is the subject matter of solicitation. Visitors are informed that the information submitted on this website may be shared with insurers. Product information is based on details received from insurers with whom we have an agreement.</p>
            <p className="mt-2">Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.</p>
        </div>
      </div>
    </footer>
  );
}
