import {create} from 'zustand';
import { URLS } from '../api';

export const useVerificationStore = create((set) => ({
  isLoading: false,
  verify: async (email, otp) => {
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