import React,{useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ChatIcon from '@mui/icons-material/Chat';
import ReportIcon from '@mui/icons-material/Report';

import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { QuizDrawerList } from "../../utils/contents/QuizContent";
import FeedbackModal from "../../components/Modals/FeedbackModal";
import ErrorReportModal from "../../components/Modals/ErrorReportModal";

const { List1, List2 } = QuizDrawerList;

const Listing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const feedbackHandler = () => {
    setIsFeedbackModalOpen(true);
  }

  const errorHandler = () => {
    setIsErrorModalOpen(true);
  }

  const handleCloseFeedbackModal = () => {
    setIsFeedbackModalOpen(false);
  };
  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  const pathParts = location.pathname.split("/");

  let skill = pathParts[2];


  return (
    <>
    <List>
      {List1.map((item) => {
        const Icon = item.icon;
        return (
          <ListItem
            onClick={() => {
              if (item.key === 2 || item.key === 3) {
                navigate(`${item.navigate}/${skill}`);
              } else {
                navigate(item.navigate);
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
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
      <Divider sx={{ my: 2 }} />
      <ListItem
        onClick={() => {
        }}
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
        <ListItemButton onClick={feedbackHandler}>
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary={'Feedback'} />
        </ListItemButton>
      </ListItem>
      <ListItem
        onClick={() => {
        }}
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
        <ListItemButton onClick={errorHandler}>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary={'Error Report'} />
        </ListItemButton>
      </ListItem>
    </List>
    {isFeedbackModalOpen &&
    <FeedbackModal open={true} onClose={handleCloseFeedbackModal}/>}
    {isErrorModalOpen &&
    <ErrorReportModal open={true} onClose={handleCloseErrorModal}/>}
    
    </>
  );
};

export default Listing;
