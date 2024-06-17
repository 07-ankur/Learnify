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
      image: Hook_logo,
    },
    {
      key: 2,
      title: "React Components",
      image: Component_logo,
    },
    {
      key: 3,
      title: "React Router",
      image: Router_logo,
    },
    {
      key: 4,
      title: "React Rendering",
      image: React_logo,
    },
  ],
};

export const React_practice_qn = {
  ITEMS: [
    {
      topic: "React Hooks",
      key: 1,
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
              title:
                "B. Hooks can only be called at the top level of a component.",
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
              opt: 1,
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
    },
    {
      topic: "React Components",
      key: 2,
      Questions: [
        {
          key: 1,
          title: "1. Which of the following statements is correct? ",
          options: [
            {
              opt: 1,
              title:
                "A. Components are like functions that return HTML elements.",
            },
            {
              opt: 2,
              title: "B. Components are independent and reusable bits of code.",
            },
            {
              opt: 3,
              title:
                "C. Components serve the same purpose as JavaScript functions",
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
          title:
            "2. In React, which method is called when a component is first created and added to the DOM? ",
          options: [
            {
              opt: 1,
              title: "A. componentDidMount()",
            },
            {
              opt: 2,
              title: "B. componentWillMount()",
            },
            {
              opt: 3,
              title: "C. render()",
            },
            {
              opt: 4,
              title: "D. constructor()",
            },
          ],
          correct: 1,
        },
        {
          key: 3,
          title:
            "3. How can you pass data from a parent component to a child component in React? ",
          options: [
            {
              opt: 1,
              title: "A. Using props",
            },
            {
              opt: 2,
              title: "B. Using state",
            },
            {
              opt: 3,
              title: "Using context",
            },
            {
              opt: 4,
              title: "All of the above",
            },
          ],
          correct: 1,
        },
        {
          key: 4,
          title:
            "4. Which of the following lifecycle methods is called when a component is about to be removed from the DOM? ",
          options: [
            {
              opt: 1,
              title: "A. componentDidMount()",
            },
            {
              opt: 2,
              title: "B. componentWillUnmount()",
            },
            {
              opt: 3,
              title: "C. componentDidUpdate()",
            },
            {
              opt: 4,
              title: "D.  componentWillUpdate()",
            },
          ],
          correct: 2,
        },
        {
          key: 5,
          title:
            "5. What is the purpose of the React key prop when rendering a list of components?",
          options: [
            {
              opt: 1,
              title: "A. It is used for styling purposes",
            },
            {
              opt: 2,
              title: "B. It specifies the position of the element in the list",
            },
            {
              opt: 3,
              title: "C.  It uniquely identifies each element in the list",
            },
            {
              opt: 4,
              title: "D. It is not required when rendering lists",
            },
          ],
          correct: 3,
        },
        {
          key: 6,
          title:
            "6. What is the main difference between functional components and class components in React? ",
          options: [
            {
              opt: 1,
              title:
                "A.  Functional components can have state, while class components cannot.",
            },
            {
              opt: 2,
              title:
                "B. Class components can have lifecycle methods, while functional components cannot.",
            },
            {
              opt: 3,
              title:
                "C. Functional components are faster and more efficient than class components.",
            },
            {
              opt: 4,
              title: "D. There is no significant difference between them.",
            },
          ],
          correct: 2,
        },
        {
          key: 7,
          title:
            "7. In React, how can you conditionally render a component based on a condition? ",
          options: [
            {
              opt: 1,
              title:
                "A. Using the if-else statement within the render() method",
            },
            {
              opt: 2,
              title: "B. Using the ternary operator in JSX",
            },
            {
              opt: 3,
              title:
                "C. Using the switch case statement within the render() method",
            },
            {
              opt: 4,
              title: "D. All of the above",
            },
          ],
          correct: 2,
        },
        {
          key: 8,
          title: "8. What is the purpose of the React Fragment component? ",
          options: [
            {
              opt: 1,
              title: "A. To create a reusable component",
            },
            {
              opt: 2,
              title:
                "B. To group multiple child components without adding extra nodes to the DOM",
            },
            {
              opt: 3,
              title:
                "C. To create a component that can render multiple children at once",
            },
            {
              opt: 4,
              title: "D. To create a virtual DOM for improved performance",
            },
          ],
          correct: 2,
        },
        {
          key: 9,
          title:
            "9. Which method should you use to update the state of a component and trigger a re-render? ",
          options: [
            {
              opt: 1,
              title: "A. this.modifyState()",
            },
            {
              opt: 2,
              title: "B. this.updateState()",
            },
            {
              opt: 3,
              title: "C. this.forceUpdate()",
            },
            {
              opt: 4,
              title: "D. this.setState()",
            },
          ],
          correct: 4,
        },
        {
          key: 10,
          title:
            "10. What is the primary function of the shouldComponentUpdate() method in React? ",
          options: [
            {
              opt: 1,
              title:
                "A. To determine if a component should be updated and re-rendered",
            },
            {
              opt: 2,
              title: "B. To force a component to re-render",
            },
            {
              opt: 3,
              title: "C. To check if the component has finished rendering",
            },
            {
              opt: 4,
              title: "D. To return the initial state of a component",
            },
          ],
          correct: 1,
        },
        {
          key: 11,
          title:
            "11. What is the purpose of the key prop when rendering a list of components in React? ",
          options: [
            {
              opt: 1,
              title:
                "A. It specifies the order in which components should be rendered.",
            },
            {
              opt: 2,
              title:
                "B. It helps React identify which items have changed, been added, or removed in a list.",
            },
            {
              opt: 3,
              title: "C. It is used to apply custom styling to list items.",
            },
            {
              opt: 4,
              title: "D. It is not required when rendering lists.",
            },
          ],
          correct: 2,
        },
        {
          key: 12,
          title:
            "12. In React, what is the purpose of the props.children property in a component? ",
          options: [
            {
              opt: 1,
              title: "A. It refers to the children of a parent component.",
            },
            {
              opt: 2,
              title:
                "B. It is used to access the parent component's properties.",
            },
            {
              opt: 3,
              title:
                "C. It is a reserved keyword in React and serves no specific purpose.",
            },
            {
              opt: 4,
              title: "D. It is used to define the child component's props.",
            },
          ],
          correct: 1,
        },
      ],
    },
    {
      topic: "React Router",
      key: 3,
      Questions: [
        {
          key: 1,
          title: "1. What is React Router used for? ",
          options: [
            {
              opt: 1,
              title: "A. Handling HTTP requests in a React application.",
            },
            {
              opt: 2,
              title:
                "B. Navigating between different views or components in a single-page React application.",
            },
            {
              opt: 3,
              title: "C. Managing state in React components.",
            },
            {
              opt: 4,
              title:
                "D. Creating and managing CSS styles for React components.",
            },
          ],
          correct: 2,
        },
        {
          key: 2,
          title:
            "2. Which React Router component is used to define a route in a React application? ",
          options: [
            {
              opt: 1,
              title: "A. <Router>",
            },
            {
              opt: 2,
              title: "B. <Switch>",
            },
            {
              opt: 3,
              title: "C. <Route>",
            },
            {
              opt: 4,
              title: "D. <App>",
            },
          ],
          correct: 3,
        },
        {
          key: 3,
          title:
            "3. In React Router, what is the purpose of the exact attribute in a <Route> component? ",
          options: [
            {
              opt: 1,
              title:
                "A.  It specifies that the route is the root route of the application.",
            },
            {
              opt: 2,
              title:
                "B. It ensures that the route will only match if the path is an exact match with the URL.",
            },
            {
              opt: 3,
              title: "C. It enables lazy loading for the route.",
            },
            {
              opt: 4,
              title: "D. It activates authentication for the route.",
            },
          ],
          correct: 2,
        },
        {
          key: 4,
          title:
            "4. Which React Router component is used to navigate to a different route in response to a user action? ",
          options: [
            {
              opt: 1,
              title: "A. <Route>",
            },
            {
              opt: 2,
              title: "B. <Navigate>",
            },
            {
              opt: 3,
              title: "C. <Switch>",
            },
            {
              opt: 4,
              title: "D.  <Link>",
            },
          ],
          correct: 4,
        },
        {
          key: 5,
          title: "5. How do you pass parameters in a URL using React Router?",
          options: [
            {
              opt: 1,
              title: "A. Use the params attribute in the <Route> component.",
            },
            {
              opt: 2,
              title: "B. Use the query attribute in the <Route> component.",
            },
            {
              opt: 3,
              title: "C.  Use URL path parameters, like /user/:id.",
            },
            {
              opt: 4,
              title: "D. Use the data attribute in the <Link> component.",
            },
          ],
          correct: 3,
        },
        {
          key: 6,
          title:
            "6. Which React Router component is used to render a component when no other route matches the current location? ",
          options: [
            {
              opt: 1,
              title: "A.  <Router>",
            },
            {
              opt: 2,
              title: "B. <DefaultRoute>",
            },
            {
              opt: 3,
              title: "C. <NotFound>",
            },
            {
              opt: 4,
              title: "D. <Switch>",
            },
          ],
          correct: 2,
        },
        {
          key: 7,
          title:
            "7. How do you access URL parameters passed to a route in a React component? ",
          options: [
            {
              opt: 1,
              title: "A. Using the this.url.params object.",
            },
            {
              opt: 2,
              title: "B. Using the this.route.params object.",
            },
            {
              opt: 3,
              title: "C. Using the this.match.params object.",
            },
            {
              opt: 4,
              title: "D. Using the this.props.params object.",
            },
          ],
          correct: 4,
        },
        {
          key: 8,
          title:
            "8. What is the purpose of the <Switch> component in React Router? ",
          options: [
            {
              opt: 1,
              title:
                "A. It defines a fallback route that matches all unmatched URLs.",
            },
            {
              opt: 2,
              title:
                "B. It groups multiple <Route> components and ensures that only the first matching route is rendered.",
            },
            {
              opt: 3,
              title:
                "C. It switches between different navigation styles in a React application.",
            },
            {
              opt: 4,
              title: "D. It handles asynchronous data loading for routes.",
            },
          ],
          correct: 2,
        },
        {
          key: 9,
          title:
            "9. In React Router v6, how do you declare routes using JSX instead of the Route component? ",
          options: [
            {
              opt: 1,
              title:
                "A. <Route path='/example' component={ExampleComponent} />",
            },
            {
              opt: 2,
              title:
                "B. <Routes><Route path='/example' element={<ExampleComponent />} /></Routes>",
            },
            {
              opt: 3,
              title: "C. <Route path='/example'><ExampleComponent /></Route>",
            },
            {
              opt: 4,
              title:
                "D. <Routes path='/example' element={<ExampleComponent />} />",
            },
          ],
          correct: 2,
        },
        {
          key: 10,
          title:
            "10. Which component is used to programmatically navigate to a different route in React Router? ",
          options: [
            {
              opt: 1,
              title: "A. <Link>",
            },
            {
              opt: 2,
              title: "B. <Redirect>",
            },
            {
              opt: 3,
              title: "C. <Navigate>",
            },
            {
              opt: 4,
              title: "D. <Route>",
            },
          ],
          correct: 3,
        },
        {
          key: 11,
          title:
            "11. What is the purpose of the withRouter higher-order component in React Router? ",
          options: [
            {
              opt: 1,
              title:
                "A. It is used to add routing functionality to any component, allowing access to the router props.",
            },
            {
              opt: 2,
              title:
                "B. It prevents a component from rendering unless certain conditions are met.",
            },
            {
              opt: 3,
              title:
                "C. It handles form submissions in a React Router application.",
            },
            {
              opt: 4,
              title: "D. It creates animated transitions between routes.",
            },
          ],
          correct: 1,
        },
        {
          key: 12,
          title:
            "12. How can you protect a route in React Router so that only authenticated users can access it? ",
          options: [
            {
              opt: 1,
              title: "A. Use the protect attribute in the <Route> component.",
            },
            {
              opt: 2,
              title: "B. Use the secure attribute in the <Route> component.",
            },
            {
              opt: 3,
              title:
                "C. Wrap the component with a PrivateRoute component and handle authentication logic.",
            },
            {
              opt: 4,
              title:
                "D. Use the isAuthenticated attribute in the <Switch> component.",
            },
          ],
          correct: 3,
        },
        {
          key: 13,
          title:
            "13. In React Router, what is the purpose of the <Route>'s render prop? ",
          options: [
            {
              opt: 1,
              title:
                "A. It defines the CSS style to be applied to the component.",
            },
            {
              opt: 2,
              title:
                "B. It specifies a function to render a component, allowing custom logic before rendering.",
            },
            {
              opt: 3,
              title: "C. It is used to set the title of the HTML document.",
            },
            {
              opt: 4,
              title:
                "D. It defines a route's default values for URL parameters.",
            },
          ],
          correct: 2,
        },
        {
          key: 14,
          title:
            "14. What is the difference between React Router's BrowserRouter and HashRouter components? ",
          options: [
            {
              opt: 1,
              title:
                "A. BrowserRouter uses HTML5 History API, while HashRouter uses URL hash fragments.",
            },
            {
              opt: 2,
              title:
                "B. BrowserRouter is used for server-rendered React apps, while HashRouter is for client-rendered apps.",
            },
            {
              opt: 3,
              title:
                "C.BrowserRouter is the old version of React Router, and HashRouter is the modern one.",
            },
            {
              opt: 4,
              title: "D. There is no difference; they are interchangeable. ",
            },
          ],
          correct: 1,
        },
        {
          key: 15,
          title: "15. How can you create nested routes in React Router? ",
          options: [
            {
              opt: 1,
              title:
                "A. By defining routes inside the component prop of a parent route.",
            },
            {
              opt: 2,
              title:
                "B. By nesting <Route> components within other <Route> components.",
            },
            {
              opt: 3,
              title:
                "C.  By using the routes attribute in the <Router> component.",
            },
            {
              opt: 4,
              title: "D. By defining routes as separate top-level components.",
            },
          ],
          correct: 2,
        },
      ],
    },
    {
      topic: "React Rendering",
      key: 4,
      Questions: [
        {
          key: 1,
          title: "1. In React, what is the Virtual DOM used for? ",
          options: [
            {
              opt: 1,
              title: "A. Managing state in components.",
            },
            {
              opt: 2,
              title: "B. Handling user input.",
            },
            {
              opt: 3,
              title: "C. Handling server-side rendering",
            },
            {
              opt: 4,
              title: "D. Optimizing DOM updates and rendering.",
            },
          ],
          correct: 4,
        },
        {
          key: 2,
          title: "2. When does a component re-render in React by default? ",
          options: [
            {
              opt: 1,
              title: "A. Whenever a state or props change",
            },
            {
              opt: 2,
              title: "B. Only when the component is initially mounted",
            },
            {
              opt: 3,
              title: "C. On every user interaction",
            },
            {
              opt: 4,
              title: "D. When the component is unmounted",
            },
          ],
          correct: 1,
        },
        {
          key: 3,
          title:
            "3. What is the primary purpose of the render() method in a React component? ",
          options: [
            {
              opt: 1,
              title: "A. To update the component's state.",
            },
            {
              opt: 2,
              title: "B. To render the component's output to the DOM.",
            },
            {
              opt: 3,
              title: "C. To perform asynchronous data fetching",
            },
            {
              opt: 4,
              title: "D. To define the component's lifecycle methods",
            },
          ],
          correct: 2,
        },
        {
          key: 4,
          title:
            "4. In React, what happens if you modify the component's state directly without using setState()? ",
          options: [
            {
              opt: 1,
              title: "A. It has no effect on the component's rendering.",
            },
            {
              opt: 2,
              title: "B. It triggers a re-render of the component.",
            },
            {
              opt: 3,
              title: "C. It results in an error.",
            },
            {
              opt: 4,
              title: "D. It causes the component to unmount.",
            },
          ],
          correct: 1,
        },
        {
          key: 5,
          title: "5. In React, what is the difference between controlled components and uncontrolled components?",
          options: [
            {
              opt: 1,
              title: "A. Controlled components are rendered by React, while uncontrolled components are managed by the browser.",
            },
            {
              opt: 2,
              title: "B. Controlled components use state to manage their values, while uncontrolled components don't rely on state.",
            },
            {
              opt: 3,
              title: "C. Controlled components are defined using classes, while uncontrolled components use functional components.",
            },
            {
              opt: 4,
              title: "D. There is no difference; the terms are interchangeable.",
            },
          ],
          correct: 2,
        },
        {
          key: 6,
          title:
            "6. How can you prevent a component from re-rendering when its parent component re-renders? ",
          options: [
            {
              opt: 1,
              title: "A. Use the shouldComponentUpdate() method to return false.",
            },
            {
              opt: 2,
              title: "B. Remove the component from the parent's render method.",
            },
            {
              opt: 3,
              title: "C. Use PureComponent instead of a regular component.",
            },
            {
              opt: 4,
              title: "D. It's not possible to prevent re-rendering in React.",
            },
          ],
          correct: 3,
        },
        {
          key: 7,
          title:
            "7. Which method should you use to force a re-render of a component in React? ",
          options: [
            {
              opt: 1,
              title: "A. forceUpdate()",
            },
            {
              opt: 2,
              title: "B. componentWillUpdate()",
            },
            {
              opt: 3,
              title: "C. componentDidUpdate()",
            },
            {
              opt: 4,
              title: "D. render()",
            },
          ],
          correct: 1,
        },
        {
          key: 8,
          title:
            "8. In React, what is the purpose of the dangerouslySetInnerHTML attribute? ",
          options: [
            {
              opt: 1,
              title:
                "A. It sets the initial state of a component.",
            },
            {
              opt: 2,
              title:
                "B. It triggers a re-render of the component.",
            },
            {
              opt: 3,
              title:
                "C. It defines a component's CSS styling.",
            },
            {
              opt: 4,
              title: "D. It allows you to set the HTML content of an element using raw HTML.",
            },
          ],
          correct: 4,
        },
        {
          key: 9,
          title:
            "9. What is server-side rendering (SSR) in the context of React? ",
          options: [
            {
              opt: 1,
              title:
                "A. A deprecated rendering method in React",
            },
            {
              opt: 2,
              title:
                "B. Simultaneously rendering a React application on both the server and client",
            },
            {
              opt: 3,
              title: "C. Rendering a React application on the client-side in the browser",
            },
            {
              opt: 4,
              title:
                "D. Rendering a React application on a web server using Node.js",
            },
          ],
          correct: 4,
        },
        {
          key: 10,
          title:
            "10. What is the primary difference between ReactDOM.render() and ReactDOM.hydrate()? ",
          options: [
            {
              opt: 1,
              title: "A. render() is used for server-side rendering, while hydrate() is used for client-side rendering.",
            },
            {
              opt: 2,
              title: "B. hydrate() is used when rendering to a canvas element, while render() is used for regular DOM rendering.",
            },
            {
              opt: 3,
              title: "C. render() is used for the initial render, while hydrate() is used for rehydration of server-rendered content.",
            },
            {
              opt: 4,
              title: "D. There is no significant difference between them.",
            },
          ],
          correct: 3,
        },
      ],
    },
  ],
};