import React from "react";
import { useNavigate } from "react-router-dom";
import useTutorialContent from "../../hooks/useTutorialContent";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const Listing = (props) => {
  const navigate = useNavigate();
  const { title, topic } = props;
  const { tutorialTopics } = useTutorialContent(title, topic);

  return (
    <List>
      {tutorialTopics.map((item, index) => (
        <ListItem
          onClick={() => {
            navigate(`/tutorials/${title}/${item.replace(/ /g, "_")}`);
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
