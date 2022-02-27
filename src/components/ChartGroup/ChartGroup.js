import React from "react";

// components
import DunotChart from "../DunotChart/DunotChart";
import TimeSeriesChart from "../TimeSeriesChart/TimeSeriesChart";

// scss
import "./ChartGroup.scss";
// icon
import clock_outline from "./../../assets/icons/clock_outline.svg";

const ChartGroup = (props) => {
  const { total_summary } = props;
  return (
    <>
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
                Postive and Negative Tweets
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
            <TimeSeriesChart></TimeSeriesChart>
          </div>
          <div className="chart__positive__detail">
            <div className="chart__positive__chart-type">
              <span className="chart__positive__chart-title">
                Positive and Negative Chart
              </span>
              <span className="chart__positive__chart-description">
                Time series chart of positive and negative chart
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
                positive chart updated since 2 day ago
              </span>
            </div>
          </div>
        </div>
        {/* <div className="chart__negative">
          <div className="negative-chart">
            <TimeSeriesChart></TimeSeriesChart>
          </div>
          <div className="chart__negative__detail">
            <div className="chart__negative__chart-type">
              <span className="chart__negative__chart-title">
                negative Chart
              </span>
              <span className="chart__negative__chart-description">
                Postive and Negative Tweets
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
                negative chart updated since 2 day ago
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ChartGroup;
