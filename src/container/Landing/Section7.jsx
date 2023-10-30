import { Box, Container, Grid } from "@mui/material";
import React from "react";
import {Typography} from "@mui/material";
import Title from "../../components/Title";
import { Section7Content } from "../../utils/contents/LandingContent";

const { title,subtitle, ITEMS } = Section7Content;

const Section7 = () => {
  return (
    <Container sx={{ my: { xs: 5, md: 10, lg: 15 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center",mb: { xs: 3, md: 5 } }}>
        {title}
      </Title>
      <Typography sx={{ textAlign: "center",mb: { xs: 5, md: 8 } }} variant="body1" color="text.secondary">
        {subtitle}
      </Typography>
      <Grid
        container
        rowSpacing={6}
        spacing={3}
        sx={{ mb: 10, position: "relative" }}
      >
        {ITEMS.map(({ link, image,key }) => (
          <Grid key={key} item xs={6} sm={4} md={3} lg={2}>
            <Box 
              sx={{ cursor: "pointer", "&:hover": { filter: "contrast(40%)" } }}
            >
              <img
                src={image}
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </Box>
          </Grid>
        ))}

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            height: 80,
            background: "linear-gradient(180deg, #06070a85, #06070a)",
          }}
        />
      </Grid>
    </Container>
  );
};

export default Section7;