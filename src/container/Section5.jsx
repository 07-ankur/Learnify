import { Container, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Title from "../components/Title";
import { section5Content } from "../utils/content";
import Quiz_anim from './../assets/lottie-animations/quiz.json';
import Analysis_anim from './../assets/lottie-animations/analysis2.json';
import Lottie from 'lottie-react';

const { top,middle, bottom } = section5Content;

const Section5 = () => {
  const [tabValue, setTabValue] = useState(0);
// 
  return (
    <Container sx={{ mt: { xs: 15, md: 20, lg: 25 } }}>
      {/* TOP */}
      <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
        {/* Left */}
      <Grid item xs={12} md={6}>
        <Lottie animationData={Analysis_anim} loop autoplay/>
        </Grid>
        {/* Right */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 580 }}>
            <Title variant={{ xs: "h2", md: "h1" }}>{top.title}</Title>
            <Typography variant="body1" color="text.secondary" sx={{ pb: 2 }}>
              {top.subtitle}
            </Typography>

            <OutlinedButton arrow fit>
              Explore Now
            </OutlinedButton>
          </Stack>
        </Grid>

        {/* Right */}
        
      </Grid>
      <Grid sx={{mt:5}} container spacing={10} flexWrap="wrap-reverse" alignItems="center">
        {/* Left */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 580 }}>
            <Title variant={{ xs: "h2", md: "h1" }}>{middle.title}</Title>

            <Typography variant="body1" color="text.secondary" sx={{ pb: 2 }}>
              {middle.subtitle}
            </Typography>

            <OutlinedButton arrow fit>
              Explore Now
            </OutlinedButton>
          </Stack>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <Lottie animationData={Quiz_anim} loop autoplay/>
        </Grid>
      </Grid>

      {/* BOTTOM */}

      <Grid
        container
        spacing={8}
        flexWrap="wrap-reverse"
        alignItems="center"
        sx={{ mt: { xs: 5, md: 10 } }}
      >
        {/* Left */}
        <Grid item xs={12} md={6}>
          <img
            src={bottom.TABS[tabValue].image}
            style={{ width: "80%", objectFit: "contain" }}
          />
        </Grid>

        {/* Right */}
        <Grid item xs={1} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 680 }}>
            <Title variant={{ xs: "h3", md: "h2" }}>{bottom.title}</Title>
            <Tabs
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              variant="scrollable"
              scrollButtons="auto"
            >
              {bottom.TABS.map(({ name }) => (
                <Tab
                  label={name}
                  key={name}
                  sx={{
                    minWidth: 60,
                    "&.Mui-selected": { color: "text.primary" },
                  }}
                />
              ))}
            </Tabs>

            <Title variant={{ xs: "h6", md: "h5" }}>{bottom.TABS[tabValue].title}</Title>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ pb: 2, minHeight: 70 }}
            >
              {bottom.TABS[tabValue].subtitle}
            </Typography>

            <OutlinedButton arrow fit>
              Learn more
            </OutlinedButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section5;

