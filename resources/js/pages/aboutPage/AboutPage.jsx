import React from "react";
import useFetch from "../../api/useFetch";
import About from "../../components/About/About";
import Meta from "../../components/common/Helmet";

const AboutPage = () => {
  const { data: meta } = useFetch(
    "http://radio3.softnep.com/api/api-getGlobalData"
  );
  return (
    <>
      <Meta
        title={meta?.["site-name"]}
        description={meta?.["og-description"]}
        image={meta?.["og-image"]}
        keywords={meta?.keywords}
      />
      <About />
    </>
  );
};

export default AboutPage;
