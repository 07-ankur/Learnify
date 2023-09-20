import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { QuizDrawerList } from "../../utils/content";

const { List1, List2 } = QuizDrawerList;

const Listing = () => {

  const navigate = useNavigate();

  return (
    <List>
      {List1.map((item) => {
        const Icon = item.icon;
        return (
          <ListItem
            onClick={()=>{navigate(item.navigate)}}
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
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
      <Divider sx={{ my: 2 }} />
      {List2.map((item) => {
        const Icon = item.icon;
        return (
          <ListItem
            onClick={()=>{navigate(item.navigate)}}
            key={item.title}
            disablePadding
            sx={{
              "&:hover": {
                color: "#10D59B", // Change text color on hover
                "& .MuiSvgIcon-root": {
                  fill: "#10D59B", // Change icon color on hover
                },
              },
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Listing;

