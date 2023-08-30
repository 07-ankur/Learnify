import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Children } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import { navbarContent } from "../utils/content";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LanguageIcon from "@mui/icons-material/Language";
// import LaunchButton from "../Buttons/LaunchButton";
import MenuIcon from "@mui/icons-material/Menu";
import Main_btn from "./Buttons/Main_btn";
import ServiceCard from "./Cards/ServiceCard";
import {Popover} from "@mui/material";


const { Logo } = navbarContent;

const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.2}
    sx={{
      cursor: "pointer",
      color: "text.secondary",
      "&:hover": { color: "text.primary" },
    }}
    {...props}
  >
    {children}
  </Stack>
);

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);

  // const clickHandler = () => {
  //   <ServiceCard title={"Navbar"} subtitle={"Navbar"} />;
  //   console.log("click");
  // };

  return (
    <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: 82,
        bgcolor: scrollPosition > 0 ? "rgba(7,7,16,.7)" : "transparent",
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
          <img src={Logo} style={{ height: "60px", objectFit: "contain" }} />

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
              <LinkButton
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <Typography variant="body1">Contents</Typography>
                <KeyboardArrowDownIcon fontSize="medium" />
              </LinkButton>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <ServiceCard onMouseEnter={handlePopoverOpen} title={'title'} subtitle={'subtitle'}/>
              </Popover>
              <LinkButton>
                <Typography variant="body1">Services</Typography>
                <KeyboardArrowDownIcon fontSize="medium" />
              </LinkButton>

              <LinkButton>
                <Typography variant="body1">About</Typography>
                <KeyboardArrowDownIcon fontSize="medium" />
              </LinkButton>

              <LinkButton spacing={0.5}>
                <Typography variant="body1">Blog</Typography>
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

              {/* <LaunchButton sx={{ borderRadius: 3 }} /> */}
              <Main_btn label={"Log In"} />
              <Main_btn label={"Sign Up"} />
            </Stack>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
