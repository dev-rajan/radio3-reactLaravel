import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../api/useFetch";
import BigAd from "../common/ads/BigAd";
import Sidebar from "../common/sidebar/Sidebar";
import RelatedNews from "./RelatedNews";

const NewsDetail = () => {
  const { id } = useParams();
  const { data: item } = useFetch(
    `http://radio3.softnep.com/api/api-getNewsDetailData/${id}`
  );

  return (
    <div className="container">
      {/* <!--<middle section>--> */}
      <div className="row inner-pages">
        {/* <!--<left side>--> */}
        <aside className="left-side col-sm-8 col-md-8">
          <section className="section content-editor">
            <span className="cat-box">
              <span className="cat-tags">
                {item?.post?.categories
                  ?.map((a) => (
                    <span key={a.name} className="cat-name">
                      {a.name}
                    </span>
                  ))
                  .slice(0, 1)}
              </span>
            </span>

            {/* <!--<full bigyapan>--> */}
            <section className="section full-bigyapan mt-2 mb-3">
              <BigAd />
            </section>
            {/* <!--</full bigyapan>--> */}

            <div className="title-names col-md-12">
              <span className="news-big-title">{item?.post?.title}</span>

              <span className="news-sub-heading">{item?.post?.subtitle}</span>

              <div className="row authors-box">
                <div className="items author-pic col-sm-6 col-md-7">
                  <div
                    key={item?.post?.authors?.map((a) => a.id)}
                    className="media"
                  >
                    <div className="mr-3">
                      <img
                        src={item?.post?.authors?.map((a) => a.image_link)}
                        className="author rounded-circle"
                        alt={item?.post?.authors?.map((a) => a.name)}
                      />
                    </div>

                    <div className="media-body">
                      <span className="main-title">
                        <a
                          href={`/authorList/${item?.post?.authors?.map(
                            (a) => a.id
                          )}`}
                          title={item?.post?.authors?.map((a) => a.name)}
                        >
                          {item?.post?.authors?.map((a) => a.name)}
                        </a>
                      </span>
                      <span className="designation">{item?.post?.time}</span>
                    </div>
                  </div>
                </div>

                <div className="share-box col-sm-6 col-md-5">
                  <div className="share-now sharethis-inline-share-buttons"></div>
                </div>
              </div>

              {/* <!--<full bigyapan>--> */}
              <section className="section full-bigyapan mt-3">
                <BigAd />
              </section>
              {/* <!--</full bigyapan>--> */}
            </div>
            {/* <!--<fatured image>--> */}

            <div className="detail-box">
              <div className="editor-box">
                <div className="featured-images">
                  {/* <!-- <iframe width="854" height="480" src="https://www.youtube.com/embed/_VPvKl6ezyc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> --> */}
                  <figure>
                    <img src={item?.post?.photo} alt={item?.post?.title} />
                    <figcaption className="caption-line">
                      {item?.post?.featured_caption}
                    </figcaption>
                  </figure>
                </div>
                {/* <!--</featured image>--> */}
                <div className="editor-box mt-3">
                  <h3>Our Schedule</h3>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Day</th> <th>Start Time</th> <th>End Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item?.post?.schedules?.map((a) => (
                          <tr key={a.schedule_id}>
                            <td>Monday</td>
                            <td>{a.start_time} AM</td>
                            <td>{a.end_time} AM</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: item?.post?.content }}
                />
                {/* <!--</editor-box>--> */}
              </div>
              {item?.post?.tags?.map((a) => (
                <Link to={`/tagList/${a.id}`} key={a.id} className="hashtags">
                  {a.name}
                </Link>
              ))}
            </div>

            {/* <!--</publish date>--> */}

            {/* <!--<full bigyapan>--> */}
            <section className="section full-bigyapan mt-1 mb-1">
              <BigAd />
            </section>
            {/* <!--</full bigyapan>--> */}

            {/* <!--<facebook like box>--> */}

            <div className="comment-box">
              <span className="cat-box">
                <span className="cat-tags">
                  <span className="cat-name">Post Comments</span>
                </span>
              </span>

              <span className="description">
                The facebook comment plugin code goes here.
              </span>
            </div>

            {/* <!--</facebook like box>--> */}
            <div className="related-more">
              <RelatedNews item={item} />
            </div>
          </section>
        </aside>

        {/* <!--</left side>--> */}

        {/* <!--<right side>--> */}
        <Sidebar />
        {/* <!--</right side>--> */}
      </div>
      {/* <!--</middle section>--> */}
    </div>
  );
};

export default NewsDetail;
