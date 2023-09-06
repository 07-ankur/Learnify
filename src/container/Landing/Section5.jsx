import { Box, Container, Grid } from "@mui/material";
import React from "react";
import {Typography} from "@mui/material";
import Title from "../../components/Title";
import { Section7Content } from "../../utils/content";
// import { section6Content } from "../utils/content";
import ServiceCard from "../../components/Cards/ServiceCard";


const { title,subtitle1,subtitle2,ITEMS } = Section7Content;
// const { title6, ITEMS6 } = section6Content;

const Section5 = () => {
  return (
    <Container sx={{ my: { xs: 5, md: 10, lg: 15 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center",mb: { xs: 3, md: 5 } }}>
        {title}
      </Title>
      <Typography sx={{ textAlign: "center",mb: { xs: 0.5, md: 1 } }} variant="body1" color="text.secondary">
        {subtitle1}
      </Typography>
      <Typography sx={{ textAlign: "center",mb: { xs: 5, md: 8 } }} variant="body1" color="text.secondary">
        {subtitle2}
      </Typography>
      <Container sx={{ mt: { xs: 3, md: 8, lg: 10 } }}>

      <Grid container spacing={3}>
        {ITEMS.map((item) => (
          <Grid item xs={12} md={6} key={item.title}>
            <ServiceCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </Container>
  );
};

export default Section5;