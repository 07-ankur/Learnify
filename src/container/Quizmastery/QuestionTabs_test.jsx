import * as React from "react";
// import { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { React_practice_qn } from "../../utils/contents/QuizContent";
import OptionCard_test from "../../components/Cards/OptionCard_test";
import StatusTab_test from "./StatusTab_test";
import { useState } from "react";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
// import ContainedButton from "../../components/Buttons/Contained_btn";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const { ITEMS } = React_practice_qn;

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

export default function QuestionTabs_test() {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const [questionStatus, setQuestionStatus] = useState(
    Array(ITEMS[0].Questions.length).fill(null)
  );

  const [selectedOptions, setSelectedOptions] = useState(
    Array(ITEMS[0].Questions.length).fill(null)
  );
  
  const [answersChecked, setAnswersChecked] = useState(false);
  
  const [correctAnswered, setCorrectAnswered] = useState(
    Array(ITEMS[0].Questions.length).fill(null)
  );

  const [wrongAnswered, setWrongAnswered] = useState(
    Array(ITEMS[0].Questions.length).fill(null)
  );

  const updateAnswersChecked = (newAnswersChecked) => {
    setAnswersChecked(newAnswersChecked);
  
    const newCorrectAnswered = Array(ITEMS[0].Questions.length).fill(null);
    const newWrongAnswered = Array(ITEMS[0].Questions.length).fill(null);
    const newQuestionStatus = Array(ITEMS[0].Questions.length).fill(null);
  
    for (let i = 0; i < ITEMS[0].Questions.length; i++) {
      const selectedOption = selectedOptions[i];
      const correctAnswer = ITEMS[0].Questions[i].correct;
  
      if (selectedOption!= null && selectedOption === correctAnswer) {
        // Answer is correct
        newCorrectAnswered[i] = selectedOption;
        newQuestionStatus[i] = true;
      } else if(selectedOption!= null && selectedOption != correctAnswer){
        // Answer is wrong
        newWrongAnswered[i] = selectedOption;
        newQuestionStatus[i] = false;
      }
    }
  
    setCorrectAnswered(newCorrectAnswered);
    setWrongAnswered(newWrongAnswered);
    setQuestionStatus(newQuestionStatus);
  };  

  const handleSelectOption = (questionIndex, option) => {
    if (!answersChecked) {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[questionIndex] = option;
      setSelectedOptions(newSelectedOptions);
    } else {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[questionIndex] = null;
      setSelectedOptions(newSelectedOptions);
    }
  };  
  
  const nextHandler = () => {
    setValue((prevValue) => Math.min(prevValue + 1, ITEMS[0].Questions.length - 1));
  };

  const prevHandler = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 0));
  };

  const valueHandler = (key) => {
    setValue(key);
  };

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
            {ITEMS[0].Questions.map((item, index) => (
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
        {ITEMS[0].Questions.map((item, index) => (
          <CustomTabPanel value={value} index={index} key={index}>
            <Box sx={{ ml: 7, mb: 1, mt: -1, width: "85%" }} fontSize="1.15em">
              {item.title}
            </Box>
            {item.options.map((itm) => (
              <OptionCard_test
                title={itm.title}
                opt={itm.opt}
                questionIndex={index}
                isAnswer={ITEMS[0].Questions[index].correct}
                selectedOption={selectedOptions[index]}
                correctOption={correctAnswered[index]}
                wrongOption={wrongAnswered[index]}
                checkedAnswer={answersChecked}
                onSelectOption={handleSelectOption}
                key={itm.title}
              />
            ))}
            <Box
              sx={{
                width: "75%",
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
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
              {/* <ContainedButton
                sx={{
                  width: "25%",
                  fontSize: "0.8em",
                  color: "black",
                }}
                onClick={() => submitAnswer(index)}
                disabled={answersChecked[index]}
              >
                Check Answer
              </ContainedButton> */}
              <OutlinedButton
                sx={{ width: "20%" }}
                onClick={nextHandler}
                disabled={value === ITEMS[0].Questions.length - 1}
              >
                Next
                <ChevronRightIcon />
              </OutlinedButton>
            </Box>
          </CustomTabPanel>
        ))}
      </Box>
      <StatusTab_test
        answersChecked={answersChecked}
        onUpdateAnswersChecked={updateAnswersChecked}
        select={selectedOptions}
        status={questionStatus}
        clickHandler={valueHandler}
      />
    </Box>
  );
}
