import { useState, useEffect } from "react";

import { Box, Link } from '@mui/material';

import { PageTitle, Text } from "../components/PageStyles";

const study = [
  "art, film, and visual studies ✎ (❁ᴗ͈ˬᴗ͈) ༉‧ ♡*.✧",
  "law ˏˋ°•*⁀➷",
  "product management ✧˖*°࿐",
  "i don't know ⋆ˊˎ-•̩"
]

const interest = [
  "changing my secondary 🤔",
  "reading supreme court cases 📚",
  "making spotify playlists at every minor inconvenience 🎶",
  "critiquing restaurants 🍣",
  "asking my boss questions about my love life 🤔",
  "listening to taylor swift 🎶 ",
  "accidentally stalemating another game of chess♟️",
  "watching spy x family 📺",
  "simping over yelan 🎮",
  "failing to fine tune gpt3 (two hours gone from my life) 🤖",
  "about to physicaly fight the harvard economics department 🥊",
  "realizing i should've written this website in TS 🤦‍♀️",
  "psychoanalyzing my friends' mbtis 🧠",
  "looking up questionable pinterest art for my dnd characters 🐺",
  "almost doing a pull up at the gym 🏋️‍♀️",
  "reading ali hazelwood books 🥰",
  "adding more extensions into vscode 🧑‍💻",
  "daydreaming about booktok romance scenarios 📚"
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
        i'm lisa, but i also go by tapi (short for tapiocaba)!

        i'm from a now more-suburban suburb in Dallas, but currently am based in cambridge, ma, where i'm studying cs 🖥️ and {" "}
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