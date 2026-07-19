import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-10 opacity-80"></div>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBr32CvtwdwphgEUawDUMQ0anegIw7hDDyxEcgFqhz8-f7-43RlH8gUtb2vA_Ip_DNIx_UW5XZPM63ejXPdii4mNeJbsZkngR5ohXQiZfLTsF8gv2m2pDTUPwH3K1qx2CjWHokHB2CrYjt4tb_TGqnt61J7wyx8Er98zhpdzKCVYOMhxUH5ESsifQp5PlU4urN1DegW1sSsxn7ACHZz923WJPW2f61qX1V3Nu0HIHhxJjZXVvNgpbcZdI-p2zv5ebZTdzkmWtac-Hs')",
            }}
          ></div>
        </div>
        <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center fade-up">
          <h1 className="font-display-lg text-display-lg text-on-primary mb-6 max-w-4xl mx-auto drop-shadow-lg">
            Trusted Wholesale Supply of Drinks &amp; Pre-Packaged Chicken
          </h1>
          <p className="font-body-lg text-body-lg text-inverse-on-surface mb-10 max-w-2xl mx-auto">
            Supplying quality beverages and pre-packaged chicken products to
            trade customers across the UK with reliability and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto bg-secondary text-on-primary px-8 py-4 rounded-DEFAULT font-label-md text-label-md hover:bg-secondary-container transition-colors duration-300 hover-lift shadow-sm text-center"
            >
              Browse Our Services
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border-2 border-on-primary text-on-primary px-8 py-4 rounded-DEFAULT font-label-md text-label-md hover:bg-on-primary/10 transition-colors duration-300 hover-lift text-center"
            >
              Request Trade Pricing
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-custom">
          <span className="material-symbols-outlined text-on-primary text-3xl">
            keyboard_arrow_down
          </span>
        </div>
      </section>

      {/* Company Snapshot */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              Your Dependable Wholesale Partner
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              At MB Trade Supplies Ltd, we understand that in the fast-paced
              food and beverage sector, reliability is everything. We
              maintain robust supply chains to ensure our trade customers
              always have the stock they need, when they need it.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-up stagger-1">
            <div className="text-center p-6 border border-surface-variant rounded-xl bg-surface hover-lift">
              <div className="font-display-lg text-display-lg text-secondary mb-2">
                15+
              </div>
              <div className="font-label-md text-label-md text-on-surface">
                Years Trading
              </div>
            </div>
            <div className="text-center p-6 border border-surface-variant rounded-xl bg-surface hover-lift stagger-2">
              <div className="font-display-lg text-display-lg text-secondary mb-2">
                500+
              </div>
              <div className="font-label-md text-label-md text-on-surface">
                Product Lines
              </div>
            </div>
            <div className="text-center p-6 border border-surface-variant rounded-xl bg-surface hover-lift stagger-3">
              <div className="font-display-lg text-display-lg text-secondary mb-2">
                1.2k+
              </div>
              <div className="font-label-md text-label-md text-on-surface">
                Trade Customers
              </div>
            </div>
            <div className="text-center p-6 border border-surface-variant rounded-xl bg-surface hover-lift stagger-4">
              <div className="font-display-lg text-display-lg text-secondary mb-2">
                UK
              </div>
              <div className="font-label-md text-label-md text-on-surface">
                Wide Delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Product Categories */}
      <section className="py-24 bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex justify-between items-end mb-12 fade-up">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
                Core Product Categories
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Premium wholesale supplies for your business.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden md:flex items-center text-secondary font-label-md text-label-md hover:text-secondary-container transition-colors"
            >
              View All Services{" "}
              <span className="material-symbols-outlined ml-1 text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Link
              href="/services/wholesale-drinks"
              className="group rounded-xl overflow-hidden bg-surface-container-lowest border border-outline-variant shadow-sm hover-lift cursor-pointer fade-up stagger-1 block"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300 z-10"></div>
                <img
                  alt="Wholesale Drinks"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZf5zmBcnhk11PLK_xigxGmCxSHXMB_kgE9jlh1incyKW0i22uuVxCeExxX3rpXcLzws4gf0DEJI17g5ZB-gLRs8wXS6sZeXqzPL8GaFOKxaB0n5PNQV0XWIQsDMaDNxxG6a16nj0G2EExXmkKhkcM52MUIfLneba0132r8IdzolaPtqq8nax4azFsvkpOiXn5lv5TXXg_O6HRGC8xKxRwLktevhuC35O2ZrmhLHsccP8RgKeNXVtRLy49fGe-fVws7AtZscu_iJM"
                />
                <div className="absolute top-4 right-4 z-20 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm text-primary flex items-center shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>{" "}
                  High Stock
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-title-md text-title-md text-primary mb-3 group-hover:text-secondary transition-colors">
                  Wholesale Drinks
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Comprehensive range of soft drinks, bottled water, and
                  juices. Supplied in bulk pallets with competitive trade
                  pricing.
                </p>
                <span className="text-secondary font-label-md text-label-md flex items-center">
                  Browse Catalogue{" "}
                  <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>

            <Link
              href="/services/pre-packaged-chicken"
              className="group rounded-xl overflow-hidden bg-surface-container-lowest border border-outline-variant shadow-sm hover-lift cursor-pointer fade-up stagger-2 block"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300 z-10"></div>
                <img
                  alt="Pre-Packaged Chicken"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtxqQ8sWdZdKQUUiYU_C1XLiHziigIG3CMD5wNoQNYbQrnxIqpFJXUgtSojvNhlKCQmG4SM3WTmj-RoK_NN7QE1lkyNcwr4XaEbBhYTpVgj2WkhVq48NAB8p8LBlxrqx9BnNHX8TajahLN3wqec0SEjfsSy5mYvYUGJiRTx2gMsfeqp_bBrbj_ok9obJId9GVPwfnmL5-1BKRWG7sA0PNVvxR-T8vbaObL1M-RSkexsRNMMYdm3Wwv-NZXblcfqo5173NE-zaBNQU"
                />
                <div className="absolute top-4 right-4 z-20 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm text-primary flex items-center shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>{" "}
                  Fresh Daily
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-title-md text-title-md text-primary mb-3 group-hover:text-secondary transition-colors">
                  Pre-Packaged Chicken
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Quality chilled, pre-packaged poultry products suitable for
                  retail and food service. Maintained in strict cold-chain
                  environments.
                </p>
                <span className="text-secondary font-label-md text-label-md flex items-center">
                  Browse Catalogue{" "}
                  <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          </div>
          <div className="md:hidden text-center mt-8">
            <Link
              href="/services"
              className="block bg-surface-container border border-outline-variant text-primary px-6 py-3 rounded-DEFAULT font-label-md w-full"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Trade With Us */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 fade-up">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Why Trade With Us
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              We build long-term partnerships through consistent delivery of
              quality products and exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-background rounded-xl border border-surface-variant hover-lift fade-up stagger-1">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6 text-on-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  inventory_2
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-3">
                Reliable Stock
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Deep inventory levels ensure we can fulfill your orders
                consistently without frustrating backorders.
              </p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-surface-variant hover-lift fade-up stagger-2">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6 text-on-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  payments
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-3">
                Competitive Pricing
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Transparent, tiered pricing structures designed to support
                your business margins.
              </p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-surface-variant hover-lift fade-up stagger-3">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6 text-on-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  local_shipping
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-3">
                Fast Delivery
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Optimized logistics network providing rapid turnaround times
                across the UK mainland.
              </p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-surface-variant hover-lift fade-up stagger-4">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6 text-on-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-3">
                Quality Assurance
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Strict adherence to cold-chain logistics and food safety
                standards for all perishable goods.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
