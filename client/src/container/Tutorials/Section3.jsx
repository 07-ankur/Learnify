import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/system";
import {Container} from "@mui/system";
import { CssBaseline, Grid } from "@mui/material";
import { tutorialTheme } from "../../utils/theme";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { TutorialsTopics } from "../../utils/contents/MainContent";

const { SKILLS } = TutorialsTopics;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#192734",
  ...theme.typography.h3,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#FFF4A3",
  cursor: "pointer",
  border:'2px solid transparent',
  ":hover": { border:'2px solid skyblue' },
}));

const Section3 = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={tutorialTheme}>
      <CssBaseline />
      <Box sx={{borderBottom: "2px solid #FFF4A3" }}>
      <Container maxWidth='lg'
        sx={{ display: "flex", alignItems: "center", flexDirection: "column", mx:5}}
      >
        <Typography variant="h5" sx={{ mb:1 }}>
          Join our millions of learners to access our free Text Library.
          From programming languages to web development our masterfully crafted Tutorials will help you master any technology or concept from scratch.
        </Typography>
        <Box sx={{ height: "auto", mt: 2 }}>
          <Grid
            sx={{ mb: 4 }}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {SKILLS.map((ITEM) => (
              <Grid
                onClick={() => {
                  navigate(`/tutorials/${ITEM.title.replace(/ /g, "_")}`);
                }}
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
                <Item sx={{ height: "95%", p: 2, mx: 3 }}>
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
      </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Section3;
