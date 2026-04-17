import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Info, Users, Accessibility, Glasses } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductsDropdown from "./ProductsDropdown";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/our-teams", label: "Our Teams" },
];

export function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-40">
      <nav
        className="border-b border-transparent bg-transparent py-4 transition-all duration-300"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
              aria-label="Drishti - Home"
            >
              <Image
                src="/logo.png"
                alt="Drishti Logo"
                width={120}
                height={32}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <Link
                href="/about"
                className="flex items-center gap-2 rounded-lg px-2 py-1 text-lg font-medium text-gray-900 transition-colors hover:text-[#cfac6e] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                <Info className="h-4 w-4" />
                About Us
              </Link>

              <ProductsDropdown />

              <Link
                href="/our-teams"
                className="flex items-center gap-2 rounded-lg px-2 py-1 text-lg font-medium text-gray-900 transition-colors hover:text-[#cfac6e] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                <Users className="h-4 w-4" />
                Our Teams
              </Link>
            </div>

            {/* CTA Button - Desktop */}
            {/* <div className="hidden lg:block">
              <Link
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/10 bg-[#333] px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#cfac6e] hover:text-[#141414] focus:outline-none"
              >
                Get Started
              </Link>
            </div> */}

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger className="flex h-10 w-10 items-center justify-center rounded-lg text-black transition-colors hover:bg-black/5 focus:outline-none">
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="border-l border-white/10 bg-[#141414]/95 px-6 py-6 text-white"
                >
                  <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

                  <div className="mt-6 flex flex-col gap-4">
                    <SheetClose asChild>
                      <Link
                        href="/about"
                        className="flex items-center gap-3 px-2 py-2 text-lg font-medium text-gray-300 transition-colors hover:text-white"
                      >
                        <Info className="h-4 w-4" />
                        About Us
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/products/abhash-smart-cane"
                        className="flex items-center gap-3 px-2 py-2 text-lg font-medium text-gray-300 transition-colors hover:text-white"
                      >
                        <Accessibility className="h-4 w-4" />
                        Abhash Smart Cane
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/products/abhash-smart-glasses"
                        className="flex items-center gap-3 px-2 py-2 text-lg font-medium text-gray-300 transition-colors hover:text-white"
                      >
                        <Glasses className="h-4 w-4" />
                        Abhash Smart Glasses
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/our-teams"
                        className="flex items-center gap-3 px-2 py-2 text-lg font-medium text-gray-300 transition-colors hover:text-white"
                      >
                        <Users className="h-4 w-4" />
                        Our Teams
                      </Link>
                    </SheetClose>

                    {/* <div className="pt-4">
                      <SheetClose asChild>
                        <Link
                          href="#contact"
                          className="inline-flex w-full items-center justify-center rounded-full bg-[#cfac6e] px-6 py-4 text-lg font-semibold text-[#141414] transition-all hover:bg-[#b5965e]"
                        >
                          Get Started
                        </Link>
                      </SheetClose>
                    </div> */}
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