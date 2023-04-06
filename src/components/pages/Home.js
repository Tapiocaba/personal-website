import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const study = [
    "integrative biology ˚ ༘♡ ⋆｡˚ ❀",
    "art, film, and visual studies ✎ (❁ᴗ͈ˬᴗ͈) ༉‧ ♡*.✧",
    "law ˏˋ°•*⁀➷",
    "product management ✧˖*°࿐",
    "i don't know man ⋆ˊˎ-•̩"
]

const interest = [
    "changing my secondary (minor) 🤔",
    "reading supreme court cases 📚",
    "making spotify playlists at every minor inconvenience 🎶",
    "critiquing restaurants 🍣",
    "asking my boss questions about my love life 🤔",
    "probably still psetting (adam please) 😔",
    "accidentally stalemating another game of chess♟️",
    "watching spy x family 📺",
    "simping over yelan in genshin 🎮",
    "failing to fine tune gpt3 (two hours gone from my life) 🤖",
    "wondering why react is giving me a 'useRef' error when i wrote 'Route' 🥲",
    "psychoanalyzing my friends' mbtis 🧠",
    "looking up questionable pinterest art for my pathfinder character 🐺",
    "almost finishing a pull up at the gym 🏋️‍♀️",
    "reading ali hazelwood books 🥰",
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
    <div class="homePage">
            <h1>welcome to tapi's cove!</h1>
            <br/>
            <p>
            i'm lisa, but i also go by tapi (short for tapiocaba)!

            <br/>
            i'm from a now more-suburban suburb in Dallas, but currently am based in cambridge, ma, where i'm studying cs 🖥️ and {" "}

            <a class="clickable" id="study" onClick={handleStudyClick}>
                {currentStudy}
            </a>
            .
            <br/>
            <br/>

            when i'm not dying over cs124 psets, i'm learning about diversity and education in tech, beating up friends in pokemon showdown, and {" "}

            <a class="clickable" id="interest" onClick={handleInterestClick}>
                {currentInterest}
            </a>
            .
        </p>

        <p>
            feel free to reach out to me at {" "}
            <a class="clickable" href="mailto:lisalin@college.harvard.edu">
                lisalin@college.harvard.edu
            </a>!
        </p>

        ╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯

        <p>

        </p>
    </div>
  );
}

export default Home;