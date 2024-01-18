import React, { useEffect } from 'react';
import { Box } from '@mui/material';

import { PageTitle, Text, SmallBreak, LargeBreak } from '../components/PageStyles';

import { RedLink } from '../components/PageStyles';
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
            <Text> this is me realizing that all of harvard's clubs start with "harvard." </Text>

            <ul>
                {archives.clubs.map((club, index) => (
                    <li key={index}>
                        {club.url ? (
                            <Text>
                                {club.description} (<RedLink href={club.url}>{club.linkText}</RedLink>)
                            </Text>
                        ) : (
                            <Text>{club}</Text>
                        )}
                    </li>
                ))}
            </ul>
            <SmallBreak />

            <Text as="h1" sx={{ fontWeight: 'bold', fontSize: '1.5em' }}>courses</Text>
            <Text as="p">* = graduate courses</Text>
            <Text as="p">notes courtesy of goodnotes, figma, and joe blitzstein</Text>
            <Text>longer vers. of 124 notes coming after i fix my ipad</Text>
            <SmallBreak />

            {archives.courses.map((term, index) => (
                <React.Fragment key={index}>
                    <Text as="h3" sx={{ fontWeight: 'bold' }}>{term.term}</Text>
                    <ul>
                        {term.classes.map((course, courseIndex) => (
                            <li key={courseIndex}>
                                <Text>
                                    {course.name}
                                    {course.resource && (
                                        <>
                                            {' ['}
                                            <RedLink href={course.resource} target="_blank">
                                                Notes
                                            </RedLink>
                                            {']'}
                                        </>
                                    )}
                                </Text>
                            </li>
                        ))}
                    </ul>
                </React.Fragment>
            ))}
        </Box>
    );
}
