import React from "react";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <ul class="top-social-nav">
      <SocialIcon url="/#!" title="Facebook" iconName="facebook" />
      <SocialIcon url="/#!" title="Twitter" iconName="twitter" />
      <SocialIcon url="/#!" title="Instagram" iconName="instagram" />
      <SocialIcon url="/#!" title="Youtube" iconName="youtube-play" />
    </ul>
  );
};

const SocialIcon = ({ url, title, iconName }) => {
  return (
    <li>
      <Link to={url} title={title}>
        <span className={`left-icon fa fa-${iconName}`}></span>
      </Link>
    </li>
  );
};

export default Social;
