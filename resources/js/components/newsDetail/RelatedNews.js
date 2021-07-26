import React from "react";
import { Link } from "react-router-dom";

const RelatedNews = ({item}) => {
  return (
    <>
      <span className="cat-box">
        <span className="cat-tags">
          <span className="cat-name">Read More...</span>
        </span>
      </span>

      <div className="row">
        <div className="col-md-12 half-news-list">
          {item?.moreNews?.map((a) => (
            <Media {...a} key={a.id} />
          ))}
        </div>
      </div>
    </>
  );
};

const Media = ({ id, title, photo, time, subtitle }) => {
  return (
    <div className="item-news media">
      <Link to={`/newsDetail/${id}`} title={title}>
        <figure className="mr-4">
          <img src={photo} alt={title} />
        </figure>
        <span className="media-body">
          <span className="main-title">{title}</span>
          <span className="description">{subtitle}</span>
          <span className="dates">{time}</span>
        </span>
      </Link>
    </div>
  );
};

export default RelatedNews;
