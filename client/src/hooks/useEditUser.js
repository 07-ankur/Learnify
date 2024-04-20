import {create} from 'zustand';
import toast from 'react-hot-toast';
import axios from 'axios';
import { URLS } from "../api";

export const useEditUser = create((set) => ({
  isLoading: false,
  editAccount: async (email, firstname, lastname, password, newPassword, avatar, id, navigate) => {
    set({ isLoading: true });
    try {

        if (!password) {
          toast.error("Please enter the password!!");
          set({ isLoading: false });
          return;
        }

        const {LOGIN, EDIT_USER} = URLS;
        const passwordVerificationRes = await axios.post(LOGIN,
          {
            email,
            password,
          }
        );

        if (passwordVerificationRes.status === 200) {
          const updateUserRes = await axios.put(
            `${EDIT_USER}${id}`,
            {
              firstname,
              lastname,
              newPassword,
              avatar,
            }
          );

          if (updateUserRes.status === 200) {
            set({ isLoading: false });
            toast.success("User updated successfully!");
            toast.success("Login again to apply changes!");
            navigate("/login");
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
