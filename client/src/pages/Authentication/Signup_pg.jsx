import React, { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
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
import { useLocation } from "react-router-dom";

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

const Signup_pg = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (!firstName || !lastName || !email || !password) {
        toast.error("All fields are required!");
        return;
      }
      try {
        setIsLoading(true);

        console.log({
          firstName,
          lastName,
          email,
          password,
        });

        const res = await axios.post(
          "http://localhost:3000/api/auth/register",
          {
            firstName,
            lastName,
            email,
            password,
          }
        );

        console.log(res.data);

        if (res.status === 200) {
          setIsLoading(false);

          toast.success("Account created successfully!");

          navigate("/");
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    },
    [firstName, lastName, email, password, navigate]
  );

  const location = useLocation();
  const { enteredEmail } = location.state || {};

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <ThemeProvider theme={authTheme}>
      <Box>
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
              <img src={Logo_drk} style={{ width: "20%" }}></img>
              <Typography
                variant="h2"
                sx={{ letterSpacing: "0.01em", mt: 1, color: "#3ea886" }}
              >
                Create Your New Account
              </Typography>
              <Typography
                variant="h4"
                sx={{ letterSpacing: "0.01em", mb: 3, color: "#4d5980" }}
              >
                Level up your Learning with Learnify!!{" "}
              </Typography>
              <form onSubmit={onSubmit}>
                <Box>
                  <TextFieldstyled
                    sx={{ m: 1 }}
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextFieldstyled
                    sx={{ m: 1 }}
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Box>
                <Box>
                  <TextFieldstyled
                    sx={{ m: 1, width: "30ch" }}
                    id="outlined-basic"
                    label="Email Address"
                    value={enteredEmail}
                    disabled={isLoading}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                  />
                </Box>
                <Box>
                  <FormControl
                    sx={{ m: 1, width: "25ch" }}
                    variant="outlined"
                    disabled={isLoading}
                  >
                    <InputLabel
                      htmlFor="outlined-adornment-password"
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                    >
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
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Box>
              </form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Auth_btn label={"Sign Up"} />
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
                  Or already have an account?{" "}
                </Typography>
                <Typography
                  variant="h5"
                  onClick={() => navigate("/login")}
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
                  Login{" "}
                </Typography>
                <Lottie
                  style={{ width: "30%", marginTop: -100 }}
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

export default Signup_pg;
