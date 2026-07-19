export const metadata = {
  title: "About Us - MB Trade Supplies Ltd",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-primary py-20 md:py-0 md:h-[60vh]">
        <div className="absolute inset-0 z-0 opacity-40">
          <div
            className="bg-cover bg-center w-full h-full"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgHe_KxyH-yVbT2Z8M_jyDtXEPOiE7jx_io0u4VDFjQT9wm6lILEP22psROdlfF9binsWu4iXrhzXLPw1IuUgjxC1fK73GDg9D7c2R2Loi95dvELiAdwgKcUGUbHsW0_KykYZ210Bt36mnAXwt_Rg5TUR0-yFrhpafMR2lVybIngUlFb7zloPFnTncA-UU2eVmr9Q9TnE0MU55pmyV7tQIikS6l6bO3OxQe5B6VO-7nR4ODHLYS4eImdnBTfNB0Wuz85JnnDMKsIo')",
            }}
          ></div>
        </div>
        <div className="relative z-10 text-center max-w-3xl px-margin-mobile md:px-margin-desktop fade-up">
          <h1 className="font-display-lg font-bold text-4xl sm:text-5xl md:text-display-lg text-on-primary mb-6">
            About MB Trade Supplies Ltd
          </h1>
          <p className="font-body-lg text-body-lg text-inverse-primary">
            Delivering reliability and value to the UK trade sector. We are
            your dedicated partner in supply chain excellence.
          </p>
        </div>
      </section>

      {/* Company Narrative */}
      <section className="py-16 md:py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="fade-up">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              Built on Strong Foundations
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
              At MB Trade Supplies Ltd, we understand that our success is
              fundamentally tied to yours. Operating from our central hub at
              Garfield Works, we have established ourselves as a cornerstone
              in the B2B wholesale market.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Our commitment goes beyond simply moving boxes. We foster
              robust, long-term trade relationships built on trust,
              transparency, and an unwavering dedication to operational
              efficiency. When you partner with us, you gain access to a
              reliable supply chain designed to keep your business moving
              forward without interruption.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-[0px_2px_4px_rgba(10,31,68,0.05)] fade-up stagger-1">
            <img
              className="w-full h-auto object-cover"
              alt="Warehouse operations with forklift and racking"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA52TRhoYOqrQi4ZSszoWPww8lohM85-JSknXxnIryYjp7SrkgWqrF6BC12r36mB0v3rP6tPny7po0V8Hw1uV4hu9MmXaTSjVnlUYRHni_REnjGqOIkenymmhRCi8P_BW-ha5J6GoZifaoE0D0Z7Kvk_-H_CBy_skUvLZd9xP3RT1aC7YVVkS17IKnb54nNIQKfz63vqCMxr7q_YbMLijj0psmAdoW_6j1Fwa-CRZ5Z76oL8CIHKZ42vQ_t_FSKOaHU_o07A_XeuK0"
            />
          </div>
        </div>
      </section>

      {/* Values Bento Grid */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 fade-up">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Our Core Values
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              The principles that drive our daily operations and long-term
              strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface rounded-xl p-8 border border-outline-variant hover-lift fade-up stagger-1">
              <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-6 text-primary">
                <span
                  className="material-symbols-outlined fill"
                  style={{ fontSize: "24px" }}
                >
                  verified
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-3">
                Reliability
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Consistent, on-time deliveries you can count on, ensuring
                your operations never miss a beat.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-8 border border-outline-variant hover-lift fade-up stagger-2">
              <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center mb-6 text-secondary">
                <span
                  className="material-symbols-outlined fill"
                  style={{ fontSize: "24px" }}
                >
                  star
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-3">
                Quality
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Stringent quality control processes guaranteeing that every
                product meets high industry standards.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-8 border border-outline-variant hover-lift fade-up stagger-3">
              <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center mb-6 text-tertiary">
                <span
                  className="material-symbols-outlined fill"
                  style={{ fontSize: "24px" }}
                >
                  handshake
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-3">
                Partnership
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Collaborative relationships aimed at mutual growth, treating
                your business goals as our own.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-8 border border-outline-variant hover-lift fade-up stagger-4">
              <div className="w-12 h-12 bg-primary-fixed-dim rounded-full flex items-center justify-center mb-6 text-primary-container">
                <span
                  className="material-symbols-outlined fill"
                  style={{ fontSize: "24px" }}
                >
                  local_shipping
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-3">
                Local Service
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Deep understanding of the regional market, allowing for
                flexible and responsive service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-16 md:py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-primary rounded-xl p-8 md:p-12 shadow-[0px_10px_15px_-3px_rgba(10,31,68,0.1)] relative overflow-hidden fade-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full opacity-50 blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-primary-container">
            <div className="p-4">
              <div className="font-display-lg font-bold text-3xl sm:text-4xl md:text-display-lg text-secondary mb-2">
                15+
              </div>
              <div className="font-title-md text-title-md text-on-primary">
                Years Trading
              </div>
            </div>
            <div className="p-4">
              <div className="font-display-lg font-bold text-3xl sm:text-4xl md:text-display-lg text-secondary mb-2">
                5,000+
              </div>
              <div className="font-title-md text-title-md text-on-primary">
                Product Range
              </div>
            </div>
            <div className="p-4">
              <div className="font-display-lg font-bold text-3xl sm:text-4xl md:text-display-lg text-secondary mb-2">
                1,200+
              </div>
              <div className="font-title-md text-title-md text-on-primary">
                Customers Served
              </div>
            </div>
            <div className="p-4">
              <div className="font-display-lg font-bold text-3xl sm:text-4xl md:text-display-lg text-secondary mb-2">
                98%
              </div>
              <div className="font-title-md text-title-md text-on-primary">
                On-time Delivery
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
