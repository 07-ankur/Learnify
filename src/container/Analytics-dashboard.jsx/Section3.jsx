import { Box } from '@mui/system';
import { Grid } from '@material-ui/core';
import React from 'react';
import AnalysisCard from '../../components/Cards/AnalysisCard';
import { Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Analysis_Progress } from '../../utils/contents/AnalyticsContent';

const {TOPICS} = Analysis_Progress;

const Section3 = () => {
  return (
    <>
      <Box sx={{mt:10}}>
        <Box sx={{display:'flex', flexDirection:'row'}}>
        <Typography variant='h3' sx={{my:2.5,ml:3,color:'skyblue'}}>
          Track your Progress
        </Typography>
        <ArrowRightAltIcon sx={{mt:2.5, fontSize:'200%'}}/>
        </Box>
        <Grid container alignItems="center">
        {TOPICS.map((item)=>(
          <Grid item xs={12} md={4} key={item.key}>
            <AnalysisCard img={item.img} {...item} />
          </Grid>
        ))}
      </Grid>
      </Box>
    </>
  )
}

export default Section3;