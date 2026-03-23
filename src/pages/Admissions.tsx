import { useState } from "react";
import { ClipboardList, FileCheck, Upload, CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";
import ApplyModal from "@/components/ApplyModal";

const steps = [
  { icon: ClipboardList, title: "Step 1: Choose Your Program", desc: "Browse our programs and select the course that matches your career goals." },
  { icon: FileCheck, title: "Step 2: Check Eligibility", desc: "Review the eligibility criteria for your chosen program to ensure you qualify." },
  { icon: Upload, title: "Step 3: Submit Application", desc: "Fill out the application form and upload the required documents." },
  { icon: CheckCircle, title: "Step 4: Confirmation", desc: "Receive your admission confirmation and begin your journey with Aris Global Education." },
];

const documents = [
  "10th & 12th Mark Sheets and Certificates",
  "Graduation Degree / Mark Sheet (for PG programs)",
  "Transfer Certificate (TC)",
  "Migration Certificate",
  "Character Certificate",
  "Aadhaar Card / Government ID",
  "Passport-size Photographs (4 copies)",
  "Category Certificate (if applicable)",
];

const faqs = [
  { q: "When does the admission process begin?", a: "Admissions are open throughout the year for most programs. Please check specific program dates on the courses page or contact our admissions office." },
  { q: "Can I apply online?", a: "Yes! You can apply online by clicking the 'Apply Now' button on any course page or the admissions page." },
  { q: "What are the fees?", a: "Fees vary by program. Please contact our admissions office at info@arisglobaleducation.com for detailed fee structures." },
  { q: "Is hostel facility available?", a: "Yes, hostel facilities are available for both male and female students on a first-come, first-served basis." },
  { q: "Are scholarships available?", a: "Yes, merit-based and need-based scholarships are available. Contact the admissions office for eligibility details." },
];

const Admissions = () => {
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <>
      <section className="bg-primary section-padding text-center">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4">Admissions</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">Your journey to excellence starts here. Follow our simple admission process.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading title="Admission Process" subtitle="A simple 4-step process to join Aris Global Education." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-card rounded-lg border p-6 text-center shadow-sm">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-serif text-lg text-primary mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Docs */}
      <section className="section-padding bg-secondary">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Eligibility Criteria" centered={false} />
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent mt-1 shrink-0" /> Must have completed the required educational qualification for the chosen program.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent mt-1 shrink-0" /> Minimum percentage requirements may vary by program (typically 45-50%).</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent mt-1 shrink-0" /> Valid entrance exam scores may be required for certain professional programs.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent mt-1 shrink-0" /> Age requirements as per regulatory body guidelines.</li>
            </ul>
          </div>
          <div>
            <SectionHeading title="Required Documents" centered={false} />
            <ul className="space-y-2">
              {documents.map((d, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding text-center">
        <div className="container">
          <h2 className="font-serif text-3xl text-primary-foreground mb-4">Ready to Apply?</h2>
          <p className="text-primary-foreground/80 mb-6">Start your application today and take the first step towards your dream career.</p>
          <Button size="lg" className="bg-accent text-accent-foreground font-semibold hover:opacity-90" onClick={() => setApplyOpen(true)}>
            Apply Now
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ApplyModal open={applyOpen} onOpenChange={setApplyOpen} />
    </>
  );
};

export default Admissions;
