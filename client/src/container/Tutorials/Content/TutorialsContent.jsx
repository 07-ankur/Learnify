import React from "react";
import { Divider, Box } from "@mui/material";
import TutorialTopic from "../Structure/TutorialTopic";
import TutorialContent from "../Structure/TutorialContent";
import TutorialCode from "../Structure/TutorialCode";
import TutorialBox from "../Structure/TutorialBox";
import TutorialFooter from "../Structure/TutorialFooter";
import useTutorialContent from "../../../hooks/useTutorialContent";
import Lottie from "lottie-react";
import Loading from "../../../assets/animations/Loading-blog_anim.json";

const Tutorials_Content = (props) => {
  const { topic, title } = props;
  const {
    tutorial,
    completion,
    message,
    loading,
    completionLoading,
    toggleCompletion,
  } = useTutorialContent(title, topic);

  return (
    <div>
      {!loading ? (
        tutorial && (
          <div>
            {tutorial.sections?.map((section) => (
              <div key={section.key}>
                {section.divider === "top" && <Divider sx={{ my: 1 }} />}
                {section.type === "topic" && (
                  <TutorialTopic topic={section.content} />
                )}
                {section.type === "content" && (
                  <TutorialContent content={section.content} />
                )}
                {section.type === "code" && (
                  <TutorialCode code={section.content} />
                )}
                {section.type === "box" && (
                  <TutorialBox content={section.content} />
                )}
                {section.type === "image" && (
                  <Box sx={{ mx: 5, my: 2 }}>
                    <img src={section.content} alt="img" />
                  </Box>
                )}
                {section.divider === "bottom" && <Divider sx={{ my: 1 }} />}
              </div>
            ))}
          </div>
        )
      ) : (
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight:"50vh"
          }}
        >
          <Lottie
            style={{
              width: "15%",
              height: "15%",
              marginTop: 20,
              textAlign: "center",
            }}
            animationData={Loading}
            loop
            autoplay
          />
        </Box>
      )}
      {!completionLoading ? (
        <TutorialFooter
          message={message}
          completion={completion}
          toggleCompletion={toggleCompletion}
        />
      ) : (
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie
            style={{
              width: "15%",
              height: "15%",
              marginTop: 20,
              textAlign: "center",
            }}
            animationData={Loading}
            loop
            autoplay
          />
        </Box>
      )}
    </div>
  );
};

export default Tutorials_Content;
