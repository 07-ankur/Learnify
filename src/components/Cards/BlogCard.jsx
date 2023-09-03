import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import OutlinedButton from "../Buttons/OutlinedButton";
import Title from "../Title";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import image from '../../assets/images/AI_blog.jpg'

const BlogCard = ({ title, subtitle }) => {
  return (
    <Box sx={{
      height: "23em",
      width:"20em",
      my:4,
      mx:8,
      p:2,
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
          style={{width:'19em',height:"10em",borderRadius:'30px'}}
        />
        <Title sx={{color:'#B6976A',mb:2,mt:2}} variant={{ xs: "h6", sm: "h5" }}>The Evolution of Artificial Intelligence: From Theory to Reality</Title>
        <Typography variant="body2" color="#fff">
          Exploring AI's Impact on Industries and Daily Life. Dive into the fascinating world of AI, discover its real-world applications, and understand how it's shaping various industries.
        </Typography>
      </Stack>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',px:3}}>
        <Box sx={{display:'flex',flexDirection:'row', alignItems:'flex-start',my:2}}>
          <CalendarMonthIcon style={{color:'#B6976A'}}/> <Typography sx={{mt:0.5}} variant="body2" color="#fff">Nov 2, 2019</Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row', alignItems:'flex-start',my:2}}>
          <PermIdentityIcon style={{color:'#B6976A'}}/> <Typography sx={{mt:0.5}} variant="body2" color="#fff">Rishav Sharma</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;