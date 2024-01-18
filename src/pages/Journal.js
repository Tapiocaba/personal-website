import React, { useEffect } from 'react';
import { Box } from '@mui/system';

import MonthList from '../components/MonthList';
import data from '../components/log.json';
import { PageTitle, Text, LargeBreak } from '../components/PageStyles';

function Journal() {
    useEffect(() => {
        document.title = "journal";
    }, []);

    const groupedData = {};
    data.log.forEach((item) => {
        if (!groupedData[item.year]) {
            groupedData[item.year] = [];
        }
        groupedData[item.year].push(item);
    });

    return (
        <Box className="normalPage" sx={{ margin: '1em' }}>
            <PageTitle id="journal-heading">journal</PageTitle>
            <Text>Random life milestones and adventures ღゝ◡╹ )ノ♡</Text>
            <Text>ₓ˚. ୭ ˚○◦˚.˚◦○˚ ୧ .˚ₓ</Text>
            <LargeBreak />

            {Object.keys(groupedData).sort().reverse().map(year => (
                <React.Fragment key={year}>
                    <Text as="h2" sx={{ fontWeight: 'bold' }}>{year}</Text>
                    {groupedData[year].map(item => (
                        <MonthList key={item.id} month={item.month} items={item.items} year={item.year} />
                    ))}
                    <LargeBreak />
                </React.Fragment>
            ))}
        </Box>
    );
}

export default Journal;
