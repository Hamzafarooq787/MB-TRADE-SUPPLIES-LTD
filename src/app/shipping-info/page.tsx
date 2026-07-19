import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata = {
  title: "Shipping Info - MB Trade Supplies Ltd",
};

export default function ShippingInfoPage() {
  return (
    <LegalPageLayout
      title="Shipping Info"
      lastUpdated="January 2026"
      intro="We operate an optimised delivery network to keep our trade customers reliably stocked across the UK. Here's what to expect when you order from MB Trade Supplies Ltd."
      sections={[
        {
          heading: "Delivery Areas",
          body: (
            <p>
              We deliver to trade customers across the UK mainland from our
              distribution centre at Unit 3, Garfield Works, Uttoxeter Road,
              ST3 1PF. If you are based outside the UK mainland, please get
              in touch to discuss delivery options for your area.
            </p>
          ),
        },
        {
          heading: "Delivery Schedules",
          body: (
            <>
              <p>
                Deliveries are dispatched from our warehouse during our
                standard operating hours:
              </p>
              <ul>
                <li>Monday &ndash; Friday: 06:00 &ndash; 18:00</li>
                <li>Saturday: 06:00 &ndash; 14:00</li>
                <li>Sunday: Closed</li>
              </ul>
              <p>
                Regular delivery slots can be arranged with your account
                manager to align with your stock needs.
              </p>
            </>
          ),
        },
        {
          heading: "Order Lead Times",
          body: (
            <p>
              Standard orders are typically dispatched within 1&ndash;3
              working days, depending on order volume and product
              availability. Bulk pallet orders and full lorry loads may
              require additional lead time, which your account manager will
              confirm when the order is placed.
            </p>
          ),
        },
        {
          heading: "Cold-Chain Handling",
          body: (
            <p>
              Pre-packaged chicken and other chilled products are
              transported in temperature-controlled vehicles to maintain
              strict cold-chain integrity from our warehouse to your
              delivery bay.
            </p>
          ),
        },
        {
          heading: "Delivery Charges",
          body: (
            <p>
              Delivery charges depend on order volume, delivery frequency,
              and location, and are agreed as part of your trade account
              setup. Ask your account manager for a delivery quote tailored
              to your business.
            </p>
          ),
        },
        {
          heading: "Receiving Your Delivery",
          body: (
            <p>
              Please ensure a suitable representative is available to
              receive and check deliveries on arrival. Any damaged,
              missing, or incorrect items should be reported to us within
              24 hours of delivery so we can resolve the issue promptly.
            </p>
          ),
        },
        {
          heading: "Questions About Your Delivery",
          body: (
            <p>
              For any delivery queries, please contact us at{" "}
              <a href="mailto:accounts@mbtradesupplies.co.uk">
                accounts@mbtradesupplies.co.uk
              </a>{" "}
              and a member of our trade team will assist you.
            </p>
          ),
        },
      ]}
    />
  );
}
