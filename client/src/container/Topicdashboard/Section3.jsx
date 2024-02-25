import { Box, Container } from "@mui/system";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { React, useState } from "react";
import Lottie from "lottie-react";
import Choose_anim from "../../assets/animations/Choose_anim.json";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import TaskIcon from "@mui/icons-material/Task";
import { Analysis_Progress } from "../../utils/contents/AnalyticsContent";

const { TOPICS } = Analysis_Progress;

const Section3 = () => {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    backgroundColor: "transparent",
    border: `2px solid skyblue`,
    marginBottom: "3%",
    "&:not(:last-child)": {
      //   borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={
        <ArrowForwardIosSharpIcon
          sx={{ color: "skyblue", fontSize: "1.5rem" }}
        />
      }
      {...props}
    />
  ))(({ theme }) => ({
    "&:hover": {
      backgroundColor: "#22303C",
    },

    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "white",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "yellow",
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(3),
    borderTop: "1px solid skyblue",
  }));

  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{ mt: 2, mb: 10, p: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: "skyblue" }}>
          Track Your Progress
        </Typography>
        <Lottie
          style={{ width: "15%", marginTop: 0 }}
          animationData={Choose_anim}
          loop
        />
      </Box>
      {TOPICS[0].topics.map((item) => {
        const count = item.subtitle
          .map((subtitle) => (subtitle.completion ? 1 : 0))
          .reduce((acc, val) => acc + val, 0);

        const length = item.subtitle.length;

        return (
          <Accordion
            expanded={expanded === `panel${item.key}`}
            onChange={handleChange(`panel${item.key}`)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  height: "3em",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {" "}
                <Box sx={{ width: "50%" }}>
                  <Typography variant="h4" sx={{ color: "skyblue" }}>
                    {item.key} . {item.title}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h5" sx={{ color: "skyblue" }}>
                    {count} of {length} Lessons completed
                  </Typography>
                  <BorderLinearProgress
                    variant="determinate"
                    value={(count / length) * 100}
                  />
                </Box>
                <OutlinedButton arrow sx={{ mx: 5 }} fit>
                  Tutorials
                </OutlinedButton>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {item.subtitle.map((x) => (
                  <ListItem disablePadding>
                    <ListItemButton sx={{ cursor: "auto" }}>
                      <ListItemIcon>
                        {x.completion ? (
                          <TaskIcon sx={{ color: "#00ffbf" }} />
                        ) : (
                          <InsertDriveFileIcon sx={{ color: "grey" }} />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={x.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
};

export default Section3;
