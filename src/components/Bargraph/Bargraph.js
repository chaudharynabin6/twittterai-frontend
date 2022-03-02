import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import BargraphTooltip from "./BargraphTooltip";
// scss
import "./Bargraph.scss";
const data = [
  {
    name: "Elon musk",
    positive: 20,
    negative: 80,
  },
  {
    name: "Jeff Bejos",
    positive: 30,
    negative: 70,
  },
  {
    name: "Twitter",
    positive: 40,
    negative: 60,
  },
];

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="bargraph__tooltip">
        <BargraphTooltip
          data={[
            {
              name: "Positive",
              value: payload[0].value,
            },
            {
              name: "Negative",
              value: payload[1].value,
            },
          ]}
        ></BargraphTooltip>
      </div>
    );
  }
  return null;
}
const Bargraph = () => {
  return (
    <div className="bargraph">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart
          width={730}
          height={250}
          data={data}
          barGap="10%"
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 " vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="positive" fill="rgba(76, 175, 80, 1)" />
          <Bar dataKey="negative" fill="rgba(233, 31, 99, 1)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Bargraph;
