import { Box, Stack, Typography } from "@mui/material";
import React,{useState} from "react";
import OutlinedButton from "../Buttons/OutlinedButton";
import Title from "../Title";
import { useNavigate, useLocation } from "react-router-dom";

const TestCard = ({ key, title, count, marks, time }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTopic, setSelectedTopic] = useState(null);

  const pathParts = location.pathname.split("/");
  let skill = pathParts[2];

  const clickHandler = () => {
    setSelectedTopic(key);
    navigate(`/quizmastery/${skill}/test/${title.replace(/ /g, "_")}`);
  };
  
  return (
    <Box
      sx={{
        height: "100%",
        position: "relative",
        p: 4,
        borderRadius: "30px",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "30px",
          border: "1px solid white",
          background: "linear-gradient(#5f5f61,transparent) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exlude",
        },
      }}
    >
      <Stack sx={{ height: "100%" }} spacing={2.3}>
        <Title sx={{ color: "white" }} variant={{ xs: "h4", sm: "h3" }}>
          {title}
        </Title>
        <Typography variant="body2" color="text.secondary">
          {count} Questions || {time} minutes || {marks} marks
        </Typography>
        <OutlinedButton
          arrow
          fit
          onClick={clickHandler}
        >
          Start Test
        </OutlinedButton>
      </Stack>
    </Box>
  );
};

export default TestCard;
