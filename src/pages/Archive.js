import React, { useEffect } from "react";
import { Box } from "@mui/material";

import {
  PageTitle,
  Text,
  SmallBreak,
  LargeBreak,
} from "../components/PageStyles";

import { RedLink } from "../components/PageStyles";
import archives from "../components/archives.json";

export default function Archive() {
  useEffect(() => {
    document.title = "archives";
  }, []);

  return (
    <Box className="normalPage" sx={{ margin: "1em" }}>
      <PageTitle>harvard archives</PageTitle>
      <LargeBreak />

      <Text sx={{ fontWeight: "bold", fontSize: "1.4em" }}>
        club club stuff
      </Text>
      <Text>
        {" "}
        clubs i've been apart of in no particular order! also why do all of
        harvard's clubs start with "harvard."{" "}
      </Text>

      <ul>
        {archives.clubs.map((club, index) => (
          <li key={index}>
            {club.url ? (
              <Text>
                <u
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#D56E61",
                  }}
                >
                  <RedLink href={club.url}>{club.linkText}</RedLink>
                </u>{" "}
                ({club.role}): {club.description}
              </Text>
            ) : (
              <Text>{club}</Text>
            )}
          </li>
        ))}
      </ul>
      <SmallBreak />

      <Text sx={{ fontWeight: "bold", fontSize: "1.5em" }}>courses</Text>
      <Text> * = graduate courses</Text>
      <Text> notes courtesy of goodnotes, figma, and joe blitzstein;</Text>
      <SmallBreak />

      {archives.courses.map((term, index) => (
        <React.Fragment key={index}>
          <Text as="h3" sx={{ fontWeight: "bold" }}>
            {term.term}
          </Text>
          <ul>
            {term.classes.map((course, courseIndex) => (
              <li key={courseIndex}>
                <Text>
                  {course.name}
                  {course.resource && (
                    <>
                      {" ["}
                      <u
                        style={{
                          textDecoration: "underline",
                          textDecorationColor: "#D56E61",
                        }}
                      >
                        <RedLink href={course.resource} target="_blank">
                          <b>Notes</b>
                        </RedLink>
                        {"]"}
                      </u>
                    </>
                  )}
                </Text>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </Box>
  );
}
