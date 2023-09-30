import React from "react";
import { Box } from "@mui/material";

const OptionCard_test = (props) => {
  const {
    title,          // Option Title
    opt,            // Option Number 
    questionIndex,  // Question Index
    selectedOption, // Option selected by user
    isAnswer,       // Correct Option for the question
    onSelectOption, 
    correctOption,  
    wrongOption,
    checkedAnswer,  // is Answer Checked
  } = props;

  const isAnswerChecked = checkedAnswer;

  let isCorrectOption = false;

  if (isAnswerChecked) {
    isCorrectOption = opt === isAnswer;
  }

  const isOptionSelected = opt === selectedOption; // The Option is selected or not
  const isOptionCorrect = isAnswerChecked && opt === correctOption; // The Option is correct or not
  const isOptionWrong = isAnswerChecked && opt === wrongOption; // The Option is wrong or not
 
  const handleClick = () => {
    if (isOptionCorrect) {
      onSelectOption(questionIndex, null);
    }
    if (isOptionWrong) {
      onSelectOption(questionIndex, null);
    } else if (isOptionSelected) {
      // If the clicked option is already selected, deselect it
      onSelectOption(questionIndex, null);
    } else {
      // Otherwise, select the clicked option
      onSelectOption(questionIndex, opt);
    }
  };
  return (
    <Box
      sx={{
        ml: 10,
        mt: 1.5,
        cursor: "pointer",
        border: isCorrectOption
          ? "3px solid #00b300"
          : isOptionCorrect
          ? "3px solid #00b300"
          : isOptionWrong
          ? "3px solid #ff3333"
          : isOptionSelected
          ? "3px solid #2f8af5"
          : "2px solid grey",
        borderRadius: "25px",
        p: 1.6,
        width: "70%",
        fontSize: "1em",
        backgroundColor: isCorrectOption
          ? "#80ff80"
          : isOptionCorrect
          ? "#80ff80"
          : isOptionWrong
          ? "#ff9999"
          : isOptionSelected
          ? "#6daef8"
          : "transparent",
        color:
          isCorrectOption ||
          isOptionSelected ||
          isOptionCorrect ||
          isOptionCorrect
            ? "black"
            : "inherit",
        "&:hover": {
          border: isCorrectOption
            ? "3px solid #00b300"
            : isOptionCorrect
            ? "3px solid #00b300"
            : isOptionWrong
            ? "3px solid #ff3333"
            : isOptionSelected
            ? "3px solid #2f8af5"
            : "3px solid white",
          backgroundColor: isCorrectOption
            ? "#80ff80"
            : isOptionCorrect
            ? "#80ff80"
            : isOptionWrong
            ? "#ff9999"
            : isOptionSelected
            ? "#6daef8"
            : "#6daef8",
          color: "black",
        },
      }}
      onClick={handleClick}
    >
      {title}
    </Box>
  );
};

export default OptionCard_test;
