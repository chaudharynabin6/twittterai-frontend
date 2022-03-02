import React from "react";

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

// scss
import "./TimeSeriesChart.scss";
import { useDashboardPageContext } from "../../pages/DashboardPage/Dashboard.context";

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
        <p>Positive {payload[0].value.toFixed(2)} tweets</p>
        {/* <p>Negative {payload[1].value.toFixed(2)} tweets</p> */}
      </div>
    );
  }
  return null;
}

const PositiveTimeSeriesChart = () => {
  let { time_series_summary } = useDashboardPageContext();

  time_series_summary.sort((a, b) => {
    return a.position - b.position;
  });

  time_series_summary = time_series_summary.map((item) => {
    const { date, positive, negative } = item;
    return {
      date,
      positive,
      //   negative,
    };
  });

  return (
    <>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="chart-positive-negative-container"
      >
        {time_series_summary.length === 0 ? (
          <AreaChart data={[]}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            {/* <Area dataKey="positive" stroke="#2451B7" fill="url(#color)" /> */}
            {/* <Area dataKey="negative" stroke="#24ffB7" fill="url(#color)" /> */}

            {/* <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickFormatter={(str) => {
                const date = parseISO(str);
                if (date.getDate() % 7 === 0) {
                  return format(date, "MMM, d");
                }
                return "";
              }}
            /> */}

            {/* <YAxis
            datakey="positive"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            // tickFormatter={(number) => `${number.toFixed(2)}`}
            tickFormatter={(number) => ``}
          /> */}

            {/* <Tooltip content={<CustomTooltip />} /> */}

            <CartesianGrid opacity={0.1} vertical={false} />
          </AreaChart>
        ) : (
          <AreaChart data={time_series_summary}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <Area dataKey="positive" stroke="#2451B7" fill="url(#color)" />
            {/* <Area dataKey="negative" stroke="#24ffB7" fill="url(#color)" /> */}

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickFormatter={(str) => {
                const date = parseISO(str);
                if (date.getDate() % 7 === 0) {
                  return format(date, "MMM, d");
                }
                return "";
              }}
            />

            {/* <YAxis
            datakey="positive"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            // tickFormatter={(number) => `${number.toFixed(2)}`}
            tickFormatter={(number) => ``}
          /> */}

            <Tooltip content={<CustomTooltip />} />

            <CartesianGrid opacity={0.1} vertical={false} />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </>
  );
};

export default PositiveTimeSeriesChart;
