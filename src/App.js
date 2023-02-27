import React from "react";
import { useState } from "react";
import "./App.scss";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
// routers
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { format, parseISO, subDays } from "date-fns";
// icons
import arrow_back from "./assets/icons/arrow_back.svg";
import search from "./assets/icons/search.svg";
import cancel from "./assets/icons/cancel.svg";
import more_horiz from "./assets/icons/more_horiz.svg";

import home_breadcrumbs from "./assets/icons/home_breadcrumbs.svg";
import notification from "./assets/icons/notification.svg";

import positive from "./assets/icons/positive.svg";

import clock_outline from "./assets/icons/clock_outline.svg";
// external icons

// images
import elon_musk from "./assets/images/elon_musk.jpg";
import jeff_bezos from "./assets/images/jeff_bezos.jpg";

// pages
import SearchPage from "./pages/SearchPage";
// components
import TopBar from "./components/TopBar/TopBar";
import TweetStatus from "./components/TweetStatus/TweetStatus";
import ChartGroup from "./components/ChartGroup/ChartGroup";
import DunotChart from "./components/DunotChart/DunotChart";
import TimeSeriesChart from "./components/TimeSeriesChart/TimeSeriesChart";
import AnalysedTweets from "./components/AnalysedTweets/AnalysedTweets";
import DashboardPage from "./pages/DashboardPage";
import Navbar from "./components/Navbar/Navbar";
import Bargraph from "./components/Bargraph/Bargraph";
import TweetSearchPage from "./pages/TweetSearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <div className="app-container">
          <div className="navigation">
            <Navbar />
          </div>
          <Switch>
            <Route path="/analytics/:user">
              <div className="main">
                <DashboardPage />
              </div>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/search">
              <div className="main">
                <SearchPage />
              </div>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/bargraph">
              <div className="main">
                <Bargraph />
              </div>
            </Route>
          </Switch>
           <Switch>
            <Route exact path="/tweet">
              <div className="main">
                <TweetSearchPage />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
