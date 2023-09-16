import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React,{useState} from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from '@mui/material/styles';
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const AnalysisCard = ({title,points,completion,stars,img,width}) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const navigate = useNavigate(); 

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

  return (
    <Box
      onClick={()=>{navigate(`/analytics-dashboard/${title.replace(/ /g, '-')}`)}}
      sx={{
        width: "16em",
        borderRadius: "25px",
        height: "20em",
        mt:4,
        mb: 8,
        mx: 4,
        p: 3,
        pb:10,
        cursor: "pointer",
        backgroundColor: "#192734",
        boxShadow: "0 0 15px skyblue" ,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 0 15px cyan"
        }
      }}
    >
      <Typography variant="h4" sx={{ color: "skyblue", mt: 2, position:'relative', top:-25 }}>
          Analyze
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "45%",
        }}
      >
        <Lottie
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: width, marginTop: -30 }}
          animationData={img}
          loop={isHovered}
        />
      </Box>
      <Box sx={{display:'flex', flexDirection:'row'}}>
        <Box sx={{border:'2px solid cyan', borderRadius:'25%', width:'15%', height:'0%',mt:2.5, ml:-3}}/>
        <Box
        sx={{
          p: 1,
          backgroundColor: "#192734",
          boxShadow: "0 0 5px cyan",
          borderRight: "5px solid cyan",
          borderLeft: "5px solid cyan",
          borderRadius: "25px",
          width: "66%",
          height: "15%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ mt: 1, mr: 1.5, color: "cyan" }}>
            {stars} 🌟
          </Typography>
          <Typography variant="h5" sx={{ mt: 1, color: "cyan" }}>
            {points} Points
          </Typography>
        </Box>
      </Box>
      <Box sx={{border:'2px solid cyan', borderRadius:'25%', width:'35%', height:'0%', mt:2.5,mr:-4}}/>
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography align="center" variant="h3" sx={{ mb: 0.5, color: "cyan" }}>
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" sx={{color:'skyblue',mb:1}}>
          {completion} % completed
        </Typography>
      </Box>
      <BorderLinearProgress variant="determinate" value={completion} />
    </Box>
  );
};

export default AnalysisCard;
