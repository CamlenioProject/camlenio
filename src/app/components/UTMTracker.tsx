"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function UTMTrackerContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid",
    ];

    const utmObject: any = {};
    let found = false;

    params.forEach((p) => {
      const val = searchParams.get(p);
      if (val) {
        utmObject[p] = val;
        found = true;
      }
    });

    if (found) {
      // Store in localStorage for form use
      localStorage.setItem("camlenio_utm", JSON.stringify(utmObject));

      // Silently save visit to server
      fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "tracking",
          ...utmObject,
          source: "ads_visit",
          name: "Visitor",
          email: "visitor@camlenio.com",
          phone: "0000000000"
        }),
      }).catch(() => { }); // Fail silently
    }
  }, [searchParams]);

  return null;
}

export default function UTMTracker() {
  return (
    <Suspense fallback={null}>
      <UTMTrackerContent />
    </Suspense>
  );
}
