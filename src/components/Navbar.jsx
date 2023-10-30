import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import { navbarContent } from "../utils/contents/MainContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Main_btn from "./Buttons/Main_btn";
import { useNavigate } from "react-router-dom";
import LinkButton from "./Buttons/Link_btn";
import ContentCard from "./Cards/ContentsCard";

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
  const [contentAnchorEl, setContentAnchorEl] = useState(null);
  const [serviceAnchorEl, setServiceAnchorEl] = useState(null);
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);

  const handleContentOpen = (event) => {
    setContentAnchorEl(event.currentTarget);
  };

  const handleContentClose = () => {
    setContentAnchorEl(null);
  };

  const handleServiceOpen = (event) => {
    setServiceAnchorEl(event.currentTarget);
  };

  const handleServiceClose = () => {
    setServiceAnchorEl(null);
  };

  const handleAboutOpen = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleAboutClose = () => {
    setAboutAnchorEl(null);
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
                onMouseEnter={handleContentOpen}
                style={{ position: "relative" }}
              >
                <LinkButton>
                  <Typography variant="body1">Contents</Typography>
                  <KeyboardArrowDownIcon fontSize="medium" />
                </LinkButton>
                </div>
                <div
                  onMouseLeave={handleContentClose}
                  style={{ position: "absolute", top: "100%" }}
                >
                  <Menu
                    anchorEl={contentAnchorEl}
                    open={Boolean(contentAnchorEl)}
                    onClose={handleContentClose}
                  >
                    <MenuItem sx={{ mx: 2 }}>
                      <Typography>React Js</Typography>
                    </MenuItem>
                    <MenuItem sx={{ mx: 2 }}>
                      <Typography>Node Js</Typography>
                    </MenuItem>
                    {/* Add more MenuItem components for other links */}
                  </Menu>
                </div>

              {/* Add more LinkButtons and Menus for other navigation items */}
              <div
                onMouseEnter={handleServiceOpen}
                style={{ position: "relative" }}
              >
                <LinkButton>
                  <Typography variant="body1">Services</Typography>
                  <KeyboardArrowDownIcon fontSize="medium" />
                </LinkButton>
              </div>
                <div
                  onMouseLeave={handleServiceClose}
                  style={{ position: "absolute", top: "100%" }}
                >
                  <Menu
                    anchorEl={serviceAnchorEl}
                    open={Boolean(serviceAnchorEl)}
                    onClose={handleServiceClose}
                  >
                    <MenuItem>
                      <Typography>Mapper</Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography>Analytics</Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography>QuizMastery</Typography>
                    </MenuItem>
                    {/* Add more MenuItem components for other links */}
                  </Menu>
                </div>
              <div
                onMouseEnter={handleAboutOpen}
                style={{ position: "relative" }}
              >
                <LinkButton>
                  <Typography variant="body1">About</Typography>
                  <KeyboardArrowDownIcon fontSize="medium" />
                </LinkButton>
                </div>
                <div
                  onMouseLeave={handleAboutClose}
                  style={{ position: "absolute", top: "100%" }}
                >
                  <Menu
                    anchorEl={aboutAnchorEl}
                    open={Boolean(aboutAnchorEl)}
                    onClose={handleAboutClose}
                  >
                    <MenuItem>
                      <Typography>About</Typography>
                    </MenuItem>
                    {/* Add more MenuItem components for other links */}
                  </Menu>
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