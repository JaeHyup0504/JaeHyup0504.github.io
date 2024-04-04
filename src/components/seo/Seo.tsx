import React from "react";
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title?: string;
  desc?: string;
  image?: string;
  url?: string;
}

const Seo = ({ title, desc, image, url }: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
};

export default Seo;
