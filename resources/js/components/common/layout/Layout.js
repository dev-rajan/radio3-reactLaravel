import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import logo from "../../../assets/images/logo.png";
import Navigation from "../header/Navigation";
import NormalNav from "../header/NormalNav";
import { useHistory } from "react-router-dom";

const Layout = ({ children, title = "Radio3 Design - SoftNEP" }) => {
  const [formData, updateFormData] = useState("");
  let history = useHistory();

  const handleChange = (e) => {
    updateFormData(e.target.value);
  };

  const handleSubmit = () => {
    history.push(`/search/${formData}`);
  };
  return (
    <>
      {/* <!--<popup>--> */}
      {/* <!-- @include ('frontend.partials.jacket-ad') --> */}
      {/* <!--</popup>--> */}
      {/* <!--<header>--> */}
      {/* <!--<mobile nav>--> */}
      <div className="primary-panel">
        <div className="close-box">
          <span className="main-title">
            <img src={logo} alt={title} />
            <span className="menu-close">
              <span className="left-icon lnr lnr-cross"></span>
            </span>
          </span>
        </div>
        <div className="menu-box">
          <Navigation />
          <NormalNav />
        </div>
      </div>
      {/* <!--</mobile menu>--> */}
      <div id="wrapper" className="wrapper">
        <Header />
        <div id="content">{children}</div>
        <Footer />
      </div>
      <div className="upToScroll">
        <a href="#" className="scrollToTop">
          <i className="lnr lnr-chevron-up"></i>
        </a>
      </div>

      <div className="mask-box"></div>

      <div
        className="modal fade"
        id="search-now"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                className="search-site new-search"
              >
                <fieldset>
                  <div className="row">
                    {/* <div className="form-groups col-sm-6 col-md-6">
                      <input
                        id="from-date"
                        type="text"
                        className="textfield"
                        placeholder="From"
                      />
                    </div>

                    <div className="form-groups col-sm-6 col-md-6">
                      <input
                        id="to-date"
                        type="text"
                        className="textfield"
                        placeholder="To"
                      />
                    </div> */}

                    <div className="form-groups col-sm-10 col-md-10">
                      <input
                        type="text"
                        className="textfield"
                        placeholder="Type keywords here..."
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-groups col-sm-2 col-md-2">
                      <button
                        onClick={handleSubmit}
                        type="submit"
                        className="search-btn"
                      >
                        <span className="submit-btn lnr lnr-magnifier"></span>
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
