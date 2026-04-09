import Link from "next/link";
import { Eye, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  product: [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  company: [
    { href: "#about", label: "About Us" },
    { href: "#team", label: "Our Team" },
    { href: "#careers", label: "Careers" },
    { href: "#press", label: "Press" },
  ],
  resources: [
    { href: "#blog", label: "Blog" },
    { href: "#guides", label: "User Guides" },
    { href: "#accessibility", label: "Accessibility" },
    { href: "#support", label: "Support" },
  ],
  legal: [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
    { href: "#cookies", label: "Cookie Policy" },
  ],
};

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://youtube.com", label: "YouTube", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-navy text-cream" role="contentinfo">
      {/* Main Footer Content */}
      <div className="mx-auto container px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-6 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-lg"
              aria-label="Drishti - Home"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber">
                <Eye className="h-6 w-6 text-navy" aria-hidden="true" />
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight">
                Drishti
              </span>
            </Link>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">
              Empowering the visually impaired with innovative smart cane technology. 
              Navigate the world with confidence and independence.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <a
                href="mailto:hello@drishti.tech"
                className="flex items-center gap-3 text-cream/80 transition-colors hover:text-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-lg"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                <span className="text-lg">hello@drishti.tech</span>
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 text-cream/80 transition-colors hover:text-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-lg"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span className="text-lg">+91 123 456 7890</span>
              </a>
              <div className="flex items-start gap-3 text-cream/80">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" aria-hidden="true" />
                <span className="text-lg">
                  Innovation Hub, Sector 62<br />
                  Noida, Uttar Pradesh 201301
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            {/* Product */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-amber">Product</h3>
              <ul className="mt-6 space-y-4" role="list">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg text-cream/80 transition-colors hover:text-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-lg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-amber">Company</h3>
              <ul className="mt-6 space-y-4" role="list">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg text-cream/80 transition-colors hover:text-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-lg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-amber">Resources</h3>
              <ul className="mt-6 space-y-4" role="list">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg text-cream/80 transition-colors hover:text-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-lg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-amber">Legal</h3>
              <ul className="mt-6 space-y-4" role="list">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg text-cream/80 transition-colors hover:text-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-lg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto container px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Copyright */}
            <p className="text-lg text-cream/60">
              © {new Date().getFullYear()} Drishti Technologies. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition-all hover:bg-amber hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
