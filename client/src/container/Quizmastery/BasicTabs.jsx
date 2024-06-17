import * as React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TestCard from "../../components/Cards/TestCard";
import { Test_cards } from "../../utils/contents/QuizContent";
import { Grid } from "@mui/material";
import PracticeCard from "../../components/Cards/PracticeCard";
import { Practice_cards } from "../../utils/contents/QuizContent";
import { QuizMastery_URL } from "../../api";
import axios from "axios";

const { items } = Test_cards;
const { items2 } = Practice_cards;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const { title, topic } = props;
  const [value, setValue] = useState(0);
  const [practiceTopics, setPracticeTopics] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchPracticeQuizes = async () => {
      try {
        console.log(title);
        const response = await axios.get(QuizMastery_URL.Practice_Topic(title));
        setPracticeTopics(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching quizes:", error);
      }
    };

    fetchPracticeQuizes();
  }, [title]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", fontSize: "xl" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              mx: "10px",
              fontSize: "1.1em",
              minWidth: 150,
            }}
            label="Practice Concepts"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              mx: "10px",
              fontSize: "1.1em",
              minWidth: 150,
            }}
            label="Mock Tests"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid>
          <Grid component="span" container spacing={6}>
            {practiceTopics.map((item) => (
              <Grid item xs={12} md={6} key={item.title}>
                <PracticeCard
                  key={item.key}
                  title={item.title}
                  image={item.image}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid container spacing={6}>
          {items.map((item) => (
            <Grid item xs={12} md={6} key={item.title}>
              <TestCard title={item.title} subtitle={item.subtitle} />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
    </Box>
  );
}
