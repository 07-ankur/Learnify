import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { quizTheme } from "../../utils/theme";
import {
  Box,
  ThemeProvider,
  CssBaseline,
  Typography,
  Divider,
} from "@mui/material";
import Lottie from "lottie-react";
import Quiz3_anim from "../../assets/animations/Quiz3_anim.json";
import Down_anim from "../../assets/animations/Down_anim.json";
import { TutorialsTopics } from "../../utils/contents/MainContent";

const { SKILLS } = TutorialsTopics;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#192734",
  ...theme.typography.h3,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "skyblue",
  cursor: "pointer",
  ":hover": { backgroundColor: "skyblue", color: "#192734" },
}));

const Home_pg = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={quizTheme}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ mt: 15 }}>
        <Box>
          <Typography
            sx={{
              color: "#10D59B",
              textAlign: "center",
              mb: 0.5,
              fontSize: "5em",
            }}
          >
            Quiz Mastery
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: "skyblue", mb: 1, textAlign: "center" }}
          >
            "Skill Testing at Its Best: Rise to the Challenge."
          </Typography>
          <Divider sx={{ width: "98%", my: 4 }} variant="middle">
            <Box
              sx={{
                border: "2px solid skyblue",
                borderRadius: "1em",
                p: 2,
                textAlign: "center",
              }}
            >
              !! Practice To Perfection !!
            </Box>
          </Divider>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
            mt: -5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              mt: -15,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#10D59B", textAlign: "center" }}
            >
              Practice the Concepts
            </Typography>
            <Divider sx={{ border: "2px solid white" }} />
            <Typography
              variant="h4"
              sx={{ color: "skyblue", my: 4, textAlign: "center" }}
            >
              Elevate Your understanding with diligent practice of the concepts
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: -8 }}>
              <Lottie animationData={Down_anim} loop style={{ width: "50%" }} />
            </Box>
          </Box>
          <Lottie
            animationData={Quiz3_anim}
            loop
            style={{ width: "70vh", marginRight: 20, marginTop: -5 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              mt: -15,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#10D59B", textAlign: "center" }}
            >
              Attempt Mock Tests
            </Typography>
            <Divider sx={{ border: "2px solid white" }} />
            <Typography
              variant="h4"
              sx={{ color: "skyblue", my: 4, textAlign: "center" }}
            >
              Prep, Perform, Perfect with Mock Tests.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: -8 }}>
              <Lottie animationData={Down_anim} loop style={{ width: "50%" }} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ mx: 6, mt: -10 }}>
          <Divider
            sx={{
              width: "50%",
              mb: 1,
              border: "3px solid skyblue",
              borderRadius: "4em",
            }}
          />
          <Typography variant="h2" sx={{ color: "#10D59B", mx: 4 }}>
            Select What To Learn
          </Typography>
          <Divider
            sx={{
              width: "50%",
              my: 1,
              border: "3px solid skyblue",
              borderRadius: "4em",
            }}
          />
        </Box>
        <Box
          sx={{
            height: "auto",
            mt: 4,
            mx: 1,
            borderBottom: "2px solid #10D59B",
          }}
        >
          <Grid
            sx={{ mb: 4 }}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {SKILLS.map((ITEM) => (
              <Grid
                key={ITEM.key}
                item
                xs={4}
                sx={{
                  my: 2,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Item
                  onClick={() => {
                    navigate(`/quizMastery/${ITEM.title.replace(/ /g, "_")}`);
                  }}
                  sx={{ height: "95%", p: 2, mx: 3 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ width: "4em", height: "4em" }}>
                      <img style={{ width: "80%" }} src={ITEM.logo} />
                    </Box>
                    <Box sx={{ width: "100%", height: "50%" }}>
                      {ITEM.title}
                    </Box>
                  </Box>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default Home_pg;
