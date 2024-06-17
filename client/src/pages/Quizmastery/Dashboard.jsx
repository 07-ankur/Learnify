import * as React from "react";
import {
  Box,
  styled,
  useTheme,
  Drawer,
  CssBaseline,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Listing from "../../container/Quizmastery/List";
import BasicTabs from "../../container/Quizmastery/BasicTabs";
import { quizTheme } from "../../utils/theme";
import { navbarContent } from "../../utils/contents/MainContent";
import { Topics } from "../../utils/contents/MainContent";
import { useNavigate, useLocation } from "react-router-dom";

const { Logo } = navbarContent;
const { SKILLS } = Topics;

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(2.5),
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
  // color:'white',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function QuizDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const pathParts = location.pathname.split("/");
  const title = pathParts[2];

  let id;

  for (let i = 0; i < SKILLS.length; i++) {
    if (
      location.pathname === `/quizMastery/${SKILLS[i].title.replace(/ /g, "_")}`
    ) {
      id = SKILLS[i].key - 1;
      break; // Exit the loop once a match is found
    }
  }

  return (
    <ThemeProvider theme={quizTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBar
          sx={{ backgroundColor: "#15202B" }}
          position="fixed"
          open={open}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{ ml: "5vh", cursor: "pointer" }}
              variant="body1"
              noWrap
              component="div"
              color="white"
              onClick={() => navigate(`/quizMastery`)}
            >
              Quiz Mastery
            </Typography>
            <Typography
              sx={{ ml: "2vh", color: "#10D59B" }}
              variant="body1"
              noWrap
              component="div"
            >
              {` --->  ${SKILLS[id].title}`}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#15202B",
              borderRight: "2px solid white",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <img
              src={Logo}
              alt="Logo"
              style={{
                height: "60px",
                marginTop: "10px",
                marginBottom: "15px",
              }}
            />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider sx={{ border: "0.5px solid white" }} />
          <Listing />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <BasicTabs title/>
        </Main>
      </Box>
    </ThemeProvider>
  );
}
