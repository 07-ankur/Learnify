import React from "react";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { analyticTheme } from "../../utils/theme";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/system";
import React_anim from "../../assets/animations/react_anim.json";
import Lottie from "lottie-react";

const Topic_dashboard = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <ThemeProvider theme={analyticTheme}>
      <CssBaseline />
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
            width: "55em",
            borderRadius: "25px",
            height: "21em",
            mt: 0,
            mb: 10,
            mx: 4,
            p: 3,
            pb: 2,
            backgroundColor: "#22303C",
            boxShadow: "0 0 15px cyan",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  height:'15em',
                  width: "25%",
                  mb:2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Lottie style={{width:'80%'}} animationData={React_anim} loop={false} />
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
                      0 🌟
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 0.5, color: "cyan" }}>
                      70 Points
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
                <Box sx={{ mx: 5, my: 2 }}>
                  <Typography sx={{ color: "skyblue" }} variant="h1">
                    React JS
                  </Typography>
                </Box>
                <Box sx={{ my: 1, display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="h4" sx={{ my: 1, mx: 2 }}>
                      Skill level :
                    </Typography>
                    <Typography variant="h4" sx={{ color: "white", my: 1 }}>
                      Intermediate
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="h4" sx={{ my: 1, mx: 2 }}>
                      Time Required :
                    </Typography>
                    <Typography variant="h4" sx={{ color: "white", my: 1 }}>
                      11 Hours
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <OutlinedButton
                      arrow
                      onClick={handleGoBack}
                      sx={{ mt: 3, mx: 3 }}
                      fit
                    >
                      Start Tutorials
                    </OutlinedButton>
                    <OutlinedButton
                      arrow
                      onClick={handleGoBack}
                      sx={{ mt: 3, mx: 3 }}
                      fit
                    >
                      Practice
                    </OutlinedButton>
                    <OutlinedButton
                      arrow
                      onClick={handleGoBack}
                      sx={{ mt: 3, mx: 3 }}
                      fit
                    >
                      Take Quiz
                    </OutlinedButton>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{border:'2px solid black'}}>
              Progress Bar
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Topic_dashboard;
