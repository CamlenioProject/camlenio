"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function KnowFintech() {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = (): void => {
    navigator.clipboard.writeText("brew install httppie");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove scroll-smooth">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
                HTTPie for Terminal
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-md">
                The original. An open-source API testing client for open minds.
              </p>
            </div>

            {/* Command Box */}
            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-4 py-3 w-fit shadow-sm hover:shadow-md transition-shadow">
              <span className="text-pink-500 font-semibold">$</span>
              <span className="text-slate-700 font-mono">
                <span className="text-blue-600">brew</span>
                <span className="text-slate-600"> install httppie</span>
              </span>
              <button
                onClick={handleCopy}
                className="ml-2 p-1.5 hover:bg-slate-100 rounded transition-colors"
                aria-label="Copy command"
                type="button"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-400" />
                )}
              </button>
            </div>

            {/* Learn More Button */}
            <div>
              <button
                className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors"
                type="button"
              >
                Learn more
              </button>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            {/* Terminal Window */}
            <div className="relative w-full max-w-md">
              <div className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-600" />
                    <div className="w-3 h-3 rounded-full bg-slate-600" />
                    <div className="w-3 h-3 rounded-full bg-slate-600" />
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 space-y-2 font-mono text-sm">
                  <div className="text-green-400">
                    <span>$ http </span>
                    <span className="text-blue-400">PUT</span>
                    <span> pis.dev/put </span>
                    <span className="text-yellow-400">API-Token</span>
                    <span>=123 hello=world</span>
                  </div>

                  {/* Placeholder lines for terminal output */}
                  <div className="space-y-1 mt-4">
                    <div className="h-2 bg-slate-600 rounded w-3/4" />
                    <div className="h-2 bg-slate-600 rounded w-5/6" />
                    <div className="h-2 bg-slate-600 rounded w-4/5" />
                    <div className="h-2 bg-slate-600 rounded w-3/5" />
                    <div className="h-2 bg-slate-600 rounded w-2/3" />
                    <div className="h-2 bg-slate-600 rounded w-4/6" />
                    <div className="h-2 bg-slate-600 rounded w-3/4" />
                    <div className="h-2 bg-slate-600 rounded w-5/6" />
                    <div className="h-2 bg-slate-600 rounded w-2/3" />
                    <div className="h-2 bg-slate-600 rounded w-1/2" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-20 -right-8 w-80">
                <div className="relative">
                  {/* Bubble pointer */}
                  <div className="absolute -top-3 right-12 w-6 h-6 bg-blue-500 rounded-full" />

                  {/* Chat content */}
                  <div className="bg-blue-500 text-white rounded-2xl p-6 shadow-lg">
                    <p className="text-sm leading-relaxed">
                      If you&apos;re in need of a great CLI tool to use with
                      HTTP servers, RESTful APIs, and web services you&apos;re
                      in luck. HTTPie from{" "}
                      <span className="font-semibold">@jakubroztocil</span> is
                      the perfect solution 😍 Part of December&apos;s{" "}
                      <span className="font-semibold">#GHReleaseRadar</span>
                      <br />
                      <a
                        href="https://httppie.org"
                        className="underline hover:opacity-90"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://httppie.org
                      </a>
                    </p>
                    <p className="text-xs mt-4 opacity-90">@GITHUB</p>
                  </div>
                </div>
              </div>

              {/* Settings Icon */}
              <div className="absolute -bottom-12 -right-12 w-16 h-16 bg-slate-900 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
