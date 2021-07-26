import React, { useEffect, useState } from "react";
// import useFetch from "../../api/useFetch";
import TagItems from "./TagItems";
import BigAd from "../common/ads/BigAd";
import Pagination from "react-js-pagination";
import Sidebar from "../common/sidebar/Sidebar";
import { useParams } from "react-router-dom";

const Tag = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [content, setContent] = useState(null);
    const [activePage, setActivePage] = useState(null);
  
    useEffect(() => {
      const asyncFetchContent = async () => {
        const contentItem = await fetch(
          `http://radio3.softnep.com/api/api-getTagList?page=1&per_page=30&id=${id}`
        );
        const contentData = await contentItem.json();
        const CurrentContent = contentData;
        setContent(CurrentContent);
        setIsLoading(false);
      };
      asyncFetchContent();
    }, [id]);
  
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
                <span className="cat-name">
                  <span>{content?.cat?.name}</span>
                </span>
              </span>
            </span>
            {/* <!--<full bigyapan>--> */}
            <section className="section full-bigyapan mt-2 mb-3">
              <BigAd />
            </section>
            {/* <!--</full bigyapan>--> */}
            {/* <!--<news list>--> */}
            <div className="related-more">
              <TagItems item={content} />
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
  
    )
}

export default Tag
