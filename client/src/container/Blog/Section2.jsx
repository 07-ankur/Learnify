import React, { useEffect } from "react";
import BlogCard from "../../components/Cards/BlogCard";
import { Typography } from "@mui/material";
import {
  Box,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Divider,
} from "@mui/material";
import { useBlogStore } from "../../hooks/useBlogStore";
import Lottie from "lottie-react";
import Loading from "../../assets/animations/Loading-blog_anim.json";

const Section2 = () => {
  const {
    filterCategory,
    setFilterCategory,
    sortBy,
    setSortBy,
    filteredItems,
    isLoading,
    fetchData,
    filterAndSortItems,
    clearFilterCategory,
    clearFilterSort,
    handleShowMore,
    visibleItems,
  } = useBlogStore();

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    const category = event.target.value;
    setFilterCategory(category);
    filterAndSortItems(category, sortBy);
  };

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    setSortBy(sortValue);
    filterAndSortItems(filterCategory, sortValue);
  };

  return (
    <Box>
      <Typography
        variant="h3"
        align="center"
        sx={{ letterSpacing: "0.05em", my: 2 }}
      >
        Discover Our Latest Blog Posts
      </Typography>
      <Box sx={{ mt: -2, p: 2, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <FormControl fullWidth variant="outlined" sx={{ mr: 2 }}>
            <InputLabel id="category-label">Filter by Category</InputLabel>
            <Select
              labelId="category-label"
              label="Filter by Category"
              value={filterCategory}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Education Tips">Education Tips</MenuItem>
              <MenuItem value="Career Development">Career Development</MenuItem>
              <MenuItem value="Industry Insights">Industry Insights</MenuItem>
              <MenuItem value="How-to-guides">How-to-guides</MenuItem>
              {/* Add more categories as needed */}
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="sort-label">Sort by</InputLabel>
            <Select
              labelId="sort-label"
              label="Sort by Date"
              value={sortBy}
              onChange={handleSortChange}
            >
              <MenuItem value="">Popularity</MenuItem>
              <MenuItem value="asc">Old to New</MenuItem>
              <MenuItem value="desc">New to Old</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Button
            variant="outlined"
            onClick={clearFilterCategory}
            sx={{ alignSelf: "flex-start" }}
          >
            Clear Filter
          </Button>
          <Button
            variant="outlined"
            onClick={clearFilterSort}
            sx={{ alignSelf: "flex-end" }}
          >
            Clear Sort
          </Button>
        </Box>
      </Box>
      {isLoading ? (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "20vh" }}>
        <Lottie
          style={{ width: "15%", height: "15%", marginTop: 20, textAlign:"center" }}
          animationData={Loading}
          loop
          autoplay
        />
      </Box>
      ) : (
        <Box sx={{ mt: -2 }}>
          <Grid container alignItems="center">
            {filteredItems.slice(0, visibleItems).map((item) => (
              <Grid item xs={12} md={4} key={item.title}>
                <BlogCard {...item} />
              </Grid>
            ))}
          </Grid>
          {visibleItems < filteredItems.length && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Divider sx={{ width: "75%", my: 2 }} variant="middle">
                <Button
                  sx={{ color: "white" }}
                  variant="outlined"
                  onClick={handleShowMore}
                >
                  Show More
                </Button>
              </Divider>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Section2;
