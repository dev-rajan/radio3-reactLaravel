import React from "react";

const Contact = () => {
  return (
    <div className="container">
      {/* <!--<middle section>--> */}
      <div className="row inner-pages">
        {/* <!--<left side>--> */}
        <aside className="left-side col-sm-8 col-md-8">
          <section className="section content-editor">
            <span className="cat-box">
              <span className="cat-tags">
                <span className="cat-name">Contact</span>
              </span>
            </span>

            {/* <!--<google map>--> */}
            <div className="google-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.463505152319!2d85.33544097746015!3d27.694684531188614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew+Baneshwor%2C+Kathmandu+44600!5e0!3m2!1sen!2snp!4v1557827944029!5m2!1sen!2snp"
                width="600"
                height="450"
                frameborder="0"
                style={{border:0}}
                allowfullscreen
              ></iframe>
            </div>
            {/* <!--</google map>--> */}

            <section className="section footer address-box">
              <div className="row">
                <div className="items col-sm-12 col-md-4">
                  <div className="add-item">
                    <span className="left-icon lnr lnr-map-marker"></span>

                    <span className="main-title">Contact Address</span>
                    <span className="description">
                      New Baneshwor, Kathmandu <br />
                      EPC 100, 8975
                    </span>
                  </div>
                </div>

                <div className="items col-sm-12 col-md-4">
                  <div className="add-item">
                    <span className="left-icon phone-icon lnr lnr-phone"></span>

                    <span className="main-title">Phone Number</span>
                    <span className="description">
                      977 1 411 59 34
                      <br />
                      977 1 00 00 00
                    </span>
                  </div>
                </div>

                <div className="items col-sm-12 col-md-4">
                  <div className="add-item">
                    <span className="left-icon env-icon lnr lnr-envelope"></span>

                    <span className="main-title">Email Address</span>
                    <span className="description">
                      info&#64;softnepradio3.com
                      <br />
                      ads&#64;softnepradio3.com
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* <!--<feedback form>--> */}
            <section className="section feedback-forms">
              <span className="cat-box">
                <span className="cat-tags">
                  <span className="cat-name">
                    Feedback <span>Form</span>
                  </span>
                </span>
              </span>
              <span className="description">
                Send us your valuable feebacks &amp; suggestions.
              </span>
              {/* <!--<feedback form>--> */}
              <form className="feedback contact-form" method="get" action="#">
                <fieldset>
                  <div className="row">
                    <div className="fieldbox col-xs-12 col-sm-6 col-md-6">
                      <label for="">Full Name:</label>
                      <input
                        type="text"
                        className="textfield"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="fieldbox col-xs-12 col-sm-6 col-md-6">
                      <label for="">Last Name:</label>
                      <input
                        type="text"
                        className="textfield"
                        placeholder="Last Name"
                      />
                    </div>

                    <div className="fieldbox col-xs-12 col-sm-6 col-md-6">
                      <label for="">Address:</label>
                      <input
                        type="text"
                        className="textfield"
                        placeholder="Address"
                      />
                    </div>

                    <div className="fieldbox col-xs-12 col-sm-6 col-md-6">
                      <label for="">Email:</label>
                      <input
                        type="email"
                        className="textfield"
                        placeholder="Email"
                      />
                    </div>

                    <div className="fieldbox col-xs-12 col-sm-12 col-md-12">
                      <label for="">Subject:</label>
                      <input
                        type="text"
                        className="textfield"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="fieldbox col-xs-12 col-sm-12 col-md-12">
                      <label for="">Message:</label>
                      <textarea
                        className="textarea"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="fieldbox col-xs-12 col-sm-12 col-md-12">
                      <iframe
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-&amp;co=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbTo0NDM.&amp;hl=en&amp;v=v1550471573786&amp;size=normal&amp;cb=c7pr5re02lq2"
                        width="304"
                        height="78"
                        role="presentation"
                        name="a-9cloqti6b3wv"
                        frameborder="0"
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                      ></iframe>
                    </div>

                    <div className="fieldbox more-links col-xs-12 col-sm-12 col-md-12">
                      <button className="more-btns">Submit</button>
                    </div>
                  </div>
                </fieldset>
              </form>
              {/* <!--</feedback form>--> */}
            </section>
          </section>
        </aside>

        {/* <!--</left side>--> */}

        {/* <!--<right side>--> */}
        <div className="right-side side-news mt-3 col-sm-4 col-md-4">
          {/* <!--<taja-samachar>--> */}
          <div className="items taja-samachar-box samachar-box">
            @include ('frontend.partials.taja-samachar')
          </div>
          {/* <!--<bigyapan>--> */}
          <div className="items bigyaapan-item">
            @include ('frontend.partials.ad-280x480')
          </div>
          {/* <!--</!--<bigyapan>--> */}
          {/* <!--<video gallery>--> */}
          <div className="items taja-samachar-box samachar-box aside-news interview-thumbs">
            @include ('frontend.partials.side-videos')
          </div>

          {/* <!--<bigyapan>--> */}
          <div className="items bigyaapan-item">
            @include ('frontend.partials.ad-280x480')
          </div>
          {/* <!--</!--<bigyapan>--> */}

          {/* <!--<photo gallery>--> */}
          <div className="items taja-samachar-box samachar-box aside-news interview-thumbs">
            @include ('frontend.partials.side-photos')
          </div>

          {/* <!--<bigyapan>--> */}
          <div className="items bigyaapan-item">
            @include ('frontend.partials.ad-280x480')
          </div>
          {/* <!--</!--<bigyapan>--> */}

          {/* <!--<bigyapan>--> */}
          <div className="items bigyaapan-item">
            @include ('frontend.partials.ad-280x480')
          </div>
          {/* <!--</!--<bigyapan>--> */}
          {/* <!--<onair info>--> */}
          <div className="sticky-onair">
            @include ('frontend.partials.onair-info')
          </div>
        </div>
        {/* <!--</right side>--> */}
      </div>
      {/* <!--</middle section>--> */}
    </div>
  );
};

export default Contact;
