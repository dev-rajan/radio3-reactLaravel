import React from "react";
import { Link } from "react-router-dom";

const SearchList = ({ item }) => {
  return (
    <div className="row">
      <div className="col-md-12 half-news-list">
        {item?.post?.data?.map((a) => (
          <Media key={a.id} {...a} />
        ))}
      </div>
    </div>
  );
};

const Media = ({ id, title, photo, featured_caption, time }) => {
  return (
    <div className="item-news media">
      <Link to={`newsDetail/${id}`} title={title}>
        <figure className="mr-4">
          <img src={photo} alt={title} />
        </figure>
        <span className="media-body">
          <span className="main-title">{title}</span>
          <span className="description">{featured_caption}</span>
          <span className="dates">{time}</span>
        </span>
      </Link>
    </div>
  );
};

export default SearchList;
