// Analysis_Card
import React_anim from "../../assets/animations/react_anim.json";
import Node_anim from "../../assets/animations/node_anim.json";
import Express_anim from "../../assets/animations/Link_anim.json";
import Mongo_anim from "../../assets/animations/mongodb_anim.json";
import js_anim from "../../assets/animations/js_anim.json";

export const Analysis_Progress = {
    TOPICS: [
      {
        key: 1,
        title: "React JS",
        points: 85,
        tutorials_pts: 40,
        quiz_pts: 10,
        practice_pts: 20,
        completion: 80,
        timeRequired: "11 Hours",
        stars: 0,
        img: React_anim,
        width: "80%",
        topics: [
          {
            key: 1,
            title: "Introduction",
            subtitle: [
              {
                key: 1,
                label: "Home",
                completion: true,
              },
              {
                key: 2,
                label: "Intro",
                completion: true,
              },
              {
                key: 3,
                label: "Get Started",
                completion: true,
              },
              {
                key: 4,
                label: "Upgrade",
                completion: true,
              },
            ],
          },
          {
            key: 2,
            title: "ES6",
            subtitle: [
              {
                key: 1,
                label: "ES6",
                completion: true,
              },
              {
                key: 2,
                label: "ES6 Classes",
                completion: true,
              },
              {
                key: 3,
                label: "ES6 Arrow Functions",
                completion: true,
              },
              {
                key: 4,
                label: "ES6 Variables",
                completion: true,
              },
              {
                key: 5,
                label: "ES6 Array Methods",
                completion: true,
              },
              {
                key: 6,
                label: "ES6 Destructuring",
                completion: true,
              },
              {
                key: 7,
                label: "ES6 Spread Operator",
                completion: true,
              },
              {
                key: 8,
                label: "ES6 Modules",
                completion: true,
              },
              {
                key: 9,
                label: "ES6 Ternary Operator",
                completion: false,
              },
            ],
          },
          {
            key: 3,
            title: "Render JSX & Component",
            subtitle: [
              {
                key: 1,
                label: "Render HTML",
                completion: true,
              },
              {
                key: 2,
                label: "JSX",
                completion: true,
              },
              {
                key: 3,
                label: "Components",
                completion: true,
              },
              {
                key: 4,
                label: "Class Components",
                completion: false,
              },
            ],
          },
          {
            key: 4,
            title: "Router & Events",
            subtitle: [
              {
                key: 1,
                label: "Router",
                completion: true,
              },
              {
                key: 2,
                label: "Events",
                completion: true,
              },
            ],
          },
          {
            key: 5,
            title: "Lists & Forms",
            subtitle: [
              {
                key: 1,
                label: "Lists",
                completion: true,
              },
              {
                key: 2,
                label: "Forms",
                completion: true,
              },
            ],
          },
          {
            key: 6,
            title: "Styling",
            subtitle: [
              {
                key: 1,
                label: "Css Styling",
                completion: true,
              },
              {
                key: 2,
                label: "Sass Styling",
                completion: false,
              },
            ],
          },
          {
            key: 7,
            title: "Hooks",
            subtitle: [
              {
                key: 1,
                label: "What is a Hook?",
                completion: true,
              },
              {
                key: 2,
                label: "useState",
                completion: true,
              },
              {
                key: 3,
                label: "useEffect",
                completion: true,
              },
              {
                key: 4,
                label: "useContext",
                completion: true,
              },
              {
                key: 5,
                label: "useRef",
                completion: true,
              },
              {
                key: 6,
                label: "useReducer",
                completion: true,
              },
              {
                key: 7,
                label: "useCallback",
                completion: true,
              },
              {
                key: 8,
                label: "useMemo",
                completion: false,
              },
              {
                key: 9,
                label: "Custom Hooks",
                completion: false,
              },
            ],
          },
        ],
      },
      {
        key: 2,
        title: "Node JS",
        points: 50,
        tutorials_pts: 35,
        quiz_pts: 0,
        practice_pts: 15,
        timeRequired: "11 Hours",
        completion: 70,
        stars: 0,
        img: Node_anim,
        width: "90%",
      },
      {
        key: 3,
        title: "Mongo DB",
        points: 60,
        tutorials_pts: 25,
        quiz_pts: 10,
        practice_pts: 25,
        timeRequired: "11 Hours",
        completion: 50,
        stars: 0,
        img: Mongo_anim,
        width: "60%",
      },
      {
        key: 4,
        title: "Express JS",
        points: 60,
        tutorials_pts: 35,
        quiz_pts: 10,
        practice_pts: 15,
        timeRequired: "11 Hours",
        completion: 70,
        stars: 0,
        img: Express_anim,
        width: "80%",
      },
      {
        key: 5,
        title: "C++",
        points: 40,
        tutorials_pts: 30,
        quiz_pts: 0,
        practice_pts: 10,
        timeRequired: "11 Hours",
        completion: 60,
        stars: 0,
        img: Node_anim,
        width: "80%",
      },
      {
        key: 6,
        title: "Javascript",
        points: 60,
        tutorials_pts: 35,
        quiz_pts: 10,
        practice_pts: 15,
        timeRequired: "11 Hours",
        completion: 70,
        stars: 0,
        img: js_anim,
        width: "50%",
      },
    ],
  };