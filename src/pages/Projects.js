import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";

import { Box } from '@mui/system';

import { PageTitle, Text, GreenLink, SmallBreak } from '../components/PageStyles';

function Projects() {
    useEffect(() => {
        document.title = "projects";
      }, []);
  
    return (
        <Box className="normalPage" sx={{ margin: '1em' }}>
            <PageTitle>projects</PageTitle>
            <Text>
                full projects section coming soon, pls let me cook ┬──┬ ¯\_(ツ)
            </Text>
            <Text>
                for now, feel free to look at my{" "}
                <GreenLink href="https://github.com/Tapiocaba" target="_blank" rel="noreferrer">
                    GitHub
                </GreenLink>!
            </Text>

            <Text>.・。.・゜✭・.・✫・゜・。.</Text>
            
            <Text>
                <GreenLink to="/" component={NavLink} underline="always">
                    Personal Website
                </GreenLink>
                <br/>
                dis thing
            </Text>
            <SmallBreak />
            <Text>
                <GreenLink
                    href="https://github.com/Tapiocaba/graph-theory-pokemon" target="_blank" rel="noreferrer">
                    Pokémon Graph Theory
                </GreenLink>
                <br/>
                this isn't coding but I'm proud of it. Makes me look 110x better at math than I actually am.
            </Text>
            <SmallBreak />
            <Text>
                <GreenLink
                    href="https://github.com/Tapiocaba/Blackjack50" target="_blank" rel="noreferrer">
                    Blackjack50
                </GreenLink>
                <br/>
                CS50 final project. College-friendly gambling!
            </Text>
            <SmallBreak />
            <Text>
                <GreenLink
                    href="https://github.com/Tapiocaba/PlanTic-Pomodoro-Timer---KWK-Final-Project" target="_blank" rel="noreferrer">
                    PlanTic Pomodoro Timer
                </GreenLink>
                <br/>
                Kode with Klossy 2021 final project. Tic, cuz it ticks like a clock.
            </Text>
            <SmallBreak />
            <Text>
                <GreenLink
                    href="https://github.com/racheltgunawan/Divercity---KWK-group-project" target="_blank" rel="noreferrer">
                    Divercity iOS App
                </GreenLink>
                <br/>
                Kode with Klossy 2020 final project. Built with Swift, now I don't use a Mac.
            </Text>
            
        </Box>
    )
}

export default Projects;
