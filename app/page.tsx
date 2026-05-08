export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For Etsy Sellers
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Track Etsy Competitor Pricing{" "}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor what competitors charge, spot pricing trends, and get data-driven recommendations so you always price to win.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <div className="border border-[#30363d] rounded-xl p-8 text-center bg-[#161b22]">
          <p className="text-[#58a6ff] font-medium mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-4">
            <span className="text-5xl font-bold text-white">$9</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <ul className="text-left space-y-3 mb-8 max-w-xs mx-auto">
            {[
              "Track up to 500 competitor listings",
              "Daily automated price scans",
              "Pricing strategy recommendations",
              "Email alerts on price changes",
              "Export data to CSV"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">How does the price tracking work?</h3>
            <p className="text-[#8b949e]">We use scheduled jobs to scan Etsy listings in your niche daily, collecting price data and trends. You get a clean dashboard showing competitor pricing history and patterns.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Which listings can I track?</h3>
            <p className="text-[#8b949e]">You can track any public Etsy listing. Add competitor shop URLs or specific product keywords and we'll monitor them automatically every day.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-[#8b949e]">Yes, cancel anytime from your account settings. You'll keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
