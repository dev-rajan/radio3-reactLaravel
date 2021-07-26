import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../api/useFetch";

const Associates = () => {
  const { data: item } = useFetch(
    "http://radio3.softnep.com/api/api-getAssociatesData"
  );
  return (
    <>
      <span className="cat-box big-cat-box text-center">
        <span className="cat-tags big-tags">
          <span className="cat-name">{item?.title}</span>
        </span>
        <span className="description">{item?.summary}</span>
      </span>

      {item?.members.length < 1 ? (
        ""
      ) : (
        <div className="associate-slider">
          <div className="items">
            <Link to={`/#!`}>
              <figure>
                <span className="imgbox">
                  <img
                    src="https://picsum.photos/1140/640?random"
                    alt="title"
                  />
                </span>
              </figure>
              <span className="main-title"></span>
              <span className="location"></span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Associates;
