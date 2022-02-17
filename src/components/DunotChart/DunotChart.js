import React from "react";
import { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

// scss
import "./DunotChart.scss";

let $_secondary_text_color = "#536471";
let $_linear_red = "rgba(233, 31, 99, 1)";
let $_linear_green = "rgba(76, 175, 80, 1)";
let $_linear_white = "rgba(255, 255, 255, 1)";
let $_border_body = "1px solid #DEE2E8";
let $_linear_dark_black = "rgba(25, 25, 25, 1)";

const data = [
  { name: "Positive", value: 400 },
  { name: "Negative", value: 300 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      {/* start active sector */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={$_linear_red}
      />
      {/* end active sector */}
      {/* start outline active sector */}
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={$_linear_green}
      />
      {/* end outline end sector */}
      {/* start handle bar of the piechart */}
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={$_linear_red}
        fill="none"
      />
      {/* end hadle bar of the piechart */}
      {/* circle point of the piechart */}
      <circle cx={ex} cy={ey} r={2} fill={$_linear_green} stroke="none" />
      {/* circle point of hte piechart */}
      {/* start first text of handle bar */}
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill={$_linear_red}
      >{`Total ${value}`}</text>
      {/* end first text of handle bar */}
      {/* second text of the handle bar */}
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill={$_secondary_text_color}
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
      {/* second text of the handle bar */}
    </g>
  );
};

const DunotChart = () => {
  let [state, setState] = useState({
    activeIndex: 0,
  });

  let onPieEnter = (_, index) => {
    setState({
      activeIndex: index,
    });
  };
  return (
    <>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className={"dunot-chart-container"}
        // style={{ border: $_border_body }} # don't use border here
      >
        <PieChart style={{ width: "100%", height: "100%" }}>
          <Pie
            activeIndex={state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="35%"
            outerRadius="50%"
            fill={$_secondary_text_color}
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default DunotChart;
