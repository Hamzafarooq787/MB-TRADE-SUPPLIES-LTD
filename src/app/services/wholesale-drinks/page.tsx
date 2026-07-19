import Link from "next/link";

export const metadata = {
  title: "Wholesale Drinks Supply - MB Trade Supplies Ltd",
};

export default function WholesaleDrinksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-low overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            className="w-full h-full object-cover opacity-20"
            alt="Wholesale drinks warehouse"
            src="https://lh3.googleusercontent.com/aida/AP1WRLtlHxa4646RONxySe7rFTU86gYdbP3ANN1pRCKELbRUyT9GBlEtindfTtnO5F4zmuZ5YqxIzH3cyDTqdtBcIxRiO6ZbDBa5sIgXqORH2aqCyyx7TGnVjWsyQbtg7gwPSIVYehqZ3dB7nS5iEOJlhS0aSMLMjr0piVmUc7J6jhu5MNei_HIDcq6ZCZUOdutrvtL_Zybr9_T8AoJR4MfMB8Fb8a-54yOF6X5AD-5U3E9K5z0Eg-QclDagCjk"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/90 to-transparent"></div>
        </div>
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-32">
          <div className="max-w-2xl fade-up">
            <h1 className="font-display-lg text-display-lg text-primary mb-6">
              Wholesale Drinks Supply
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
              Reliable bulk supply of premium soft drinks, bottled water, and
              juices for the UK trade sector. Fast turnaround and competitive
              pricing for all your refreshment logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-on-secondary font-label-md text-label-md px-8 py-4 rounded-DEFAULT hover:bg-secondary-container transition-colors duration-150 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">download</span>
                Download Price List
              </button>
              <Link
                href="/contact"
                className="bg-surface border border-primary text-primary font-label-md text-label-md px-8 py-4 rounded-DEFAULT hover:bg-surface-container transition-colors duration-150 flex items-center justify-center gap-2"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="py-16 md:py-24 bg-surface max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 fade-up">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Our Product Range
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Comprehensive beverage solutions tailored for retail, hospitality,
            and corporate environments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover-lift fade-up stagger-1">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-6">
              <span className="material-symbols-outlined icon-fill">
                local_drink
              </span>
            </div>
            <h3 className="font-title-md text-title-md text-primary mb-2">
              Carbonated Soft Drinks
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Leading global brands available in bulk cans, PET bottles, and
              glass formats.
            </p>
            <span className="inline-block bg-surface-container px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant">
              In Stock
            </span>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover-lift fade-up stagger-2">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-6">
              <span className="material-symbols-outlined icon-fill">
                water_drop
              </span>
            </div>
            <h3 className="font-title-md text-title-md text-primary mb-2">
              Mineral &amp; Spring Water
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Still and sparkling options from premium UK and European
              sources.
            </p>
            <span className="inline-block bg-surface-container px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant">
              High Volume
            </span>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover-lift fade-up stagger-3">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-6">
              <span className="material-symbols-outlined icon-fill">
                blender
              </span>
            </div>
            <h3 className="font-title-md text-title-md text-primary mb-2">
              Natural Juices
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              100% natural fruit juices, purees, and functional wellness
              shots.
            </p>
            <span className="inline-block bg-surface-container px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant">
              In Stock
            </span>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover-lift fade-up stagger-4">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-6">
              <span className="material-symbols-outlined icon-fill">
                bolt
              </span>
            </div>
            <h3 className="font-title-md text-title-md text-primary mb-2">
              Energy &amp; Sports Drinks
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              High-demand isotonic and energy beverages for retail points of
              sale.
            </p>
            <span className="inline-block bg-surface-container px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant">
              Fast Moving
            </span>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-16 md:py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                Streamlined Logistics &amp; Ordering
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                We understand that consistent stock availability is critical
                to your business. Our wholesale infrastructure is designed for
                reliability at scale.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-1">
                    inventory_2
                  </span>
                  <div>
                    <strong className="block font-title-md text-title-md text-on-surface mb-1">
                      Bulk Pallet Delivery
                    </strong>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Efficient palletized distribution ensuring safe transit
                      and easy unloading at your facility.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-1">
                    sync_alt
                  </span>
                  <div>
                    <strong className="block font-title-md text-title-md text-on-surface mb-1">
                      Flexible Order Volumes
                    </strong>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      From single mixed pallets to full articulated lorry
                      loads, we adapt to your storage capacity.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-1">
                    check_circle
                  </span>
                  <div>
                    <strong className="block font-title-md text-title-md text-on-surface mb-1">
                      Consistent Stock Levels
                    </strong>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Real-time inventory management to guarantee supply
                      continuity for core product lines.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-[0px_10px_15px_-3px_rgba(10,31,68,0.1)] fade-up stagger-1">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="Warehouse staging area with pallets ready for dispatch"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsIazID3pAjlpLfAoEeyQmk9R9EoqmZkEK0Qg-M3liY_5_imMr9NyF71kOHQ9JcnVZlMSnRDeVWeObYcarpw7u_FTEX9fP5ZuzifksPr1s_Aw8nV8EtBz5eXwJd_7J8ooUtp6EJYVtZy48od1M1AntmGizm0jtoBHdQgRua1faeCeQmoRaDxIweAPOalgjVgJpvV0xxypSxomeP-0B7TWprj9dOBp6D4gQPcwekYaRFmZ66DHNc1eH7A_I5mr8JIP5fYlxE_FYLF0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trade CTA Banner */}
      <section className="bg-primary text-on-primary py-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-8 fade-up">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-2">
              Set up your drinks supply account today
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container">
              Partner with MB Trade Supplies Ltd for dependable, direct-to-trade
              distribution.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-secondary text-on-secondary font-label-md text-label-md px-8 py-4 rounded-DEFAULT hover:bg-secondary-container transition-colors duration-150 whitespace-nowrap"
          >
            Contact Our Trade Team
          </Link>
        </div>
      </section>
    </>
  );
}
