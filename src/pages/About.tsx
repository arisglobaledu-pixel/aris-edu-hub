import { Eye, Target, BookOpen, Award, Users, MessageSquare } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const missions = [
  "To provide high-quality, industry-oriented education with a focus on practical learning",
  "To develop students' skills, creativity, and critical thinking for career success",
  "To promote innovation, research, and modern teaching methodologies",
  "To build strong industry connections for better training and placement opportunities",
  "To instill ethical values, leadership qualities, and social responsibility",
  "To create a supportive and inclusive learning environment for overall student growth",
];

const About = () => (
  <>
    {/* Banner */}
    <section className="bg-primary section-padding text-center">
      <div className="container">
        <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4">About Us</h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto">Learn about our vision, mission, and commitment to excellence in education.</p>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding">
      <div className="container grid lg:grid-cols-2 gap-12">
        {/* Vision */}
        <div className="bg-card rounded-lg p-8 border shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
              <Eye className="text-accent" size={24} />
            </div>
            <h2 className="font-serif text-2xl text-primary">Our Vision</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To become a leading institution of global standards that empowers students through quality education, innovation, and skill development.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To nurture future-ready professionals who contribute meaningfully to society and the world.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-card rounded-lg p-8 border shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="text-primary" size={24} />
            </div>
            <h2 className="font-serif text-2xl text-primary">Our Mission</h2>
          </div>
          <ul className="space-y-3">
            {missions.map((m, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                <span className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Objectives, Founder, Affiliation */}
    <section className="section-padding bg-secondary">
      <div className="container grid md:grid-cols-3 gap-8">
        {[
          { icon: BookOpen, title: "Our Objectives", text: "Aris Global Education strives to maintain academic excellence, foster research innovation, and create industry-academia partnerships. We aim to provide accessible, affordable, and high-quality education to students from all backgrounds." },
          { icon: MessageSquare, title: "Founder's Message", text: "\"Education is the most powerful tool we can give our youth. At Aris Global Education, we are committed to building an institution that not only imparts knowledge but shapes character, instills values, and prepares students for a rapidly changing world.\"" },
          { icon: Award, title: "Affiliation & Recognition", text: "Aris Global Education is affiliated with recognized universities and regulatory bodies. Our programs are designed to meet national accreditation standards, ensuring the highest quality of education for our students." },
        ].map((item, i) => (
          <div key={i} className="bg-card rounded-lg p-8 border shadow-sm text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <item.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-serif text-xl text-primary mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary section-padding">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "20+", label: "Programs" },
          { value: "5000+", label: "Students" },
          { value: "200+", label: "Faculty" },
          { value: "50+", label: "Industry Partners" },
        ].map((s, i) => (
          <div key={i}>
            <p className="font-serif text-4xl text-accent mb-1">{s.value}</p>
            <p className="text-primary-foreground/80 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default About;
