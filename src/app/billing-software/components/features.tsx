import {
  FileSpreadsheet,
  CreditCard,
  Wallet,
  BarChart2,
  Users,
  Percent,
} from "lucide-react";

const features = [
  {
    icon: FileSpreadsheet,
    title: "Smart Invoicing",
    desc: "Create invoices in seconds with saved items and templates.",
  },
  {
    icon: CreditCard,
    title: "Automated Payments",
    desc: "Accept UPI, cards, and PayPal with automated reminders.",
  },
  {
    icon: Wallet,
    title: "Expense Tracking",
    desc: "Record and categorize expenses in one place.",
  },
  {
    icon: BarChart2,
    title: "Reports & Analytics",
    desc: "Gain instant financial insights and trends.",
  },
  {
    icon: Users,
    title: "Client Management",
    desc: "Manage client info, history, and billing in one view.",
  },
  {
    icon: Percent,
    title: "Tax Automation",
    desc: "Auto-calculate GST/VAT and export-ready reports.",
  },
];

export function Features() {
  return (
    <div
      id="features"
      aria-labelledby="features-title"
      className="py-16 md:py-24 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove"
    >
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2
            id="features-title"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Powerful features to manage your{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              business finances
            </span>
          </h2>
          <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-center">
            Everything you need to invoice, track, and grow.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border-1 border-orange-300 transition-colors duration-150 hover:border-orange-500 hover:bg-card"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl p-2 bg-orange-100 text-orange-500">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
