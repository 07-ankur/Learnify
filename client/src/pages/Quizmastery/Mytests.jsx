import React from "react";
import {
  Box,
  styled,
  CssBaseline,
  Toolbar,
  Typography,
  ThemeProvider,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
// import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/images/Learnify_logo.png";
import { quizTheme } from "../../utils/theme";
// import QuestionTabs from "../../container/Quizmastery/QuestionTabs";
import UserIcon from "./UserIcon";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default function Mytests() {
  return (
    <ThemeProvider theme={quizTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ backgroundColor: "#15202B" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                height: "40px",
                marginTop: "10px",
                marginBottom: "15px",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{ ml: "5vh" }}
                variant="h4"
                noWrap
                component="div"
                color="#10D59B"
              >
                Quiz Mastery
              </Typography>
            </Box>
            <UserIcon />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
