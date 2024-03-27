import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Landing_pg from "./pages/Landing/Landing_pg";
import Home_pg from "./pages/Home/Home_pg";
import Tutorials_pg from "./pages/Tutorials/Tutorials_pg";
import Signup_pg from "./pages/Authentication/Signup_pg";
import Login_pg from "./pages/Authentication/Login_pg";
import Blog_pg from "./pages/Blog/Blog_pg";
import { Blogs } from "./utils/contents/BlogContent";
import { Analysis_Progress } from "./utils/contents/AnalyticsContent";
import Blogsarea_pg from "./pages/Blog/Blogsarea_pg";
import Analytics_pg from "./pages/Analytics/Analytics_pg";
import Analytics_dashboard_pg from "./pages/Analytics/Analytics_dashboard_pg";
import Topic_dashboard from "./pages/Analytics/Topic_dashboard";
import Mapper_pg from "./pages/Mapper/Mapper_pg";
import { Topics } from "./utils/contents/MainContent";
import Roadmap_pg from "./pages/Mapper/Roadmap_pg";
import QuizDashboard_pg from "./pages/Quizmastery/Dashboard";
import QuizHome_pg from "./pages/Quizmastery/Home_pg";
import Mytests from "./pages/Quizmastery/Mytests";
import Practice_pg from "./pages/Quizmastery/Practice_pg";
import Test_pg from "./pages/Quizmastery/Test_pg";
import TutorialPage from "./container/Tutorials/TutorialPage";
import VerifyOtp from "./pages/Authentication/Verify_pg";
import { Toaster } from "react-hot-toast";

const { ITEMS } = Blogs;
const { TOPICS } = Analysis_Progress;
const { SKILLS } = Topics;

const App = () => {
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="*" element={<Landing_pg />} />
        <Route path="/" element={<Landing_pg />} />
        <Route path="/home" element={<Home_pg />} />
        <Route path="/tutorials" element={<Tutorials_pg />} />
        <Route path="/tutorialsPage" element={<TutorialPage />} />
        <Route path="/signup" element={<Signup_pg />} />
        <Route path="/signup/verify" element={<VerifyOtp />} />
        <Route path="/login" element={<Login_pg />} />
        <Route path="/mapper" element={<Mapper_pg />} />
        <Route path="/blog" element={<Blog_pg />} />
        {SKILLS.map((skill) => (
          <Route
            key={skill.key}
            path={`/tutorials/${skill.title.replace(/ /g, "-")}`}
            element={<TutorialPage/>}
          />
        ))}
        {ITEMS.map((item) => (
          <Route
            key={item.key}
            path={`/blog/${item.title.replace(/ /g, "-")}`}
            element={<Blogsarea_pg />}
          />
        ))}
        <Route path="/analytics" element={<Analytics_pg />} />
        <Route
          path="/analytics-dashboard"
          element={<Analytics_dashboard_pg />}
        />
        {TOPICS.map((topic) => (
          <Route
            key={topic.key}
            path={`/analytics-dashboard/${topic.title.replace(/ /g, "-")}`}
            element={<Topic_dashboard />}
          />
        ))}
        {SKILLS.map((skill) => (
          <Route
            key={skill.key}
            path={`/mapper/${skill.title.replace(/ /g, "_")}`}
            element={<Roadmap_pg />}
          />
        ))}
        <Route path="/quizMastery" element={<QuizHome_pg />} />
        <Route path="/quizMastery/user/My-tests" element={<Mytests />} />
        <Route
          path="/quizMastery/React-JS/practice/React-Hooks"
          element={<Practice_pg />}
        />
        <Route
          path="/quizMastery/React-JS/test/Mock-Test-1"
          element={<Test_pg />}
        />
        {SKILLS.map((skill) => (
          <Route
            key={skill.key}
            path={`/quizMastery/${skill.title.replace(/ /g, "-")}`}
            element={<QuizDashboard_pg />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
