import { Handshake, Building, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  {
    icon: Handshake,
    title: "Partner With Us",
    desc: "We welcome collaborations with industry leaders, academic institutions, and organizations worldwide. Partnering with Aris Global Education opens doors to joint research, faculty exchange, student internships, and curriculum development.",
    points: ["Industry-Academia Collaboration", "Joint Research Programs", "Guest Lectures & Workshops", "Internship & Placement Tie-ups"],
  },
  {
    icon: Building,
    title: "Become a Centre / Franchise",
    desc: "Expand quality education to your region by becoming an authorized study centre or franchise partner. We provide comprehensive support including curriculum, training, branding, and technology infrastructure.",
    points: ["Proven Education Model", "Complete Training & Support", "Brand & Marketing Assistance", "Technology Infrastructure"],
  },
  {
    icon: Heart,
    title: "Volunteer Opportunities",
    desc: "Give back to the community by volunteering with Aris Global Education. Whether you're a professional, alumni, or student, there are meaningful ways to contribute to our mission.",
    points: ["Mentorship Programs", "Community Outreach", "Event Organization", "Career Counselling Sessions"],
  },
];

const GetInvolved = () => (
  <>
    <section className="bg-primary section-padding text-center">
      <div className="container">
        <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4">Get Involved</h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto">Join hands with us to make quality education accessible and impactful.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container space-y-16">
        {sections.map((s, i) => (
          <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <s.icon className="text-accent" size={24} />
                </div>
                <h2 className="font-serif text-2xl text-primary">{s.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">{s.desc}</p>
              <ul className="grid grid-cols-2 gap-3 mb-6">
                {s.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-primary text-primary-foreground">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className={`bg-secondary rounded-lg p-12 flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <s.icon className="text-primary/20" size={120} />
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default GetInvolved;
