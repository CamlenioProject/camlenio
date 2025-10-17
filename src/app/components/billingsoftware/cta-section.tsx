export function CTA() {
  return (
    <section
      aria-labelledby="cta-title"
      className="py-16 md:py-20 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="rounded-2xl bg-orange-500 p-2 md:p-12 text-gray-50">
          <h2
            id="cta-title"
            className="text-pretty text-2xl md:text-4xl font-semibold"
          >
            Ready to simplify your billing?
          </h2>
          <p className="mt-2 text-gray-50">
            Start your free trial today. No credit card required.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#start-trial"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-gray-100 text-orange-500 hover:bg-gray-100 text-sm font-medium"
            >
              Start Free Trial
            </a>
            <a
              href="#book-demo"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 border border-gray-100 text-gray-100 hover:bg-gray-100/10 bg-transparent text-sm font-medium"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
