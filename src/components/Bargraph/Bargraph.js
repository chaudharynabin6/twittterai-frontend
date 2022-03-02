import React, { useEffect, useState } from "react";
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
import axios from "axios";
import BargraphTooltip from "./BargraphTooltip";
// scss
import "./Bargraph.scss";

const DOMAIN = process.env.REACT_APP_DOMAIN;
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

function CustomTooltip(props) {
  const { active, payload, label } = props;
  if (active) {
    if (payload === null) {
      return null;
    }
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
  const [allUserSummary, setAllUserSummary] = useState([]);
  useEffect(() => {
    const fetchAllUserSummary = async () => {
      try {
        const url = `http://${DOMAIN}/tweet-manager/all-user-summary`;
        const response = await axios.get(url);

        const data = response.data;
        setAllUserSummary((prev) => {
          return data;
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: Bargraph.js ~ line 76 ~ fetchAllUserSummary ~ error",
          error
        );
      }
    };
    fetchAllUserSummary();
  }, []);
  return (
    <div className="bargraph">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart
          width={730}
          height={250}
          data={allUserSummary}
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
