import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react'
import Title from '../../components/Title';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Lottie from 'lottie-react';
import Stars_anim from '../../assets/animations/Stars_anim.json'
import Points_anim from '../../assets/animations/points_anim.json'

const Section2 = () => {

  const [isHovered, setIshovered] = useState(false);

  return (
    <Box sx={{mt:15}}>
      <Container>
        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
        <ArrowRightAltIcon sx={{fontSize:'3em', color:'skyblue',mt:-0.5}}/>
      <Title sx={{color:'skyblue'}} variant={{ xs: "h3", sm: "h2" }}>
        Learnify Points
      </Title>
      <Lottie 
        style={{width:'20%'}}
        animationData={Points_anim}
        loop={!isHovered}
        autoplay
        />
      </Box>
      <Typography variant='h4' sx={{mt:-8, mx:2}}>
      The points system is designed to provide a clear and effective way to gauge your understanding and proficiency in a specific subject. Each topic is evaluated on a scale of 100 points, and you have the opportunity to increase your score by actively engaging in tutorials, taking assessments, and dedicating more time to practice. This system offers a transparent means of assessing your grasp and readiness in any given topic, allowing you to track and improve your knowledge and skills.
      </Typography>
      <Typography variant='h4' sx={{mt:3, mx:6, color:'skyblue'}}>
      "Chase the points, and you'll catch your dreams. Every point earned is a step closer to mastery. Keep pushing, keep learning, and keep scoring more !"
      </Typography>
        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',mt:-2}}>
        <ArrowRightAltIcon sx={{fontSize:'3em', color:'skyblue',mt:-0.5}}/>
      <Title sx={{color:'skyblue'}} variant={{ xs: "h3", sm: "h2" }}>
        Collecting Stars
      </Title>
      <Lottie 
          style={{width:'30%'}}
          animationData={Stars_anim}
          loop 
          autoplay
        />
      </Box>
      <Typography variant='h4' sx={{mt:-15, mx:2}}>
      You have two exciting ways to collect stars and showcase your excellence in our learning system. Firstly, by diligently completing all the tutorials, you earn stars as a testament to your commitment and thorough understanding of the subject matter. Secondly, by achieving an impressive score of more than 90% in the quiz, you demonstrate not just competence but a high level of mastery in the topic. These stars not only recognize your accomplishments but also inspire you to strive for excellence, encouraging you to engage deeply with the learning material and aim for that coveted stellar performance. 
      </Typography>
      <Typography variant='h4' sx={{mt:3, mx:6, color:'skyblue'}}>
      ""Stars are not only found in the sky; they're earned through dedication and excellence. Keep reaching for the stars, for they are the reward for your unwavering pursuit of excellence !"
      </Typography>
      </Container>
    </Box>
  )
}

export default Section2;