import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../api/useFetch";

const Gallery = () => {
  const { data: item } = useFetch(
    "http://radio3.softnep.com/api/api-getGalleryData"
  );
  return (
    <>
      <span className="cat-box big-cat-box text-center">
        <span className="cat-tags big-tags">
          <span className="cat-name">{item?.cat?.name}</span>
        </span>
        <span className="description">{item?.cat?.summary}</span>
      </span>
      <div className="row galleries">
        {/* <!--<photo gallery>--> */}
        <GalleryItem
          heading={item?.photo?.displayTitle}
          url={`/photoDetail/${item?.photo?.id}`}
          image={item?.photo?.photo}
          time={item?.photo?.time}
          title={item?.photo?.title}
          detailUrl={`/photoList`}
        />
        <GalleryItem
          heading={item?.video?.displayTitle}
          url={`/videoDetail/${item?.video?.id}`}
          image={item?.video?.photo}
          time={item?.video?.time}
          title={item?.video?.title}
          detailUrl={`/videoList`}
        />
        <GalleryItem
          heading={item?.audio?.displayTitle}
          url={`/audioDetail/${item?.audio?.id}`}
          image={item?.audio?.photo}
          time={item?.audio?.time}
          title={item?.audio?.title}
          detailUrl={`/audioList`}
        />
      </div>
    </>
  );
};

const GalleryItem = ({
  heading = "",
  url = "",
  image = "",
  time = "",
  title = "",
  detailUrl = "",
}) => {
  return (
    <div className="items multi-items col-sm-4 col-md-4">
      <div className="cat-tags">
        <div className="cat-name">
          <span className="left-icon fa fa-camera-retro"></span>
          {heading}
        </div>
      </div>
      <div className="media-item">
        <Link to={url}>
          <figure>
            <img src={image} />
          </figure>
          <span className="dates">{time}</span>
          <span className="main-title">{title}</span>
          <span className="links">View Photos</span>
        </Link>
      </div>

      <div className="more-links">
        <span className="main-title">
          View more news
          <Link to={detailUrl} title="Click Here">
            Click Here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Gallery;
