import { makeStyles } from "@mui/styles";

const useGlobalStyles = makeStyles({
  "@global": {
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
    },
    a: {
      textDecoration: "none",
      color: "var(--green-normal)",
    },
    "a:hover": {
      color: "var(--green-hover)",
      cursor: "pointer",
    },
    "a.import": {
      color: "var(--pink-normal)",
    },
    "a.import:hover": {
      color: "var(--pink-hover)",
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
});

export default useGlobalStyles;
