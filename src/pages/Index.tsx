import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Award, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ApplyModal from "@/components/ApplyModal";
import heroCampus from "@/assets/hero-campus.jpg";
import studentsImg from "@/assets/students-learning.jpg";

const highlights = [
  { icon: GraduationCap, title: "20+ Courses", desc: "Diverse programs across Commerce, Arts, Engineering, Pharmacy & more." },
  { icon: Users, title: "Expert Faculty", desc: "Learn from experienced educators committed to your growth." },
  { icon: Award, title: "Industry Ready", desc: "Curriculum designed with industry partnerships for real-world skills." },
  { icon: Target, title: "100% Placement Support", desc: "Dedicated placement cell connecting students with top employers." },
  { icon: Lightbulb, title: "Innovation Hub", desc: "State-of-the-art labs and incubation centres for creative minds." },
  { icon: BookOpen, title: "Research Focus", desc: "Encouraging scholarly research and academic excellence." },
];

const Index = () => {
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCampus} alt="Aris Global Education Campus" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="container relative z-10 py-20 text-center lg:text-left">
          <div className="max-w-2xl lg:max-w-3xl">
            <p className="text-gold font-semibold tracking-wide mb-4 animate-fade-up">ARIS GLOBAL EDUCATION</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Empowering Education for a Better Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-secondary opacity-90 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Aris Global Education provides higher education programs, professional courses, and skill-based learning across multiple disciplines in India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90 font-semibold" onClick={() => setApplyOpen(true)}>
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <SectionHeading title="Why Aris Global Education?" subtitle="Discover what sets us apart as a leading educational institution." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <h.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-serif text-xl text-primary mb-2">{h.title}</h3>
                <p className="text-muted-foreground text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="About Aris Global Education" centered={false} />
              <p className="text-muted-foreground mb-4">
                Aris Global Education is dedicated to nurturing future-ready professionals through quality education, innovation, and skill development. Our programs span Commerce, Arts, Engineering, Pharmacy, and Vocational Studies.
              </p>
              <p className="text-muted-foreground mb-6">
                With a strong emphasis on practical learning, industry connections, and ethical values, we prepare students to contribute meaningfully to society and the world.
              </p>
              <Button asChild className="bg-primary text-primary-foreground">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={studentsImg} alt="Students at Aris Global Education" loading="lazy" width={1280} height={720} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">Ready to Start Your Journey?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Join thousands of students who have transformed their careers with Aris Global Education.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-accent text-accent-foreground font-semibold hover:opacity-90" onClick={() => setApplyOpen(true)}>
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      <ApplyModal open={applyOpen} onOpenChange={setApplyOpen} />
    </>
  );
};

export default Index;
