import React, { useEffect } from 'react';

import { Box } from '@mui/material';

import { PageTitle, Text, LargeBreak, SmallBreak, PageList, RedLink } from '../components/PageStyles';
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
        long walks around cities, animals, all things food, hanging out with friends, and so so much more! you can find me trying new
        restaurants on a minimum wage salary, playing with apis in the physics building, and 4am revenge-bedtime-procrastinating my way through life.
      </Text>
      <SmallBreak />
      <Text>while i'm still trying to figure things out, i'm trying new things at every opportunity and pushing myself out of my comfort zone! thanks for visiting my page :P i really appreciate it!! </Text>
      <SmallBreak />
      <Text><b>currently, i'm</b></Text>
      <SmallBreak />

      <Text>
        a 1st-year student at {" "}
        <RedLink href="https://www.harvard.edu/">harvard university</RedLink>
        , planning on obtaining an ab/sm in cs with a secondary in an undecided field.
        <SmallBreak />
        interested in developments in ml/ai and their applications, working with apis, diversity in tech, and education.
        <SmallBreak />
        working as a product management intern, increasing access to mentorship with {" "}
        <RedLink href="https://bobatalks.com/">BobaTalks</RedLink>
        .
        <SmallBreak />
        i'm currently working at {" "}
        <RedLink href="https://www.axleapi.com/"> Axle </RedLink>
        , working on a universal data platform for trucking!
        <SmallBreak />
      </Text>

      <Text><b>at uni, i</b></Text>
      <PageList items={uniItems} />
      <Text><b>previously, i've</b></Text>
      <PageList items={prevItems} />

    </Box>
  );
}

export default About;