import { pricingPlans } from "../Data/pricing";

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Simple, Transparent Pricing — No Hidden Fees
        </h2>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-lg border bg-white ${
                plan.highlight
                  ? "border-accent shadow-xl scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.tag && (
                <span className="absolute -top-3 left-4 bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.tag}
                </span>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>

              <p className="mt-4 text-3xl font-bold">
                {plan.price}
                <span className="text-base font-medium text-gray-500">
                  {plan.period}
                </span>
              </p>

              <p className="mt-2 text-sm text-gray-600">
                {plan.description}
              </p>

              <button className="mt-6 w-full bg-primary text-white py-3 rounded-md font-semibold">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
