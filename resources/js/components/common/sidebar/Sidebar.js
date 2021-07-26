import React from "react";
import SmallAd from '../ads/SmallAd';
import OnAir from "../OnAir";
import PhotoGallery from "./PhotoGallery";
import TajaSamachar from "./TajaSamachar";
import VideoGallery from "./VideoGallery";

const Sidebar = () => {

  return (
    <div className="right-side side-news mt-3 col-sm-4 col-md-4">
      {/* <!--<taja-samachar>--> */}
      <div className="items taja-samachar-box samachar-box">
        <TajaSamachar />
      </div>
      {/* <!--<bigyapan>--> */}
      <div className="items bigyaapan-item">
        <SmallAd />
      </div>
      {/* <!--</!--<bigyapan>--> */}
      {/* <!--<video gallery>--> */}
      <div className="items taja-samachar-box samachar-box aside-news interview-thumbs">
        <VideoGallery />
      </div>

      {/* <!--<bigyapan>--> */}
      <div className="items bigyaapan-item">
        <SmallAd />
      </div>
      {/* <!--</!--<bigyapan>--> */}

      {/* <!--<photo gallery>--> */}
      <div className="items taja-samachar-box samachar-box aside-news interview-thumbs">
        <PhotoGallery />
      </div>

      {/* <!--<bigyapan>--> */}
      <div className="items bigyaapan-item">
        <SmallAd />
      </div>
      {/* <!--</!--<bigyapan>--> */}

      {/* <!--<bigyapan>--> */}
      <div className="items bigyaapan-item">
        <SmallAd />
      </div>
      {/* <!--</!--<bigyapan>--> */}
      {/* <!--<onair info>--> */}
      <div className="sticky-onair">
        <OnAir />
      </div>
    </div>
  );
};

export default Sidebar;
