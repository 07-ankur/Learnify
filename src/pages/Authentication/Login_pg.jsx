import React from "react";
import {
  Box,
  Container,
  Typography,
  FormControl,
  TextField,
  IconButton,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  CssBaseline,
} from "@mui/material";
import { signupContent } from "../../utils/contents/MainContent";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ThemeProvider } from "@emotion/react";
import { authTheme } from "../../utils/theme/index";
import styled from "styled-components";
import Auth_btn from "../../components/Buttons/Auth_btn";
import anim1 from "../../assets/animations/signup.json";
import rocket from "../../assets/animations/rocket.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const TextFieldstyled = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 3px solid #2f8af5;
    }
  }
`;

const OutlinedInputstyled = styled(OutlinedInput)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 3px solid;
    }
  }
`;

const { Logo_drk } = signupContent;

const Login_pg = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <ThemeProvider theme={authTheme}>
      <CssBaseline/>
      <Box>
        <Container
          sx={{
            height: "35rem",
            width: "80rem",
            backgroundColor: "white",
            border: "6px solid #3ea886",
            mt: 5,
            borderRadius: "20px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ width: "75%" }}>
              <img src={Logo_drk} style={{ width: "20%" }}></img>
              <Typography
                variant="h2"
                sx={{ letterSpacing: "0.01em", mt: 1, color: "#3ea886" }}
              >
                Login To Your Account
              </Typography>
              <Typography
                variant="h4"
                sx={{ letterSpacing: "0.01em", mb: 3, color: "#4d5980" }}
              >
                Level up your Learning with Learnify!!{" "}
              </Typography>
              <Box>
                <TextFieldstyled
                  sx={{ m: 1, mt: 3, width: "30ch" }}
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                />
              </Box>
              <Box>
                <FormControl
                  sx={{ m: 1, width: "25ch", mb: 2.5 }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInputstyled
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
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
                  style={{ width: "30%", marginTop: -100, marginLeft: 30 }}
                  animationData={rocket}
                  loop
                  autoplay
                />
              </Box>
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
      </Box>
    </ThemeProvider>
  );
};

export default Login_pg;
