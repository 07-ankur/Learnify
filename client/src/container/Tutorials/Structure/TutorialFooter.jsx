import React from "react";
import { useLocation } from "react-router-dom";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import OutlinedButton from "../../../components/Buttons/OutlinedButton";
import ContainedButton from "../../../components/Buttons/Contained_btn";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import useTutorialContent from "../../../hooks/useTutorialContent";

const TutorialFooter = (props) => {
  const location = useLocation();

  const pathParts = location.pathname.split("/");
  let title = pathParts[2];
  let topic = pathParts[3] ?? "Home";
  const { tutorialTopics } = useTutorialContent(title, topic);

  const currentTopicIndex = tutorialTopics.indexOf(topic);

  const handlePrevClick = () => {
    if (currentTopicIndex > 0) {
      navigate(`/tutorials/${title}/${tutorialTopics[currentTopicIndex - 1]}`);
    }
  };

  const handleNextClick = () => {
    if (currentTopicIndex < tutorialTopics.length - 1) {
      navigate(`/tutorials/${title}/${tutorialTopics[currentTopicIndex + 1]}`);
    }
  };

  return (
    <>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          width: "85%",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        {props.completion ? (
          <ChecklistIcon sx={{ color: "#37fb68", mx: 1 }} />
        ) : (
          <AlignHorizontalLeftIcon sx={{ color: "yellow", mx: 1 }} />
        )}
        <Typography
          variant="h5"
          sx={{ color: props.completion ? "#37fb68" : "#FFF4A3" }}
        >
          {props.completion ? "Completed" : "Not Completed"}
        </Typography>
        {props.completion ? (
          <ChecklistRtlIcon sx={{ color: "#37fb68", mx: 1 }} />
        ) : (
          <AlignHorizontalRightIcon sx={{ color: "yellow", mx: 1 }} />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "85%",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <ContainedButton
          arrowRev
          sx={{ mb: 2, mx: 2, color: "black" }}
          fit
          onClick={handlePrevClick}
          disabled={currentTopicIndex === 0}
        >
          Prev
        </ContainedButton>
        <OutlinedButton
          sx={{ width: "30%", color: props.completion ? "yellow" : "#37fb68" }}
          onClick={props.toggleCompletion}
        >
          {props.message}
        </OutlinedButton>
        <ContainedButton
          arrow
          sx={{ mb: 2, mx: 2, color: "black" }}
          fit
          onClick={handleNextClick}
          disabled={currentTopicIndex === tutorialTopics.length - 1}
        >
          Next
        </ContainedButton>
      </Box>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default TutorialFooter;
