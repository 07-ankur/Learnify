const BASE_URL = import.meta.env.VITE_SERVER_URI;

export const URLS = {
  SIGNUP: `${BASE_URL}api/auth/register`,
  LOGIN: `${BASE_URL}api/auth/login`,
  VERIFY_OTP: `${BASE_URL}api/auth/verifyotp`,
  RESEND_OTP: `${BASE_URL}api/auth/resendotp`,
  DELETE_USER: `${BASE_URL}api/user/deleteuser/`,
  EDIT_USER: `${BASE_URL}api/user/updateuser/`,
  FORGOT_PASS: `${BASE_URL}api/auth/forgotpassword`,
  GETFILTEREDBLOGS:`${BASE_URL}api/blog/getfilteredsortedblogs`,
  GETBLOG: `${BASE_URL}api/blog/getblogs`,
};