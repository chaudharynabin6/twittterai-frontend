import React from "react";

// components
import DunotChart from "../DunotChart/DunotChart";
import {
  NegativeTimeSeriesChart,
  PositiveTimeSeriesChart,
} from "../TimeSeriesChart";

// scss
import "./ChartGroup.scss";
// icon
import clock_outline from "./../../assets/icons/clock_outline.svg";

const ChartGroup = () => {
  return (
    <>
      <section className="chart-container">
        <div className="chart">
          {/* dunot */}
          <div className="chart__dunot">
            <div className="dunot-chart">
              <DunotChart></DunotChart>
            </div>
            <div className="chart__dunot__detail">
              <div className="chart__dunot__chart-type">
                <span className="chart__dunot__chart-title">Dunot Chart</span>
                <span className="chart__dunot__chart-description">
                  Postive and Negative Tweets Dunot Chart
                </span>
              </div>
              <div className="chart__dunot__detail-bottom-border"></div>
              <div className="chart__dunot__change">
                <img
                  src={clock_outline}
                  alt="history-icon"
                  className="chart__dunot__change-icon"
                />
                <span className="chart__dunot__change-text">
                  Dunot chart updated since 2 day ago
                </span>
              </div>
            </div>
          </div>
          {/* positive tweets */}
          <div className="chart__positive">
            <div className="positive-chart">
              <PositiveTimeSeriesChart />
            </div>
            <div className="chart__positive__detail">
              <div className="chart__positive__chart-type">
                <span className="chart__positive__chart-title">
                  Positive Tweet Chart
                </span>
                <span className="chart__positive__chart-description">
                  Time series positive Tweet
                </span>
              </div>
              <div className="chart__positive__detail-bottom-border"></div>
              <div className="chart__positive__change">
                <img
                  src={clock_outline}
                  alt="history-icon"
                  className="chart__positive__change-icon"
                />
                <span className="chart__positive__change-text">
                  Positive chart updated since 2 day ago
                </span>
              </div>
            </div>
          </div>
          <div className="chart__negative">
            <div className="negative-chart">
              <NegativeTimeSeriesChart />
            </div>
            <div className="chart__negative__detail">
              <div className="chart__negative__chart-type">
                <span className="chart__negative__chart-title">
                  Negative Tweet Chart
                </span>
                <span className="chart__negative__chart-description">
                  Time Series Negative Tweets
                </span>
              </div>
              <div className="chart__negative__detail-bottom-border"></div>
              <div className="chart__negative__change">
                <img
                  src={clock_outline}
                  alt="history-icon"
                  className="chart__negative__change-icon"
                />
                <span className="chart__negative__change-text">
                  Negative chart updated since 2 day ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChartGroup;
