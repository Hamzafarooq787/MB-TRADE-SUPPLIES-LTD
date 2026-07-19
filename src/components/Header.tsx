"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/wholesale-drinks", label: "Wholesale Drinks" },
      {
        href: "/services/pre-packaged-chicken",
        label: "Pre-Packaged Chicken",
      },
    ],
  },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
      className="bg-background dark:bg-primary fixed w-full top-0 z-50 shadow-sm dark:bg-surface-container-highest transition-all duration-300"
      style={{ height: scrolled ? "64px" : "80px" }}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-full gap-2 md:gap-3 lg:gap-6">
        <Link
          href="/"
          className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-lg lg:text-xl xl:text-headline-lg text-primary dark:text-on-primary-fixed shrink-0 whitespace-nowrap"
        >
          MB Trade Supplies Ltd
        </Link>

        <nav className="hidden md:flex items-center gap-3 lg:gap-8 text-sm lg:text-base">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 whitespace-nowrap ${
                    isActive(link.href)
                      ? "text-secondary font-bold border-b-2 border-secondary pb-1 transition-all duration-300"
                      : "text-on-surface dark:text-on-surface-variant hover:text-secondary transition-colors duration-300"
                  }`}
                >
                  {link.label}
                  <span className="material-symbols-outlined text-base">
                    expand_more
                  </span>
                </Link>
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <div className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-lg py-2 min-w-[220px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2.5 font-body-md text-body-md text-on-surface hover:text-secondary hover:bg-surface-container-low transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive(link.href)
                    ? "whitespace-nowrap text-secondary font-bold border-b-2 border-secondary pb-1 transition-all duration-300"
                    : "whitespace-nowrap text-on-surface dark:text-on-surface-variant hover:text-secondary transition-colors duration-300"
                }
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap bg-primary text-on-primary px-3 py-2 text-xs lg:px-6 lg:py-2.5 lg:text-label-md rounded-lg font-label-md hover:bg-primary-container transition-all duration-300 hover-lift shadow-sm hover:shadow-md"
          >
            <span className="lg:hidden">Trade Account</span>
            <span className="hidden lg:inline">Request Trade Account</span>
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
        <div className="md:hidden bg-background dark:bg-surface-container-highest border-t border-outline-variant shadow-sm max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="flex flex-col px-margin-mobile py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`py-2 ${
                        isActive(link.href)
                          ? "text-secondary font-bold"
                          : "text-on-surface hover:text-secondary transition-colors duration-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                    <button
                      aria-label="Toggle services submenu"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="p-2 text-on-surface"
                    >
                      <span
                        className={`material-symbols-outlined transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="pl-4 flex flex-col space-y-1 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="py-2 font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2 ${
                    isActive(link.href)
                      ? "text-secondary font-bold"
                      : "text-on-surface hover:text-secondary transition-colors duration-300"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-center hover:bg-primary-container transition-colors duration-300"
            >
              Request Trade Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
