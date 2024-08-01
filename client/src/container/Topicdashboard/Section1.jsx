import React from "react";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import Lottie from "lottie-react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { Analysis_Progress } from "../../utils/contents/AnalyticsContent";

const { TOPICS } = Analysis_Progress;

const Section1 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/analytics_dashboard');
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "white",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "yellow",
    },
  }));

  const location = useLocation();

  const pathParts = location.pathname.split('/');
  const topic = pathParts[2];

  let id;

  for (let i = 0; i < TOPICS.length; i++) {
    if (
      location.pathname ===
      `/analytics_dashboard/${TOPICS[i].title.replace(/ /g, "_")}`
    ) {
      id = TOPICS[i].key - 1;
      break; // Exit the loop once a match is found
    }
  }

  let skill;

  if (TOPICS[id].points <= 40) {
    skill = "Beginner";
  } else if (TOPICS[id].points <= 70) {
    skill = "Intermediate";
  } else if (TOPICS[id].points <= 90) {
    skill = "Expert";
  } else if (TOPICS[id].points <= 100) {
    skill = "Master";
  }

  return (
    <Box>
      <OutlinedButton arrowRev onClick={handleGoBack} sx={{ mt: 3, mx: 3 }} fit>
        Back to Dashboard
      </OutlinedButton>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Container
          sx={{
            width: "45em",
            borderRadius: "25px",
            height: "21em",
            mt: 0,
            mb: 10,
            mx: 4,
            p: 2,
            backgroundColor: "#22303C",
            boxShadow: "0 0 15px cyan",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  height: "15em",
                  width: "33%",
                  mb: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Lottie
                  style={{ width: "80%" }}
                  animationData={TOPICS[id].img}
                  loop={false}
                />
                <Box
                  sx={{
                    p: 1,
                    backgroundColor: "#192734",
                    boxShadow: "0 0 5px cyan",
                    borderRight: "5px solid cyan",
                    borderLeft: "5px solid cyan",
                    borderRadius: "25px",
                    width: "66%",
                    height: "15%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ mt: 0.5, mr: 1.5, color: "cyan" }}
                    >
                      {TOPICS[id].stars} 🌟
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 0.5, color: "cyan" }}>
                      {TOPICS[id].points} Points
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  width: "75%",
                }}
              >
                <Box sx={{ mx: 3, my: 1 }}>
                  <Typography sx={{ color: "#04A5D0" }} variant="h1">
                    {TOPICS[id].title}
                  </Typography>
                </Box>
                <Box sx={{ my: 1, display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="h3" sx={{ my: 1, mx: 2 }}>
                      Skill level :
                    </Typography>
                    <Typography variant="h3" sx={{ color: "white", my: 1 }}>
                      {skill}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="h3" sx={{ my: 1, mx: 2 }}>
                      Time Required :
                    </Typography>
                    <Typography variant="h3" sx={{ color: "white", my: 1 }}>
                      {TOPICS[id].timeRequired}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <OutlinedButton
                      arrow
                      onClick={()=>navigate(`/tutorials/${topic}`)}
                      sx={{ mt: 3, mx: 3, color: "skyblue" }}
                      fit
                    >
                      Start Tutorials
                    </OutlinedButton>
                    <OutlinedButton
                      arrow
                      onClick={()=>navigate(`/quizMastery/${topic}`)}
                      sx={{ mt: 3, mx: 3, color: "skyblue" }}
                      fit
                    >
                      Practice
                    </OutlinedButton>
                    <OutlinedButton
                      arrow
                      onClick={()=>navigate(`/quizMastery/${topic}`)}
                      sx={{ mt: 3, mx: 3, color: "skyblue" }}
                      fit
                    >
                      Take Quiz
                    </OutlinedButton>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ color: "white", mb: 1 }}>
                80 % completed 
              </Typography>
              <BorderLinearProgress variant="determinate" value={80} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Section1;
