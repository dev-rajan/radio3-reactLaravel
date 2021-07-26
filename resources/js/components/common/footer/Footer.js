import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../api/useFetch";
import Social from "./Social";

const Footer = ({ companyTitle = "Radio3 Design" }) => {
  const { data: item } = useFetch(
    "http://radio3.softnep.com/api/api-getNavigationData"
  );
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div
              className="items col-sm-3 col-md-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <span className="cat-box">
                <span className="cat-name">Contact</span>
              </span>
              <div className="media">
                <span className="media-body">
                  <span className="main-title">Contact Address</span>
                  <span className="description">
                    New Baneshwor, Kathmandu <br />
                    EPC 100, 8975
                  </span>
                  <span className="description">
                    Phone: 977 1 00 00 00 <br />
                    Email: info&#64;softnepradio3.com
                  </span>
                </span>
              </div>
            </div>

            <div
              className="items col-sm-3 col-md-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <span className="cat-box">
                <span className="cat-name">Navigation</span>
              </span>

              <ul className="footer-nav">
                {item?.map((menu) =>
                  typeof menu.sub_categories != "undefined" &&
                  menu.sub_categories != null &&
                  menu.sub_categories.length != null &&
                  menu.sub_categories.length > 0 ? (
                    ""
                  ) : (
                    <FooterNav
                    key={`${menu.name}`}
                      url={`/newsList/${menu.slug}`}
                      title={`${menu.name}`}
                    />
                  )
                )}
              </ul>
            </div>

            <div
              className="items col-sm-3 col-md-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <span className="cat-box">
                <span className="cat-name">Quick Links</span>
              </span>

              <ul className="footer-nav">
                <QuickLinks url="/unicode" title="Unicode" />
                <QuickLinks url="/team" title="Our Team" />
                <QuickLinks url="/scheduleList/1" title="Our Programs" />
                <QuickLinks url="/live" title="Radio Network" />
              </ul>
            </div>

            <div
              className="items newsletter col-sm-3 col-md-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <span className="cat-box">
                <span className="cat-name">Subscribe Newsletter</span>
              </span>
              <span className="description">Get updates and offers.</span>

              <form
                action=""
                className="newsletter-form wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <fieldset>
                  <input
                    type="text"
                    className="textfield"
                    placeholder="email address"
                  />
                  <button type="submit" className="submit-btn">
                    <span className="left-icon fa fa-envelope-o"></span>
                  </button>
                </fieldset>
              </form>

              <span className="cat-box">
                <span className="cat-name">Get Connected</span>
              </span>
              <Social />
            </div>
          </div>

          <div className="copyright-section">
            <div className="container">
              <div className="copyrights">
                <div className="name-section">
                  <h2>
                    &copy; {companyTitle} - 2020. All Rights Reserved. Site by:
                    <Link
                      to="https://www.softnep.com"
                      title="SoftNEP"
                      target="_blank"
                    >
                      SoftNEP
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const FooterNav = ({ url = "", title = "" }) => {
  return (
    <li>
      <Link to={url} title={title}>
        {title}
      </Link>
    </li>
  );
};

const QuickLinks = ({ url = "", title = "" }) => {
  return (
    <li>
      <Link to={url} title={title}>
        {title}
      </Link>
    </li>
  );
};

export default Footer;
