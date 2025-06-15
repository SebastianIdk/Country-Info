import ReactDOM from "react-dom/client";
import Countries from "./pages/Countries";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: { mode: "light", background: { default: "#fafafa" } },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 700 },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Countries />
  </ThemeProvider>
);
