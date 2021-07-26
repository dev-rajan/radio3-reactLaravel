import React from "react";
import { Link } from "react-router-dom";

const ListItems = ({ item }) => {
  return (
    <div className="row">
      <div className="col-md-12 half-news-list">
        <div className="item-news news-latest">
          {item?.post.data
            .map((a) => (
              <Link key={a.id} to={`/newsDetail/${a.id}`} title={a.title}>
                <figure className="mb-3">
                  <img src={a.photo} alt={a.title} />
                </figure>
                <span className="main-title">{a.title}</span>
                <span className="description">{a.subtitle}</span>
                <span className="dates">{a.time}</span>
              </Link>
            ))
            .slice(0, 1)}
        </div>
        {item?.post.data.map((a) => <Media key={a.id} {...a} />).slice(1)}
      </div>
    </div>
  );
};

const Media = ({ id, photo, title, subtitle, time }) => {
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

export default ListItems;
