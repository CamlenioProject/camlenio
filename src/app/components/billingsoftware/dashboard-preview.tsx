import type React from "react";
import Image from "next/image";

export function DashboardPreview() {
  return (
    <div
      aria-labelledby="preview-title"
      className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            A dashboard designed for {""}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              clarity
            </span>
          </h2>
          <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-center">
            Track revenue, send quick invoices, and see real-time payments.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-transparent border border-orange-200  shadow-sm">
            <Image
              src="/ServiceDropdown/billingsoftware/clean-finance-analytics-dashboard-with-charts-table.webp"
              alt="Ledgerly analytics dashboard"
              width={1280}
              height={720}
              className="w-full h-auto"
            />
          </div>

          <div className="hidden md:block">
            <Callout className="left-6 top-6">Revenue Tracking</Callout>
            <Callout className="right-8 top-1/3">Quick Invoices</Callout>
            <Callout className="left-1/3 -bottom-6">Real-time Payments</Callout>
          </div>
        </div>
      </div>
    </div>
  );
}

function Callout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute rounded-lg border border-orange-200 bg-orange-100 text-orange-500 backdrop-blur px-3 py-2 text-sm shadow-sm ${className}`}
    >
      <span className="font-medium text-foreground">{children}</span>
    </div>
  );
}
