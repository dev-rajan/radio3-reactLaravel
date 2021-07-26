import React from "react";
import BigAd from "../common/ads/BigAd";
import Sidebar from "../common/sidebar/Sidebar";
import ProgramSchedule from "./ProgramSchedule";

const Schedule = () => {
  return (
    <div className="container">
      {/* <!--<middle section>--> */}
      <div className="row inner-pages">
        {/* <!--<left side>--> */}
        <aside className="left-side col-sm-8 col-md-8">
          <section className="section content-editor">
            <span className="cat-box">
              <span className="cat-tags">
                <span className="cat-name">Program Schedule</span>
              </span>
            </span>

            {/* <!--<full bigyapan>--> */}
            <section className="section full-bigyapan mt-2 mb-3">
              <BigAd />
            </section>
            {/* <!--</full bigyapan>--> */}

            {/* <!--<news list>--> */}
            <div className="related-more">
              <ProgramSchedule />
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

export default Schedule;
