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

      <Text> hi hi! welcome to my about page, featuring the only good picture of me in the past year or so :p </Text>
      <SmallBreak />
      <Text>
        personally, i'm someone interested in 100 different things at once, but i've consistently loved in tech, art,
        long walks around cities, animals, all things food, and hanging out with friends! you can find me trying new
        restaurants, playing new semi-realism video games, and 4am revenge-bedtime-procrastinating my way through life.
      </Text>
      <SmallBreak />
      <Text>while i'm still trying to figure things out, i'm trying new things at every opportunity and pushing myself out of my comfort zone! thanks for visiting my page :P i really appreciate it!! </Text>
      <SmallBreak />
      <Text><b>currently, i'm</b></Text>
      <SmallBreak />

      <Text>
        a sophomore at {" "}
        <RedLink href="https://www.harvard.edu/">harvard university</RedLink>
        , studying a double concentration in computer science and art, film, and visual studies
        <SmallBreak />
        interested in generative ai, tech/art, diversity, and education.
        <SmallBreak />
        working as a product management intern, increasing access to mentorship with {" "}
        <RedLink href="https://bobatalks.com/">BobaTalks</RedLink>
        .
        <SmallBreak />
        and not getting enough {" "}
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