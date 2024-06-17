import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Tutorials_URL } from "../../api";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const Listing = (props) => {
  const navigate = useNavigate();
  const { title, topic } = props;
  const [tutorialTopics, setTutorialTopics] = useState([]);

  useEffect(() => {
    const fetchTutorialTopic = async () => {
      try {
        console.log(title);
        const response = await axios.get(Tutorials_URL.Tutorial_Topic(title));
        setTutorialTopics(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching tutorial:", error);
      }
    };

    fetchTutorialTopic();
  }, [title]);

  return (
    <List>
      {tutorialTopics.map((item, index) => (
        <ListItem
          onClick={() => {
            navigate(`/tutorials/${title}/${item.replace(/ /g, "-")}`);
          }}
          key={index}
          disablePadding
          sx={{
            color: item == topic ? "#10D59B" : "white",
            "&:hover": {
              color: "#10D59B",
            },
          }}
        >
          <ListItemButton>
            <ListItemText primary={item.replace("_", " ")} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Listing;
