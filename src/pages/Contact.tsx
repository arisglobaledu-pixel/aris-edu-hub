import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionHeading from "@/components/SectionHeading";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "123 Education Lane, Sector 15, New Delhi, India 110001" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "info@arisglobaleducation.com" },
  { icon: Clock, label: "Office Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM" },
];

const Contact = () => (
  <>
    <section className="bg-primary section-padding text-center">
      <div className="container">
        <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4">Contact Us</h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Reach out to us anytime.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <SectionHeading title="Send Us a Message" centered={false} />
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="c-name">Full Name</Label>
                <Input id="c-name" placeholder="Your full name" />
              </div>
              <div>
                <Label htmlFor="c-email">Email</Label>
                <Input id="c-email" type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="c-phone">Phone Number</Label>
              <Input id="c-phone" type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div>
              <Label htmlFor="c-subject">Subject</Label>
              <Input id="c-subject" placeholder="How can we help?" />
            </div>
            <div>
              <Label htmlFor="c-message">Message</Label>
              <Textarea id="c-message" placeholder="Write your message here..." rows={5} />
            </div>
            <Button type="submit" className="bg-accent text-accent-foreground hover:opacity-90 w-full sm:w-auto px-8">
              Send Message
            </Button>
          </form>
        </div>

        {/* Info */}
        <div>
          <SectionHeading title="Contact Information" centered={false} />
          <div className="space-y-6">
            {contactInfo.map((c, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{c.label}</p>
                  <p className="text-muted-foreground text-sm">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-8 rounded-lg overflow-hidden border bg-secondary h-64 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin size={40} className="mx-auto mb-2 opacity-40" />
              <p className="text-sm">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
