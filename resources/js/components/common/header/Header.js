import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import Navigation from "./Navigation";
import Clock from "react-live-clock";

const Header = ({ title = "Radio3 Design - SofNEP" }) => {
  return (
    <header id="header" className="new-header">
      {/* <!--<section bigyaapan>--> */}
      {/* <!-- <div className="section mt-3">
            @include ('frontend.partials.full-ad')    
            </div> --> */}
      {/* <!--<section bigyaapan>--> */}

      <div className="headwrap">
        <div className="container-fluid">
          <div className="row">
            {/* <!--<logo>--> */}
            <div className="logo-box col-sm-12 col-md-12 text-center">
              <Link to="/" title={title}>
                <figure>
                  <img src={logo} alt={title} />
                </figure>
              </Link>
              <TimeData />
              <span className="menu-toggle">
                <span className="left-icon lnr lnr-menu"></span>
              </span>
              <span className="search-toggle">
                <a
                  href="javascript:void(0)"
                  title="Search"
                  data-toggle="modal"
                  data-target="#search-now"
                >
                  <span className="left-icon fa fa-search"></span>
                </a>
              </span>
            </div>
            {/* <!--</logo>--> */}
          </div>
        </div>
      </div>

      <div className="main-menu">
        <div className="container">
          <div className="row header-main">
            <div className="col-md-12 navigation-box main-live-nav">
              <span className="menu-toggle fix-toggle">
                <span className="left-icon lnr lnr-menu"></span>
              </span>
              <span className="search-toggle">
                <a
                  href="javascript:void(0)"
                  title="Search"
                  data-toggle="modal"
                  data-target="#search-now"
                >
                  <span className="left-icon fa fa-search"></span>
                </a>
              </span>
              <Navigation />
            </div>
          </div>
        </div>
      </div>

      {/* <!--<section bigyaapan>--> */}
      {/* <!-- <div className="section mt-3">
            @include ('frontend.partials.full-ad')
            </div> --> */}
      {/* <!--<section bigyaapan>--> */}
    </header>
  );
};

const TimeData = () => {
  let d = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <span className="dates">
      <span className="np-date">
        <span className="left-icon lnr lnr-calendar-full"></span>
        {days[d.getDay()]}, &nbsp;
        {months[d.getMonth()]} &nbsp;
        {d.getDate()}th, &nbsp;
        {d.getFullYear()}
      </span>
      <span className="en-date"></span>
      <span className="left-icon lnr lnr-clock"></span>
      Studio Time: &nbsp;
      <span className="clock-time">
        <Clock
          className="clock-time"
          format={"h:mm:ss"}
          ticking={true}
          timezone={"Asia/Kathmandu"}
          locale="ne"
        />
      </span>
    </span>
  );
};

export default Header;
