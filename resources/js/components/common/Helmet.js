import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, image, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name " content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content="http://radio3.softnep.com" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Meta;
