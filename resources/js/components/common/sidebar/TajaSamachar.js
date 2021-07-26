import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../api/useFetch";

const TajaSamachar = () => {
  const { data: item } = useFetch(
    "http://radio3.softnep.com/api/api-getTajaNewsData"
  );
  return (
    <>
      <span className="cat-box taja-list">
        <span className="cat-tags">
          <span className="cat-name">
            Latest <span>News</span>
          </span>
        </span>
      </span>

      {item?.map((a) => (
        <Media key={a.id} {...a} />
      ))}
    </>
  );
};

const Media = ({ id, title, photo, time }) => {
  return (
    <div className="item-news media">
      <Link to={`/newsDetail/${id}`} title={title}>
        <figure className="mr-3">
          <img src={photo} alt={title} />
        </figure>
        <span className="media-body">
          <span className="main-title">{title}</span>
          <span className="dates">{time}</span>
        </span>
      </Link>
    </div>
  );
};

export default TajaSamachar;
