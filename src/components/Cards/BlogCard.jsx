import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import OutlinedButton from "../Buttons/OutlinedButton";
import Title from "../Title";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const BlogCard = ({ title, description,image,date,author }) => {
  return (
    <Box sx={{
      height: "22em",
      width:"20em",
      my:4,
      mx:4,
      py:1,
      px:3,
      position: "relative",
      borderRadius: "30px",
      border:"2px solid #f0f8ffbc",
      cursor:'pointer',
      bgcolor:'black'
    }}>
      <Stack sx={{display:'flex', alignItems:'center'}}>
        <img
          src={image}
          alt="No Image"
          style={{width:'19em',height:"10em",borderRadius:'25px'}}
        />
        <Title sx={{color:'#B6976A',mb:2,mt:2}} variant={{ xs: "h6", sm: "h5" }}>{title}</Title>
        <Typography variant="body2" color="#fff">
          {description}
        </Typography>
      </Stack>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',px:3}}>
        <Box sx={{display:'flex',flexDirection:'row', alignItems:'flex-start',mt:2}}>
          <CalendarMonthIcon style={{color:'#B6976A'}}/> <Typography sx={{mt:0.5,mx:0.5,bottom:0}} variant="body2" color="#fff">{date}</Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row', alignItems:'flex-start',mt:2}}>
          <PermIdentityIcon style={{color:'#B6976A'}}/> <Typography sx={{mt:0.5,mx:0.5}} variant="body2" color="#fff">{author}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;