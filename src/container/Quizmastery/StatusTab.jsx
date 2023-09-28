import React, { useEffect, useState } from "react";
import { Box, Divider, Typography, Grid } from "@mui/material";
import Ques_btn from "../../components/Buttons/Ques_btn";
import { Exam_cards } from "../../utils/content";
import ContainedButton from "../../components/Buttons/Contained_btn";

const { Questions } = Exam_cards;

const StatusTab = (props) => {
  const [notAnsweredCount, setNotAnsweredCount] = useState(0);
  const [correctlyAnsweredCount, setCorrectlyAnsweredCount] = useState(0);
  const [wrongAnsweredCount, setWrongAnsweredCount] = useState(0);

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
  }, [props.status]);

  return (
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
        <Typography sx={{ mx: 1, color: "#ff9999" }}>Wrong Answered</Typography>
      </Box>
      <Divider sx={{ my: 2, border: "2px solid #10D59B" }} />
      <Grid container alignItems="center">
        {Questions.map((item) => (
          <Grid sx={{ m: 1 }} item xs={12} md={2} key={item.key}>
            <Ques_btn
              clickHandler={() => props.clickHandler(item.key - 1)}
              bgcolor={
                props.status[item.key-1] === false
                  ? "#ff9999"
                  : props.status[item.key-1] === true
                  ? "#80ff80"
                  : "#6daef8"
              }
              border={
                props.status[item.key-1] === false
                  ? "#ff3333"
                  : props.status[item.key-1] === true
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
      <ContainedButton sx={{ color: "black" }}>End Practice</ContainedButton>
    </Box>
  );
};

export default StatusTab;
