import React, { useEffect } from 'react';
import { Box } from '@mui/material';

import { PageTitle, Text, SmallBreak, LargeBreak } from '../components/PageStyles';

import archives from '../components/archives.json';

export default function Archive() {
    useEffect(() => {
        document.title = "archives";
    }, []);

    return (
        <Box className="normalPage" sx={{ margin: '1em' }}> 
            <PageTitle>harvard archives</PageTitle>
            <LargeBreak />

            <Text as="h1" sx={{ fontWeight: 'bold', fontSize: '1.4em' }}>club club stuff</Text>
            <ul>
                {archives.clubs.map((club, index) => (
                    <li key={index}>
                        <Text>{club}</Text>
                    </li>
                ))}
            </ul>
            <SmallBreak />

            <Text as="h1" sx={{ fontWeight: 'bold', fontSize: '1.5em' }}>courses</Text>
            {archives.courses.map((term, index) => (
                <React.Fragment key={index}>
                    <Text as="h3" sx={{ fontWeight: 'bold' }}>{term.term}</Text>
                    <ul>
                        {term.classes.map((course, courseIndex) => (
                            <li key={courseIndex}>
                                <Text>{course}</Text>
                            </li>
                        ))}
                    </ul>
                </React.Fragment>
            ))}
        </Box>
    );
}
