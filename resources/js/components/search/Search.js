import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";
import Sidebar from "../common/sidebar/Sidebar";
import SearchList from "./SearchList";

const Search = () => {
  const { keyword } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [activePage, setActivePage] = useState(null);

  useEffect(() => {
    const asyncFetchContent = async () => {
      const contentItem = await fetch(
        `http://radio3.softnep.com/api/api-getSearchData?page=1&per_page=30&keyword=${keyword}&from=undefined&to=undefined`
      );
      const contentData = await contentItem.json();
      const CurrentContent = contentData;
      setContent(CurrentContent);
      setIsLoading(false);
    };
    asyncFetchContent();
  }, [keyword]);

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
                <span className="cat-name">Search</span>
              </span>
            </span>
            <div className="search-title">
              <span className="result-title">
                {content?.post?.total} results found for keyword : 
                <span className="keyword-title">{keyword}</span>
              </span>
            </div>
            {/* <!--<search list>--> */}
            <div className="related-more">
              <SearchList item = {content} />
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

export default Search;
