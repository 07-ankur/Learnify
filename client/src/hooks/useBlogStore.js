import { create } from 'zustand'
import axios from "axios";
import { URLS } from "../api";

export const useBlogStore = create((set) => ({
  filterCategory: "",
  setFilterCategory: (category) => set({ filterCategory: category }),

  sortBy: "",
  setSortBy: (value) => set({ sortBy: value }),

  filteredItems: [],
  setFilteredItems: (data) => set({ filteredItems: data }),

  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),

  visibleItems: 6,
  setVisibleItems: (count) => set({ visibleItems: count }),

  fetchData: async () => {
    try {
      set({ isLoading: true });
      const {GETFILTEREDBLOGS} = URLS;
      console.log(GETFILTEREDBLOGS)
      const response = await axios.get(GETFILTEREDBLOGS);
      set({ filteredItems: response.data });
      set({ isLoading: false });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  },

  filterAndSortItems: async (filterCategory, sortBy) => {
    try {
      set({ isLoading: true });
      const response = await axios.get(
        "https://learnify-ev51.onrender.com/api/blog/getfilteredsortedblogs",
        {
          params: {
            filterCategory,
            sortBy,
          },
        }
      );
      set({ filteredItems: response.data });
      set({ isLoading: false });
    } catch (error) {
      console.error("Error fetching filtered and sorted blogs:", error);
    }
  },

  clearFilterCategory: () => {
    set({ filterCategory: "" });
    set({ visibleItems: 6 });
    set({ sortBy: "" });
    set({ isLoading: true });
    useBlogStore.getState().fetchData();
  },

  clearFilterSort: () => {
    set({ sortBy: "" });
    set({ visibleItems: 6 });
    set({ filterCategory: "" });
    set({ isLoading: true });
    useBlogStore.getState().fetchData();
  },

  handleShowMore: () => {
    set((state) => ({ visibleItems: state.visibleItems + 8 }));
  },
}));
