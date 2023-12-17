import React from 'react';
import { Box, Typography } from '@mui/material';
import { Text } from './PageStyles';
import { Link } from 'react-router-dom'; // Import Link

function MonthList({ month, items = [] }) {
    return (
        <Box className="monthList" sx={{ margin: '1em' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '1em' }}>{month}</Typography>
            <ul>
                {items.map((item, index) => {
                    if (item.link) {
                        // if item has a link, render it as a link
                        return (
                            <li key={index}>
                                <Link to={item.link} style={{color: '#D56E61', '&:hover': {color: '#efc7c2'}}}> 
                                    <Text>{item.text}</Text>
                                </Link>
                            </li>
                        );
                    } else {
                        // render normal text if no link
                        return (
                            <li key={index}><Text>{item.text}</Text></li>
                        );
                    }
                })}
            </ul>
        </Box>
    );
}

export default MonthList;
