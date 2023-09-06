import { Box, Hidden, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../Title";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useNavigate } from 'react-router-dom'

const BlogCard = ({title, description, image, date, author}) => {

  const navigate = useNavigate(); 

  return (
    <Box onClick={()=>{navigate(`/blog/${title.replace(/ /g, '-')}`)}} sx={{
      height: "22em",
      width:"20em",
      my:4,
      mx:10,
      py:1,
      px:3,
      position: "relative",
      borderRadius: "30px",
      border:"3px solid #B6976A",
      '&:hover' : {
        border: "4px solid #f0f8ffbc"
      },
      cursor:'pointer',
      bgcolor:'#1a1a1a',
      overflow:'hidden'
    }}>
      <Stack sx={{display:'flex', alignItems:'center'}}>
        <img
          src={image}
          alt="No Image"
          style={{width:'19em',height:"10em",borderRadius:'25px'}}
        />
        <Title sx={{color:'#B6976A',mb:1,mt:2}} variant={{ xs: "h6", sm: "h5" }}>{title}</Title>
        <Typography sx={{maxHeight:'4.5em', overflow:'hidden'}} variant="body2" color="#fff">
          {description}
        </Typography>
        <Typography variant="body2" sx={{color:'#B6976A'}}>
          Read More .....
        </Typography>
      </Stack>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',px:2}}>
        <Box sx={{display:'flex',flexDirection:'row', alignItems:'flex-start',mt:2}}>
          <CalendarMonthIcon style={{color:'#B6976A'}}/> <Typography sx={{mt:1,mx:0.5,bottom:0}} variant="body2" color="#fff">{date}</Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row', alignItems:'flex-start',mt:2}}>
          <PermIdentityIcon style={{color:'#B6976A'}}/> <Typography sx={{mt:1,mx:0.5}} variant="body2" color="#fff">{author}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;