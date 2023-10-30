import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React from "react";
import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Topics } from "../../utils/contents/MainContent";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Gps_anim from "../../assets/animations/Gps_anim.json"

const { SKILLS } = Topics;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#192734",
  ...theme.typography.h3,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "skyblue",
  cursor: "pointer",
  ":hover": { backgroundColor: "skyblue", color: "#192734" },
}));

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "180vh",
        backgroundImage:
          "linear-gradient(to right,#0E1628 , #0F1729, #0F1729,#0E1628,#0F1729,#0F1729,#0E1628)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          height: "35%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      > 
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Lottie
          animationData={Gps_anim}
          loop
          style={{width:'15%'}}
        />
        <Typography sx={{ fontSize: "5em", color: "skyblue", mt:2.5 }}>
         Mapper{" "}
        </Typography>
        <Lottie
          animationData={Gps_anim}
          loop
          style={{width:'15%'}}
        />
        </Box>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Your GPS for success
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", color: "lightgrey" }}
        >
          A powerful tool designed to help learners navigate their educational
          journey effectively. This is a visual roadmap and interactive guide
          that assists users in planning, tracking, and achieving their learning
          goals.
        </Typography>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Divider sx={{ width: "100%", my: 8 }} variant="middle">
          <Box
            sx={{
              border: "2px solid skyblue",
              borderRadius: "1em",
              p: 2,
              textAlign: "center"
            }}
          >
            Skill Based Roadmaps
          </Box>
        </Divider>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {SKILLS.map((ITEM) => (
            <Grid onClick={()=>{navigate(`/mapper/${ITEM.title.replace(/ /g, '-')}`)}} key={ITEM.key} item xs={6} sx={{ my: 1 }}>
              <Item>{ITEM.title}</Item>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
