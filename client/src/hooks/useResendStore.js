import {create} from "zustand";
import { URLS } from "../api";

export const useResendStore = create((set) => ({
    isLoading: false,
    resend: async (email) => {
      set({ isLoading: true });
      try {
        // Call API to resend OTP
        const {RESEND_OTP} = URLS
        const res = await axios.post(RESEND_OTP, {
          email,
        });
        if (res.status === 200) {
          toast.success("OTP sent successfully!");
          return true;
        }
      } catch (error) {
        console.error("Resend failed:", error);
        toast.error("Resend failed. Please try again.");
      } finally {
        set({ isLoading: false });
      }
      return false;
    },
  }));