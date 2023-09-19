import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import QuizIcon from '@mui/icons-material/Quiz';
import {List,ListItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material'

const Listing = () => {
  return (
    <List>
            <ListItem key={'Home'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Syllabus'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <DescriptionIcon/>
                </ListItemIcon>
                <ListItemText primary={'Syllabus'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Tutorials'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DeveloperBoardIcon/>
                </ListItemIcon>
                <ListItemText primary={'Tutorials'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'My Tests'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <QuizIcon/>
                </ListItemIcon>
                <ListItemText primary={'My Tests'} />
              </ListItemButton>
            </ListItem>
    </List>
  )
}

export default Listing