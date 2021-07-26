import React from "react";
import useFetch from "../api/useFetch";
import FeaturedSlider from "../components/homepage/FeaturedSlider";
import Gallery from "../components/homepage/Gallery";
import NewsUpdates from "../components/homepage/NewsUpdates";
import Podcast from "../components/homepage/Podcast";
import Associates from "../components/homepage/Associates";
import About from "../components/homepage/About";
import Meta from "../components/common/Helmet";

const Home = () => {
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

      <div>
        {/* <!--<featured programme slider>--> */}
        <section className="section breaking-slider">
          <FeaturedSlider />
        </section>
        {/* <!--</featured programme slider>--> */}

        {/* <!--<news and updates>--> */}
        <section className="section section-news big-news-list section-break pt-4 pt-4 pb-4 mt-3 mb-3">
          <div className="container">
            <NewsUpdates />
          </div>
        </section>

        <section className="section section-news big-news-list section-break black-bg video-break multimedia-content">
          <div className="container">
            <Gallery />
          </div>
        </section>

        {/* <!--<program archive>--> */}
        <section className="section section-news big-news-list section-break pt-4 pt-4 pb-4 mt-3 mb-3">
          <div className="container">
            <Podcast />
          </div>
        </section>

        <section className="section section-news big-news-list section-break black-bg video-break multimedia-content associates">
          <div className="container">
            <Associates />
          </div>
        </section>

        {/* <!--<about section>--> */}
        <section className="section about-content">
          <div className="container">
            <About />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
