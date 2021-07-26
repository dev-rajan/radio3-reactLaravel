import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../api/useFetch";
import OnAir from "../common/OnAir";

const NewsUpdates = () => {
  const {
    data: item,
    isPending,
    error,
  } = useFetch("http://radio3.softnep.com/api/api-getNewsUpdateData");
  return (
    <>
      <div className="row">
        {isPending && <> </>}
        {error && <div>{error}</div>}
        <aside className="col-sm-8 col-md-8">
          <span className="cat-box">
            <span className="cat-tags">
              <span className="cat-name">
                <span>{item?.displayTitle}</span>
              </span>
              <span className="description">{item?.displaySummary}</span>
            </span>
          </span>
          <div className="row">
            <aside className="left-side main-news news-updates col-sm-6 col-md-6">
              <div className="samachar-box mukhya-samachar">
                <div className="items big-news">
                  <Link
                    to={`/newsDetail/${item?.["0"]?.id}`}
                    title={item?.["0"]?.title}
                  >
                    <figure>
                      <img src={item?.["0"]?.photo} alt={item?.["0"]?.title} />
                    </figure>
                    <span className="dates"> {item?.["0"]?.time}</span>
                    <span className="main-title txt-34">
                      {item?.["0"]?.title}
                    </span>
                    <span className="description">{item?.["0"]?.summary}</span>
                  </Link>
                </div>
                <div className="more-links">
                  <span className="main-title">
                    View more news
                    <Link
                      to={`/newsList/${item?.["0"]?.id}`}
                      title="Click Here"
                    >
                      Click Here
                    </Link>
                  </span>
                </div>
              </div>
            </aside>
            <div className="right-side side-news news-side col-sm-6 col-md-6">
              {/* <!--<taja-samachar>--> */}
              <Samachar
                url={`/newsDetail/${item?.[1]?.id}`}
                image={item?.[1]?.["photo"]}
                title={item?.[1]?.["title"]}
                date={item?.[1]?.["time"]}
              />
              <Samachar
                url={`/newsDetail/${item?.[2]?.id}`}
                image={item?.[2]?.["photo"]}
                title={item?.[2]?.["title"]}
                date={item?.[2]?.["time"]}
              />
              <Samachar
                url={`/newsDetail/${item?.[3]?.id}`}
                image={item?.[3]?.["photo"]}
                title={item?.[3]?.["title"]}
                date={item?.[3]?.["time"]}
              />
            </div>
          </div>
        </aside>
        <div className="right-side side-news col-sm-4 col-md-4">
          {/* <!--<onair info>--> */}
          <OnAir />
        </div>
      </div>
    </>
  );
};

const Samachar = ({ url = "", image = "", title = "", date = "" }) => {
  return (
    <div className="items taja-samachar-box samachar-box thumb-right-list">
      <div className="item-news media">
        <Link to={url} title={title}>
          <figure className="mr-3">
            <img src={image} alt={title} />
          </figure>
          <span className="media-body">
            <span className="dates">{date}</span>
            <span className="main-title">{title}</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NewsUpdates;
