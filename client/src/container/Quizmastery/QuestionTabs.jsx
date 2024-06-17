import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import OptionCard from "../../components/Cards/OptionCard";
import StatusTab from "./StatusTab";
import { useState, useEffect } from "react";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import ContainedButton from "../../components/Buttons/Contained_btn";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "axios";
import { QuizMastery_URL } from "../../api";

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

export default function QuestionTabs(props) {
  const [value, setValue] = useState(0);
  const { title, topic } = props;
  const [questions, setQuestions] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [questionStatus, setQuestionStatus] = useState(
    Array(questions.length).fill(null)
  );

  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );

  const [answersChecked, setAnswersChecked] = useState(
    Array(questions.length).fill(false)
  );

  const [correctAnswered, setCorrectAnswered] = useState(
    Array(questions.length).fill(null)
  );
  const [wrongAnswered, setWrongAnswered] = useState(
    Array(questions.length).fill(null)
  );

  const handleSelectOption = (questionIndex, option) => {
    if (!answersChecked[questionIndex]) {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[questionIndex] = option;
      setSelectedOptions(newSelectedOptions);
    } else {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[questionIndex] = null;
      setSelectedOptions(newSelectedOptions);
    }
  };

  const submitAnswer = (questionIndex) => {
    const newAnswersChecked = [...answersChecked];
    newAnswersChecked[questionIndex] = true;
    setAnswersChecked(newAnswersChecked);

    const selectedOption = selectedOptions[questionIndex];
    const correctOption = questions[questionIndex].correct;

    if (selectedOption === correctOption) {
      // Answer is correct
      const newCorrectAnswered = [...correctAnswered];
      newCorrectAnswered[questionIndex] = selectedOptions[questionIndex];
      setCorrectAnswered(newCorrectAnswered);

      const newQuestionStatus = [...questionStatus];
      newQuestionStatus[questionIndex] = true;
      setQuestionStatus(newQuestionStatus);
    } else {
      // Answer is wrong
      const newWrongAnswered = [...wrongAnswered];
      newWrongAnswered[questionIndex] = selectedOptions[questionIndex];
      setWrongAnswered(newWrongAnswered);

      const newQuestionStatus = [...questionStatus];
      newQuestionStatus[questionIndex] = false;
      setQuestionStatus(newQuestionStatus);
    }
  };

  const nextHandler = () => {
    setValue((prevValue) => Math.min(prevValue + 1, questions.length - 1));
  };

  const prevHandler = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 0));
  };

  const valueHandler = (key) => {
    setValue(key);
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        console.log(title, topic);
        const response = await axios.get(
          QuizMastery_URL.Practice(title, topic)
        );
        setQuestions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching tutorial:", error);
      }
    };

    fetchQuestions();
  }, [topic, title]);

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
            value={value} // Should be the index of the question
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {questions.map((item, index) => (
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
        {questions.map((item, index) => (
          <CustomTabPanel value={value} index={index} key={index}>
            <Box sx={{ ml: 7, mb: 1, mt: -1, width: "85%" }} fontSize="1.15em">
              {item.title}
            </Box>
            {item.options.map((itm) => (
              <OptionCard
                title={itm.title}
                opt={itm.opt}
                questionIndex={index}
                isAnswer={questions[index].correct}
                selectedOption={selectedOptions[index]}
                correctOption={correctAnswered[index]}
                wrongOption={wrongAnswered[index]}
                checkedAnswer={answersChecked[index]}
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
              <ContainedButton
                sx={{
                  width: "25%",
                  fontSize: "0.8em",
                  color: "black",
                }}
                onClick={() => submitAnswer(index)}
                disabled={answersChecked[index]}
              >
                Check Answer
              </ContainedButton>
              <OutlinedButton
                sx={{ width: "20%" }}
                onClick={nextHandler}
                disabled={value === questions.length - 1}
              >
                Next
                <ChevronRightIcon />
              </OutlinedButton>
            </Box>
          </CustomTabPanel>
        ))}
      </Box>
      <StatusTab
        questions={questions}
        status={questionStatus}
        clickHandler={valueHandler}
      />
    </Box>
  );
}
