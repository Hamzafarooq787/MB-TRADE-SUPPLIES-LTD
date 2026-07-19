export const metadata = {
  title: "Contact Us - MB Trade Supplies Ltd",
};

export default function ContactPage() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 reveal">
        <div className="max-w-3xl">
          <h1 className="font-display-lg text-display-lg text-primary mb-4 md:mb-6">
            Get In Touch
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Ready to streamline your wholesale supply chain? Contact us today
            to discuss trade pricing, set up a new account, or enquire about
            our specialized logistics for food and beverage distribution
            across the UK.
          </p>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Company Info */}
        <div
          className="lg:col-span-5 flex flex-col space-y-8 reveal"
          style={{ transitionDelay: "100ms" }}
        >
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-8 shadow-[0px_2px_4px_rgba(10,31,68,0.05)] hover-lift">
            <h2 className="font-title-md text-title-md text-primary mb-6 flex items-center">
              <span
                className="material-symbols-outlined mr-3 text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
              Headquarters
            </h2>
            <address className="not-italic font-body-md text-body-md text-on-surface-variant space-y-2 mb-8">
              MB Trade Supplies Ltd
              <br />
              Unit 3, Garfield Works
              <br />
              Uttoxeter Road
              <br />
              ST3 1PF, United Kingdom
            </address>
            <h2 className="font-title-md text-title-md text-primary mb-6 flex items-center">
              <span
                className="material-symbols-outlined mr-3 text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mail
              </span>
              Direct Contact
            </h2>
            <div className="space-y-4">
              <div className="flex items-center group cursor-pointer">
                <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-secondary transition-colors duration-200">
                  accounts@mbtradesupplies.co.uk
                </span>
                <span className="material-symbols-outlined ml-2 text-outline group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-all duration-200 text-sm">
                  open_in_new
                </span>
              </div>
              <div className="flex items-center group cursor-pointer">
                <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-secondary transition-colors duration-200">
                  +44 (0) 1234 567 890
                </span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-8 shadow-[0px_2px_4px_rgba(10,31,68,0.05)] hover-lift">
            <h2 className="font-title-md text-title-md text-primary mb-6 flex items-center">
              <span
                className="material-symbols-outlined mr-3 text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                schedule
              </span>
              Operating Hours
            </h2>
            <ul className="font-body-md text-body-md text-on-surface-variant space-y-3">
              <li className="flex justify-between border-b border-surface-container pb-2">
                <span>Monday - Friday</span>{" "}
                <span className="font-medium text-primary">
                  06:00 - 18:00
                </span>
              </li>
              <li className="flex justify-between border-b border-surface-container pb-2">
                <span>Saturday</span>{" "}
                <span className="font-medium text-primary">
                  06:00 - 14:00
                </span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>{" "}
                <span className="font-medium text-outline">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Form */}
        <div
          className="lg:col-span-7 reveal"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-8 shadow-[0px_2px_4px_rgba(10,31,68,0.05)]">
            <h2 className="font-title-md text-title-md text-primary mb-8">
              Send an Enquiry
            </h2>
            <form action="#" className="space-y-2" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter">
                <div className="input-group">
                  <input id="name" name="name" placeholder=" " required type="text" />
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="input-group">
                  <input
                    id="company"
                    name="company"
                    placeholder=" "
                    type="text"
                  />
                  <label htmlFor="company">Company Name</label>
                </div>
              </div>
              <div className="input-group">
                <input
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                  type="email"
                />
                <label htmlFor="email">Work Email Address</label>
              </div>
              <div className="input-group select-wrapper">
                <label htmlFor="enquiry_type">Enquiry Type</label>
                <select
                  className="mt-2 appearance-none bg-transparent"
                  id="enquiry_type"
                  name="enquiry_type"
                  required
                  defaultValue=""
                >
                  <option disabled hidden value="">
                    Select an option...
                  </option>
                  <option value="wholesale_drinks">Wholesale Drinks</option>
                  <option value="pre_packaged_chicken">
                    Pre-Packaged Chicken
                  </option>
                  <option value="new_account">New Trade Account</option>
                  <option value="logistics">Logistics &amp; Delivery</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-outline mt-2">
                  <span className="material-symbols-outlined">
                    expand_more
                  </span>
                </div>
              </div>
              <div className="input-group mt-6">
                <textarea
                  className="resize-none"
                  id="message"
                  name="message"
                  placeholder=" "
                  required
                  rows={5}
                ></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-outline">
                  * Required fields
                </span>
                <button
                  className="bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-3 rounded font-label-md text-label-md transition-colors duration-300 shadow-[0px_2px_4px_rgba(10,31,68,0.05)] hover:shadow-[0px_10px_15px_-3px_rgba(10,31,68,0.1)] flex items-center"
                  type="submit"
                >
                  Submit Enquiry
                  <span className="material-symbols-outlined ml-2 text-sm">
                    send
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 reveal"
        style={{ transitionDelay: "300ms" }}
      >
        <div className="w-full h-96 bg-surface-container rounded-lg overflow-hidden relative shadow-[0px_2px_4px_rgba(10,31,68,0.05)] border border-outline-variant/30">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmCNdnHvIaUUuELJUoarbM5sfFbJC3Gx_DG2Js-wlxCtM8cX2Ryfv1islWbBHrh2Uw6ms_Oq8kSDnsdo9J8_tWzaBSbWyBwaxrYu4bOdfOdkjQWvWu5AVaMYMxdOwcqkZ9R0P7M71kJX-Rpcl7-vHLg2EVQE69iwZ3c6L6l7ycyO0_PxI6woNS-wIp1DhKrw5J-Mtckod9XkVd6HA6O13-Bsq2CYbBtRibHorh9bavfDWJpmrx-0mfbFFdXjB7UhYOyVUVdM1V4xg')",
            }}
          ></div>
          <div className="absolute bottom-6 left-6 bg-surface-container-lowest p-4 rounded shadow-md border border-outline-variant/20 flex items-start space-x-3">
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
