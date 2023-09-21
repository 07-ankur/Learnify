import React, { useState } from "react";
import { Box, Dialog, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
  Container,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  FormHelperText,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { feedbackTheme } from "../../utils/theme";
import { CssBaseline } from "@mui/material";
import OutlinedButton from "../Buttons/OutlinedButton";
import TelegramIcon from "@mui/icons-material/Telegram";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import Lottie from "lottie-react";
import Sent_anim from "../../assets/animations/Sent_anim2.json";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ErrorReportModal = ({ open, onClose }) => {
  const [value, setValue] = useState("Yes");
  const [submit, setSubmit] = useState(false);
  const [errorType, seterrorType] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleTypeChange = (event) => {
    seterrorType(event.target.value);
  };

  const handleSubmit = () => {
    setSubmit(true);
  };

  return (
    <ThemeProvider theme={feedbackTheme}>
      <CssBaseline />
      <BootstrapDialog
        BackdropClick={false}
        maxWidth="sm"
        open={open}
        onClose={onClose}
      >
        <Container
          sx={{
            bgcolor: "whitesmoke",
            display: "flex",
            p: 3,
            height: "auto",
            minHeight: "70vh",
            minWidth: "90vh",
            flexDirection: "column",
            borderRadius: "15px",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              "&:hover": { bgcolor: "lightpink" },
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          {submit ? (
            <>
              <Typography variant="h3">
                We are sorry for the incovinience caused to you 😔
              </Typography>
              <Lottie
                loop={false}
                animationData={Sent_anim}
                style={{ width: "50%" }}
              />
              <Typography variant="h4">
                But hey! Relax, We are on it...
                <MarkEmailReadIcon
                  sx={{ color: "green", fontSize: "1.5em", mx: 2 }}
                />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h2">Report Error to Us</Typography>
              <Typography variant="h5" sx={{ my: 1, color: "#595959" }}>
                How is your experience with quizMastery??
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 0 32px",
                }}
              >
                <FormControl sx={{ m: 1, minWidth: 220 }} error>
                  <InputLabel id="demo-simple-select-error-label">
                    Error type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-error-label"
                    id="demo-simple-select-error"
                    value={errorType}
                    label="Error Type"
                    onChange={handleTypeChange}
                    renderValue={(value) => `⚠️ ${value}`}
                  >
                    <MenuItem value="">
                    </MenuItem>
                    <MenuItem value={'Portal'}>Portal</MenuItem>
                    <MenuItem value={'Questions'}>Questions</MenuItem>
                    <MenuItem value={'Solutions'}>Solutions</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Typography variant="h4" sx={{ mb: 1, color: "black" }}>
                Describe the error here 
              </Typography>
              <textarea
                style={{
                  border: "2px solid black",
                  borderRadius: "10px",
                  minHeight: "7em",
                  maxWidth: "30em",
                  fontSize: "0.8em",
                }}
              />
              <Box>
                <Typography variant="h5" sx={{ my: 1, color: "#595959" }}>
                  May we follow you up for more info?
                </Typography>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      sx={{ color: "black" }}
                      value="Yes"
                      control={<Radio sx={{ color: "black" }} />}
                      label="Yes"
                    />
                    <FormControlLabel
                      sx={{ color: "black" }}
                      value="No"
                      control={<Radio sx={{ color: "black" }} />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <OutlinedButton
                sx={{ width: "25%", my: 1 }}
                onClick={handleSubmit}
              >
                Send
                <TelegramIcon />
              </OutlinedButton>
            </>
          )}
        </Container>
      </BootstrapDialog>
    </ThemeProvider>
  );
};

export default ErrorReportModal;
