import React, { useEffect } from 'react';

import { Box } from '@mui/material';

import { PageTitle, Text, LargeBreak, SmallBreak, PageList, RedLink, InternalLink } from '../components/PageStyles';
import { uniItems, prevItems } from '../components/AboutItems';

function About() {

  useEffect(() => {
    document.title = "about me!";
  }, []);

  return (
    <Box
      sx={{
        padding: '1em',
      }}
    >

      <PageTitle>about me!</PageTitle>
      <LargeBreak />
      <Box component="img" src="/lisa_photo.png" alt="tapi" sx={{width: 200, height: 'auto'}} />

      <Text>ₓ˚. ୭ ˚○◦˚.˚◦○˚ ୧ .˚ₓ</Text>

      <Text> hi hi! welcome to my about page, featuring the only good picture i've taken in the past 2 years or so :p </Text>
      <SmallBreak />
      <Text>
        i'm lisa, born and raised in a pseudorandom combination of fuzhou, new york city, and dallas. 
        i learned how to code while trying to make wings of fire and percy jackson fanart in {" "}
        <RedLink href={"https://scratch.mit.edu/"}>scratch</RedLink>, and i learned both programming and video editing to
        showcase my digital creations. 
      </Text>
      <SmallBreak />
      <Text>
        along with this, i'm usually interested in 100 different things at once. you can usually find me taking long walks
        around the city, nomming up nommies food, trying new weird sports, and 4am revenge-bedtime-video-game-crastinating my way through life.
      </Text>
      <SmallBreak />
      <Text>
        while i'm still trying to figure things out, i'm trying new things at every opportunity and pushing myself out of my comfort zone! 
        thanks for visiting my page :P i really appreciate it!
      </Text>
      <SmallBreak />
      <SmallBreak />
      <Text><b>currently, i'm</b></Text>
      <SmallBreak />

      <Text>
        a sophomore at {" "}
        <RedLink href="https://www.harvard.edu/">harvard university</RedLink>
        , studying a double concentration in computer science and art, film, and visual studies
        <SmallBreak />
        interested in graphics, tech/art, diversity, and education
        <SmallBreak />
        not getting enough {" "}
        <InternalLink to="/archive">sleep</InternalLink>
      </Text>
      <SmallBreak />
      <Text><b>at uni, i</b></Text>
      <PageList items={uniItems} />
      <Text><b>previously, i've</b></Text>
      <PageList items={prevItems} />
    </Box>
  );
}

export default About;