import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Paper
  } from "@mui/material";
  import { makeStyles } from '@material-ui/core';
  import Brightness2Icon from "@mui/icons-material/Brightness2";

  const useStyles = makeStyles((theme) => ({
    card: {
      backgroundColor: "#333", // Dark background color
      color: "#fff", // Text color
    },
    icon: {
      color: theme.palette.secondary.main, // Secondary color (icon color)
    },
  }));
  
const AboutCard = () => {
    const classes = useStyles();
  return (
    <Card className={classes.card} elevation={3}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Dark Mode Card
        </Typography>
        <Paper elevation={0}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Brightness2Icon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Dark mode is awesome!" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Brightness2Icon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="It reduces eye strain." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Brightness2Icon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="You can customize it." />
            </ListItem>
          </List>
        </Paper>
      </CardContent>
    </Card>
  )
}
export default AboutCard;