import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  company: [
    { href: "#impact", label: "Impact" },
    { href: "#stats", label: "Statistics" },
    { href: "#product", label: "Product" },
    { href: "#join", label: "Join Us" },
  ],
  product: [
    { href: "/products/abhash-smart-cane", label: "Smart Cane" },
    { href: "/products/abhash-smart-glasses", label: "Smart Glasses" },
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
    <footer
      className="relative overflow-hidden bg-white text-cream"
      role="contentinfo"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[#E8A838]/10 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#2A9D8F]/10 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,168,56,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.08),transparent_30%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex max-w-full items-center rounded-lg transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A838] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Drishti - Home"
            >
              <Image
                src="/logo.png"
                alt="Drishti Logo"
                width={160}
                height={160}
                className="h-auto w-28 object-contain sm:w-32 md:w-36 lg:w-40"
                priority
              />
            </Link>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#0B1A2E]/75 sm:mt-6 sm:text-base lg:text-lg">
              Empowering visually impaired individuals with innovative smart
              cane technology for safer mobility, greater confidence, and
              everyday independence.
            </p>

            <div className="mt-6 space-y-4 sm:mt-8">
              <a
                href="mailto:ridwanhpatwary@gmail.com"
                className="flex items-start gap-3 break-all rounded-lg text-sm text-[#0B1A2E]/75 transition-colors hover:text-[#E8A838] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A838] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-base"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <span>ridwanhpatwary@gmail.com</span>
              </a>

              <a
                href="tel:+8801795820358"
                className="flex items-start gap-3 rounded-lg text-sm text-[#0B1A2E]/75 transition-colors hover:text-[#E8A838] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A838] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-base"
              >
                <Phone className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <span>+8801795-820358</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-[#0B1A2E]/75 sm:text-base">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden="true"
                />
                <span className="max-w-xs sm:max-w-sm">
                  Tejgaon love road, Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>
      
          <div>
            <h3 className="text-base font-semibold text-[#0B1A2E] sm:text-lg">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#0B1A2E]/70 transition-colors hover:text-[#E8A838] sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#0B1A2E] sm:text-lg">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#0B1A2E]/70 transition-colors hover:text-[#2A9D8F] sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#0B1A2E]/10 pt-5 sm:mt-12 sm:pt-6 lg:mt-14">
          <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-center text-xs text-[#0B1A2E]/55 sm:text-sm md:text-left">
              © {new Date().getFullYear()} Drishti Technologies. All rights
              reserved.
            </p>

            {/* <div className="flex items-center justify-center gap-3 md:justify-end">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0B1A2E]/10 bg-[#0B1A2E]/5 text-[#0B1A2E]/70 transition-all hover:-translate-y-0.5 hover:border-[#E8A838]/40 hover:bg-[#E8A838] hover:text-[#0B1A2E] sm:h-10 sm:w-10"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div> */}
            <div>
              <span className="text-xs text-[#0B1A2E]/55 sm:text-sm">
                Developed by{" "}
              </span>
              <a
                href="https://ongshak.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#E8A838] transition hover:text-[#0B1A2E] sm:text-sm"
              >
                Ongshak
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
