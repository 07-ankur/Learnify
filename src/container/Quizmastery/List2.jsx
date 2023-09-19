import React from 'react'
import {List,ListItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import ReportIcon from '@mui/icons-material/Report';
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';

const Listing2 = () => {
  return (
    <List>
            <ListItem key={'Feedback'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ChatIcon/>
                </ListItemIcon>
                <ListItemText primary={'Feedback'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Error Report'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <ReportIcon/>
                </ListItemIcon>
                <ListItemText primary={'Error Report'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Switch Category'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SwitchAccessShortcutAddIcon/>
                </ListItemIcon>
                <ListItemText primary={'Switch Category'} />
              </ListItemButton>
            </ListItem>
    </List>
  )
}

export default Listing2