import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../api/useFetch";

const OnAir = () => {
  const { data: item } = useFetch(
    "http://radio3.softnep.com/api/api-getOnAirData"
  );
  return (
    // <!--<onair>-->
    <div className="onair-info">
      <div className="items pro-item onair-live">
        <span className="cat-box">
          <span className="cat-name">
            Now <span>Onair</span>
          </span>
        </span>
        <Media
          url={`/#!`}
          start_time={item?.start_time}
          end_time={item?.end_time}
          title={item?.title}
        />
      </div>

      {/* <!--<coming up>--> */}
      <div className="items pro-item">
        <span className="cat-box">
          <span className="cat-name">
            Coming Up <span>Next</span>
          </span>
        </span>
        <Media
          url={`/#!`}
          start_time={item?.start_time}
          end_time={item?.end_time}
          title={item?.title}
        />
      </div>

      <div className="items pro-item">
        <span className="cat-box">
          <span className="cat-name">
            Later <span>On</span>
          </span>
        </span>
        <Media
          url={`/#!`}
          start_time={item?.start_time}
          end_time={item?.end_time}
          title={item?.title}
        />
      </div>
      <div className="more-links">
        <span className="main-title">
          View programe schedule{" "}
          <Link to="/#!" title="Click Here">
            Click Here
          </Link>
        </span>
      </div>
    </div>
  );
};

export const Media = ({ url = "", start_time = "", end_time = "", title = "" }) => {
  return (
    <div className="media">
      <Link to={url}>
        <figure className="mr-3">
          <span className="pro-box">
            <span className="left-icon fa fa-music"></span>
          </span>
        </figure>
        <span className="media-body">
          <span className="dates times">
            {start_time} - {end_time}
          </span>
          <span className="main-title">{title}</span>
        </span>
      </Link>
    </div>
  );
};

export default OnAir;
