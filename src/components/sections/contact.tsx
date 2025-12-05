import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
            <p className="text-lg text-foreground/70">
              Have a question or need a quote? Fill out the form below.
            </p>
          </div>
          <Card className="p-8 mt-8">
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="text" placeholder="Full Name*" required />
                <Input type="text" placeholder="Mobile Number*" required />
              </div>
              <Input type="email" placeholder="Email Address*" required />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Advice*" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general-insurance">General Insurance</SelectItem>
                  <SelectItem value="health-insurance">Health Insurance</SelectItem>
                  <SelectItem value="life-insurance">Life Insurance</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" size="lg" className="w-full">Submit</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
import { Card } from '../ui/card';
