import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../api/useFetch";

const VideoGallery = () => {
  const { data: item } = useFetch(
    "http://radio3.softnep.com/api/api-getSideVideoData"
  );
  return (
    <>
      <span className="cat-box taja-list">
        <span className="cat-tags">
          <span className="cat-name">
            <Link to={`/newsList/${item?.slug}`} title={item?.displayTitle}>
              <span>{item?.displayTitle}</span>
            </Link>
          </span>
        </span>
      </span>

      <div className="item-news">
        <div className="tv-box mb-2">
          <div
            dangerouslySetInnerHTML={{ __html: item?.[0]?.featured_video }}
          />
        </div>
        <Link to={`/newsDetail/${item?.[0]?.id}`} title={item?.[0]?.title}>
          <span className="main-title">{item?.[0]?.title}</span>
          <span className="dates">{item?.[0]?.time}</span>
        </Link>
      </div>

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

export default VideoGallery;
