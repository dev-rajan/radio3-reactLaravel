import React from "react";
import { Link } from "react-router-dom";
import android from "../../assets/images/android.png";
import ios from "../../assets/images/ios.png";

const LivePlayer = () => {
  return (
    <section className="section radio-player">
      <div className="row box-radio">
        <div className="col-sm-12  col-md-12">
          <div className="radio-info-box">
            <div className="radio-player">
              <audio
                id="player2"
                preload="true"
                controls
                style={{ maxWidth: "100%" }}
              >
                <source
                  src="http://kalika-stream.softnep.com:7740/;stream.nsv&type=mp3&volume=60"
                  type="audio/mp3"
                />
              </audio>
            </div>
            <h2 className="powered-by">
              Online radio streaming is powered by
              <Link to="http://softnep.com" title="SoftNEP" target="_blank">
                SoftNEP
              </Link>
            </h2>
            <h3 className="download-title">Download Apps</h3>
            <div className="app-box">
              <Link to="/#" title="Download Android App" target="_blank">
                <img src={android} alt="image" />
              </Link>
              <Link to="/#" title="Download iOS App" target="_blank">
                <img src={ios} alt="image" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivePlayer;
