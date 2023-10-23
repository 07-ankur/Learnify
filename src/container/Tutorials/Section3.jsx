import React from "react";
import { Box, ThemeProvider } from "@mui/system";
import {Container} from "@mui/system";
import { CssBaseline, Grid } from "@mui/material";
import { tutorialTheme } from "../../utils/theme";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Topics } from "../../utils/content";

const { SKILLS } = Topics;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#192734",
  ...theme.typography.h3,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "skyblue",
  cursor: "pointer",
  ":hover": { backgroundColor: "skyblue", color: "#192734" },
}));

const Section3 = () => {
  return (
    <ThemeProvider theme={tutorialTheme}>
      <CssBaseline />
      <Box sx={{borderBottom: "2px solid #FFF4A3" }}>
      <Container maxWidth='lg'
        sx={{ display: "flex", alignItems: "center", flexDirection: "column", mx:5}}
      >
        <Typography variant="h5" sx={{ mb:2 }}>
          Join our millions of learners to access our free Text Library.
          From programming languages to web development our masterfully crafted Tutorials will help you master any technology or concept from scratch.
        </Typography>
        <Box sx={{ height: "auto", mt: 4 }}>
          <Grid
            sx={{ mb: 4 }}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {SKILLS.map((ITEM) => (
              <Grid
                onClick={() => {
                  navigate(`/quizMastery/${ITEM.title.replace(/ /g, "-")}`);
                }}
                key={ITEM.key}
                item
                xs={3}
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
