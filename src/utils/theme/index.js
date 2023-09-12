import { createTheme } from "@mui/material";
import typography from "./typography";

export const theme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: "#2f8af5",
    },
    background: {
      default: "#06070A",
    },
    text: {
      secondary: "#F5F6F8",
      // secondary: "#F7F8F8",
    },
  },
  typography,
});

export const authTheme = createTheme({
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
      default: "#47324e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#889294",
    },
  },
  typography,
});

export const analyticTheme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: "#8899A6",
    },
    background: {
      default: "#15202B",
    },
    text: {
      primary:"#b6c0c8",
      secondary: "#8899A6",
    },
  },
  typography,
});

