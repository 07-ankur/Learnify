import {create} from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";
import { URLS } from "../api";

export const useForgotPass = create((set) => ({
  email: "",
  otp: "",
  isLoading: false,
  setEmail: (email) => set({ email }),
  setOtp: (otp) => set({ otp }),
  setIsLoading: (isLoading) => set({ isLoading }),
  verifyOTP: async (email, otp, password) => {
    try {
      set({ isLoading: true });
      const {VERIFY_OTP, RESEND_OTP, FORGOT_PASS} = URLS;
      const otpVerificationRes = await axios.post(VERIFY_OTP,
        { email, otp }
      );

      if (otpVerificationRes.status === 200) {
        const changePassRes = await axios.post(FORGOT_PASS,
          { email, password }
        );

        if (changePassRes.status === 200) {
          set({ isLoading: false });
          toast.success("Password updated successfully!");
        }
      } else {
        toast.error("Incorrect OTP!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!!");
    } finally {
      set({ isLoading: false });
    }
  },
  resendOTP: async (email) => {
    try {
      set({ isLoading: true });
      const res = await axios.post(RESEND_OTP,
        { email }
      );

      if (res.status === 200) {
        set({ isLoading: false });
        toast.success("OTP sent successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      set({ isLoading: false });
    }
  },
}));
