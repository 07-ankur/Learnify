import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import QuizIcon from '@mui/icons-material/Quiz';
import BookIcon from '@mui/icons-material/Book';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BarChartIcon from '@mui/icons-material/BarChart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import {Divider} from '@mui/material';
import Skillchart from './Skillchart';

const Section1 = () => {

  return (
    <Box sx={{mt:15,display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'center', textAlign:'center'}}>
      <Typography variant='h2' sx={{color:'cyan'}}><QueryStatsIcon/> Progress Overview <QueryStatsIcon/></Typography>
      <Divider sx={{width:'75%',mt:1}} variant='middle'/>
      <Container
      sx={{
        width: "45em",
        borderRadius: "25px",
        height: "10em",
        mt:4,
        mb: 10,
        mx: 4,
        p: 3,
        pb:2,
        backgroundColor: "#transparent",
        boxShadow: "0 0 15px skyblue",
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
      }}
    >
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',mx:2,my:1}}>
      <Typography variant='h2' sx={{color:'cyan'}}>190</Typography>
      <Typography variant='h4' sx={{color:'skyblue'}}>Tutorials Completed</Typography>
      <BookIcon sx={{mt:1, color:'cyan', fontSize:'3em'}}/>
    </Box>
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',mx:2,my:1}}>
      
      <Typography variant='h2' sx={{color:'cyan'}}>20</Typography>
      <Typography variant='h4' sx={{color:'skyblue'}}>Quizes Completed</Typography>
      <QuizIcon sx={{mt:1, color:'cyan', fontSize:'3em'}}/>
    </Box>
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',mx:2,my:1}}>
      <Typography variant='h2' sx={{color:'cyan'}}>60 %</Typography>
      <Typography variant='h4' sx={{color:'skyblue'}}>Learning covered</Typography>
      <PsychologyIcon sx={{mt:1, color:'cyan', fontSize:'3em'}}/>
    </Box>
    </Container>
    <Typography variant='h1' sx={{color:'cyan'}}><BarChartIcon/> Skill Chart <BarChartIcon/></Typography>
    <Typography variant='h4' sx={{color:'skyblue'}}>Analyse Your Grip over various Topics</Typography>
    <Divider sx={{width:'75%',mt:1}} variant='middle'/>
    <Skillchart/>
    </Box>
  )
}

export default Section1