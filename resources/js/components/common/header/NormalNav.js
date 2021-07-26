import React from "react";
import { Link } from "react-router-dom";

const NormalNav = () => {
  return (
    <>
      <div className="items">
        <span className="main-title">About Us</span>
        <ul className="panel-menu normal-nav">
          <About url="/aboutUs" title="Introduction" />
          <About url="/aboutUs" title="Our Team" />
          <About url="/aboutUs" title="Network Coverage" />
        </ul>
      </div>
    </>
  );
};

const About = ({ url = "", title = "" }) => {
  return (
    <li>
      <Link to={url}>{title}</Link>
    </li>
  );
};

export default NormalNav;
