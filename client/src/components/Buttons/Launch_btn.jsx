import { Button } from '@mui/material'
import { KeyboardArrowRight } from '@material-ui/icons'
import React from 'react'

const Launch_btn = ({sx={},...props}) => {
  return (
    <Button variant='contained' sx={{borderRadius:4.5,height:58,px:2.5,my:2}}>
       {props.title}
       <KeyboardArrowRight/>
    </Button>
  )
}

export default Launch_btn