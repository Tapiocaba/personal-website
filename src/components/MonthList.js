import React from 'react';

function MonthList({ month, items = []}) {
    return(
        <div class="month-list">
            <p>
                <b>{month}</b> <br/>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </p>
        </div>
    );
}

export default MonthList;