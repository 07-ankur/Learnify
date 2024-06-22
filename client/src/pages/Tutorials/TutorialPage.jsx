import { CssBaseline, Typography, Divider } from "@mui/material";
import { Box, ThemeProvider } from "@mui/system";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { tutorialTheme } from "../../utils/theme";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import ContainedButton from "../../components/Buttons/Contained_btn";
import Listing from "../../container/Tutorials/TopicList";
import Tutorials_Content from "../../container/Tutorials/Content/TutorialsContent";
import useTutorialContent from "../../hooks/useTutorialContent";

const TutorialPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathParts = location.pathname.split("/");
  let title = pathParts[2];
  let topic = pathParts[3] ?? "Home";
  let title_alt = title.replace("_", " ");
  let topic_alt = topic.replace("_", " ");

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
    <ThemeProvider theme={tutorialTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: "20%",
            height: "100vh",
            backgroundColor: "#192734",
            py: 1.5,
            overflowY: "auto",
          }}
        >
          <OutlinedButton
            arrowRev
            sx={{ mt: 1, mb: 2, mx: 2 }}
            fit
            onClick={() => {
              navigate(`/tutorials`);
            }}
          >
            Back to Home
          </OutlinedButton>
          <Divider sx={{ border: "1px solid white", mb: 1 }} />
          <Typography variant="h4" sx={{ m: 2, color: "#FFF4A3" }}>
            {title_alt} Tutorial
          </Typography>
          <Divider sx={{ border: "1px solid white" }} />
          <Listing title={title} topic={topic} />
        </Box>
        <Box
          sx={{ width: "80%", maxHeight: "100vh", overflowY: "auto", px: 2 }}
        >
          <Typography variant="h2" sx={{ mx: 5, my: 3, color: "#FFF4A3" }}>
            {title_alt}{' --> '}{topic_alt}
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "85%",
              alignItems: "center",
              justifyContent: "space-between",
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
          <Tutorials_Content title={title} topic={topic} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default TutorialPage;
