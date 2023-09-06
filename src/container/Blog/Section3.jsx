import React from 'react'
import { Box } from '@mui/system'
import { Divider, Typography } from '@mui/material'
import {TextField} from '@mui/material'
import Auth_btn from '../../components/Buttons/Auth_btn'

const Section3 = () => {
  return (
    <Box sx={{bgcolor:'#37273C',p:10, borderBottom:'2px solid #B6976A'}}>
        <Divider sx={{width:'100%',mb:8}} variant='middle'/>
        <Typography variant='h4' align='center' sx={{bgcolor:'#37273C',letterSpacing:'0.05em', color:'#B6976A', mb:1}}>Subscribe to our Newsletter</Typography>
        <Typography variant='h6' align='center' sx={{bgcolor:'#37273C',letterSpacing:'0.05em'}}>Receive weekly updates on new posts and features</Typography>
        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <TextField
          sx={{ m: 1, mt: 3, width: "30ch" }}
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
        <Box sx={{mt:2}}>
        <Auth_btn label={"Join"} />
        </Box>
        </Box>
    </Box>
  )
}

export default Section3 