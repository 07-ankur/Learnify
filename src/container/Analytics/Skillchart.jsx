import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { Analysis_Progress } from '../../utils/content';

const {TOPICS} = Analysis_Progress;

const Skillchart = () => {
  return (
    <BarChart
      width={1100}
      height={400}
      data={TOPICS}
      margin={{
        top: 30
      }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="title" tick={{ fill: "skyblue" }}/>
      <YAxis tick={{ fill: "skyblue" }}/>
      <Bar dataKey="points" fill="#66ffff" />
    </BarChart>
    );
}

export default Skillchart;