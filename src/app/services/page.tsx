import Link from "next/link";

export const metadata = {
  title: "Services - MB Trade Supplies Ltd",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h1 className="font-display-lg font-bold text-4xl sm:text-5xl md:text-display-lg text-primary mb-6 fade-up">
            Our Services
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto fade-up stagger-1">
            Comprehensive wholesale solutions for the trade. We provide
            reliable, high-volume supply chains tailored to your business
            needs.
          </p>
        </div>
      </section>

      {/* Service 1: Drinks */}
      <section className="py-16 md:py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 fade-up">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                Wholesale Drinks Supply
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                We offer an extensive range of bulk soft drinks, mineral
                waters, and premium juices to keep your shelves stocked and
                your customers satisfied. Our robust supply chain ensures you
                never run out of the essentials.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 fade-up stagger-1">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                  <span className="font-body-md text-on-surface">
                    Wide range of popular brands
                  </span>
                </li>
                <li className="flex items-start gap-3 fade-up stagger-2">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                  <span className="font-body-md text-on-surface">
                    Flexible order quantities
                  </span>
                </li>
                <li className="flex items-start gap-3 fade-up stagger-3">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                  <span className="font-body-md text-on-surface">
                    Consistent stock availability
                  </span>
                </li>
                <li className="flex items-start gap-3 fade-up stagger-4">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                  <span className="font-body-md text-on-surface">
                    Competitive trade pricing
                  </span>
                </li>
              </ul>
              <Link
                href="/services/wholesale-drinks"
                className="inline-flex items-center text-secondary font-label-md text-label-md mt-6 hover:text-secondary-container transition-colors"
              >
                View Wholesale Drinks{" "}
                <span className="material-symbols-outlined ml-1 text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="md:col-span-7 mt-8 md:mt-0 fade-up stagger-2">
              <img
                className="w-full h-[400px] object-cover rounded-xl shadow-[0px_2px_4px_rgba(10,31,68,0.05)] border border-outline-variant"
                alt="Wholesale drinks warehouse"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZf5zmBcnhk11PLK_xigxGmCxSHXMB_kgE9jlh1incyKW0i22uuVxCeExxX3rpXcLzws4gf0DEJI17g5ZB-gLRs8wXS6sZeXqzPL8GaFOKxaB0n5PNQV0XWIQsDMaDNxxG6a16nj0G2EExXmkKhkcM52MUIfLneba0132r8IdzolaPtqq8nax4azFsvkpOiXn5lv5TXXg_O6HRGC8xKxRwLktevhuC35O2ZrmhLHsccP8RgKeNXVtRLy49fGe-fVws7AtZscu_iJM"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Chicken */}
      <section className="py-16 md:py-24 bg-surface-container-lowest border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7 order-2 md:order-1 mt-8 md:mt-0 fade-up">
              <img
                className="w-full h-[400px] object-cover rounded-xl shadow-[0px_2px_4px_rgba(10,31,68,0.05)] border border-outline-variant"
                alt="Pre-packaged chicken processing facility"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtxqQ8sWdZdKQUUiYU_C1XLiHziigIG3CMD5wNoQNYbQrnxIqpFJXUgtSojvNhlKCQmG4SM3WTmj-RoK_NN7QE1lkyNcwr4XaEbBhYTpVgj2WkhVq48NAB8p8LBlxrqx9BnNHX8TajahLN3wqec0SEjfsSy5mYvYUGJiRTx2gMsfeqp_bBrbj_ok9obJId9GVPwfnmL5-1BKRWG7sA0PNVvxR-T8vbaObL1M-RSkexsRNMMYdm3Wwv-NZXblcfqo5173NE-zaBNQU"
              />
            </div>
            <div className="md:col-span-5 order-1 md:order-2 fade-up stagger-1">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                Pre-Packaged Chicken Supply
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Sourced from trusted producers, our pre-packaged chicken
                guarantees quality, freshness, and strict adherence to food
                safety standards. Delivered retail-ready to streamline your
                operations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 fade-up stagger-1">
                  <span className="material-symbols-outlined text-secondary">
                    verified_user
                  </span>
                  <span className="font-body-md text-on-surface">
                    Rigorously quality-checked
                  </span>
                </li>
                <li className="flex items-start gap-3 fade-up stagger-2">
                  <span className="material-symbols-outlined text-secondary">
                    ac_unit
                  </span>
                  <span className="font-body-md text-on-surface">
                    Strict cold-chain handling
                  </span>
                </li>
                <li className="flex items-start gap-3 fade-up stagger-3">
                  <span className="material-symbols-outlined text-secondary">
                    local_shipping
                  </span>
                  <span className="font-body-md text-on-surface">
                    Reliable, timely delivery
                  </span>
                </li>
                <li className="flex items-start gap-3 fade-up stagger-4">
                  <span className="material-symbols-outlined text-secondary">
                    inventory_2
                  </span>
                  <span className="font-body-md text-on-surface">
                    Retail-ready packaging
                  </span>
                </li>
              </ul>
              <Link
                href="/services/pre-packaged-chicken"
                className="inline-flex items-center text-secondary font-label-md text-label-md mt-6 hover:text-secondary-container transition-colors"
              >
                View Pre-Packaged Chicken{" "}
                <span className="material-symbols-outlined ml-1 text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Ordering Icons */}
      <section className="py-16 md:py-24 bg-surface-container">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center fade-up">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-12">
            Trade Ordering &amp; Delivery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_2px_4px_rgba(10,31,68,0.05)] border border-outline-variant hover-lift transition-all duration-300">
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6">
                <span
                  className="material-symbols-outlined text-primary text-[32px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  shopping_cart_checkout
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-2">
                Easy Ordering
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Streamlined portal for quick, bulk order placement.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_2px_4px_rgba(10,31,68,0.05)] border border-outline-variant hover-lift transition-all duration-300 stagger-1">
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6">
                <span
                  className="material-symbols-outlined text-primary text-[32px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  calendar_month
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-2">
                Regular Schedules
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Dependable delivery slots aligned with your stock needs.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_2px_4px_rgba(10,31,68,0.05)] border border-outline-variant hover-lift transition-all duration-300 stagger-2">
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6">
                <span
                  className="material-symbols-outlined text-primary text-[32px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  manage_accounts
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-2">
                Dedicated Accounts
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Personalized support from experienced account managers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 bg-primary text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop fade-up">
          <h2 className="font-headline-lg text-headline-lg text-on-primary mb-6">
            Ready to set up a trade account?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-fixed-variant mb-8 max-w-2xl mx-auto">
            Partner with us for reliable wholesale supply and competitive
            pricing.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-on-primary font-label-md text-label-md px-8 py-3 rounded shadow-[0px_2px_4px_rgba(10,31,68,0.05)] hover:-translate-y-[2px] hover:shadow-[0px_10px_15px_-3px_rgba(10,31,68,0.1)] transition-all duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
