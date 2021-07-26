import React, { useEffect, useState } from "react";
import BigAd from "../common/ads/BigAd";
import Pagination from "react-js-pagination";
import Sidebar from "../common/sidebar/Sidebar";
import RelatedAV from "./RelatedAV";
import { useParams } from "react-router-dom";

const AVList = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [activePage, setActivePage] = useState(null);

  useEffect(() => {
    const asyncFetchContent = async () => {
      const contentItem = await fetch(
        `http://radio3.softnep.com/api/api-getCategoricalList?page=1&per_page=30&slug=${slug}`
      );
      const contentData = await contentItem.json();
      const CurrentContent = contentData;
      setContent(CurrentContent);
      setIsLoading(false);
    };
    asyncFetchContent();
  }, [slug]);

  const handlePageChange = () => {
    setActivePage(content?.post?.current_page);
  };

  return (
    <div className="container">
      {/* <!--<middle section>--> */}
      <div className="row inner-pages">
        {/* <!--<left side>--> */}
        <aside className="left-side col-sm-8 col-md-8">
          <section className="section content-editor">
            <span className="cat-box">
              <span className="cat-tags">
                <span className="cat-name">{content?.cat?.name}</span>
              </span>
            </span>
            {/* <!--<full bigyapan>--> */}
            <section className="section full-bigyapan mt-2 mb-3">
              <BigAd />
            </section>
            {/* <!--</full bigyapan>--> */}
            {/* <!--<video list>--> */}
            <div className="related-more">
              <RelatedAV item={content} />
            </div>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={6}
              totalItemsCount={content?.post?.total}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
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

export default AVList;
