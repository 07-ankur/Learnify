import React, { useState, useEffect, useCallback } from "react";
import { Box, Container, Grid, Typography, TextField } from "@mui/material";
import { signupContent } from "../../utils/contents/MainContent";
import { ThemeProvider } from "@emotion/react";
import { authTheme } from "../../utils/theme/index";
import styled from "styled-components";
import Auth_btn from "../../components/Buttons/Auth_btn";
import anim1 from "../../assets/animations/signup.json";
import rocket from "../../assets/animations/rocket.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Cookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

const TextFieldstyled = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 3px solid #2f8af5;
    }
  }
`;

const { Logo_drk } = signupContent;

const Edit = () => {
  const cookies = new Cookies();
  const token = cookies.get("jwt_token");
  const decodedToken = jwtDecode(token);

  const [email, setEmail] = useState(decodedToken.email);
  const [firstname, setFirstname] = useState(decodedToken.firstname);
  const [lastname, setLastname] = useState(decodedToken.lastname);
  const [id, setId] = useState(decodedToken._id);

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        setIsLoading(true);

        if (!password) {
          toast.error("Please enter the password!!");
        }

        const passwordVerificationRes = await axios.post(
          "http://localhost:3000/api/auth/login",
          {
            email,
            password,
          }
        );

        if (passwordVerificationRes.status === 200) {
          const updateUserRes = await axios.put(
            `http://localhost:3000/api/user/updateuser/${id}`,
            {
              firstname,
              lastname,
              newPassword,
            }
          );

          if (updateUserRes.status === 200) {
            setIsLoading(false);
            toast.success("User updated successfully!");
          }
        } else {
          toast.error("Incorrect password!");
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    },
    [email, password, id, firstname, lastname, newPassword, navigate]
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
              Edit Your New Account
            </Typography>
            <Typography
              variant="h4"
              sx={{ letterSpacing: "0.01em", mb: 3, color: "#4d5980" }}
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
                    disabled
                    fullWidth
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
                    label="Current Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={7}>
                  <TextFieldstyled
                    variant="outlined"
                    fullWidth
                    label="New Password"
                    name="New password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Auth_btn label={" " + "Edit" + " "} type={"submit"} />
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
                  Login again to make the changes{" "}
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

export default Edit;
