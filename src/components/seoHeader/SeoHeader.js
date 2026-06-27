import React from "react";
import { Helmet } from "react-helmet";
import { seo } from "../../portfolio.js";

// Page title + Open Graph meta. (Person JSON-LD structured data lives statically
// in public/index.html so it is reliably present for crawlers.)
function SeoHeader() {
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
    </Helmet>
  );
}

export default SeoHeader;
