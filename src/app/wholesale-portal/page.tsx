export const metadata = {
  title: "Wholesale Portal - MB Trade Supplies Ltd",
};

const features = [
  {
    icon: "receipt_long",
    title: "Order History",
    description:
      "View past orders and invoices in one place, making reordering and account reconciliation simple.",
  },
  {
    icon: "shopping_cart_checkout",
    title: "Fast Reordering",
    description:
      "Reorder your regular product lines in a few clicks, without having to rebuild your order from scratch.",
  },
  {
    icon: "payments",
    title: "Dedicated Trade Pricing",
    description:
      "See your negotiated trade pricing and account terms whenever you need them.",
  },
  {
    icon: "inventory_2",
    title: "Real-Time Stock",
    description:
      "Check live stock availability across our drinks and pre-packaged chicken ranges before you order.",
  },
];

export default function WholesalePortalPage() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center fade-up">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full w-fit mx-auto font-label-sm border border-secondary/20 mb-6">
            <span className="material-symbols-outlined text-[16px] icon-fill">
              storefront
            </span>
            For Trade Customers
          </div>
          <h1 className="font-display-lg text-4xl md:text-display-lg text-primary mb-6">
            Wholesale Portal
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A dedicated online account for our trade customers to manage
            orders, pricing, and deliveries with MB Trade Supplies Ltd.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              What You Can Do in the Portal
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Built to save your team time on the admin side of ordering, so
              you can focus on running your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-gutter">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_2px_4px_rgba(10,31,68,0.05)] border border-outline-variant hover-lift fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-6 text-primary">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {feature.icon}
                  </span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access CTA */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-4 fade-up">
        <div className="bg-primary rounded-xl p-8 md:p-12 shadow-[0px_10px_15px_-3px_rgba(10,31,68,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full opacity-50 blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-2xl md:text-headline-lg text-on-primary mb-2">
                Ready to get portal access?
              </h2>
              <p className="font-body-md text-body-md text-on-primary-container max-w-xl">
                Portal access is provided to active trade account holders.
                Request access and our team will get you set up.
              </p>
            </div>
            <a
              href="mailto:accounts@mbtradesupplies.co.uk?subject=Wholesale%20Portal%20Access%20Request"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary font-label-md text-label-md px-8 py-3 rounded hover:bg-secondary-container transition-colors duration-300 shadow-[0px_2px_4px_rgba(10,31,68,0.05)] hover:shadow-[0px_10px_15px_-3px_rgba(10,31,68,0.1)] whitespace-nowrap shrink-0"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              Request Portal Access
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
