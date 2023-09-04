import React from 'react'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import BlogCard from '../../components/Cards/BlogCard'
import { Blogs } from '../../utils/content'

const {ITEMS}  = Blogs

const Section2 = () => {

  return (
    <Box sx={{background: "#37273C",mt:-2,mb:10}}>
      <Grid container alignItems="center">
        {ITEMS.map((item)=>(
          <Grid item xs={12} md={6} key={item.title}>
            <BlogCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Section2