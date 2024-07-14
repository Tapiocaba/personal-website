import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Box } from "@mui/material";

import { PageTitle, Text } from "../components/PageStyles";

export default function NotFound() {
  useEffect(() => {
    document.title = "not found :(";
  }, []);

  return (
    <Box className="normalPage" sx={{ margin: "1em" }}>
      <PageTitle> oops! you're lost :( </PageTitle>
      <Text>
        {" "}
        Let's get you back {""}
        <NavLink to="/" class="clickable">
          home
        </NavLink>
        !
      </Text>
    </Box>
  );
}
