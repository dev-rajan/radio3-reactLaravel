import React from "react";
import { Link } from "react-router-dom";

const RelatedAV = ({item}) => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 half-news-list">
          {item?.post?.data
            ?.map((a) => (
              <div className="item-news video-lastest">
                <div className="tv-box mb-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: a.featured_video,
                    }}
                  />
                </div>
                <Link to={`/avDetail/${a.id}`} title={a.title}>
                  <span className="main-title">{a.title}</span>
                  <span className="description">{a.subtitle}</span>
                  <span className="dates">{a.time}</span>
                </Link>
              </div>
            ))
            .slice(0, 1)}

          {item?.post?.data?.map((a) => <Media key={a.id} {...a} />).slice(1)}
        </div>
      </div>
    </>
  );
};

const Media = ({ id, title, subtitle, time, photo }) => {
  return (
    <div className="item-news media">
      <Link to={`/audioList/${id}`} title={title}>
        <figure className="mr-4">
          <img src={photo} alt={title} />
          <span className="feat-icon">
            <span className="left-icon fa fa-music"></span>
          </span>
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

export default RelatedAV;
