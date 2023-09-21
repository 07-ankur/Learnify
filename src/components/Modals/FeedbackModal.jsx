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
} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { feedbackTheme } from "../../utils/theme";
import { CssBaseline } from "@mui/material";
import OutlinedButton from "../Buttons/OutlinedButton";
import TelegramIcon from "@mui/icons-material/Telegram";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { feedbackEmojis } from "../../utils/content";
import Lottie from "lottie-react";
import Sent_anim from "../../assets/animations/Sent_anim2.json";

const { Emojis } = feedbackEmojis;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const FeedbackModal = ({ open, onClose }) => {
  const [value, setValue] = useState("Yes");
  const [selectedEmojiIndex, setSelectedEmojiIndex] = useState(-1);
  const [submit, setSubmit] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleEmojiClick = (index) => {
    setSelectedEmojiIndex(index);
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
            flexDirection: "column",
            // border: "4px solid black",
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
                Your Feedback is important for us
              </Typography>
              <Lottie loop={false} animationData={Sent_anim} style={{ width: "50%" }} />
              <Typography variant="h4">
                Thanks for sharing !!
                <MarkEmailReadIcon
                  sx={{ color: "green", fontSize: "1.5em", mx: 2 }}
                />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h2">Share Your Feedback</Typography>
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
                {Emojis.map((item) => (
                  <Box
                    key={item.key}
                    sx={{
                      position: "relative",
                      fontSize: "2em",
                      mx: 3,
                      mt: 0.5,
                      zIndex: 100,
                      verticalAlign: "middle",
                      cursor: "pointer",
                      opacity: selectedEmojiIndex === item.key ? 1 : 0.35,
                      "&:hover": { opacity: 1 },
                    }}
                    onClick={() => handleEmojiClick(item.key)}
                  >
                    {item.icon}
                  </Box>
                ))}
              </Box>
              <Typography variant="h4" sx={{ mb: 1, color: "black" }}>
                Do you have any thoughts you would like to share with us??
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
                  May we follow you up on your feedback?
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

export default FeedbackModal;
