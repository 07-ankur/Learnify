import React, { useState, useCallback } from "react";
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
import {useLoginStore} from "../../hooks/useLoginStore"

const TextFieldstyled = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 3px solid #2f8af5;
    }
  }
`;

const { Logo_drk } = signupContent;

const Login_pg = () => {
  const navigate = useNavigate();
  const {login} = useLoginStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      login(email,password,navigate);
    },
    [email, password]
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
          //{" "}
          <Box sx={{ width: "85%" }}>
            <img src={Logo_drk} style={{ width: "20%" }}></img>
            <Typography
              variant="h2"
              sx={{ letterSpacing: "0.01em", mt: 1, color: "#3ea886" }}
            >
              Login To Your Account
            </Typography>
            <Typography
              variant="h4"
              sx={{ letterSpacing: "0.01em", mb: 8, color: "#4d5980" }}
            >
              Level up your Learning with Learnify!!{" "}
            </Typography>
            <form onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <TextFieldstyled
                    variant="outlined"
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={email}
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      onClick={() => navigate("/forgotpassword")}
                      sx={{
                        letterSpacing: "0.01em",
                        color: "purple",
                        textDecoration: "underline",
                        cursor: "pointer",
                        ml: 2,
                      }}
                    >
                      {" "}
                      Forgot Password{" "}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Auth_btn label={"Login"} />
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
                  Or don't have an account?{" "}
                </Typography>
                <Typography
                  variant="h5"
                  onClick={() => navigate("/signup")}
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
                  {" "}
                  Signup{" "}
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
            //{" "}
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

export default Login_pg;
