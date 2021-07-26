import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../components/common/layout/Layout";

import {
  HOME,
  NEWS_LIST,
  NEWS_DETAIL,
  CONTACT,
  AUDIO_DETAIL,
  VIDEO_DETAIL,
  PHOTO_DETAIL,
  AUDIO_LIST,
  VIDEO_LIST,
  PHOTO_LIST,
  TEAM,
  SCHEDULE,
  LIVE,
  SEARCH,
  TAG,
  UNICODE,
  ABOUT,
  ERROR,
} from "../constants/routes";

import Home from "../pages/Home";
import ListPage from "../pages/newsList/ListPage";
import Error from "../pages/404/Error";
import ContactPage from "../pages/contactPage/ContactPage";
import DetailNews from "../pages/newsDetail/DetailNews";
import PhotoList from "../components/photoList/PhotoList";
import AVListing from "../pages/avList/AVListing";
import AVDetail from "../pages/avDetail/AVDetail";
import UnicodePage from "../pages/unicode/UnicodePage";
import TeamPage from "../pages/ourTeam/TeamPage";
import ScheduleList from "../pages/scheduleList/ScheduleList";
import LivePage from "../pages/livePage/LivePage";
import SearchPage from "../pages/searchPage/SearchPage";
import TagPage from "../pages/tagPage/TagPage";
import AboutPage from "../pages/aboutPage/AboutPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={HOME.INDEX} exact component={Home} />
          <Route path={NEWS_LIST.INDEX}>
            <ListPage />
          </Route>
          <Route path={NEWS_DETAIL.INDEX}>
            <DetailNews />
          </Route>
          <Route path={PHOTO_LIST.INDEX}>
            <PhotoList />
          </Route>
          <Route path={PHOTO_DETAIL.INDEX}>
            <DetailNews />
          </Route>
          <Route path={AUDIO_LIST.INDEX}>
            <AVListing />
          </Route>
          <Route path={AUDIO_DETAIL.INDEX}>
            <AVDetail />
          </Route>
          <Route path={VIDEO_LIST.INDEX}>
            <AVListing />
          </Route>
          <Route path={VIDEO_DETAIL.INDEX}>
            <AVDetail />
          </Route>
          <Route path={CONTACT.INDEX}>
            <ContactPage />
          </Route>
          <Route path={UNICODE.INDEX}>
            <UnicodePage />
          </Route>
          <Route path={TEAM.INDEX}>
            <TeamPage />
          </Route>
          <Route path={SCHEDULE.INDEX}>
            <ScheduleList />
          </Route>
          <Route path={LIVE.INDEX}>
            <LivePage />
          </Route>
          <Route path={SEARCH.INDEX}>
            <SearchPage />
          </Route>
          <Route path={TAG.INDEX}>
            <TagPage />
          </Route>
          <Route path={ABOUT.INDEX}>
            <AboutPage />
          </Route>
          <Route path={ERROR.INDEX}>
            <Error />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
