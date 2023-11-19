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
      <Text> making college students look cooler since 2004 -(๑☆‿ ☆#)ᕗ </Text>
      <SmallBreak />
      <Text>
        made with&nbsp;
        <GreenLink href="https://www.resume.lol/" target="_blank" rel="noreferrer">
          resume.lol
        </GreenLink>
        ; updated 11/19/2023
      </Text>

      <iframe
        src="https://drive.google.com/file/d/1PQexE4R0_-p6IUKgwGrcVWtlrBiP34x2/preview"
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