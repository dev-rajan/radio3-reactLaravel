import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../api/useFetch";

const PhotoGallery = () => {
  const { data: item } = useFetch(
    "http://radio3.softnep.com/api/api-getSidePhotoData"
  );
  return (
    <>
      <span className="cat-box taja-list">
        <span className="cat-tags">
          <Link to={`/newsList/${item?.slug}`} title={item?.displayTitle}>
            <span>{item?.displayTitle}</span>
          </Link>
        </span>
      </span>

      <Media
        id={item?.[0]?.id}
        title={item?.[0]?.title}
        photo={item?.[0]?.photo}
        time={item?.[0]?.time}
      />
      <Media
        id={item?.[1]?.id}
        title={item?.[1]?.title}
        photo={item?.[1]?.photo}
        time={item?.[1]?.time}
      />
      <Media
        id={item?.[2]?.id}
        title={item?.[2]?.title}
        photo={item?.[2]?.photo}
        time={item?.[2]?.time}
      />
      <Media
        id={item?.[3]?.id}
        title={item?.[3]?.title}
        photo={item?.[3]?.photo}
        time={item?.[3]?.time}
      />
    </>
  );
};

const Media = ({ id = "", title = "", photo = "", time = "" }) => {
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

export default PhotoGallery;
