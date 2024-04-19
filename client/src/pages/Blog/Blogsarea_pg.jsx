import React, { useEffect } from "react";
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";
import Title from "../../components/Title";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Typography } from "@mui/material";
import Footer from "../../components/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Divider } from "@mui/material";
import BlogContent from "../../container/Blog/BlogContent";
import { useNavigate } from "react-router-dom";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import { useLocation } from "react-router-dom";
import BlogCard from "../../components/Cards/BlogCard";
import { useBlogContentStore } from "../../hooks/useBlogContent";
import Lottie from "lottie-react";
import Loading from "../../assets/animations/Loading-blog_anim.json";

const Blogsarea_pg = () => {
  const location = useLocation();

  const { items, isLoading, fetchData } = useBlogContentStore();

  useEffect(() => {
    fetchData();
  }, []);

  let no;

  for (let i = 0; i < items.length; i++) {
    if (location.pathname === `/blog/${items[i].title.replace(/ /g, "-")}`) {
      no = items[i].key - 1;
      break; // Exit the loop once a match is found
    }
  }

  let recommendations = [];

  for (let i = 0; i < items.length; i++) {
    if (items[no].tag === items[i].tag) recommendations.push(items[i]);
  }

  // Remove ITEMS[id] from recommendations
  const filteredRecommendations = recommendations.filter(
    (item) => item !== items[no]
  );

  // Shuffle the filtered recommendations array
  const shuffledRecommendations = [...filteredRecommendations].sort(
    () => Math.random() - 0.5
  );

  // Select only the first 2 elements from the shuffled array
  const finalRecommendations = shuffledRecommendations.slice(0, 2);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      {isLoading ? (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
          <Lottie
            style={{ width: "15%", height: "15%", marginTop: 20, textAlign:"center" }}
            animationData={Loading}
            loop
            autoplay
          />
        </Box>
      ) : (
        <>
          <OutlinedButton
            arrowRev
            onClick={handleGoBack}
            sx={{ mt: 3, mx: 3 }}
            fit
          >
            Back
          </OutlinedButton>
          <Container maxWidth="md" sx={{ borderBottom: "2px solid #B6976A" }}>
            <Box sx={{ mt: 8 }} display="flex" flexDirection="row">
              <Typography variant="h5">{items[no]?.tag} | </Typography>
              <Typography variant="h5">| {items[no]?.date}</Typography>
            </Box>
            <Divider sx={{ width: "95%", mt: 2 }} variant="middle" />
            <Title
              sx={{ color: "#B6976A", mb: 2, mt: 4 }}
              variant={{ xs: "h4", sm: "h2" }}
            >
              {items[no]?.title}
            </Title>
            <Box sx={{ mb: 7, mx: 3 }} display="flex" flexDirection="row">
              <PermIdentityIcon
                style={{ fontSize: "1.5em", color: "#B6976A" }}
              />
              <Typography sx={{ ml: 1, mt: 1 }} variant="h6">
                {items[no]?.author}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <img
                src={items[no]?.image}
                alt="No Image"
                style={{ width: "40em", height: "20em", borderRadius: "25px" }}
              />
            </Box>
            <Divider sx={{ width: "95%", mt: 2 }} variant="middle" />
            {items[no]?.content.map((item) => (
              <BlogContent
                key={item.key}
                subtitle={item.subtitle}
                para={item.para}
              />
            ))}
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography sx={{ mt: 4, color: "#B6976A" }} variant="body1">
                Share this post
              </Typography>
              <Box
                sx={{ mt: 2, mb: 5, borderBottom: "2px solid #B6976A" }}
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <a
                  target="blank"
                  style={{ color: "white" }}
                  href="https://www.facebook.com"
                >
                  <FacebookIcon sx={{ mx: 3, my: 1 }} />
                </a>
                <a
                  target="blank"
                  style={{ color: "white" }}
                  href="https://www.linkedin.com"
                >
                  <LinkedInIcon sx={{ mx: 3, my: 1 }} />
                </a>
                <a
                  target="blank"
                  style={{ color: "white" }}
                  href="https://twitter.com/"
                >
                  <TwitterIcon sx={{ mx: 3, my: 1 }} />
                </a>
              </Box>
            </Box>
            <Typography
              variant="h3"
              align="center"
              sx={{ letterSpacing: "0.05em", color: "#B6976A", my: 3 }}
            >
              Recommended Posts You may like
            </Typography>
          </Container>
          <Box sx={{ borderBottom: "2px solid #B6976A" }}>
            <Grid container alignItems="center">
              {finalRecommendations.map((item) => (
                <Grid item xs={12} md={6} key={item.title}>
                  <Box sx={{ ml: 15 }}>
                    <BlogCard {...item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}
      <Footer />
    </>
  );
};

export default Blogsarea_pg;
