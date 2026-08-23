import * as React from "react";
import { faqs, site } from "@/content/site";

/**
 * Two schema.org graphs: the product itself, and the FAQ block that appears on
 * the home page. Both describe content that is actually on the page — a rich
 * result for an answer we do not show is the kind of thing that gets a site
 * demoted, not promoted.
 */
export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: site.name,
        alternateName: site.short,
        applicationCategory: "BusinessApplication",
        operatingSystem: "macOS, Linux, Windows (Docker)",
        description: site.description,
        url: site.url,
        codeRepository: site.repo,
        license: "https://www.apache.org/licenses/LICENSE-2.0",
        author: { "@type": "Person", name: site.author },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // The payload is our own static content, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
