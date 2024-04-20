import {create} from 'zustand';
import toast from 'react-hot-toast';
import axios from 'axios';
import { URLS } from '../api';

export const useVerificationStore = create((set) => ({
  isLoading: false,
  verify: async (email, otp, navigate) => {
    set({ isLoading: true });
    try {
      // Call API to verify OTP
      const {VERIFY_OTP} = URLS;
      const res = await axios.post(VERIFY_OTP, {
        email,
        otp,
      });
      if (res.status === 200) {
        toast.success("Account Verified successfully!");
        navigate("/login")
        return true;
      }
    } catch (error) {
      console.error("Verification failed:", error);
      toast.error("Verification failed. Please try again.");
    } finally {
      set({ isLoading: false });
    }
    return false;
  },
}));