import React from "react";
import BigAd from "../common/ads/BigAd";
import Sidebar from "../common/sidebar/Sidebar";

const Unicode = () => {
  return (
    <div className="container">
      {/* <!--<middle section>--> */}
      <div className="row inner-pages">
        {/* <!--<left side>--> */}
        <aside className="left-side col-sm-8 col-md-8">
          <section className="section content-editor">
            <span className="cat-box">
              <span className="cat-tags">
                <span className="cat-name">Unicode Converter</span>
              </span>
            </span>

            {/* <!--<full bigyapan>--> */}
            <section className="section full-bigyapan mt-2 mb-3">
              <BigAd />
            </section>
            {/* <!--</full bigyapan>--> */}

            {/* <!--<unicode converter>--> */}
            <div className="featured-images unicode-box">
              <ul className="nav nav-tabs converter-tab" id="myTab2" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="preeti-tab"
                    data-toggle="tab"
                    href="#preeti"
                    role="tab"
                    aria-controls="preeti"
                    aria-selected="true"
                  >
                    प्रीतिमा टाइप गर्नुहोस्
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="roman-tab"
                    data-toggle="tab"
                    href="#roman"
                    role="tab"
                    aria-controls="roman"
                    aria-selected="false"
                  >
                    रोमनमा टाइप गर्नुहोस्
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent2">
                <div
                  className="tab-pane fade show active"
                  id="preeti"
                  role="tabpanel"
                  aria-labelledby="preeti-tab"
                >
                  {/* <!--<form>--> */}

                  <form className="unicode-form" method="" action="">
                    <div className="row">
                      <div className="col-sm-12 col-md-12">
                        <textarea
                          name="preeti-type"
                          className="textfield textarea"
                          placeholder="यहाँ टाइप गर्नुहोस्"
                        ></textarea>
                      </div>
                      <div className="converter-btn col-sm-12 col-md-12">
                        <button className="btn convert-btn">
                          युनिकोडमा कन्भर्ट गर्नुहोस्
                        </button>
                      </div>
                      <div className="col-sm-12 col-md-12">
                        <textarea
                          name="convert-preeti-unicode"
                          className="textfield textarea"
                        ></textarea>
                      </div>
                    </div>
                  </form>
                  {/* <!--</form>--> */}
                </div>
                <div
                  className="tab-pane fade"
                  id="roman"
                  role="tabpanel"
                  aria-labelledby="roman-tab"
                >
                  {/* <!--<form>--> */}
                  <form className="unicode-form" method="" action="">
                    <textarea
                      name="roman-type"
                      className="textfield textarea"
                      placeholder="यहाँ टाइप गर्नुहोस्"
                    ></textarea>
                  </form>
                  {/* <!--</form>--> */}
                </div>
              </div>
            </div>
            {/* <!--</unicode converter>--> */}
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

export default Unicode;
