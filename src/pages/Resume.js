import React, { useEffect } from 'react';

import { Box } from '@mui/material';

import { PageTitle, Text, GreenLink, SmallBreak } from '../components/PageStyles';

function Resume() {
  useEffect(() => {
    document.title = "resume";
  }, []);

  return (
    <Box className="normalPage" sx={{ margin: '1em' }}>
      <PageTitle>resume</PageTitle>
      <Text> making this college student look cooler since 2004 -(๑☆‿ ☆#)ᕗ </Text>
      <SmallBreak />
      <Text>
        made with&nbsp;
        <GreenLink href="https://www.resume.lol/" target="_blank" rel="noreferrer">
          resume.lol
        </GreenLink>
        ; updated 04/07/2024
      </Text>

      <iframe
        src="https://drive.google.com/file/d/1rrr8h_kAoQ_AHfnI1wKT_ACgtUzwr0Ne/preview"
        width="640"
        height="825"
        allow="autoplay"
        title="resume"
        style={{border: 'none', margin: '1em 0'}}
      ></iframe>

    </Box>
  );
}

export default Resume;