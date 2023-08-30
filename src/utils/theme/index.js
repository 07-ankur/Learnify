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
      secondary: "rgba(255, 255, 255, 0.6)",
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

