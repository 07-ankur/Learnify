import { Box,Container, Typography,Stack,Button } from '@mui/material'
import React from 'react'
import {section1Content } from '../../utils/content';
import Email_Inpt from '../../components/Inputs/Email_Inpt';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

const {
    MainBG,
    ShootingStarImage,
    title,
    subtitle1,
    subtitle2,
    subtitle3,
  }=section1Content;

const Section1 = () => {

  const navigate = useNavigate();

  return (
    <Box>
        {/* <MainBackground/> */}
        <Box sx={{position:'absolute',zIndex:-10,bottom:'0.1%'}}>
            <img src={MainBG} style={{width:'100%', opacity:0.7}}></img>
        </Box>
        {/* <Background elements/> */}
        <Box sx={{position:'absolute', zIndex:-1, top:0, left:0,right:0}}>
            <img src={ShootingStarImage} style={{position:'absolute',top:'30px',right:'15%',width:'750px'}}/>   
            <img src={ShootingStarImage} style={{position:'absolute',top:'30px',right:'5%', width:'750px'}}/>   
        </Box>
        {/* <Content/> */}
        <Box sx={{height:'120vh', width:'100vh', mx:'10%',py:'19%'}}>
            <Stack alignItems='flex-start'>
                <Typography variant='h1' sx={{letterSpacing:'0.05em',mb:3}}>{title}</Typography>
                <Typography variant='h3' sx={{mb:1,color:'#f0f8ffbc'}}>{subtitle1}</Typography>
                <Typography variant='h3' sx={{mb:1,color:'#f0f8ffbc',
                letterSpacing:'0.05em'}}>{subtitle2}</Typography>
                <Typography variant='h3' sx={{mb:1,color:'#f0f8ffbc',letterSpacing:'0.05em'}}>{subtitle3}</Typography>
                <Stack direction={{xs:'column',md:'row'}} alignItems='center'>
                  <Email_Inpt/>
                  <Button onClick={()=>{navigate('/signup')}} sx={{color:'whitesmoke',borderColor:'white',fontSize:'large',px:1.8,py:0.8,bottom:3}} variant="outlined">Get Started &nbsp;<SendIcon fontSize='small'/></Button>
                </Stack>
            </Stack>
        </Box>
    </Box>
  )
}

export default Section1;