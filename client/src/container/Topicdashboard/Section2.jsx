import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import { useLocation } from "react-router-dom";
import { Analysis_Progress } from "../../utils/contents/AnalyticsContent";

const { TOPICS } = Analysis_Progress;

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const Section2 = () => {
  const location = useLocation();

  let id;

  for (let i = 0; i < TOPICS.length; i++) {
    if (
      location.pathname ===
      `/analytics_dashboard/${TOPICS[i].title.replace(/ /g, "_")}`
    ) {
      id = TOPICS[i].key - 1;
      break; // Exit the loop once a match is found
    }
  }

  const data = [
    { name: "Tutorials Points", value: TOPICS[id].tutorials_pts },
    { name: "Quiz Points", value: TOPICS[id].quiz_pts },
    { name: "Practice Points", value: TOPICS[id].practice_pts },
  ];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {data[index].value === 0 ? " " : `${data[index].value} pts`}
      </text>
    );
  };

  return (
    <Box>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: "skyblue" }}>
          {" "}
          Points Breakup
        </Typography>
        <Divider sx={{ width: "75%", mt: 1 }} variant="middle" />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  border: "2px solid #0088FE",
                  borderRadius: "100%",
                  width: "1.5em",
                  height: "1.5em",
                  backgroundColor: "#0088FE",
                }}
              />
              <Typography variant="h4" sx={{ m: 3 }}>
                Tutorials Points
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  border: "2px solid #00C49F",
                  borderRadius: "100%",
                  width: "1.5em",
                  height: "1.5em",
                  backgroundColor: "#00C49F",
                }}
              />
              <Typography variant="h4" sx={{ m: 3 }}>
                Quiz Points
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  border: "2px solid #FFBB28",
                  borderRadius: "100%",
                  width: "1.5em",
                  height: "1.5em",
                  backgroundColor: "#FFBB28",
                }}
              />
              <Typography variant="h4" sx={{ m: 3 }}>
                Practice Points
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ m: 2 }}>
        <Typography variant="h3" sx={{ color: "skyblue" }}>
          To Analyse your Performance in Practice and quizes
        </Typography>
        <OutlinedButton
          arrow
          sx={{ m: 3, color: "cyan", width: "12em", fontSize: "1.2em" }}
          fit
        >
          Go to QuizMastery
        </OutlinedButton>
      </Box>
    </Box>
  );
};

export default Section2;
