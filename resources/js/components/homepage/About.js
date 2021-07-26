import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../api/useFetch";

const About = () => {
  const { data: item } = useFetch(
    "http://radio3.softnep.com/api/api-getStaticPageData/about-us"
  );
  const { data: item1 } = useFetch(
    "http://radio3.softnep.com/api/api-getAboutCategoricalData"
  );
  return (
    <>
      <div className="row about-section">
        {/* <!--<about>--> */}
        <div className="section-item-box about-box col-sm-6 col-md-3">
          <span className="cat-box">
            <span className="cat-name">{item?.title}</span>
          </span>
          <Link to={`/about`}>
            <figure>
              <img src={item?.photo} alt={item?.title} />
            </figure>
            <span className="description">{item?.description}</span>
          </Link>
          <div className="more-links">
            <Link to={`/about`} title="Click Here">
              Read More
            </Link>
          </div>
        </div>
        <div className="section-item-box news-blogs col-sm-6 col-md-3">
          <span className="cat-box">
            <span className="cat-name">{item1?.displayTitle}</span>
          </span>
          <MediaBlog
            url={`/newsDetail/${item1?.[0]?.id}`}
            photo={item1?.[0]?.photo}
            title={item1?.[0]?.title}
            time={item1?.[0]?.time}
          />
          <MediaBlog
            url={`/newsDetail/${item1?.[1]?.id}`}
            photo={item1?.[1]?.photo}
            title={item1?.[1]?.title}
            time={item1?.[1]?.time}
          />
          <MediaBlog
            url={`/newsDetail/${item1?.[2]?.id}`}
            photo={item1?.[2]?.photo}
            title={item1?.[2]?.title}
            time={item1?.[2]?.time}
          />
        </div>

        {/* <!--<twitter embed>--> */}
        <div className="section-item-box embed-box tweet-embed col-sm-6 col-md-3">
          <span className="cat-box">
            <span className="cat-name">
              Follow us on <span>Twitter</span>
            </span>
          </span>

          <div className="boundary">
            <a
              className="twitter-timeline"
              href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
            >
              Tweets by TwitterDev
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
          </div>
        </div>

        {/* <!--<facebook embed>--> */}
        <div className="section-item-box embed-box fb-embed col-sm-6 col-md-3">
          <span className="cat-box">
            <span className="cat-name">
              Find us on <span>Facebook</span>
            </span>
          </span>
          <div className="boundary">
            <div
              className="fb-page"
              data-href="https://www.facebook.com/softnep"
              data-tabs="timeline"
              data-width=""
              data-height="360"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            >
              <blockquote
                cite="https://www.facebook.com/softnep"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/softnep">SoftNEP</a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MediaBlog = ({ url = "", photo = "", title = "", time = "" }) => {
  return (
    <div className="items media">
      <Link to={url}>
        <figure className="mr-3">
          <img src={photo} alt={title} />
        </figure>
        <div className="media-body">
          <span className="main-title">{title}</span>
          <span className="dates">{time}</span>
        </div>
      </Link>
    </div>
  );
};

export default About;
