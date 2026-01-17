import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const services = [
  "Civil Construction",
  "Interior Design",
  "Wooden Work",
  "Modular Kitchen",
  "Terrace Garden",
  "Modern Elevation",
];

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/917737177301?text=Hello! I'm interested in your services.",
      "_blank"
    );
  };

  return (
    <footer className="bg-charcoal text-cream border-t border-gold/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-2">
              Bhagwati Builder
            </h3>
            <p className="text-gold text-sm mb-4">Jaipur Builder • Since 2012</p>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              "We Build Your Dream Not Only A House"
              <br />
              <br />
              Complete house construction and interior solutions in Jaipur,
              Rajasthan.
            </p>
            {/* Since Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2">
              <span className="text-gold font-semibold">🏆 Since 2012</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-cream">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-cream/70 hover:text-gold transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-cream">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-cream">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+917737177301"
                    className="text-cream/70 hover:text-gold transition-colors text-sm block"
                  >
                    +91-7737177301
                  </a>
                  <a
                    href="tel:+919660177301"
                    className="text-cream/70 hover:text-gold transition-colors text-sm block"
                  >
                    +91-9660177301
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <button
                  onClick={handleWhatsApp}
                  className="text-cream/70 hover:text-gold transition-colors text-sm text-left"
                >
                  WhatsApp Chat
                </button>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-cream/70 text-sm">
                  Jaipur, Rajasthan, India
                </span>
              </li>
            </ul>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="mt-6 w-full bg-[#25D366] text-white py-3 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm text-center md:text-left">
            © 2024 Bhagwati Builder & Sanwariya Home Decor. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-cream/50 text-sm">
            <span>Jaipur, Rajasthan</span>
            <span className="text-gold">•</span>
            <span>Since 2012</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
