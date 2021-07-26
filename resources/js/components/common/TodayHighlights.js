import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../api/useFetch";

const TodayHighlights = () => {
  const { data: item } = useFetch(
    "http://radio3.softnep.com/api/api-getHighlightsData"
  );
  return (
    <>
      <div className="onair-info">
        <div className="items pro-item">
          <span className="cat-box">
            <span className="cat-name">
              Today's <span>Highlights</span>
            </span>
          </span>
          {item?.map((a) => (
            <Media key={a.id} {...a} />
          ))}
        </div>
        <div className="more-links">
          <span className="main-title">
            View programe schedule
            <Link to={`/programSchedule`} title="Click Here">
              Click Here
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

const Media = ({ id, start_time, end_time, title }) => {
  return (
    <div className="media">
      <Link to={`/programSchedule/${id}`}>
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

export default TodayHighlights;
