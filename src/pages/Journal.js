import React, { useEffect } from 'react';

import { Box } from '@mui/system';

import MonthList from '../components/MonthList';
import data from '../components/log.json';
import { PageTitle, Text, LargeBreak } from '../components/PageStyles';

function Journal() {

    useEffect(() => {
        document.title = "journal";
    }, []);

    const filterTwoThree = data.log.filter((item) => item.year === 2023)
    const filterTwoTwo = data.log.filter((item) => item.year === 2022)
    return (
        <Box className="normalPage" sx={{ margin: '1em' }}> 
            <PageTitle id="journal-heading">Journal</PageTitle>

            <Text>Random life milestones and adventures ღゝ◡╹ )ノ♡</Text>
            <Text>ₓ˚. ୭ ˚○◦˚.˚◦○˚ ୧ .˚ₓ</Text>
            <LargeBreak />

            <Text as="h2" sx={{ fontWeight: 'bold' }}>2023</Text>
            {filterTwoThree.map((item) => (
                <MonthList key={item.id} month={item.month} items={item.items} year={item.year} />
            ))}

            <LargeBreak />

            <Text as="h2" sx={{ fontWeight: 'bold' }}>2022</Text>
            {filterTwoTwo.map((item) => (
                <MonthList key={item.id} month={item.month} items={item.items} year={item.year} />
            ))}
        </Box>
    );
}

export default Journal;