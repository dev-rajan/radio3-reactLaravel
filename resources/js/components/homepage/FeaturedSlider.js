import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import useFetch from "../../api/useFetch";

const FeaturedSlider = () => {
  const { data: items } = useFetch(
    "http://radio3.softnep.com/api/api-getSliderData"
  );
  const options = {
    rewind: true,
    autoplay: true,
    nav: true,
    margin: 1,
    autoplaySpeed: 2000,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <>
      {items?.length > 0 ? (
        <div className="featured-slider">
          <OwlCarousel className="owl-theme" {...options}>
            {items?.map((a) => (
              <SliderItem key={`slider-${a.id}`} {...a} />
            ))}
          </OwlCarousel>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const SliderItem = ({ id, title, subtitle, photo }) => {
  return (
    <div className="items">
      <Link to={`/newsDetail/${id}`} title={title}>
        <figure>
          <img src={photo} alt={title} />
          <span className="overlay-box">
            <span className="main-title">{title}</span>
            <span className="description">
              {subtitle}
              <span className="more-links">More Details</span>
            </span>
          </span>
        </figure>
      </Link>
    </div>
  );
};

export default FeaturedSlider;
