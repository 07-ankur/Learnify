import React, { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import OTPInput from "otp-input-react";
import { Box, Grid, Container, Typography, TextField } from "@mui/material";
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
import { useVerificationStore } from "../../hooks/useVerificationStore";
import { useResendStore } from "../../hooks/useResendStore";

const TextFieldstyled = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 3px solid #2f8af5;
    }
  }
`;

const { Logo_drk } = signupContent;

const VerifyOtp = () => {
  const location = useLocation();
  const { email } = location.state || {};
  const {password} = location.state || {};
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {verify} = useVerificationStore();
  const {resend} = useResendStore();

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      verify(email,otp,navigate);
    },
    [email,otp]
  );

  const onResend = useCallback(
    async (event) => {
      resend(email);
    },
    [email]
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
          <Box sx={{ width: "75%" }}>
            <img src={Logo_drk} style={{ width: "20%" }}></img>
            <Typography
              variant="h2"
              sx={{ letterSpacing: "0.01em", mt: 1, color: "#3ea886" }}
            >
              Verify Your New Account
            </Typography>
            <Typography
              variant="h4"
              sx={{ letterSpacing: "0.01em", mb: 3, color: "#4d5980" }}
            >
              Level up your Learning with Learnify!!{" "}
            </Typography>
            <form onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <TextFieldstyled
                    disabled
                    variant="outlined"
                    fullWidth
                    label={email}
                    name="email"
                    type="email"
                  />
                </Grid>
                <Grid sx={{ mt: 1, ml: 1 }} item xs={7}>
                  <Typography
                    variant="h4"
                    sx={{ letterSpacing: "0.01em", mb: 3, color: "#4d5980" }}
                  >
                    Enter OTP:{" "}
                  </Typography>
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    autoFocus
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
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
                <Auth_btn label={"Verify"} type={"submit"} />
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
                  Didn't receive any OTP?{" "}
                </Typography>
                <Typography
                  variant="h5"
                  onClick={onResend}
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
                  Resend OTP{" "}
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

export default VerifyOtp;
