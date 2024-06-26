import React, { useEffect, useState } from "react";
import { Box, Divider, Typography, Grid } from "@mui/material";
import Ques_btn from "../../components/Buttons/Ques_btn";
import ContainedButton from "../../components/Buttons/Contained_btn";
import PracticeModal from "../../components/Modals/PracticeModal";

const StatusTab = (props) => {
  const [notAnsweredCount, setNotAnsweredCount] = useState(0);
  const [correctlyAnsweredCount, setCorrectlyAnsweredCount] = useState(0);
  const [wrongAnsweredCount, setWrongAnsweredCount] = useState(0);
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [isPracticeModalOpen, setIsPracticeModalOpen] = useState(false);

  const submitHandler = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to end practice?"
    );
    if (isConfirmed) {
      setIsEvaluated(true);
      setIsPracticeModalOpen(true);
    }
  };

  const handleClosePracticeModal = () => {
    setIsPracticeModalOpen(false);
  };

  useEffect(() => {
    const notAnswered = props.status.filter((option) => option === null).length;
    const correctlyAnswered = props.status.filter(
      (answer) => answer === true
    ).length;
    const wrongAnswered = props.status.filter(
      (answer) => answer === false
    ).length;

    setNotAnsweredCount(notAnswered);
    setCorrectlyAnsweredCount(correctlyAnswered);
    setWrongAnsweredCount(wrongAnswered);
    console.log(props.status)
  }, [props.status]);

  return (
    <>
      <Box
        sx={{
          height: "90vh",
          width: "26%",
          backgroundColor: "#15202B",
          m: -1,
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mb: 1,
            alignItems: "center",
          }}
        >
          <Ques_btn
            bgcolor="#6daef8"
            border="#2f8af5"
            color="black"
            title={notAnsweredCount}
          />
          <Typography sx={{ mx: 1, color: "#6daef8" }}>Not Answered</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mb: 1,
            alignItems: "center",
          }}
        >
          <Ques_btn
            bgcolor="#80ff80"
            border="#00b300"
            color="black"
            title={correctlyAnsweredCount}
          />
          <Typography sx={{ mx: 1, color: "#80ff80" }}>
            Correct Answered
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mb: 1,
            alignItems: "center",
          }}
        >
          <Ques_btn
            bgcolor="#ff9999"
            border="#ff3333"
            color="black"
            title={wrongAnsweredCount}
          />
          <Typography sx={{ mx: 1, color: "#ff9999" }}>
            Wrong Answered
          </Typography>
        </Box>
        <Divider sx={{ my: 2, border: "2px solid #10D59B" }} />
        <Grid container alignItems="center">
          {props.questions.map((item) => (
            <Grid sx={{ m: 1 }} item xs={12} md={2} key={item.key}>
              <Ques_btn
                clickHandler={() => props.clickHandler(item.key - 1)}
                bgcolor={
                  props.status[item.key - 1] === false
                    ? "#ff9999"
                    : props.status[item.key - 1] === true
                    ? "#80ff80"
                    : "#6daef8"
                }
                border={
                  props.status[item.key - 1] === false
                    ? "#ff3333"
                    : props.status[item.key - 1] === true
                    ? "#00b300"
                    : "#2f8af5"
                }
                color="black"
                title={item.key}
              />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 2, border: "2px solid #10D59B" }} />
        <ContainedButton
          disabled={isEvaluated}
          sx={{ color: "black" }}
          onClick={submitHandler}
        >
          End Practice
        </ContainedButton>
      </Box>
      {isPracticeModalOpen && (
        <PracticeModal
          totalQuestions={props.questions.length}
          questionsAnswered={props.questions.length - notAnsweredCount}
          correctlyAnsweredCount={correctlyAnsweredCount}
          wrongAnsweredCount={wrongAnsweredCount}
          open={true}
          onClose={handleClosePracticeModal}
        />
      )}
    </>
  );
};

export default StatusTab;
