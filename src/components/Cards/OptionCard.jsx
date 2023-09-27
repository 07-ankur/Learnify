import React from 'react'
import { Box } from '@mui/material'

const OptionCard = (props) => {
  return (
    <Box sx={{ml:10,mt:1.5,cursor:'pointer', border:'2px solid grey', borderRadius:'25px', p:1.6,width:'70%',fontSize:'1em', '&:hover':{border:'3px solid #2f8af5', backgroundColor:'#6daef8', color:'black'}}} onClick={props.onClick}>{props.title}</Box>
  )
}

export default OptionCard;