import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata = {
  title: "Terms of Service - MB Trade Supplies Ltd",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="January 2026"
      intro="These terms govern the supply of goods by MB Trade Supplies Ltd to trade customers. By placing an order or setting up a trade account with us, you agree to be bound by these terms."
      sections={[
        {
          heading: "1. Trade Accounts",
          body: (
            <p>
              Our products are supplied on a wholesale, trade-only basis. To
              place orders you must hold, or successfully apply for, a
              trade account with MB Trade Supplies Ltd. We reserve the
              right to decline or suspend a trade account at our
              discretion.
            </p>
          ),
        },
        {
          heading: "2. Orders and Pricing",
          body: (
            <p>
              All orders are subject to acceptance and product availability.
              Prices are quoted exclusive of VAT unless stated otherwise and
              may be updated from time to time to reflect changes in supply
              costs. We will confirm pricing with you before an order is
              fulfilled.
            </p>
          ),
        },
        {
          heading: "3. Payment Terms",
          body: (
            <p>
              Payment terms are agreed individually with each trade account
              and will be set out at the time your account is opened.
              Continued supply is conditional on accounts remaining in good
              standing.
            </p>
          ),
        },
        {
          heading: "4. Delivery",
          body: (
            <p>
              We aim to deliver orders within the timeframes agreed at the
              point of order. Delivery dates are estimates and, while we
              make every reasonable effort to meet them, MB Trade Supplies
              Ltd is not liable for delays caused by circumstances outside
              our reasonable control. See our{" "}
              <a href="/shipping-info">Shipping Info</a> page for further
              details on delivery areas and schedules.
            </p>
          ),
        },
        {
          heading: "5. Product Quality and Returns",
          body: (
            <p>
              We take care to ensure all products, particularly
              temperature-sensitive goods, are supplied to a high standard
              and maintained within the appropriate cold-chain conditions.
              If you receive damaged, incorrect, or faulty goods, please
              notify us within 24 hours of delivery so that we can
              investigate and arrange a replacement or credit where
              appropriate.
            </p>
          ),
        },
        {
          heading: "6. Cancellations",
          body: (
            <p>
              Orders may be amended or cancelled by contacting your account
              manager before the order has been dispatched. Orders already
              in transit cannot be cancelled.
            </p>
          ),
        },
        {
          heading: "7. Limitation of Liability",
          body: (
            <p>
              To the extent permitted by law, MB Trade Supplies Ltd&rsquo;s
              liability arising from the supply of goods is limited to the
              value of the order in question. We do not exclude liability
              for death, personal injury, or fraud caused by our
              negligence.
            </p>
          ),
        },
        {
          heading: "8. Governing Law",
          body: (
            <p>
              These terms are governed by the laws of England and Wales,
              and any disputes will be subject to the exclusive
              jurisdiction of the courts of England and Wales.
            </p>
          ),
        },
        {
          heading: "9. Changes to These Terms",
          body: (
            <p>
              We may update these terms from time to time. The version
              published on this page at the time of your order will apply.
            </p>
          ),
        },
        {
          heading: "10. Contact Us",
          body: (
            <p>
              For any questions about these Terms of Service, please
              contact us at{" "}
              <a href="mailto:accounts@mbtradesupplies.co.uk">
                accounts@mbtradesupplies.co.uk
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
