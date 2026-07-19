import Link from "next/link";

export const metadata = {
  title: "Pre-Packaged Chicken Supply - MB Trade Supplies Ltd",
};

export default function PrePackagedChickenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-low py-16 md:py-24 overflow-hidden border-b border-surface-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 fade-up">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full w-fit font-label-sm border border-secondary/20">
              <span className="material-symbols-outlined text-[16px] icon-fill">
                inventory_2
              </span>
              Wholesale Distribution
            </div>
            <h1 className="font-display-lg text-4xl md:text-display-lg text-primary tracking-tight">
              Pre-Packaged Chicken Supply
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              High-quality, quality-assured poultry products for retail,
              catering, and food service providers. Delivered fresh via our
              strict cold-chain network.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="bg-secondary text-on-secondary px-8 py-3 rounded shadow-md hover:bg-secondary-container transition-all duration-150 font-label-md flex items-center gap-2 hover-lift">
                View Poultry Range
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
              <Link
                href="/contact"
                className="border border-primary text-primary bg-transparent px-8 py-3 rounded hover:bg-primary/5 transition-all duration-150 font-label-md"
              >
                Request Trade Account
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-lg border border-surface-variant fade-up stagger-1">
            <img
              alt="Pre-packaged chicken supply in a warehouse"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AP1WRLtdcSOf75rmyPXMyQbsytrefM4vitV9NipJzPGUiexST5xJTuCN8TEmEr8_titGuXg59aD5iuARoI9vAfTmDbAgnk6wA6zAhDiGEn1Gy6CU_QpKcSN_MJbdWvkYNL5cxOP41XUQlLA_hsBcMeZ4f2Uep-n38jIDOBGV3YUSmsD2AbGirdwVZqh8SMS_YUU7jvGPjAKGCt4RcDKuNMuECHtvnnmw6arRZ_eHDJ_GpzXnVlzA5beZAuK03Lc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Product Standards & Packaging */}
      <section className="py-20 bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 max-w-2xl mx-auto fade-up">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-4">
              Uncompromising Quality Standards
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Our poultry undergoes rigorous checks to ensure absolute
              freshness and compliance with food safety regulations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface p-6 rounded-lg border border-surface-variant shadow-[0px_2px_4px_rgba(10,31,68,0.05)] hover-lift flex flex-col gap-4 fade-up stagger-1">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded flex items-center justify-center">
                <span className="material-symbols-outlined icon-fill">
                  ac_unit
                </span>
              </div>
              <h3 className="font-title-md text-primary">
                Cold-Chain Integrity
              </h3>
              <p className="text-on-surface-variant font-body-md">
                Strict temperature control from processing plant to your
                delivery bay, ensuring maximum shelf life.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg border border-surface-variant shadow-[0px_2px_4px_rgba(10,31,68,0.05)] hover-lift flex flex-col gap-4 fade-up stagger-2">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded flex items-center justify-center">
                <span className="material-symbols-outlined icon-fill">
                  verified
                </span>
              </div>
              <h3 className="font-title-md text-primary">
                Certified Sourcing
              </h3>
              <p className="text-on-surface-variant font-body-md">
                Sourced only from approved, fully traceable farms meeting
                high animal welfare and hygiene standards.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg border border-surface-variant shadow-[0px_2px_4px_rgba(10,31,68,0.05)] hover-lift flex flex-col gap-4 fade-up stagger-3">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded flex items-center justify-center">
                <span className="material-symbols-outlined icon-fill">
                  storefront
                </span>
              </div>
              <h3 className="font-title-md text-primary">Retail-Ready</h3>
              <p className="text-on-surface-variant font-body-md">
                Barcoded, professionally packaged formats ready for immediate
                display on supermarket shelves.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg border border-surface-variant shadow-[0px_2px_4px_rgba(10,31,68,0.05)] hover-lift flex flex-col gap-4 fade-up stagger-4">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded flex items-center justify-center">
                <span className="material-symbols-outlined icon-fill">
                  local_dining
                </span>
              </div>
              <h3 className="font-title-md text-primary">Catering Bulk</h3>
              <p className="text-on-surface-variant font-body-md">
                Efficient bulk packaging options designed for high-volume
                commercial kitchens and food service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Timeline */}
      <section className="py-20 bg-surface-container-low border-y border-surface-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary text-center mb-16 fade-up">
            Our Efficient Supply Chain
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-surface-variant -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="flex flex-col items-center text-center gap-4 fade-up stagger-1">
                <div className="w-16 h-16 bg-surface border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-sm z-10">
                  <span className="material-symbols-outlined text-2xl">
                    agriculture
                  </span>
                </div>
                <h4 className="font-title-md text-primary">1. Sourcing</h4>
                <p className="text-sm text-on-surface-variant">
                  Procured from audited, high-standard farms.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 fade-up stagger-2">
                <div className="w-16 h-16 bg-surface border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-sm z-10">
                  <span className="material-symbols-outlined text-2xl">
                    precision_manufacturing
                  </span>
                </div>
                <h4 className="font-title-md text-primary">
                  2. Processing &amp; Packaging
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Hygienic processing into retail or bulk formats.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 fade-up stagger-3">
                <div className="w-16 h-16 bg-surface border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-sm z-10">
                  <span className="material-symbols-outlined text-2xl">
                    warehouse
                  </span>
                </div>
                <h4 className="font-title-md text-primary">
                  3. Cold Storage
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Stored in our state-of-the-art chilled facilities.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 fade-up stagger-4">
                <div className="w-16 h-16 bg-secondary text-on-secondary border-2 border-secondary rounded-full flex items-center justify-center shadow-md z-10">
                  <span className="material-symbols-outlined text-2xl icon-fill">
                    local_shipping
                  </span>
                </div>
                <h4 className="font-title-md text-primary">4. Delivery</h4>
                <p className="text-sm text-on-surface-variant">
                  Dispatched via refrigerated transport to your door.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-8 fade-up">
          <div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg mb-2">
              Streamline your poultry supply today.
            </h2>
            <p className="text-on-primary-container font-body-lg">
              Partner with MB Trade Supplies for reliable, high-volume
              deliveries.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-secondary text-on-secondary px-8 py-4 rounded font-label-md whitespace-nowrap hover:bg-secondary-container transition-colors shadow-lg hover-lift flex items-center gap-2"
          >
            Contact Us to Order
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
