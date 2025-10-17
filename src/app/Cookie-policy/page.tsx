export default function CookiePolicyPage() {
  return (
    <main className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove py-20">
      <div className="max-w-3xl mx-auto p-6 text-gray-800 border border-orange-200 rounded-xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Cookie Policy</h1>
        <p className="mb-4 text-lg">
          This Cookie Policy explains how we use cookies and similar
          technologies on our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
          What are Cookies?
        </h2>
        <p className="mb-4">
          Cookies are small text files stored on your device when you visit a
          website. They help improve your browsing experience and allow us to
          analyze site traffic.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
          How We Use Cookies
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>To remember your preferences and settings.</li>
          <li>To analyze how visitors use our site.</li>
          <li>To deliver personalized content and advertisements.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
          Managing Cookies
        </h2>
        <p>
          You can control or disable cookies through your browser settings.
          Please note that disabling cookies may affect site functionality.
        </p>
      </div>
    </main>
  );
}
