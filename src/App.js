import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Journal from "./pages/Journal";
import NotFound from "./pages/NotFound";
import Archive from "./pages/Archive";

import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import NavBar from "./components/NavBar";

import TagManager from "react-gtm-module";
import { Analytics } from "@vercel/analytics/react";

const tagManagerArgs = {
  gtmId: "GTM-5NF9KLN",
};
TagManager.initialize(tagManagerArgs);

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--background": "#FFEEE2",
          "--pink-normal": "#D56E61",
          "--pink-hover": "#efc7c2",
          "--green-hover": "#bfd3c1",
          "--green-normal": "#8CB190",
          "--text-color": "#4c4852",
        },
        html: {
          overflowY: "scroll",
          overflowX: "hidden",
          backgroundColor: "var(--background)",
        },
        body: {
          backgroundColor: "var(--background)",
          color: "var(--text-color)",
          fontFamily: "'IBM Plex Mono'",
          fontWeight: 400,
          msOverflowStyle: "scroll",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#FFEEE2",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#bfd3c1",
            borderRadius: "20px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#8CB190",
          },
        },
        "a.import": {
          color: "var(--pink-normal)",
          "&:hover": {
            color: "var(--pink-hover)",
          },
        },
        "#outer": {
          display: "flex",
          flexGrow: 1,
          flexDirection: "row",
          minHeight: "calc(50vh/3)",
          flexBasis: "calc(100%/3)",
          alignItems: "center",
        },
        "#nav-bar": {
          color: "var(--pink-normal)",
          textAlign: "right",
          paddingTop: "20%",
          paddingLeft: "30%",
          position: "fixed",
          top: 0,
          left: 0,
          fontSize: "18px",
        },
        "#content": {
          marginLeft: "40%",
          paddingTop: "80px",
          paddingRight: "30%",
          fontSize: "16px",
        },
        ".homePage": {
          marginTop: "20%",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "var(--green-normal)",
          textDecoration: "none",
          "&:hover": {
            color: "var(--green-hover)",
            cursor: "pointer",
          },
        },
      },
    },
  },
  palette: {
    background: {
      default: "#FFEEE2",
    },
    text: {
      primary: "#4c4852",
    },
  },
  typography: {
    fontFamily: "'IBM Plex Mono'",
    fontWeight: 400,
    fontSize: 18,
  },
});

function App() {
  window.dataLayer.push({
    event: "pageview",
  });

  return (
    <ThemeProvider theme={theme}>
      <Analytics />
      <CssBaseline />
      <Grid
        container
        style={{
          marginTop: "10%",
        }}
      >
        <Grid
          item
          xs={12}
          sm={3}
          style={{
            position: "fixed",
            marginLeft: "27%",
          }}
        >
          <NavBar />
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          style={{ marginLeft: "35%", marginRight: "25%" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
