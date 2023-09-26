import React from 'react';
import { Box } from '@mui/material';

const StatusCard = () => {
  return (
    <Box sx={{height:'90vh',width:'26%',backgroundColor:'#4d4d4d',m:-1,p:-1}}>
      <Box sx={{display:'flex',alignItems:'row'}}>
        <Box sx={{height:'4vh',width:'4vh',backgroundColor:'#00a3cc',borderRadius:'50%',m:1.5,mb:0,display:'flex',justifyContent:'center',pt:0.5}}>*</Box>
        <Box sx={{display:'flex',alignItems:'center',mt:1.5}}>Not Answered</Box>
      </Box>
      <Box sx={{display:'flex',alignItems:'row'}}>
        <Box sx={{height:'4vh',width:'4vh',backgroundColor:'#00b300',borderRadius:'50%',m:1.5,mb:0,display:'flex',justifyContent:'center',pt:0.5}}>*</Box>
        <Box sx={{display:'flex',alignItems:'center',mt:1.5}}>Correct Answer</Box>
      </Box>
      <Box sx={{display:'flex',alignItems:'row'}}>
        <Box sx={{height:'4vh',width:'4vh',backgroundColor:'crimson',borderRadius:'50%',m:1.5,mb:0,display:'flex',justifyContent:'center',pt:0.5}}>*</Box>
        <Box sx={{display:'flex',alignItems:'center',mt:1.5}}>Wrong Answer</Box>
      </Box>
      <Box sx={{borderBottom: 1, borderColor: 'grey',my:2.5}}></Box>
    </Box>
  )
}

export default StatusCard;