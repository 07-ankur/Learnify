import React from 'react'
import { Typography } from '@mui/material'
import Title from '../../components/Title'

const BlogContent = (props) => {
  return (
    <>
        <Title sx={{color:'#B6976A',  mb:1,mt:4}} variant={{ xs: "h6", sm: "h4" }}>
            {props.subtitle}
        </Title>
        <Typography sx={{mb:4}} variant='h5'>
            {props.para}
        </Typography>
    </>
  )
}

export default BlogContent