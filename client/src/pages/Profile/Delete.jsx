import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import { signupContent } from "../../utils/contents/MainContent";
import { ThemeProvider } from "@emotion/react";
import { authTheme } from "../../utils/theme/index";
import styled from "styled-components";
import Auth_btn from "../../components/Buttons/Auth_btn";
import anim1 from "../../assets/animations/signup.json";
import rocket from "../../assets/animations/rocket.json";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { useDeleteUser } from "../../hooks/useDeleteUser";

const TextFieldstyled = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 3px solid #2f8af5;
    }
  }
`;

const { Logo_drk } = signupContent;

const Delete = () => {
  const navigate = useNavigate();
  const { deleteAccount } = useDeleteUser();

  const cookies = new Cookies();
  const [email, setEmail] = useState(""); 
  const [id, setId] = useState("");

  useEffect(() => {
    const token = cookies.get("jwt_token");
    if (token) {
      const decodedToken = jwtDecode(token.toString());
      setEmail(decodedToken.email || ""); 
      setId(decodedToken._id || ""); 
    }
  }, [cookies]);

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      deleteAccount(email, password, id, cookies, navigate);
    },
    [email, password, id, cookies, navigate]
  );

  return (
    <ThemeProvider theme={authTheme}>
      <Container
        sx={{
          height: "35rem",
          width: "80rem",
          backgroundColor: "white",
          border: "5px solid #3ea886",
          mt: 5,
          borderRadius: "20px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ width: "75%" }}>
            <img src={Logo_drk} style={{ width: "20%" }} alt="Logo"></img>
            <Typography
              variant="h2"
              sx={{ letterSpacing: "0.01em", mt: 1, color: "#3ea886" }}
            >
              Delete Your Account
            </Typography>
            <Typography
              variant="h4"
              sx={{ letterSpacing: "0.01em", mb: 8, color: "#4d5980" }}
            >
              We will miss you!!
            </Typography>
            <form onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <TextFieldstyled
                    variant="outlined"
                    value={email}
                    fullWidth
                    name="email"
                    type="email"
                    disabled
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={7}>
                  <TextFieldstyled
                    variant="outlined"
                    fullWidth
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  mt: 5,
                }}
              >
                <Auth_btn label={"Delete"} type={"submit"} />
                <Typography
                  variant="h6"
                  sx={{
                    letterSpacing: "0.01em",
                    mb: 3,
                    color: "#4d5980",
                    mt: 4,
                    mr: 1,
                  }}
                >
                  Or wanna stay with us?
                </Typography>
                <Typography
                  variant="h5"
                  onClick={() => navigate("/")}
                  sx={{
                    letterSpacing: "0.01em",
                    mb: 3,
                    color: "purple",
                    mt: 4,
                    mr: 1,
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Home
                </Typography>
                <Lottie
                  style={{ width: "25%", marginTop: -100, marginLeft: 20 }}
                  animationData={rocket}
                  loop
                  autoplay
                />
              </Box>
            </form>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Lottie
              style={{ marginTop: 20 }}
              animationData={anim1}
              loop
              autoplay
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Delete;
