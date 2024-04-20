import {create} from "zustand";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Cookies } from "react-cookie";
import { URLS } from "../api";

const cookies = new Cookies();

export const useLoginStore = create((set) => ({
  login: async (email, password,navigate) => {
    try {
      const {LOGIN} = URLS;
      const res = await axios.post(LOGIN, {
        email,
        password,
      });

      if (res.status === 200) {
        // Extract user information from the response data
        const { token } = res.data;

        // Set JWT token in cookies
        cookies.set("jwt_token", token); // Only set the token

        toast.success("Login successful!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  },
}));
