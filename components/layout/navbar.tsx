import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar({
  navLinks,
}: {
  navLinks: { href: string; label: string }[];
}) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav
        className="transition-all duration-300 border-b bg-transparent border-transparent py-5"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto container px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] rounded-lg"
              aria-label="Drishti - Home"
            >
              <Image
                src="/logo.png"
                alt="Drishti Logo"
                width={120}
                height={32}
                className="object-cover"
                loading="lazy"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-gray-900 transition-colors  focus:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-lg px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#333] border border-white/10 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#cfac6e] hover:text-[#141414] focus:outline-none"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button & Sheet */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus:outline-none">
                  <Menu className="h-6 w-6" aria-hidden="true" color="black" />
                </SheetTrigger>

                {/* side="top" matches your original downward expanding animation */}
                <SheetContent
                  side="right"
                  className="bg-[#141414]/95 border-b border-white/10 px-6 py-6"
                >
                  {/* Title is required for screen readers by Radix UI */}
                  <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

                  <div className="flex flex-col gap-4 mt-6">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="block text-lg font-medium text-gray-400 transition-colors hover:text-white px-2 py-2"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                    <div className="pt-4">
                      <SheetClose asChild>
                        <Link
                          href="#contact"
                          className="inline-flex w-full items-center justify-center rounded-full bg-[#cfac6e] px-6 py-4 text-lg font-semibold text-[#141414] transition-all hover:bg-[#b5965e]"
                        >
                          Get Started
                        </Link>
                      </SheetClose>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
