import React from 'react'
import MonthList from '../components/MonthList'
import data from '../components/log.json'

import { useEffect } from 'react'

function Journal() {

    useEffect(() => {
        document.title = "journal";
    }, []);

    const filterTwoThree = data.log.filter((item) => item.year === 2023)
    const filterTwoTwo = data.log.filter((item) => item.year === 2022)
    return (
        <div class="normalPage">
            <h1 id="journal-heading">journal</h1>

            <p>random life milestones and adventures ღゝ◡╹ )ノ♡</p>
            <p>ₓ˚. ୭ ˚○◦˚.˚◦○˚ ୧ .˚ₓ</p>

            <h2><b>2023</b></h2>
            {filterTwoThree.map((item) => (
                <MonthList key={item.id} month={item.month} items={item.items} year={item.year} />
            ))}

            <h2><b>2022</b></h2>
            {filterTwoTwo.map((item) => (
                <MonthList key={item.id} month={item.month} items={item.items} year={item.year} />
            ))}
            
        </div>
    );
}

export default Journal;