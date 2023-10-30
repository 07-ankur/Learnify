// QuizMastery
import Hook_logo from "../../assets/images/React_quiz/Hook_logo.png";
import Component_logo from "../../assets/images/React_quiz/Component_logo.png";
import Router_logo from "../../assets/images/React_quiz/Router_logo.png";
import React_logo from "../../assets/images/React_quiz/React_logo.png";

// QuizDrawerList
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ChatIcon from "@mui/icons-material/Chat";
import ReportIcon from "@mui/icons-material/Report";
import QuizIcon from "@mui/icons-material/Quiz";

export const QuizDrawerList = {
    List1: [
      {
        key: 1,
        title: "Home",
        icon: HomeIcon,
        navigate: "/quizMastery/",
      },
      {
        key: 2,
        title: "Roadmap",
        icon: DeveloperBoardIcon,
        navigate: "/mapper",
      },
      {
        key: 3,
        title: "Tutorials",
        icon: DescriptionIcon,
        navigate: `/tutorials`,
      },
      {
        key: 4,
        title: "My Tests",
        icon: QuizIcon,
        navigate: "/quizMastery/user/My-Tests",
      },
    ],
  
    List2: [
      {
        key: 1,
        title: "Feedback",
        icon: ChatIcon,
        navigate: "/quizMastery/feedback",
      },
      {
        key: 2,
        title: "Error Report",
        icon: ReportIcon,
        navigate: "/quizMastery/error-report",
      },
    ],
  };
  
  export const feedbackEmojis = {
    Emojis: [
      {
        key: 1,
        icon: "😥",
        rating: 1,
      },
      {
        key: 2,
        icon: "😔",
        rating: 2,
      },
      {
        key: 3,
        icon: "😐",
        rating: 3,
      },
      {
        key: 4,
        icon: "😀",
        rating: 4,
      },
      {
        key: 5,
        icon: "😇",
        rating: 5,
      },
    ],
  };
  
  export const Quiz_tabs = {
    TABS: [
      {
        name: "Practice Concepts",
      },
      {
        name: "Mock Tests",
      },
    ],
  };

  export const Test_cards = {
    items: [
      {
        key: 1,
        title: "Mock Test 1",
        subtitle: "15 Questions   ||   45 mins   ||   30marks",
      },
      {
        key: 2,
        title: "Mock Test 2",
        subtitle: "15 Questions   ||   45 mins   ||   30marks",
      },
      {
        key: 3,
        title: "Mock Test 3",
        subtitle: "15 Questions   ||   45 mins   ||   30marks",
      },
      {
        key: 4,
        title: "Mock Test 4",
        subtitle: "15 Questions || 45 mins || 30marks",
      },
    ],
  };
  export const Practice_cards = {
    items2: [
      {
        key: 1,
        title: "React Hooks",
        // subtitle:'15 Questions   ||   45 mins   ||   30marks',
        image: Hook_logo,
      },
      {
        key: 2,
        title: "React Components",
        subtitle: "15 Questions   ||   45 mins   ||   30marks",
        image: Component_logo,
      },
      {
        key: 3,
        title: "React Router",
        subtitle: "15 Questions   ||   45 mins   ||   30marks",
        image: Router_logo,
      },
      {
        key: 4,
        title: "React Rendering",
        subtitle: "15 Questions || 45 mins || 30marks",
        image: React_logo,
      },
    ],
  };
  
  export const Exam_cards = {
    Questions: [
      {
        key: 1,
        title: "1. Which of the following statements is correct? ",
        options: [
          {
            opt: 1,
            title:
              "A. Hooks can only be called inside React function components.",
          },
          {
            opt: 2,
            title: "B. Hooks can only be called at the top level of a component.",
          },
          {
            opt: 3,
            title: "C. Hooks cannot be conditional",
          },
          {
            opt: 4,
            title: "D. All of these",
          },
        ],
        correct: 4,
      },
      {
        key: 2,
        title: "2. Hooks were added to the React in version",
        options: [
          {
            opt: 1,
            title: "A. 16.6",
          },
          {
            opt: 2,
            title: "B. 16.8",
          },
          {
            opt: 3,
            title: "C. 16.8.6",
          },
          {
            opt: 4,
            title: "D. 18.1",
          },
        ],
        correct: 2,
      },
      {
        key: 3,
        title:
          "3. Which of the following hook is used to manage the state globally",
        options: [
          {
            opt: 1,
            title: "A. UseState",
          },
          {
            opt: 2,
            title: "B. UseEffect",
          },
          {
            opt: 3,
            title: "C. UseContext",
          },
          {
            opt: 4,
            title: "D. UseRef",
          },
        ],
        correct: 3,
      },
      {
        key: 4,
        title:
          "4. UseState accepts an initial state and returns two values: the current state and ",
        options: [
          {
            opt: 1,
            title: "A. A function that updates the state.",
          },
          {
            opt: 2,
            title: "B. The next state",
          },
          {
            opt: 3,
            title: "C. A function that deletes the state",
          },
          {
            opt: 4,
            title: "D. None of these",
          },
        ],
        correct: 1,
      },
      {
        key: 5,
        title: "5. The two arguments of the useEffect hook are  ",
        options: [
          {
            opt:1,
            title: "A. useEffect(<function>, <dependency>)",
          },
          {
            opt: 2,
            title: "B. useEffect(<dependency>, <function>)",
          },
          {
            opt: 3,
            title: "C. useEffect(<function>, <state>)",
          },
          {
            opt: 4,
            title: "D. None of these",
          },
        ],
        correct: 1,
      },
      {
        key: 6,
        title:
          "6. Which of the following statements is not true about the react hooks",
        options: [
          {
            opt: 1,
            title: "A. React hooks will not work in class components.",
          },
          {
            opt: 2,
            title: "B. Hooks are reusable functions",
          },
          {
            opt: 3,
            title: "C. One hook cannot call the other hook",
          },
          {
            opt: 4,
            title:
              "D. Hooks can not be called from regular JavaScript functions. ",
          },
        ],
        correct: 3,
      },
      {
        key: 7,
        title:
          "7. Which of the following hook is used to access the DOM directly ",
        options: [
          {
            opt: 1,
            title: "A. UseState",
          },
          {
            opt: 2,
            title: "B. UseReducer",
          },
          {
            opt: 3,
            title: "C. UseRef",
          },
          {
            opt: 4,
            title: "D. UseContext",
          },
        ],
        correct: 3,
      },
      {
        key: 8,
        title:
          "1. UseState accepts an initial state and returns two values: the current state and ",
        options: [
          {
            opt:1,
            title: "A. A function that updates the state.",
          },
          {
            opt: 2,
            title: "B. The next state",
          },
          {
            opt: 3,
            title: "C. A function that deletes the state",
          },
          {
            opt: 4,
            title: "D. None of these",
          },
        ],
        correct: 1,
      },
      {
        key: 9,
        title:
          "8. Which of the following statements is true about the custom hooks ",
        options: [
          {
            opt: 1,
            title:
              "A. Creating a custom hook is the same as creating a JavaScript function",
          },
          {
            opt: 2,
            title: "B. It can use other hooks inside it",
          },
          {
            opt: 3,
            title: "C. It starts with “use”",
          },
          {
            opt: 4,
            title: "D. All of these",
          },
        ],
        correct: 4,
      },
      {
        key: 10,
        title:
          "10. Which lifecycle methods of class component is replaced by useEffect in functional component ? ",
        options: [
          {
            opt: 1,
            title: "A. componentDidMount()",
          },
          {
            opt: 2,
            title: "B. componentDidUpdate()",
          },
          {
            opt: 3,
            title: "C. componentWillUnmount()",
          },
          {
            opt: 4,
            title: "D. All of these",
          },
        ],
        correct: 4,
      },
      {
        key: 11,
        title:
          "1. UseState accepts an initial state and returns two values: the current state and ",
        options: [
          {
            opt:1,
            title: "A. A function that updates the state.",
          },
          {
            opt: 2,
            title: "B. The next state",
          },
          {
            opt: 3,
            title: "C. A function that deletes the state",
          },
          {
            opt: 4,
            title: "D. None of these",
          },
        ],
        correct: 1,
      },
      {
        key: 12,
        title: "12. Which of the following hook is used to avoid re-renders ",
        options: [
          {
            opt: 1,
            title: "A. UseReducer",
          },
          {
            opt: 2,
            title: "B. UseRef",
          },
          {
            opt: 3,
            title: "C. UseMemo",
          },
          {
            opt: 4,
            title: "D. None of these",
          },
        ],
        correct: 2,
      },
      {
        key: 13,
        title:
          "13. If you find yourself keeping track of multiple pieces of state that rely on complex logic, which may be useful? ",
        options: [
          {
            opt: 1,
            title: "A. UseRef",
          },
          {
            opt: 2,
            title: "B. UseState",
          },
          {
            opt: 3,
            title: "C. UseEffect",
          },
          {
            opt: 4,
            title: "D. UseReducer",
          },
        ],
        correct: 4,
      },
      {
        key: 14,
        title:
          "14. Which of the following React hooks helps in performance optimization ?",
        options: [
          {
            opt: 1,
            title: "A. UseEffect",
          },
          {
            opt: 2,
            title: "B. UseMemo",
          },
          {
            opt: 3,
            title: "C. UseRef",
          },
          {
            opt: 4,
            title: "D. UseDebugValue",
          },
        ],
        correct: 2,
      },
      {
        key: 15,
        title: "15. Hooks can only be used inside ",
        options: [
          {
            opt: 1,
            title: "A. class component",
          },
          {
            opt: 2,
            title: "B. functional component",
          },
          {
            opt: 3,
            title: "C. Either A or B",
          },
          {
            opt: 4,
            title: "D. Both A and B",
          },
        ],
        correct: 2,
      },
    ],
  };
  
