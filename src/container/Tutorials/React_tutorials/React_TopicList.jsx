import React from "react";
import { useNavigate } from "react-router-dom";
import { reactTopics } from "../../../utils/contents/TutorialContent";

import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const { Topics } = reactTopics;

const Listing = () => {
  const navigate = useNavigate();

  return (
    <>
      <List>
        {Topics.map((item) => {
          return (
            <ListItem
              onClick={() => {
                {
                  navigate(`/tutorials/ReactJS/${item.title.replace(/ /g, "-")}`);
                }
              }}
              key={item.title}
              disablePadding
              sx={{
                "&:hover": {
                  color: "#10D59B",
                  "& .MuiSvgIcon-root": {
                    fill: "#10D59B",
                  },
                },
              }}
            >
              <ListItemButton>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Listing;
