import React, { useState, useRef, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinkButton from "../../components/Buttons/Link_btn";
import { Cookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

const UserIcon = () => {
  const [userOpen, setUserOpen] = useState(false);
  const userRef = useRef(null);
  const cookies = new Cookies();
  const [user, setUser] = useState(null);

  const handleUserEnter = () => {
    console.log("Enter");
    setUserOpen(true);
  };

  const handleUserLeave = () => {
    console.log("Leave");
    setUserOpen(false);
  };

  useEffect(() => {
    const token = cookies.get("jwt_token");
    if (token) {
      const decodedToken = jwtDecode(token.toString());
      console.log(decodedToken);
      // Ensure token is a string
      setUser({
        firstname: decodedToken.firstname,
        lastname: decodedToken.lastname,
        email: decodedToken.email,
      });
    }
  }, [cookies]);
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
              <AccountCircleIcon
                sx={{ ml: 10, color: "#10D59B", fontSize: "2em" }}
              />
              {userOpen && (
                <Stack
                  sx={{
                    position: "absolute",
                    backgroundColor: "black",
                    borderRadius: "4px",
                    padding: "0.5em",
                    right: "2.5em",
                    top: "2.5em",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
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
                    <Typography variant="h6">
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
                    }}
                  >
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
