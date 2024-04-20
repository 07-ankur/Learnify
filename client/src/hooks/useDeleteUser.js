import {create} from 'zustand';
import { URLS } from "../api";

export const useDeleteStore = create((set) => ({
  isLoading: false,
  deleteAccount: async (email, password, id, cookies, navigate) => {
    set({ isLoading: true });
    try {
      const {LOGIN, DELETE_USER} = URLS;
      const passwordVerificationRes = await axios.post(LOGIN,
        {
          email,
          password,
        }
      );

      if (passwordVerificationRes.status === 200) {
        const deleteUserRes = await axios.delete(
          `${DELETE_USER}${id}`
        );

        if (deleteUserRes.status === 200) {
          cookies.remove("jwt_token");
          set({ isLoading: false });
          toast.success("User deleted successfully!");
          navigate("/");
        }
      } else {
        toast.error("Incorrect password!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      set({ isLoading: false });
    }
  },
}));
