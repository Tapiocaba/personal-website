import { useState, useEffect } from "react";

import { Box } from "@mui/material";

import { PageTitle, RedLink, SmallBreak, Text } from "../components/PageStyles";

const interest = [
  "reading supreme court cases 📚",
  "making spotify playlists at every minor inconvenience 🎶",
  "sitting in kinokuniya to read design magazines 🖌️",
  "making homemade better-versions of restaurant food 🍣",
  "asking my boss questions about my love life 🤔",
  "making cheat sheets in figma 📝",
  "sewing questionable quality cosplay outfits 🧵",
  "making tables 🪚",
  "listening to soft pop (tehe laufey and beabadoobee) 🎶",
  "looking up questionable pinterest art for my dnd characters 🐺",
  "climbing purple rocks 🧗‍♀️",
  "writing fanfiction 📝 (wait what)",
  "attending comedy shows 🎭",
  "going to art museums 🖼️",
  "celebrating my 200th hour anniversary on baldur's gate 🧚‍♀️",
  "rock moosic 🎸",
  "pottery 🪴",
];

function useWordCycle(words) {
  const [word, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)],
  );

  const handleClick = () => {
    const i = words.indexOf(word);
    const j = (i + 1) % words.length;
    setCurrentWord(words[j]);
  };

  return [word, handleClick];
}

function Home() {
  let token = process.env.REACT_APP_TOKEN || "";
  if (token.startsWith("http:")) {
    token = token.replace("http:", "https:");
  }

  useEffect(() => {
    document.title = "tapi's cove!";

    const hasVisitedThisSession = sessionStorage.getItem("hasVisitedHome");

    if (!hasVisitedThisSession) {
      if (token) {
        fetch(token, {
          mode: "no-cors",
          cache: "no-store",
          method: "GET",
        })
          .catch(() => {})
          .finally(() => {
            sessionStorage.setItem("hasVisitedHome", "true");
          });
      }
    }
  }, [token]);

  const [currentInterest, handleInterestClick] = useWordCycle(interest);

  return (
    <Box
      sx={{
        padding: "1em",
      }}
    >
      <PageTitle>welcome to tapi's cove!</PageTitle>

      <br />

      <Text>
        i'm lisa, but online, i go by tapi (short for tapiocaba)! i'm from a now
        more-suburban suburb in dallas, but currently am based in the great big
        city of new york, where i'm securing notion on the application security
        team!
        <Box
          sx={{
            lineHeight: "1em",
          }}
        >
          <br />
        </Box>
        when i'm not dyeing my hair a new color, i'm learning about diversity
        and education in tech, beating up friends in pokemon champions, and{" "}
        <Box
          component="span"
          role="button"
          onClick={handleInterestClick}
          sx={{
            color: "#8CB190",
            cursor: "pointer",
            "&:hover": { color: "#bfd3c1" },
          }}
        >
          {currentInterest}
        </Box>
        .
        <SmallBreak /> previously, i've worked at{" "}
        <RedLink href={"https://www.apple.com/careers/us/"}>
          apple
        </RedLink>,{" "}
        <RedLink href={"https://www.drumkit.ai/"}>
          drumkit (formerly axle)
        </RedLink>
        , and in research!
        <SmallBreak />
      </Text>

      <Box
        sx={{
          lineHeight: "0.5em",
        }}
      >
        <br />
      </Box>
    </Box>
  );
}

export default Home;
