import React from 'react'
import { Typography } from '@mui/material';

const TutorialContent = (props) => {
  return (
    <Typography variant="h5" sx={{ mx: 5, mb: 2, lineHeight: "180%" }}>
      <div dangerouslySetInnerHTML={{__html: props.content}}/>
    </Typography>
  )
}

export default TutorialContent;