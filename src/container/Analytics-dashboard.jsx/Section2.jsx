import { Box } from "@mui/system";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import { cyan } from "@mui/material/colors";
import React from "react";
import { Topics } from "../../utils/content";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import Lottie from "lottie-react";
import Choose_anim from '../../assets/animations/Choose_anim.json'

const { ITEMS } = Topics;

const Section2 = () => {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    backgroundColor:'transparent',
    // border: `1px solid ${theme.palette.divider}`,
    // borderTop: `1px solid skyblue`,
    // borderBottom: `1px solid skyblue`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{color:'skyblue', fontSize: "1.5rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(4),
    borderTop: "1px solid skyblue"
  }));

  const CyanSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: cyan[300],
      "&:hover": {
        backgroundColor: alpha(cyan[300], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: cyan[600],
    },
  }));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{ mt: 10,mb:10 }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', height:'2em'}}>
          <Typography variant="h3" sx={{color:'skyblue'}}>Choose the Topics to Analyse</Typography>
          <Lottie
            style={{width:'20%',marginTop:-50}}  
            animationData={Choose_anim}
            loop
          />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup row={2}>
            {ITEMS.map((item) => (
              <Box sx={{mx:3, width:'20%',fontSize:'3.5em'}}>
              <FormControlLabel
                sx={{ color: "white"  }}
                control={<CyanSwitch sx={{mx:2}} defaultChecked />}
                label={<span style={{ fontSize: "1.5em" }}>{item.title}</span>}
              />
              </Box>
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Section2;
