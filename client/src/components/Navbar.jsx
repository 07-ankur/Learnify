import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import { navbarContent } from "../utils/contents/MainContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState, useRef } from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LanguageIcon from "@mui/icons-material/Language";
import useScrollPosition from "../hooks/useScrollPosition";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LinkButton from "./Buttons/Link_btn";
import Main_btn from "./Buttons/Main_btn";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import QuizIcon from "@mui/icons-material/Quiz";
import TimelineIcon from "@mui/icons-material/Timeline";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import ArticleIcon from "@mui/icons-material/Article";
import { Box } from "@mui/system";

const { Logo } = navbarContent;

const Navbar = (props) => {
  const sp = props.sp || 0;
  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate("/signup");
  };
  const navigateToLogin = () => {
    navigate("/login");
  };
  const scrollPosition = useScrollPosition();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [contentOpen, setContentOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const contentRef = useRef(null);
  const serviceRef = useRef(null);
  const aboutRef = useRef(null);

  const handleContentEnter = () => {
    setContentOpen(true);
  };

  const handleContentLeave = () => {
    setContentOpen(false);
  };

  const handleAboutEnter = () => {
    setAboutOpen(true);
  };

  const handleAboutLeave = () => {
    setAboutOpen(false);
  };
  const handleServiceEnter = () => {
    setServiceOpen(true);
  };

  const handleServiceLeave = () => {
    setServiceOpen(false);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: 82,
        bgcolor: scrollPosition > sp ? "rgba(7,7,16,.7)" : "transparent",
        backdropFilter: scrollPosition > 10 && "blur(60px)",
      }}
    >
      <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1380px!important",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {/* Logo */}
          <img
            onClick={() => {
              navigate("/");
            }}
            src={Logo}
            style={{ height: "60px", objectFit: "contain", cursor: "pointer" }}
          />

          {/* Links */}
          {!isMobile && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={7}
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <div
                onMouseEnter={handleContentEnter}
                onMouseLeave={handleContentLeave}
                ref={contentRef}
              >
                <LinkButton>
                  <Typography variant="body1">Contents</Typography>
                  <KeyboardArrowDownIcon fontSize="medium" />
                  {contentOpen && (
                    <Stack
                      sx={{
                        position: "absolute",
                        backgroundColor: "black",
                        borderRadius: "4px",
                        padding: "0.75em",
                        top: "2.5em",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <Box
                        onClick={() => {
                          navigate("/tutorials");
                        }}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          m: 1,
                          color: "grey",
                          "&:hover": { color: "white" },
                        }}
                      >
                        <ArticleIcon sx={{ mr: 1, mb: 1 }} />
                        <Typography variant="h5">Tutorials</Typography>
                      </Box>

                      <Grid sx={{ width: "20em" }} container spacing={0}>
                        <Grid item xs={6} sm={4}>
                          <Box
                            onClick={() => {
                              navigate("/tutorials/HTML");
                            }}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              m: 1,
                              color: "grey",
                              "&:hover": { color: "white" },
                            }}
                          >
                            <Typography variant="h5">HTML</Typography>
                            <CallMadeIcon sx={{ fontSize: 15, ml: 0.5 }} />
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <Box
                            onClick={() => {
                              navigate("/tutorials/CSS");
                            }}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              m: 1,
                              color: "grey",
                              "&:hover": { color: "white" },
                            }}
                          >
                            <Typography variant="h5">CSS</Typography>
                            <CallMadeIcon sx={{ fontSize: 15, ml: 0.5 }} />
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <Box
                            onClick={() => {
                              navigate("/tutorials/React-JS");
                            }}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              m: 1,
                              color: "grey",
                              "&:hover": { color: "white" },
                            }}
                          >
                            <Typography variant="h5">React JS</Typography>
                            <CallMadeIcon sx={{ fontSize: 15, ml: 0.5 }} />
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <Box
                            onClick={() => {
                              navigate("/tutorials/Node-JS");
                            }}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              m: 1,
                              color: "grey",
                              "&:hover": { color: "white" },
                            }}
                          >
                            <Typography variant="h5">Node JS</Typography>
                            <CallMadeIcon sx={{ fontSize: 15, ml: 0.5 }} />
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <Box
                            onClick={() => {
                              navigate("/tutorials/Express-JS");
                            }}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              m: 1,
                              color: "grey",
                              "&:hover": { color: "white" },
                            }}
                          >
                            <Typography variant="h5">Express JS</Typography>
                            <CallMadeIcon sx={{ fontSize: 15, ml: 0.5 }} />
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <Box
                            onClick={() => {
                              navigate("/tutorials/Mongo-DB");
                            }}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              m: 1,
                              color: "grey",
                              "&:hover": { color: "white" },
                            }}
                          >
                            <Typography variant="h5">Mongo DB</Typography>
                            <CallMadeIcon sx={{ fontSize: 15, ml: 0.5 }} />
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <Box
                            onClick={() => {
                              navigate("/tutorials/SQL");
                            }}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              m: 1,
                              color: "grey",
                              "&:hover": { color: "white" },
                            }}
                          >
                            <Typography variant="h5">SQL</Typography>
                            <CallMadeIcon sx={{ fontSize: 15, ml: 0.5 }} />
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <Box
                            onClick={() => {
                              navigate("/tutorials/Python");
                            }}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              m: 1,
                              color: "grey",
                              "&:hover": { color: "white" },
                            }}
                          >
                            <Typography variant="h5">Python</Typography>
                            <CallMadeIcon sx={{ fontSize: 15, ml: 0.5 }} />
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <Box
                            onClick={() => {
                              navigate("/tutorials/C++");
                            }}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              m: 1,
                              color: "grey",
                              "&:hover": { color: "white" },
                            }}
                          >
                            <Typography variant="h5">C++</Typography>
                            <CallMadeIcon sx={{ fontSize: 15, ml: 0.5 }} />
                          </Box>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <Box
                            onClick={() => {
                              navigate("/tutorials/JavaScript");
                            }}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              m: 1,
                              color: "grey",
                              "&:hover": { color: "white" },
                            }}
                          >
                            <Typography variant="h5">JavaScript</Typography>
                            <CallMadeIcon sx={{ fontSize: 15, ml: 0.5 }} />
                          </Box>
                        </Grid>
                      </Grid>
                    </Stack>
                  )}
                </LinkButton>
              </div>

              {/* Add more LinkButtons and Menus for other navigation items */}
              <div
                onMouseEnter={handleServiceEnter}
                onMouseLeave={handleServiceLeave}
                ref={serviceRef}
              >
                <LinkButton>
                  <Typography variant="body1">Services</Typography>
                  <KeyboardArrowDownIcon fontSize="medium" />
                  {serviceOpen && (
                    <Stack
                      sx={{
                        position: "absolute",
                        backgroundColor: "black",
                        borderRadius: "4px",
                        padding: "0.5em",
                        top: "2.5em",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {" "}
                      <Box
                        onClick={() => {
                          navigate("/analytics");
                        }}
                        sx={{
                          m: 1,
                          color: "grey",
                          "&:hover": { color: "white" },
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <AnalyticsIcon sx={{ mr: 1 }} />
                        <Typography variant="h5">Analytics</Typography>
                      </Box>
                      <Box
                        onClick={() => {
                          navigate("/quizMastery");
                        }}
                        sx={{
                          m: 1,
                          color: "grey",
                          "&:hover": { color: "white" },
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <QuizIcon sx={{ mr: 1 }} />
                        <Typography variant="h5">Quiz Mastery</Typography>
                      </Box>
                      <Box
                        onClick={() => {
                          navigate("/mapper");
                        }}
                        sx={{
                          m: 1,
                          color: "grey",
                          "&:hover": { color: "white" },
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <TimelineIcon sx={{ mr: 1 }} />
                        <Typography variant="h5">Mapper</Typography>
                      </Box>
                    </Stack>
                  )}
                </LinkButton>
              </div>
              <div
                onMouseEnter={handleAboutEnter}
                onMouseLeave={handleAboutLeave}
                ref={aboutRef}
              >
                <LinkButton>
                  <Typography variant="body1">About</Typography>
                  <KeyboardArrowDownIcon fontSize="medium" />
                  {aboutOpen && (
                    <Stack
                      sx={{
                        position: "absolute",
                        backgroundColor: "black",
                        borderRadius: "4px",
                        padding: "0.5em",
                        top: "2.5em",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/07-ankur"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box
                          sx={{
                            m: 1,
                            color: "grey",
                            "&:hover": { color: "white" },
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <CodeIcon sx={{ mr: 1 }} />
                          <Typography variant="h5">Developer</Typography>
                        </Box>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/07-ankur/Learnify"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box
                          sx={{
                            m: 1,
                            color: "grey",
                            "&:hover": { color: "white" },
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <GitHubIcon sx={{ mr: 1 }} />
                          <Typography variant="h5">Github</Typography>
                        </Box>
                      </a>
                    </Stack>
                  )}
                </LinkButton>
              </div>
              <LinkButton spacing={0.5}>
                <Typography
                  variant="body1"
                  color={props.color}
                  onClick={() => {
                    navigate("/blog");
                  }}
                >
                  Blog
                </Typography>
                <CallMadeIcon sx={{ fontSize: 12 }} />
              </LinkButton>
            </Stack>
          )}

          {/* Action Buttons */}
          {isMobile ? (
            <IconButton>
              <MenuIcon sx={{ color: "text.secondary" }} />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={4} alignItems="center">
              <LinkButton spacing={1}>
                <LanguageIcon fontSize="small" />
                <Typography variant="body2">EN</Typography>
              </LinkButton>
              <Main_btn label={"Log In"} functionHandler={navigateToLogin} />
              <Main_btn label={"Sign Up"} functionHandler={navigateToSignup} />
            </Stack>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
