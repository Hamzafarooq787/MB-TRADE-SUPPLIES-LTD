export const metadata = {
  title: "Contact Us - MB Trade Supplies Ltd",
};

export default function ContactPage() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 reveal">
        <div className="max-w-3xl">
          <h1 className="font-display-lg font-bold text-4xl md:text-display-lg text-primary mb-4 md:mb-6">
            Get In Touch
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Ready to streamline your wholesale supply chain? Reach out today
            to discuss trade pricing, set up a new account, or enquire about
            our specialized logistics for food and beverage distribution
            across the UK.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-gutter">
          {/* Headquarters */}
          <div
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-8 shadow-[0px_2px_4px_rgba(10,31,68,0.05)] hover-lift reveal"
          >
            <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-6 text-primary">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
            </div>
            <h2 className="font-title-md text-title-md text-primary mb-4">
              Headquarters
            </h2>
            <address className="not-italic font-body-md text-body-md text-on-surface-variant leading-relaxed">
              MB Trade Supplies Ltd
              <br />
              Unit 3, Garfield Works
              <br />
              Uttoxeter Road
              <br />
              ST3 1PF, United Kingdom
            </address>
          </div>

          {/* Direct Contact */}
          <div
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-8 shadow-[0px_2px_4px_rgba(10,31,68,0.05)] hover-lift reveal"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-6 text-primary">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mail
              </span>
            </div>
            <h2 className="font-title-md text-title-md text-primary mb-4">
              Email Us
            </h2>
            <a
              href="mailto:accounts@mbtradesupplies.co.uk"
              className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200 break-all"
            >
              <span className="material-symbols-outlined text-lg shrink-0">
                mail
              </span>
              accounts@mbtradesupplies.co.uk
            </a>
          </div>

          {/* Operating Hours */}
          <div
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-8 shadow-[0px_2px_4px_rgba(10,31,68,0.05)] hover-lift reveal md:col-span-2 lg:col-span-1"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-6 text-primary">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                schedule
              </span>
            </div>
            <h2 className="font-title-md text-title-md text-primary mb-4">
              Operating Hours
            </h2>
            <ul className="font-body-md text-body-md text-on-surface-variant space-y-3">
              <li className="flex justify-between border-b border-surface-container pb-2">
                <span>Monday - Friday</span>
                <span className="font-medium text-primary">
                  06:00 - 18:00
                </span>
              </li>
              <li className="flex justify-between border-b border-surface-container pb-2">
                <span>Saturday</span>
                <span className="font-medium text-primary">
                  06:00 - 14:00
                </span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="font-medium text-outline">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 reveal">
        <div className="bg-primary rounded-xl p-8 md:p-12 shadow-[0px_10px_15px_-3px_rgba(10,31,68,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full opacity-50 blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg font-bold text-2xl md:text-headline-lg text-on-primary mb-2">
                Ready to discuss your order?
              </h2>
              <p className="font-body-md text-body-md text-on-primary-container max-w-xl">
                Our trade team is on hand Monday to Saturday to discuss
                pricing, logistics, and setting up your account.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <a
                href="mailto:accounts@mbtradesupplies.co.uk"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary font-label-md text-label-md px-8 py-3 rounded hover:bg-secondary-container transition-colors duration-300 shadow-[0px_2px_4px_rgba(10,31,68,0.05)] hover:shadow-[0px_10px_15px_-3px_rgba(10,31,68,0.1)]"
              >
                <span className="material-symbols-outlined text-lg">
                  mail
                </span>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop reveal"
        style={{ transitionDelay: "300ms" }}
      >
        <div className="w-full h-72 sm:h-96 bg-surface-container rounded-lg overflow-hidden relative shadow-[0px_2px_4px_rgba(10,31,68,0.05)] border border-outline-variant/30">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmCNdnHvIaUUuELJUoarbM5sfFbJC3Gx_DG2Js-wlxCtM8cX2Ryfv1islWbBHrh2Uw6ms_Oq8kSDnsdo9J8_tWzaBSbWyBwaxrYu4bOdfOdkjQWvWu5AVaMYMxdOwcqkZ9R0P7M71kJX-Rpcl7-vHLg2EVQE69iwZ3c6L6l7ycyO0_PxI6woNS-wIp1DhKrw5J-Mtckod9XkVd6HA6O13-Bsq2CYbBtRibHorh9bavfDWJpmrx-0mfbFFdXjB7UhYOyVUVdM1V4xg')",
            }}
          ></div>
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 bg-surface-container-lowest p-4 rounded shadow-md border border-outline-variant/20 flex items-start space-x-3">
            <div className="bg-primary-container p-2 rounded shrink-0">
              <span
                className="material-symbols-outlined text-on-primary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                warehouse
              </span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-primary mb-1">
                Distribution Center
              </p>
              <p className="font-label-sm text-label-sm text-outline">
                Unit 3, Garfield Works
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
