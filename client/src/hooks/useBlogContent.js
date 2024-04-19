import { create } from 'zustand'
import axios from "axios";
import { URLS } from "../api";

export const useBlogContentStore = create((set) => ({
  items: [],
  isLoading: false,

  fetchData: async () => {
    try {
      set({ isLoading: true });
      const { GETBLOG } = URLS; 
      const response = await axios.get(GETBLOG);
      set({ items: response.data, isLoading: false });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      set({ isLoading: false });
    }
  },
}));