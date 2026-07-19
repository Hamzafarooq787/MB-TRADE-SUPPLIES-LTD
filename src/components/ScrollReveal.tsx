"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeClass = entry.target.classList.contains("reveal")
              ? "active"
              : "visible";
            entry.target.classList.add(activeClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -50px 0px", threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-up, .reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
