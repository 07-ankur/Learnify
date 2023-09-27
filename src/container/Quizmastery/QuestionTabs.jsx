import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Exam_cards } from "../../utils/content";
import OptionCard from "../../components/Cards/OptionCard";
import StatusCard from "../../components/Cards/StatusCard";
import { useState, useEffect, useRef } from "react";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import ContainedButton from "../../components/Buttons/Contained_btn";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const { Questions } = Exam_cards;

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

export default function QuestionTabs() {
  const [value, setValue] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timers, setTimers] = useState([]); // Array to store timers
  const [timeElapsed, setTimeElapsed] = useState(Array(Questions.length).fill(0)); // Array to store time elapsed for each tab
  const activeTabRef = useRef(0); // Ref to keep track of the active tab index

  const handleChange = (event, newValue) => {
    // Stop the previous timer when switching tabs
    if (timers[activeTabRef.current]) {
      clearInterval(timers[activeTabRef.current]);
    }

    // Start a new timer for the current tab
    activeTabRef.current = newValue;
    const newTimers = [...timers];
    newTimers[newValue] = setInterval(() => {
      setTimeElapsed((prevTimeElapsed) => {
        const newTimeElapsed = [...prevTimeElapsed];
        newTimeElapsed[newValue]++;
        return newTimeElapsed;
      });
    }, 1000);
    setTimers(newTimers);

    // Update the active tab
    setValue(newValue);
  };

  const [correctAnswer, setCorrectAnswer] = useState(0);

  const nextHandler = () => { 
    setValue((prevValue) => Math.min(prevValue + 1, Questions.length - 1));
  };

  const prevHandler = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 0));
  };

  const submitHandler = () => {
    // Stop the timer for the current tab
    if (timers[activeTabRef.current]) {
      clearInterval(timers[activeTabRef.current]);
    }

    // Handle submission logic here

    // Example: Increment the correctAnswer count
    if (selectedAnswer) {
      setCorrectAnswer((prevCorrectAnswer) => prevCorrectAnswer + 1);
    }
  };
  
    useEffect(() => {
      // Start the timer for the initial tab when the component mounts
      if (timers[0] === null) {
        const newTimers = [...timers];
        newTimers[0] = setInterval(() => {
          setTimeElapsed((prevTimeElapsed) => {
            const newTimeElapsed = [...prevTimeElapsed];
            newTimeElapsed[0]++;
            return newTimeElapsed;
          });
        }, 1000);
        setTimers(newTimers);
      }
  
      return () => {
        // Cleanup: Stop all timers when unmounting the component
        timers.forEach((timer) => {
          if (timer) {
            clearInterval(timer);
          }
        });
      };
    }, []);
  

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ width: "75%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            fontSize: "xl",
            maxWidth: { xs: 520, sm: 950 },
          }}
        >
          <Tabs
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {Questions.map((item, index) => (
              <Tab
                key={index}
                sx={{
                  mx: "5px",
                  fontSize: "1em",
                  minWidth: 90,
                }}
                label={item.key}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </Box>
        {Questions.map((item, index) => (
          <CustomTabPanel value={value} index={index} key={index}>
            <Box sx={{ ml: 7, mb: 1, mt: -1, width: "85%" }} fontSize="1.15em">
              {item.title}
            </Box>
            {item.options.map((itm) => (
              <OptionCard
                title={itm.title}
                onClick={() => setSelectedAnswer(itm.opt)}
                key={itm.opt}
              />
            ))}
            <Box sx={{display:'flex',mt:2, justifyContent:'center'}}>Time Elapsed: {timeElapsed[index]} seconds</Box>
          </CustomTabPanel>
        ))}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 4,
          }}
        >
          <OutlinedButton
            sx={{ width: "20%" }}
            onClick={prevHandler}
            disabled={value === 0}
          >
            <ChevronLeftIcon />
            Prev
          </OutlinedButton>
          <ContainedButton
            sx={{
              width: "25%",
              fontSize: "0.8em",
              color: "black",
              "&:hover": { color: "white" },
            }}
            onClick={submitHandler}
          >
            Submit
          </ContainedButton>
          <OutlinedButton
            sx={{ width: "20%" }}
            onClick={nextHandler}
            disabled={value === Questions.length - 1}
          >
            Next
            <ChevronRightIcon />
          </OutlinedButton>
        </Box>
      </Box>
      <StatusCard />
    </Box>
  );
}
