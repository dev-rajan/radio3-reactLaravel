import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../api/useFetch";

const Navigation = () => {
  const {
    data: item,
    error,
    isPending,
  } = useFetch("http://radio3.softnep.com/api/api-getNavigationData");
  return (
    // <!--<navigation starts>-->
    <div className="navigation_box mains">
      <ul>
        <li className="home-text selected">
          <Link to={`/`} title="गृहपृष्‍ठ">
            गृहपृष्‍ठ
          </Link>
        </li>
        {isPending && <> </>}
        {error && <div>{error}</div>}
        {item &&
          item.map((menu) =>
            typeof menu.sub_categories != "undefined" &&
            menu.sub_categories != null &&
            menu.sub_categories.length != null &&
            menu.sub_categories.length > 0 ? (
              <li className="dropdown" key={menu.id}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {menu.name}
                </a>
                <ul className="dropdown-menu">
                  {menu.sub_categories.map((a) => (
                    <li key={a.slug}>
                      <Link to={`/${a.slug}List/${a.slug}`} title={a.name} className="">
                        {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={menu.id}>
                <Link to={`/newsList/${menu.slug}`} title={menu.name} className="">
                  {menu.name}
                </Link>
              </li>
            )
          )}
        <li className="live-btn">
          <Link
            to="/live"
            title="Listen Live"
            className=""
          >
            Listen Live <span className="left-icon fa fa-play"></span>
          </Link>
        </li>
        <li className="search-link">
          <span className="search-toggle">
            <a
              href="javascript:void(0)"
              title="Search"
              data-toggle="modal"
              data-target="#search-now"
            >
              <span className="left-icon fa fa-search"></span>
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
