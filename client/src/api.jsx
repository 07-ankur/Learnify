const BASE_URL = import.meta.env.VITE_SERVER_URI;

export const URLS = {
  SIGNUP: `${BASE_URL}api/auth/register`,
  LOGIN: `${BASE_URL}api/auth/login`,
  VERIFY_OTP: `${BASE_URL}api/auth/verifyotp`,
  RESEND_OTP: `${BASE_URL}api/auth/resendotp`,
  DELETE_USER: `${BASE_URL}api/user/deleteuser/`,
  EDIT_USER: `${BASE_URL}api/user/updateuser/`,
  FORGOT_PASS: `${BASE_URL}api/auth/forgotpassword`,
  GETFILTEREDBLOGS: `${BASE_URL}api/blog/getfilteredsortedblogs`,
  GETBLOG: `${BASE_URL}api/blog/getblogs`,
};

export const Tutorials_URL = {
  Tutorial: (topic, title) =>
    `${BASE_URL}api/tutorials/gettutorials/${title}/${topic}`,
  Tutorial_Topic: (title) =>
    `${BASE_URL}api/tutorials/gettutorialsTopics/${title}`,
  GetCompletion_Tutorial: (title, topic) =>
    `${BASE_URL}api/tutorials/getcompletionTutorial/${title}/${topic}`,
  PostCompletion_Tutorial: `${BASE_URL}api/tutorials/postcompletionTutorial`,
};

export const QuizMastery_URL = {
  Practice_Topic: (title) => `${BASE_URL}api/quiz/getquizesTopics/${title}`,
  Practice: (title, topic) => `${BASE_URL}api/quiz/getquizes/${title}/${topic}`,
  Test_Topic: (title) =>
    `${BASE_URL}api/quizTests/getquizTestsDetails/${title}`,
  Test: (title, topic) =>
    `${BASE_URL}api/quizTests/getquizTests/${title}/${topic}`,
};
