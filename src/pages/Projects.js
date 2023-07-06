import React, { useEffect } from 'react';
import { Box, CardMedia, Typography, Grid } from '@mui/material';
import { PageTitle, Text, SmallBreak, GreenLink } from '../components/PageStyles';

import projects from '../components/projects.json';

function Projects() {
    useEffect(() => {
        document.title = "projects";
    }, []);
    
    const renderProject = (project, index) => {
        return (
            <Grid item xs={12} sm={6} key={index}>
                <Box sx={{
                    border: '1.5px solid black',
                    cursor: 'pointer',
                    '&:hover': {
                        boxShadow: '8px 8px 0px 0px #FEC2AE',
                    }
                }}>
                    <a href={project.link} target="_blank" rel="noreferrer">
                        <CardMedia
                            component="img"
                            height="200"
                            width="200"
                            image={project.image}
                            alt={project.name}
                        />
                    </a>
                </Box>
                <Box sx={{ maxWidth: 345, marginBottom: 3 }}>
                    <SmallBreak />
                    <GreenLink href={project.link}>
                            {project.name}
                    </GreenLink>
                    <Typography variant="body2" color="text.secondary" fontWeight="bold">
                        {project.type} / {project.date}
                    </Typography>
                    <Text color="text.secondary">
                        {project.description}
                    </Text>
                </Box>
            </Grid>
        )
    }

    return (
        <Box className="normalPage" sx={{ margin: '1em' }}>
            <PageTitle>projects</PageTitle>
            <Text>
                full projects section coming soon, pls let me cook ┬──┬ ¯\_(ツ)
            </Text>
            <SmallBreak />
            <SmallBreak />
            {projects.projects.map((section, index) => (
                <Box key={index}>
                    <PageTitle>{section.title}</PageTitle>
                    <Grid container spacing={4}>
                        {section.list.map(renderProject)}
                    </Grid>
                </Box>
            ))}
        </Box>
    )
}

export default Projects;