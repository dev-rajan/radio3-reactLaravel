import React from "react";
import useFetch from "../../api/useFetch";
import Sidebar from "../common/sidebar/Sidebar";

const About = () => {
  const { data: items } = useFetch(
    `http://radio3.softnep.com/api/api-getStaticPageData/about-us`
  );
  return (
    <div className="container">
      {/* <!--<middle section>--> */}
      <div className="row inner-pages">
        {/* <!--<left side>--> */}
        <aside className="left-side col-sm-8 col-md-8">
          <section className="section content-editor">
            <span className="cat-box">
              <span className="cat-tags">
                <span className="cat-name">About Us</span>
              </span>
            </span>

            <div className="title-names col-md-12">
              <span className="news-big-title">{items?.title}</span>

              <div className="row authors-box">
                <div className="share-box col-sm-12 col-md-12">
                  <div className="share-now sharethis-inline-share-buttons"></div>
                </div>
              </div>
            </div>
            {/* <!--<fatured image>--> */}

            <div className="detail-box">
              <div className="featured-images">
                <figure>
                  <img src={items?.photo} alt={items?.title} />
                  <figcaption className="caption-line">
                    {items?.featured_caption}
                  </figcaption>
                </figure>
              </div>
              <div className="editor-box">{items?.description}</div>
            </div>
            <div className="comment-box">
              <span className="cat-box">
                <span className="cat-tags">
                  <span className="cat-name">Post Comments</span>
                </span>
              </span>
              <span className="description">
                <div
                  data-href="http://radio3.softnep.com/page/about-us"
                  data-numposts="50"
                  data-width="100%"
                  className="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop"
                  fb-xfbml-state="rendered"
                  fb-iframe-plugin-query="app_id=&amp;container_width=657&amp;height=100&amp;href=http%3A%2F%2Fradio3.softnep.com%2Fpage%2Fabout-us&amp;locale=en_GB&amp;numposts=50&amp;sdk=joey&amp;version=v8.0&amp;width="
                  style={{ width: "100%" }}
                >
                  <span
                    style={{
                      verticalAlign: "bottom",
                      width: "100%",
                      height: "203px",
                    }}
                  >
                    <iframe
                      name="f6b529bdea641"
                      width="1000px"
                      height="100px"
                      data-testid="fb:comments Facebook Social Plugin"
                      title="fb:comments Facebook Social Plugin"
                      frameborder="0"
                      allowtransparency="true"
                      allowfullscreen="true"
                      scrolling="no"
                      allow="encrypted-media"
                      src="https://www.facebook.com/v8.0/plugins/comments.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3d2c0b574dbfa8%26domain%3Dradio3.softnep.com%26origin%3Dhttp%253A%252F%252Fradio3.softnep.com%252Ff256c1ccc6e435c%26relation%3Dparent.parent&amp;container_width=657&amp;height=100&amp;href=http%3A%2F%2Fradio3.softnep.com%2Fpage%2Fabout-us&amp;locale=en_GB&amp;numposts=50&amp;sdk=joey&amp;version=v8.0&amp;width="
                      style={{
                        border: "none",
                        visibility: "visible",
                        width: "100%",
                        height: "203px",
                      }}
                      className=""
                    ></iframe>
                  </span>
                </div>
              </span>
            </div>
          </section>
        </aside>

        {/* <!--</left side>--> */}

        {/* <!--<right side>--> */}
        <Sidebar />
        {/* <!--</right side>--> */}
      </div>
      {/* <!--</middle section>--> */}
    </div>
  );
};

export default About;
