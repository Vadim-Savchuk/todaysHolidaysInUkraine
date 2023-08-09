import { FC } from 'react';

import './Description.scss';

import { Date } from '../../data/data'

interface DescriptionProps {
    holidayNumber: number,
    todayHollidays: Date[]
}

const Description: FC<DescriptionProps> = ({ holidayNumber, todayHollidays }) => {
    return (
        <div className='description'>
            <div className='description_header'>
                <h2 className='description_title'>{todayHollidays[holidayNumber].name}</h2>
                <h3 className='description_title_affiliation'>{todayHollidays[holidayNumber].affiliation}</h3>
            </div>
            <p className='description_text'>
                {todayHollidays[holidayNumber].desc}
            </p>
        </div>
    )
}

export default Description