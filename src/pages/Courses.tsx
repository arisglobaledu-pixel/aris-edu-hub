import { useState } from "react";
import { Briefcase, Palette, BookOpen, Cpu, Pill, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ApplyModal from "@/components/ApplyModal";

interface Course {
  name: string;
  desc: string;
  duration: string;
  eligibility: string;
}

interface Category {
  icon: React.ElementType;
  title: string;
  courses: Course[];
}

const categories: Category[] = [
  {
    icon: Briefcase,
    title: "Commerce & Management",
    courses: [
      { name: "B.Com", desc: "Bachelor of Commerce with specializations in Accounting, Finance, and Taxation.", duration: "3 Years", eligibility: "10+2 with Commerce" },
      { name: "BBA", desc: "Bachelor of Business Administration focusing on management principles and business strategy.", duration: "3 Years", eligibility: "10+2 any stream" },
      { name: "MBA", desc: "Master of Business Administration with specializations in Marketing, Finance, HR, and more.", duration: "2 Years", eligibility: "Graduation in any discipline" },
    ],
  },
  {
    icon: Palette,
    title: "Arts & Humanities",
    courses: [
      { name: "BA", desc: "Bachelor of Arts in various subjects including English, History, Political Science, and Sociology.", duration: "3 Years", eligibility: "10+2 any stream" },
      { name: "MA", desc: "Master of Arts with advanced study in specialized humanities and social science disciplines.", duration: "2 Years", eligibility: "Graduation in relevant discipline" },
    ],
  },
  {
    icon: BookOpen,
    title: "Library Sciences",
    courses: [
      { name: "BLIS", desc: "Bachelor of Library & Information Science — manage and organize information resources.", duration: "1 Year", eligibility: "Graduation in any discipline" },
      { name: "MLIS", desc: "Master of Library & Information Science — advanced knowledge in digital librarianship.", duration: "1 Year", eligibility: "BLIS degree" },
    ],
  },
  {
    icon: Cpu,
    title: "Engineering & Technology",
    courses: [
      { name: "B.Tech", desc: "Bachelor of Technology in Computer Science, Mechanical, Civil, Electrical, and more.", duration: "4 Years", eligibility: "10+2 with PCM" },
      { name: "M.Tech", desc: "Master of Technology with research-oriented specializations in cutting-edge fields.", duration: "2 Years", eligibility: "B.Tech / B.E. degree" },
    ],
  },
  {
    icon: Pill,
    title: "Pharmacy",
    courses: [
      { name: "D.Pharmacy", desc: "Diploma in Pharmacy — foundational pharmaceutical education for pharmacy practice.", duration: "2 Years", eligibility: "10+2 with PCB/PCM" },
      { name: "B.Pharmacy", desc: "Bachelor of Pharmacy — comprehensive study of pharmaceutical sciences and drug development.", duration: "4 Years", eligibility: "10+2 with PCB/PCM" },
      { name: "M.Pharmacy", desc: "Master of Pharmacy — advanced specialization in Pharmacology, Pharmaceutics, and more.", duration: "2 Years", eligibility: "B.Pharmacy degree" },
    ],
  },
  {
    icon: Wrench,
    title: "Vocational & Diploma Courses",
    courses: [
      { name: "B.Voc", desc: "Bachelor of Vocation — skill-based degree in various trades and industries.", duration: "3 Years", eligibility: "10+2 any stream" },
      { name: "Skill-based Diploma Programs", desc: "Short-term diploma programs designed for immediate employability in specific sectors.", duration: "6 Months – 1 Year", eligibility: "10+2 / ITI" },
    ],
  },
];

const Courses = () => {
  const [applyOpen, setApplyOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleApply = (name: string) => {
    setSelectedCourse(name);
    setApplyOpen(true);
  };

  return (
    <>
      <section className="bg-primary section-padding text-center">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4">Our Courses & Programs</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">Explore a wide range of academic and professional programs designed for career success.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container space-y-16">
          {categories.map((cat, ci) => (
            <div key={ci}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <cat.icon className="text-accent" size={20} />
                </div>
                <h2 className="font-serif text-2xl text-primary">{cat.title}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.courses.map((course, i) => (
                  <div key={i} className="bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
                    <h3 className="font-serif text-xl text-primary mb-2">{course.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{course.desc}</p>
                    <div className="text-sm space-y-1 mb-4">
                      <p><span className="font-semibold text-foreground">Duration:</span> <span className="text-muted-foreground">{course.duration}</span></p>
                      <p><span className="font-semibold text-foreground">Eligibility:</span> <span className="text-muted-foreground">{course.eligibility}</span></p>
                    </div>
                    <Button className="bg-accent text-accent-foreground hover:opacity-90 w-full" onClick={() => handleApply(course.name)}>
                      Apply Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ApplyModal open={applyOpen} onOpenChange={setApplyOpen} courseName={selectedCourse} />
    </>
  );
};

export default Courses;
