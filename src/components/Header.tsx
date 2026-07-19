"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`bg-background dark:bg-primary fixed w-full top-0 z-50 shadow-sm dark:bg-surface-container-highest transition-all duration-300 ${
        scrolled ? "py-0" : ""
      }`}
      style={{ height: scrolled ? "64px" : "80px" }}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-full">
        <Link
          href="/"
          className="font-headline-lg text-headline-lg text-primary dark:text-on-primary-fixed"
        >
          MB Trade Supplies Ltd
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "text-secondary font-bold border-b-2 border-secondary pb-1 transition-all duration-300"
                  : "text-on-surface dark:text-on-surface-variant hover:text-secondary transition-colors duration-300"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-outline">
              search
            </span>
            <input
              className="pl-10 pr-4 py-2 border border-outline-variant rounded-DEFAULT focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 bg-surface"
              placeholder="Search..."
              type="text"
            />
          </div>
          <Link
            href="/contact"
            className="bg-primary text-on-primary px-6 py-2 rounded-DEFAULT font-label-md hover:bg-primary-container transition-colors duration-300 hover-lift shadow-sm"
          >
            Request Trade Account
          </Link>
        </div>

        <button
          className="md:hidden text-on-surface"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background dark:bg-surface-container-highest border-t border-outline-variant shadow-sm">
          <nav className="flex flex-col px-margin-mobile py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive(link.href)
                    ? "text-secondary font-bold"
                    : "text-on-surface hover:text-secondary transition-colors duration-300"
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-on-primary px-6 py-3 rounded-DEFAULT font-label-md text-center hover:bg-primary-container transition-colors duration-300"
            >
              Request Trade Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
