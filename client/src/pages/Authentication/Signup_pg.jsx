import React, { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  Box,
  Grid,
  Container,
  Typography,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signupContent } from "../../utils/contents/MainContent";
import { ThemeProvider } from "@emotion/react";
import { authTheme } from "../../utils/theme/index";
import styled from "styled-components";
import Auth_btn from "../../components/Buttons/Auth_btn";
import anim1 from "../../assets/animations/signup.json";
import rocket from "../../assets/animations/rocket.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import avatar1 from "../../assets/images/Avatar/Avatar1.jpg";
import avatar2 from "../../assets/images/Avatar/Avatar2.jpg";
import avatar3 from "../../assets/images/Avatar/Avatar3.jpg";
import avatar4 from "../../assets/images/Avatar/Avatar4.jpg";
import avatar5 from "../../assets/images/Avatar/Avatar5.jpg";
import avatar6 from "../../assets/images/Avatar/Avatar6.jpg";
import avatar7 from "../../assets/images/Avatar/Avatar7.jpg";
import avatar8 from "../../assets/images/Avatar/Avatar8.jpg";
import { useSignupStore } from "../../hooks/useSignupStore";

const TextFieldstyled = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 3px solid #2f8af5;
    }
  }
`;

const AvatarGrid = styled(Grid)`
  &.selected img {
    border: 2px solid yellow;
    border-width: 4px; /* Increase border width for debugging */
  }
`;

const { Logo_drk } = signupContent;

const SignupForm = () => {
  const location = useLocation();
  const { enteredEmail } = location.state || {};

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState(enteredEmail);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState(avatar1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {signup} = useSignupStore();

  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
  ];

  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);

  const handleAvatarSelect = (event, newAvatarIndex) => {
    if (newAvatarIndex !== null) {
      setSelectedAvatarIndex(newAvatarIndex);
      setAvatar(avatars[newAvatarIndex]);
      console.log(newAvatarIndex);
    }
  };

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (!firstname || !lastname || !email || !password || !avatar) {
        toast.error("All fields are required!");
        return;
      }
      try {
        setIsLoading(true);

        await signup(firstname, lastname, email, password, avatar, navigate);
      } finally {
        setIsLoading(false);
      }
    },
    [firstname, lastname, email, password, avatar, signup, navigate]
  );


  return (
    <ThemeProvider theme={authTheme}>
      <Container
        sx={{
          height: "40rem",
          width: "80rem",
          backgroundColor: "white",
          border: "5px solid #3ea886",
          mt: 2,
          borderRadius: "20px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          //{" "}
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
              sx={{ letterSpacing: "0.01em", mb: 2, color: "#4d5980" }}
            >
              Level up your Learning with Learnify!!{" "}
            </Typography>
            <form onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={8} sm={4}>
                  <TextFieldstyled
                    variant="outlined"
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={8} sm={4}>
                  <TextFieldstyled
                    variant="outlined"
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Grid>
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
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h6" sx={{ color: "#4d5980" }}>
                    Choose Avatar:
                  </Typography>
                  <ToggleButtonGroup
                    exclusive
                    value={selectedAvatarIndex}
                    // onChange={handleAvatarSelect}
                    aria-label="avatar-selector"
                  >
                    {avatars.map((avatar, index) => (
                      <ToggleButton
                        key={index}
                        value={avatar}
                        onClick={(e) => handleAvatarSelect(e, index)}
                      >
                        <AvatarGrid
                          className={
                            selectedAvatarIndex === index ? "selected" : ""
                          }
                        >
                          <img
                            src={avatar}
                            alt={`Avatar ${index + 1}`}
                            style={{
                              width: 50,
                              height: 50,
                              borderRadius: "50%",
                            }}
                          />
                        </AvatarGrid>
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Auth_btn label={"Sign Up"} type={"submit"} />
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
                {/* <Lottie
                  style={{ width: "25%", marginTop: -90, marginLeft: 40 }}
                  animationData={rocket}
                  loop
                  autoplay
                /> */}
              </Box>
            </form>
          </Box>
          <Box sx={{ width: "70%" }}>
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

export default SignupForm;
