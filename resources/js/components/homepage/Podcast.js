import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../api/useFetch";
import TodayHighlights from "../common/TodayHighlights";

const Podcast = () => {
  const { data: item } = useFetch(
    "http://radio3.softnep.com/api/api-getPodcastData"
  );
  return (
    <div className="row">
      {/* <!--<left side>--> */}
      <aside className="left-side archive-list col-sm-8 col-md-8">
        <span className="cat-box">
          <span className="cat-tags">
            <span className="cat-name">
              <span>{item?.displayTitle}</span>
            </span>
          </span>
          <span className="description">{item?.displaySummary}</span>
        </span>
        <div className="row">
          <Media
            title={item?.[0]?.title}
            time={item?.[0]?.time}
            url={`/newsDetail/${item?.[0]?.id}`}
          />
          <Media
            title={item?.[1]?.title}
            time={item?.[1]?.time}
            url={`/newsDetail/${item?.[1]?.id}`}
          />
          <Media
            title={item?.[2]?.title}
            time={item?.[2]?.time}
            url={`/newsDetail/${item?.[2]?.id}`}
          />
          <Media
            title={item?.[3]?.title}
            time={item?.[3]?.time}
            url={`/newsDetail/${item?.[3]?.id}`}
          />
          <div className="more-links">
            <span className="main-title">
              View more arhive
              <Link to={`/newsList/${item?.slug}`} title="Click Here">
                Click Here
              </Link>
            </span>
          </div>
        </div>
      </aside>

      <div className="right-side side-news todays-list col-sm-4 col-md-4">
        {/* <!--<todays highlights>--> */}
        <TodayHighlights />
      </div>
    </div>
  );
};

const Media = ({ url = "", time = "", title = "" }) => {
  return (
    <div className="items col-sm-6 col-md-6">
      <div className="media">
        <Link to={url}>
          <figure className="mr-3">
            <span className="pro-box">
              <span className="left-icon fa fa-music"></span>
            </span>
          </figure>
          <span className="media-body">
            <span className="dates times">{time}</span>
            <span className="main-title">{title}</span>
            <span className="dates links text-uppercase">Listen</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Podcast;
