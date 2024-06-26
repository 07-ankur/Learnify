import React, {useState} from "react";
import { Box, Stack } from "@mui/material";
import ContainedButton from "../Buttons/Contained_btn";
import Title from "../Title";
import { useNavigate, useLocation } from "react-router-dom";

const PracticeCard = ({ key, title, image }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedTopic, setSelectedTopic] = useState(null);

  const pathParts = location.pathname.split("/");
  let skill = pathParts[2];

  const clickHandler = () => {
    setSelectedTopic(key);
    navigate(`/quizmastery/${skill}/practice/${title.replace(/ /g, "_")}`);
  };

  return (
    <Box
      sx={{
        height: "100%",
        position: "relative",
        p: 2,
        borderRadius: "30px",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "30px",
          border: "1.5px solid transparent",
          background: "linear-gradient(-150deg,#5f5f61,transparent) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exlude",
        },
      }}
    >
      <Stack sx={{ height: "35vh" }} spacing={0.5}>
        <Title variant={{ xs: "h4", sm: "h3" }}>{title}</Title>
        <Box>
          <img
            src={image}
            style={{
              height: "150px",
              width: "50%",
              objectFit: "contain",
              flex: 1,
              marginTop: 30,
            }}
          />
          <ContainedButton
            sx={{
              ml: 8,
              bottom: "5vh",
              color: "black",
              "&:hover": { color: "white" },
            }}
            arrow
            fit
            onClick={clickHandler}
          >
            Practice
          </ContainedButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default PracticeCard;
