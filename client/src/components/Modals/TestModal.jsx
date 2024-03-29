import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Dialog, Divider, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { feedbackTheme } from "../../utils/theme";
import { CssBaseline } from "@mui/material";
import OutlinedButton from "../Buttons/OutlinedButton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const TestModal = ({
  open,
  onClose,
  totalQuestions,
  questionsAnswered,
  correctlyAnsweredCount,
  wrongAnsweredCount,
}) => {
  const navigate = useNavigate();

  const Attempted =
    questionsAnswered === 0
      ? 0
      : Math.round((questionsAnswered / totalQuestions) * 100);
  const Accuracy =
    questionsAnswered === 0
      ? 0
      : Math.round((correctlyAnsweredCount / totalQuestions) * 100);

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
            border: "3px solid #10D59B",
            display: "flex",
            p: 3,
            height: "auto",
            minHeight: "70vh",
            minWidth: "90vh",
            flexDirection: "column",
            // border:'3px solid crimson'
          }}
        >
          {" "}
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
          <Typography variant="h3" sx={{ color: "#10D59B" }}>
            Performance Summary
          </Typography>
          <Divider sx={{ border: "2px solid black" }} />
          <Box sx={{ display: "flex", flexDirection: "column", my: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                my: 0.5,
                mx: 5,
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ color: "#2f8af5" }}>
                Total Questions
              </Typography>
              <Typography variant="h4">{totalQuestions}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                my: 0.5,
                mx: 5,
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ color: "#2f8af5" }}>
                Questions Attempted
              </Typography>
              <Typography variant="h4">{questionsAnswered}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                my: 0.5,
                mx: 5,
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ color: "#00b300" }}>
                Correctly Answered
              </Typography>
              <Typography variant="h4">{correctlyAnsweredCount}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                my: 0.5,
                mx: 5,
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ color: "#ff3333" }}>
                Wrong Answered
              </Typography>
              <Typography variant="h4">{wrongAnsweredCount}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                my: 0.5,
                mx: 5,
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ color: "#2f8af5" }}>
                Accuracy
              </Typography>
              <Typography variant="h4">{Accuracy}%</Typography>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center'}}> 
            <Divider sx={{ border: "1px solid black", width:'90%',mb:1 }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                my: 0.5,
                mx: 5,
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ color: "#10D59B" }}>
                Quiz Score
              </Typography>
              <Typography variant="h4" sx={{ color: "#10D59B" }}>
                {(Accuracy + Attempted) / 2}%
              </Typography>
            </Box>
          </Box>
          <OutlinedButton
            sx={{ mb: 1 }}
            onClick={onClose}
          >
            Go back to Quiz
          </OutlinedButton>
          <OutlinedButton
            onClick={() => {
              navigate("/quizMastery/React-JS");
            }}
          >
            Go back to Dashboard
          </OutlinedButton>
          {Attempted + Accuracy > 180 ? (
            <Typography variant="h5" sx={{ color: "#2f8af5", mt: 2, mx: 3 }}>
              Excellent Performance!! Keep it going
            </Typography>
          ) : Attempted + Accuracy > 150 ? (
            <Typography variant="h5" sx={{ color: "#2f8af5", mt: 2, mx: 3 }}>
              Good Job!! Practice more to perform better
            </Typography>
          ) : (
            <Typography variant="h5" sx={{ color: "#2f8af5", mt: 2, mx: 3 }}>
              You need to review the concept once again to improve understanding
            </Typography>
          )}
        </Container>
      </BootstrapDialog>
    </ThemeProvider>
  );
};

export default TestModal;
