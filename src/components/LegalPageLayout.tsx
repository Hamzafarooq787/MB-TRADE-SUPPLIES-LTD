import { ReactNode } from "react";

interface Section {
  heading: string;
  body: ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageLayoutProps) {
  return (
    <div className="pb-20">
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl fade-up">
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-wide mb-3">
              Last updated: {lastUpdated}
            </p>
            <h1 className="font-display-lg font-bold text-4xl md:text-display-lg text-primary mb-6">
              {title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {intro}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-20">
        <div className="max-w-3xl fade-up">
          {sections.map((section) => (
            <div key={section.heading} className="mb-10 last:mb-0">
              <h2 className="font-headline-lg-mobile md:font-headline-lg font-bold text-2xl md:text-headline-lg text-primary mb-4">
                {section.heading}
              </h2>
              <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-secondary [&_a]:hover:underline">
                {section.body}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
