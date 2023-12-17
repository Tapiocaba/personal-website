import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { PageTitle, Text, SmallBreak } from '../../components/PageStyles';

export default function HanfuPhotos() {
    useEffect(() => {
        document.title = "hanfu photos :>";
    }, []);

    // Array of photo names
    const photoNames = [
        "hanfuphoto1",
        "hanfuphoto2",
        "hanfuphoto3",
        "hanfuphoto7",
        "hanfuphoto8",
        "hanfuphoto9",
        "hanfuphoto6",
        "hanfuphoto5",
        "hanfuphoto4"
    ];

    return (
        <Box className="normalPage" sx={{ margin: '1em' }}>
            <PageTitle>hanfu photos</PageTitle>
            <Text>
                hanfu photos from aug 2023, i never have an excuse to show them since i don't post on insta :) THESE ARE UNEDITIED
            </Text>
            <SmallBreak />
            <Text>
                these are also insanely compressed because of vercel file limits :( so skin looks patchy ITS LOOKS SM BETTER WHEN ITS THE FULL FILE SIZE
            </Text>
            <SmallBreak />

            <Grid container spacing={2}>
                {photoNames.map((photoName, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <img 
                            src={`/images/hanfu/${photoName}.jpg`} // Update with the correct path
                            alt={`${photoName}`} 
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
