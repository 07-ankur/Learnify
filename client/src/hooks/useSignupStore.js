import {create} from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSignupStore = create((set) => ({
  signup: async (firstname, lastname, email, password, avatar) => {
    try {
      const res = await axios.post(
        "https://learnify-ev51.onrender.com/api/auth/register",
        {
          firstname,
          lastname,
          email,
          password,
          avatar,
        }
      );

      if (res.status === 200) {
        toast.success("Account created successfully!");

        const navigate = useNavigate();
        navigate("/signup/verify", { state: { email } });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  },
}));
