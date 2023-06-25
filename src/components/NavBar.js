import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { List, ListItem, ListItemText, IconButton, Box } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NavBar = () => {

    const links = [
        { 
            title: "Home",
            path: "/"
        },
        { 
            title: "About",
            path: "/about"
        },
        { 
            title: "Projects",
            path: "/projects"
        },
        { 
            title: "Journal",
            path: "/journal"
        },
        { 
            title: "Resume",
            path: "/resume"
        }
    ];

    const location = useLocation();

    const handleGithubClick = () => {
        window.open('https://github.com/tapiocaba', '_blank');
    };

    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/lisazzlin', '_blank');
    };

    return (
        <Box
            sx={{
                '&&': {
                    color: '#D56E61',
                    paddingTop: '10%',
                    fontSize: '16px',
                }
            }}
        >
            <List component="nav">
                {links.map((item, index) => (
                    <RouterLink to={item.path} key={index} style={{ textDecoration: 'none' }}>
                        <ListItem sx={{ '&&': { justifyContent: 'flex-end', padding: '5px' } }}>
                            <ListItemText
                                primary={item.title}
                                sx={{
                                    color: location.pathname === item.path ? '#efc7c2' : '#8CB190',
                                    '&:hover': {
                                        color: '#bfd3c1',
                                        cursor: 'pointer'
                                    }
                                }}
                            />
                        </ListItem>
                    </RouterLink>
                ))}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '1rem',
                    }}
                >
                    <IconButton sx={{ color: '#D56E61', '&:hover': { color: '#bfd3c1', cursor: 'pointer' }}} onClick={handleGithubClick}>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton sx={{ color: '#D56E61', '&:hover': { color: '#bfd3c1', cursor: 'pointer' }}} onClick={handleLinkedinClick}>
                        <LinkedInIcon />
                    </IconButton>
                </Box>
            </List>
        </Box>
    )
}

export default NavBar;