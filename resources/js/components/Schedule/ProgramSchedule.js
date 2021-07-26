import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../api/useFetch";

const ProgramSchedule = () => {
  const { id } = useParams();
  const { data: item } = useFetch(
    "http://radio3.softnep.com/api/api-getScheduleData"
  );
  const { data: itemList } = useFetch(
    `http://radio3.softnep.com/api/api-getProgramBySchedule/${id}`
  );
  return (
    <>
      <div className="special-box schedules">
        <ul className="nav nav-tabs pro-tab" id="myTab" role="tablist">
          {item?.map((a) => (
            <ProgramDay key={a.id} {...a} />
          ))}
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="sunday"
            role="tabpanel"
            aria-labelledby="sunday-tab"
          >
            <div className="row">
              {itemList?.map((a) => (
                <ProgramList key={a.id} {...a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProgramDay = ({ id, name }) => {
  return (
    <li className="nav-item">
      <Link
        className="nav-link"
        to={`/scheduleList/${id}`}
        id={id}
        data-toggle="tab"
        role="tab"
        aria-controls="hosundayme"
        aria-selected="true"
      >
        {name}
      </Link>
    </li>
  );
};

const ProgramList = ({ id, title, start_time, end_time }) => {
  return (
    <div className="item-news col-sm-6 col-md-4 wow fadeInUp" data-wow-delay="0.5s">
      <div className="boundarys">
        {/* <span className="time-box">
          <span className="on-air">On Air</span>
        </span> */}

        <Link to={`/newsDetail/${id}`} title={title}>
          <span className="media pro-box">
            <span className="media-body">
              <span className="main-title">{title}</span>
              <span className="time-box">
                <span className="start-time">
                  {start_time} - {end_time}
                </span>
              </span>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProgramSchedule;
