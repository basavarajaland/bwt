import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
    return (
        <section id="cta" className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="flex flex-col justify-between">
                        <CardHeader>
                            <CardTitle>Invest ₹10K and Get ₹1 Crore return*</CardTitle>
                            <CardDescription>*Returns are subject to market risks. Please read all scheme related documents carefully.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild>
                                <Link href="#">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col justify-between">
                        <CardHeader>
                            <CardTitle>Book Free Health Insurance Consultation at home</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button asChild>
                                <Link href="#">Book Home Visit <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col justify-between">
                        <CardHeader>
                            <CardTitle>SIP Calculator</CardTitle>
                            <CardDescription>Plan your investments</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild>
                                <Link href="#">Calculate Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
