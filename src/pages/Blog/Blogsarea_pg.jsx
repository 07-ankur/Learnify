import { Box, Container } from '@mui/system';
import Title from '../../components/Title';
import React from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Typography } from '@mui/material';
import Footer from '../../components/Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Divider} from '@mui/material';
import { Blogs } from '../../utils/content';
import BlogContent from './BlogContent';
import { useNavigate } from 'react-router-dom';
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import { useLocation } from 'react-router-dom';

const {ITEMS} = Blogs;

const Blogsarea_pg = () => {

  const location = useLocation();

  let id;

  for (let i = 0; i < ITEMS.length; i++) {
    if (location.pathname === `/blog/${ITEMS[i].title.replace(/ /g, '-')}`) {
      id = ITEMS[i].key-1;
      break; // Exit the loop once a match is found
    }
  }

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <>
    <OutlinedButton arrowRev onClick={handleGoBack} sx={{mt:3,mx:3}} fit>
      Back
    </OutlinedButton>
    <Container maxWidth="md">
      <Box sx={{mt:8}} display='flex' flexDirection='row'>
      <Typography variant='h5'>{ITEMS[id].tag} | </Typography>
      <Typography variant='h5'>| {ITEMS[id].date}</Typography>
      </Box>
      <Divider sx={{width:'95%',mt:2}} variant='middle'/>
      <Title sx={{color:'#B6976A',  mb:2,mt:4}} variant={{ xs: "h4", sm: "h2" }}>{ITEMS[id].title}</Title>
      <Box sx={{mb:7,mx:3}} display='flex' flexDirection='row'>
      <PermIdentityIcon style={{fontSize:'1.5em',color:'#B6976A'}}/>
      <Typography sx={{ml:1,mt:1}} variant='h6'>{ITEMS[id].author}</Typography>
      </Box>
      <Box display='flex' justifyContent='center'>
        <img
          src={ITEMS[id].image}
          alt="No Image"
          style={{width:'40em',height:"20em",borderRadius:'25px'}}
        />
      </Box>
      <Divider sx={{width:'95%',mt:2}} variant='middle'/>
      {
        ITEMS[id].content.map((item)=>(
          <BlogContent key={item.key} subtitle={item.subtitle} para={item.para}/>
        ))
      }
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography sx={{mt:4}} variant='body1'>Share this post</Typography>
        <Box sx={{mt:2,mb:5}} display='flex' flexDirection='row' alignItems='center'>
          <a target='blank' style={{color:'white'}} href='https://www.facebook.com'><FacebookIcon sx={{mx:3,my:1}}/></a>
          <a target='blank' style={{color:'white'}} href='https://www.linkedin.com'><LinkedInIcon sx={{mx:3,my:1}}/></a>
          <a target='blank' style={{color:'white'}} href='https://twitter.com/'><TwitterIcon sx={{mx:3,my:1}}/></a>
        </Box>
      </Box>
    </Container>
    <Footer/>
    </>
  )
}

export default Blogsarea_pg;