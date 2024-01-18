import { useState, useEffect } from "react";

import { Box, Link } from '@mui/material';

import { PageTitle, Text } from "../components/PageStyles";

const study = [
  "art, film, and visual studies ✎ (❁ᴗ͈ˬᴗ͈) ༉‧ ♡*.✧",
  "law ˏˋ°•*⁀➷",
  "product management ✧˖*°࿐",
  "filmmaking 🎬",
  "i don't know ⋆ˊˎ-•̩"
]

const interest = [
  "reading supreme court cases 📚",
  "making spotify playlists at every minor inconvenience 🎶",
  "critiquing restaurants 🍣",
  "asking my boss questions about my love life 🤔",
  "making cheat sheets in figma 📝",
  "sewing questionable quality cosplay outfits 🧵",
  "about to physicaly fight the harvard economics department 🥊",
  "listening to soft pop (tehe laufey and beabadoobee) 🎶",
  "psychoanalyzing my friends' mbtis 🧠",
  "looking up questionable pinterest art for my dnd characters 🐺",
  "climbing purple rocks 🧗‍♀️",
  "reading ali hazelwood books 🥰",
  "writing fanfiction 📝 (wait what)",
  "waking up at 8am to get laufey tickets 🎫",
  "attending comedy shows 🎭",
  "late night league sessions with dnd group 🐉"
]

function useWordCycle(words) {
  const [word, setCurrentWord] = useState(
      words[Math.floor(Math.random() * words.length)]
    );
  
    const handleClick = () => {
      const i = words.indexOf(word);
      const j = (i + 1) % words.length;
      setCurrentWord(words[j]);
    };
  
    return [word, handleClick];
}

function Home() {

  useEffect(() => {
    document.title = "tapi's cove!";
  }, []);

  const [currentStudy, handleStudyClick] = useWordCycle(study);
  const [currentInterest, handleInterestClick] = useWordCycle(interest);

  return (
    <Box
        sx={{
            padding: '1em',
        }}
    >
      <PageTitle>welcome to tapi's cove!</PageTitle>

      <br/>

      <Text>
        i'm lisa, but online, i go by tapi (short for tapiocaba)!

        i'm from a now more-suburban suburb in dallas, but currently am based in cambridge, ma, where i'm studying computer science and {" "}
        <Box component="span" role="button" onClick={handleStudyClick} sx={{ color: '#8CB190', cursor: 'pointer', '&:hover': { color: '#bfd3c1' } }}>
          {currentStudy}
        </Box>
        .

        <Box
        sx={{
          lineHeight: '1em',
        }}
      >
        <br />
      </Box>

        when i'm not dyeing my hair a new pastel color, i'm learning about diversity and education in tech, beating up friends in pokemon showdown, and {" "}
        <Box component="span" role="button" onClick={handleInterestClick} sx={{ color: '#8CB190', cursor: 'pointer', '&:hover': { color: '#bfd3c1' } }}>
          {currentInterest}
        </Box>
        .
      </Text>

      <Box
        sx={{
          lineHeight: '0.5em',
        }}
      >
        <br />
      </Box>
      
      <Text>
        feel free to reach out to me at {" "}
        <Link href="mailto:lisalin@college.harvard.edu">
          lisalin@college.harvard.edu
        </Link>!        
      </Text>

    </Box>
  );
}

export default Home;