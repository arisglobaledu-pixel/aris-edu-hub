import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-secondary">
    <div className="container section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl text-primary-foreground mb-4">Aris Global Education</h3>
          <p className="text-sm leading-relaxed opacity-80">
            Empowering students through quality education, innovation, and skill development across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              { to: "/about", label: "About Us" },
              { to: "/courses", label: "Courses" },
              { to: "/admissions", label: "Admissions" },
              { to: "/get-involved", label: "Get Involved" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Popular Courses</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {["B.Com", "BBA", "MBA", "B.Tech", "B.Pharmacy"].map((c) => (
              <li key={c}>
                <Link to="/courses" className="hover:text-gold transition-colors">{c}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> 123 Education Lane, New Delhi, India 110001</li>
            <li className="flex items-center gap-2"><Phone size={16} className="shrink-0" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail size={16} className="shrink-0" /> info@arisglobaleducation.com</li>
          </ul>
          <div className="flex gap-3 mt-4">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-full bg-navy-light hover:bg-gold hover:text-accent-foreground transition-colors" aria-label="Social media">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-navy-light text-center text-sm opacity-60">
        © {new Date().getFullYear()} Aris Global Education. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
