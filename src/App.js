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
// images
import elon_musk from "./assets/images/elon_musk.jpg";
import jeff_bezos from "./assets/images/jeff_bezos.jpg";

// pages
import SearchPage from "./pages/SearchPage/SearchPage";

// components
import TopBar from "./components/TopBar/TopBar";
import TweetStatus from "./components/TweetStatus/TweetStatus";
import ChartGroup from "./components/ChartGroup/ChartGroup";
import DunotChart from "./components/DunotChart/DunotChart";
import TimeSeriesChart from "./components/TimeSeriesChart/TimeSeriesChart";
import AnalysedTweets from "./components/AnalysedTweets/AnalysedTweets";

function App() {
  return (
    <div className="App">
      <SearchPage></SearchPage>
    </div>
  );
}

export default App;
