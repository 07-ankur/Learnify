import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import {
  Box,
  styled,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
// import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/images/Learnify_logo.png";
import { quizTheme } from "../../utils/theme";
import QuestionTabs_test from "../../container/Quizmastery/QuestionTabs_test";
import UserIcon from "./UserIcon";

const drawerWidth = 0;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0.7),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Test_pg() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationHandler = (skill) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to leave test window?"
    );
    if (isConfirmed) {
      if (skill) {
        navigate(`/quizMastery/${skill}`);
      } else {
        navigate(`/quizMastery`);
      }
    }
  };

  const pathParts = location.pathname.split("/");
  const skill = pathParts[2];
  const topic = pathParts[4];

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
            <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography
                sx={{ ml: "5vh", cursor: "pointer" }}
                variant="h4"
                noWrap
                component="div"
                color="white"
                onClick={()=>navigationHandler()}
              >
                Quiz Mastery
              </Typography>
              <Typography
                sx={{ ml: "2vh", color: "white", cursor: "pointer" }}
                variant="h4"
                noWrap
                component="div"
                onClick={()=>navigationHandler(skill)}
              >
                {` ---> ${skill}`}
              </Typography>
              <Typography
                sx={{ ml: "2vh", color: "#10D59B" }}
                variant="h4"
                noWrap
                component="div"
              >
                {` ---> ${topic.replace(/-/g, " ")}`}
              </Typography>
            </Box>
            <UserIcon/>
          </Toolbar>
        </AppBar>
        <Main>
          <DrawerHeader />
          <QuestionTabs_test title={skill} topic={topic}/>
        </Main>
      </Box>
    </ThemeProvider>
  );
}
