import React from 'react'
import { Box } from '@mui/material'

const OptionCard = (props) => {
  return (
    <Box sx={{ml:10,mt:1.8,cursor:'pointer', border:'2px solid grey', borderRadius:'25px', p:2,width:'70%',fontSize:'1em'}} onClick={props.onClick}>{props.title}</Box>
  )
}

export default OptionCard;