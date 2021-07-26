import React from "react";
import { Link } from "react-router-dom";

const RelatedPhoto = ({ item }) => {
  return (
    <div className="row half-news-list photogallery-list">
      {item?.post?.data?.map((a) => (
        <PhotoItems {...a} key={`photo_number_${a.id}`} />
      ))}
    </div>
  );
};

const PhotoItems = ({ id, title, photo, time }) => {
  return (
    <div className="item-news col-sm-6 col-md-6">
      <Link to={`photoDetail/${id}`} title={title}>
        <figure className="mb-3">
          <img src={photo} alt={title} />
        </figure>
        <span className="main-title">{title}</span>
        <span className="dates">{time}</span>
      </Link>
    </div>
  );
};

export default RelatedPhoto;
