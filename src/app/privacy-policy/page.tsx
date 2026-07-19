import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata = {
  title: "Privacy Policy - MB Trade Supplies Ltd",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="January 2026"
      intro="MB Trade Supplies Ltd is committed to protecting the privacy of our trade customers and website visitors. This policy explains what information we collect, how we use it, and the choices you have."
      sections={[
        {
          heading: "1. Who We Are",
          body: (
            <p>
              MB Trade Supplies Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;) is a wholesale supplier of drinks and
              pre-packaged chicken, operating from Unit 3, Garfield Works,
              Uttoxeter Road, ST3 1PF, United Kingdom. We are the data
              controller for the personal information described in this
              policy.
            </p>
          ),
        },
        {
          heading: "2. Information We Collect",
          body: (
            <>
              <p>
                We collect information that trade customers and enquirers
                provide directly to us, including:
              </p>
              <ul>
                <li>
                  Contact details, such as your name, company name, email
                  address, and business address
                </li>
                <li>
                  Trade account information, including order history and
                  billing details
                </li>
                <li>
                  Correspondence you send us, for example enquiries about
                  pricing or delivery
                </li>
                <li>
                  Technical information collected automatically when you use
                  our website, such as browser type and general usage data
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "3. How We Use Your Information",
          body: (
            <>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Set up and manage trade accounts</li>
                <li>Process and fulfil orders and deliveries</li>
                <li>Respond to enquiries and provide customer support</li>
                <li>
                  Maintain accurate business and accounting records
                </li>
                <li>Improve our website and services</li>
                <li>Comply with our legal and regulatory obligations</li>
              </ul>
            </>
          ),
        },
        {
          heading: "4. Sharing Your Information",
          body: (
            <p>
              We do not sell your personal information. We may share
              information with trusted third parties who support our
              operations, such as delivery and logistics partners, payment
              processors, and IT service providers, solely for the purpose
              of fulfilling our services to you. We may also disclose
              information where required by law.
            </p>
          ),
        },
        {
          heading: "5. Data Security",
          body: (
            <p>
              We take appropriate technical and organisational measures to
              protect the personal information we hold against unauthorised
              access, loss, or misuse.
            </p>
          ),
        },
        {
          heading: "6. Data Retention",
          body: (
            <p>
              We retain personal information for as long as necessary to
              fulfil the purposes described in this policy, including to
              satisfy any legal, accounting, or reporting requirements.
            </p>
          ),
        },
        {
          heading: "7. Your Rights",
          body: (
            <>
              <p>
                Under UK data protection law, you have the right to request
                access to, correction of, or deletion of your personal
                information, and to object to or restrict certain
                processing. To exercise any of these rights, please contact
                us using the details below.
              </p>
            </>
          ),
        },
        {
          heading: "8. Changes to This Policy",
          body: (
            <p>
              We may update this policy from time to time. Any changes will
              be posted on this page with an updated revision date.
            </p>
          ),
        },
        {
          heading: "9. Contact Us",
          body: (
            <p>
              If you have any questions about this Privacy Policy or how we
              handle your information, please contact us at{" "}
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
