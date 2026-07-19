import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/shipping-info", label: "Shipping Info" },
  { href: "/wholesale-portal", label: "Wholesale Portal" },
];

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-surface-container-lowest w-full transition-all duration-300 border-t-0">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-6 mb-8 md:mb-0">
          <Image
            src="/logo-white.webp"
            alt="MB Trade Supplies Ltd"
            width={1063}
            height={191}
            className="h-8 w-auto mb-4"
          />
          <p className="font-body-md text-body-md text-on-primary/80 max-w-sm">
            Reliable wholesale supply of drinks and pre-packaged chicken to
            trade customers across the UK.
          </p>
        </div>
        <div className="md:col-span-6 flex flex-col md:items-end justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 md:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-label-md text-label-md text-on-primary-fixed-variant hover:text-on-primary hover:translate-x-1 transition-transform duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="font-label-md text-label-md text-on-primary/60 md:text-right">
            © 2026 MB Trade Supplies Ltd. Unit 3, Garfield Works, Uttoxeter
            Road, ST3 1PF. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
