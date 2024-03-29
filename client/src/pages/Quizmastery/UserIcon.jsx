import React, { useState, useRef, useEffect } from "react";
import { Box, Stack, Typography, Avatar, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkButton from "../../components/Buttons/Link_btn";
import { Cookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

const UserIcon = () => {
  const [userOpen, setUserOpen] = useState(false);
  const userRef = useRef(null);
  const cookies = new Cookies();
  const [user, setUser] = useState(null);

  const handleUserEnter = () => {
    setUserOpen(true);
  };

  const handleUserLeave = () => {
    setUserOpen(false);
  };

  useEffect(() => {
    const token = cookies.get("jwt_token");
    if (token) {
      const decodedToken = jwtDecode(token.toString());
      const newUser = {
        firstname: decodedToken.firstname,
        lastname: decodedToken.lastname,
        email: decodedToken.email,
        avatar: decodedToken.avatar,
      };

      if (JSON.stringify(user) !== JSON.stringify(newUser)) {
        setUser(newUser);
      }
    }
  }, [cookies, user]);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 0.3s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(5.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <div>
      {user ? (
        <>
          <div
            onMouseEnter={handleUserEnter}
            onMouseLeave={handleUserLeave}
            ref={userRef}
          >
            <LinkButton>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar
                  alt="User Avatar"
                  src={user.avatar}
                  sx={{ border: "2px solid yellow" }}
                />
              </StyledBadge>
              {userOpen && (
                <Stack
                  sx={{
                    position: "absolute",
                    backgroundColor: "black",
                    borderRadius: "4px",
                    padding: "0.5em",
                    right: "2em",
                    top: "2.5em",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box
                    sx={{
                      m: 1,
                      color: "grey",
                      "&:hover": { color: "skyblue" },
                      display: "flex",
                      flexDirection: "row",
                      cursor: "none",
                    }}
                  >
                    <PersonOutlineIcon sx={{ mr: 0.5 }} />
                    <Typography variant="h6" sx={{ mt: 0.5 }}>
                      {user.firstname + " " + user.lastname}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      m: 1,
                      color: "grey",
                      "&:hover": { color: "white" },
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "none",
                    }}
                  >
                    <AlternateEmailIcon sx={{ mr: 0.5 }} />
                    <Typography variant="h6">{user.email}</Typography>
                  </Box>
                </Stack>
              )}
            </LinkButton>
          </div>
        </>
      ) : (
        <AccountCircleIcon sx={{ ml: 10, color: "#10D59B", fontSize: "2em" }} />
      )}
    </div>
  );
};

export default UserIcon;
