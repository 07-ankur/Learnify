import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import { navbarContent } from "../utils/content";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LanguageIcon from "@mui/icons-material/Language";
// import LaunchButton from "../Buttons/LaunchButton";
import MenuIcon from "@mui/icons-material/Menu";
import Main_btn from "./Buttons/Main_btn";
import {Popover} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LinkButton from "./Buttons/Link_btn";
import ContentCard from "./Cards/ContentsCard";

const { Logo } = navbarContent;

const Navbar = (props) => {

  const sp = props.sp || 0;

  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/signup')
  }

  const navigateToLogin = () => {
    navigate('/login')
  }

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
          <img onClick={()=>{navigate('/')}} src={Logo} style={{ height: "60px", objectFit: "contain", cursor:'pointer' }} />

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
                aria-owns={open ? "Contents" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <Typography variant="body1">Contents</Typography>
                <KeyboardArrowDownIcon fontSize="medium" />
              </LinkButton>
              <Popover
                id="Contents"
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
                <ContentCard onMouseEnter={handlePopoverOpen} title={'title'} subtitle={'subtitle'}/>
              </Popover>
              <LinkButton 
                aria-owns={open ? "Contents" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <Typography variant="body1">Services</Typography>
                <KeyboardArrowDownIcon fontSize="medium" />
              </LinkButton>
              <Popover
                id="Services"
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
                <ContentCard onMouseEnter={handlePopoverOpen} title={'title'} subtitle={'subtitle'}/>
              </Popover>
              <LinkButton 
                aria-owns={open ? "About" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <Typography variant="body1">About</Typography>
                <KeyboardArrowDownIcon fontSize="medium" />
              </LinkButton>
              <Popover
                id="Services"
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
                <ContentCard onMouseEnter={handlePopoverOpen} title={'title'} subtitle={'subtitle'}/>
              </Popover>
              <LinkButton spacing={0.5}>
                <Typography variant="body1" color={props.color} onClick={()=>{navigate('/blog')}}>Blog</Typography>
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
