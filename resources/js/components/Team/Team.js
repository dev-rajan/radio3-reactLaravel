import React from "react";
import Sidebar from "../common/sidebar/Sidebar";
import useFetch from "../../api/useFetch";

const Team = () => {
  const { data: item } = useFetch(
    "http://radio3.softnep.com/api/api-getHamroTeamData"
  );
  return (
    <section className="section">
      <div className="container">
        {/* <!--<middle section>--> */}
        <div className="row inner-pages">
          {/* <!--<left side>--> */}
          <aside className="left-side full-left-side col-sm-8 col-md-8">
            <section className="content-editor">
              <span className="cat-box">
                <span className="cat-tags">
                  <span className="cat-name">Our Team</span>
                </span>
              </span>

              <div className="detail-box hamroteam">
                <div className="editor-box team-list-box">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>

                    <tbody>
                      {item?.map((a) => 
                        <TeamMember key={a.name} {...a} />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </aside>

          {/* <!--</left side>--> */}
          {/* Right Side */}
          <Sidebar />
          {/* Right Side */}
        </div>
        {/* <!--</middle section>--> */}
      </div>
    </section>
  );
};

const TeamMember = ({name, jobtitle, facebook, twitter, email, image_link}) => {
  return (
    <tr>
      <td>
        <div className="media team-item">
          <figure className="user-image">
            <img src={image_link} alt={name} />
          </figure>
          <div className="media-body">
            <span className="main-title">{name}</span>
          </div>
        </div>
      </td>
      <td>{jobtitle}</td>
      <td>
        <div className="social-icons">
          <a href={facebook} target="_blank">
            <span className="left-icon fa fa-facebook facebook"></span>
          </a>
          <a href={twitter} target="_blank">
            <span className="left-icon fa fa-twitter twitter"></span>
          </a>
        </div>
      </td>
    </tr>
  );
};

export default Team;
