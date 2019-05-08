import { searchUrl } from "../../../components/App/routes";

export const structuredData = shop => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    description: shop.description,
    name: shop.name,
    potentialAction: {
      "@type": "SearchAction",
      "query-input": "required name=q",
      target: searchUrl + "?q={q}"
    },
    url: location.href
  });
};
