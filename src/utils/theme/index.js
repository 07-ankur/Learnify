import { createTheme } from "@mui/material";
import typography from "./typography";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2f8af5",
    },
    background: {
      default: "#06070A",
    },
    text: {
      secondary: "#889294",
      // secondary: "#F7F8F8",
    },
  },
  typography,
});


export const newTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2f8af5",
    },
    background: {
      default: "#06070A",
    },
    text: {
      secondary: "#4d5980",
    },
  },
  typography,
});

export const blogTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#B6976A",
    },
    background: {
      default: "#37273C",
    },
    text: {
      secondary: "#889294",
    },
  },
  typography,
});

