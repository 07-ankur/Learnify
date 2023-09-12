import { Box } from '@mui/system';
import { Grid } from '@material-ui/core';
import React from 'react';
import AnalysisCard from '../../components/Cards/AnalysisCard';
import { Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Analysis_Progress } from '../../utils/content';

const {ITEMS} = Analysis_Progress;

const Section1 = () => {
  return (
    <>
      <Box sx={{mt:15}}>
        <Box sx={{display:'flex', flexDirection:'row'}}>
        <Typography variant='h3' sx={{my:2.5,ml:3}}>
          In Progress
        </Typography>
        <ArrowRightAltIcon sx={{mt:2.5, fontSize:'200%'}}/>
        </Box>
        <Grid container alignItems="center">
        {ITEMS.map((item)=>(
          <Grid item xs={12} md={4} key={item.key}>
            <AnalysisCard img={item.img} {...item} />
          </Grid>
        ))}
      </Grid>
      </Box>
    </>
  )
}

export default Section1;