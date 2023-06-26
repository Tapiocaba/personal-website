import React from 'react';

import { Box, Typography } from '@mui/material';
import { Text } from './PageStyles';

function MonthList({ month, items = []}) {
    return(
        <Box className="monthList" sx={{ margin: '1em' }}>
                <Typography sx = {{ fontWeight: 'bold', fontSize: '1em' }}> {month} </Typography>
            <ul>
                {items.map((item, index) => (
                    <li key={index}> <Text> {item} </Text></li>
                ))}
            </ul>
        </Box>
        );
}

export default MonthList;