import React from "react";

const Pagination = () => {
  return (
    <div className="pagination">
      <span className="current">1</span>
      <a className="page larger" href="#">
        2
      </a>
      <a className="page larger" href="#">
        3
      </a>
      <a className="page larger" href="#">
        4
      </a>
      <a className="nextpostslink" rel="next" href="#">
        Next
      </a>
    </div>
  );
};

export default Pagination;
