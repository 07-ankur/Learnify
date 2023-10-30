import React, { useEffect, useState } from "react";
import { Box, Divider, Typography, Grid } from "@mui/material";
import Ques_btn from "../../components/Buttons/Ques_btn";
import { Exam_cards } from "../../utils/contents/QuizContent";
import ContainedButton from "../../components/Buttons/Contained_btn";
import TestModal from "../../components/Modals/TestModal";
import TimerIcon from "@mui/icons-material/Timer";

const { Questions } = Exam_cards;

const StatusTab_test = (props) => {
  const [notAnsweredCount, setNotAnsweredCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [correctlyAnsweredCount, setCorrectlyAnsweredCount] = useState(0);
  const [wrongAnsweredCount, setWrongAnsweredCount] = useState(0);
  const [isPracticeModalOpen, setIsPracticeModalOpen] = useState(false);

  // Timer state
  const totalTime = 600;  // minutes in seconds
  const [timer, setTimer] = useState(totalTime); 
  const [timeTaken, setTimeTaken] = useState(0); 

  const submitHandler = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to submit the test?"
    );

    if (isConfirmed) {
      setIsEvaluated(true);
      setIsPracticeModalOpen(true);
      props.onUpdateAnswersChecked(true);
      setTimeTaken(totalTime - timer);
    }
  };

  const handleClosePracticeModal = () => {
    setIsPracticeModalOpen(false);
  };

  useEffect(() => {
    // const notAnswered = props.select.filter((option) => option === null).length;
    const correctlyAnswered = props.status.filter(
      (answer) => answer === true
    ).length;
    const wrongAnswered = props.status.filter(
      (answer) => answer === false
    ).length;

    // setNotAnsweredCount(notAnswered);
    // setAnsweredCount(Questions.length - notAnswered)
    setCorrectlyAnsweredCount(correctlyAnswered);
    setWrongAnsweredCount(wrongAnswered);
  }, [props.status]);

  useEffect(() => {
    const notAnswered = props.select.filter((option) => option === null).length;
    setNotAnsweredCount(notAnswered);
    setAnsweredCount(Questions.length - notAnswered);
  }, [props.select]);

  // Update timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        // Timer has completed, automatically submit the test
        clearInterval(interval);
        setIsEvaluated(true);
        setIsPracticeModalOpen(true);
        props.onUpdateAnswersChecked(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval); // Clean up the interval on unmount
    };
  }, [timer]);

  return (
    <>
      {isEvaluated ? (
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
            <Typography sx={{ mx: 1, color: "#6daef8" }}>
              Not Answered
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
            {Questions.map((item) => (
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
            disabled
            sx={{ color: "black" }}
            onClick={submitHandler}
          >
            Submit Test
          </ContainedButton>
          {/* Timer */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <TimerIcon
              sx={{ mx: 0.5, mt: 1, color: "#6daef8", fontSize: "2rem" }}
            />
            <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
              Time Taken =
            </Typography>
            <Typography variant="h5" sx={{ color: "white", mt: 2, ml: 1 }}>
              {Math.floor(timeTaken / 60)} :{" "}
              {(timeTaken % 60).toString().padStart(2, "0")}
            </Typography>
          </Box>
        </Box>
      ) : (
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
            <Typography sx={{ mx: 1, color: "#6daef8" }}>
              Not Answered
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
              bgcolor="#10D59B"
              border="#00b300"
              color="black"
              title={answeredCount}
            />
            <Typography sx={{ mx: 1, color: "#10D59B" }}>Answered</Typography>
          </Box>
          <Divider sx={{ my: 2, border: "2px solid #10D59B" }} />
          <Grid container alignItems="center">
            {Questions.map((item) => (
              <Grid sx={{ m: 1 }} item xs={12} md={2} key={item.key}>
                <Ques_btn
                  clickHandler={() => props.clickHandler(item.key - 1)}
                  bgcolor={
                    props.select[item.key - 1] === null ? "#6daef8" : "#10D59B"
                  }
                  border={
                    props.select[item.key - 1] === null ? "#2f8af5" : "#00b300"
                  }
                  color="black"
                  title={item.key}
                />
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 2, border: "2px solid #10D59B" }} />
          <ContainedButton sx={{ color: "black" }} onClick={submitHandler}>
            Submit Test
          </ContainedButton>
          {/* Timer */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <TimerIcon
              sx={{ mx: 0.5, mt: 1, color: "#6daef8", fontSize: "2rem" }}
            />
            <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
              Time Left =
            </Typography>
            <Typography variant="h5" sx={{ color: "white", mt: 2, ml: 1 }}>
              {Math.floor(timer / 60)} :{" "}
              {(timer % 60).toString().padStart(2, "0")}
            </Typography>
          </Box>
        </Box>
      )}

      {isPracticeModalOpen && (
        <TestModal
          totalQuestions={Questions.length}
          questionsAnswered={Questions.length - notAnsweredCount}
          correctlyAnsweredCount={correctlyAnsweredCount}
          wrongAnsweredCount={wrongAnsweredCount}
          open={true}
          onClose={handleClosePracticeModal}
        />
      )}
    </>
  );
};

export default StatusTab_test;
