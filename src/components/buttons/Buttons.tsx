import { FC } from 'react';

import './Buttons.scss';

import { Date } from '../../data/data'

interface ButtonsProps {
    todayHollidays: Date[],
    holidayNumber: number,
    showHolidayHandler: (id: number) => void,
}

const Buttons: FC<ButtonsProps> = ({ todayHollidays, showHolidayHandler, holidayNumber }) => {
    return (
        <div className='buttons'>
            {todayHollidays.map((day, index) => {
                return <button
                    key={day.id}
                    onClick={() => showHolidayHandler(day.id)}
                    style={{ backgroundImage: `url(${day.img})` }}
                    className={index === holidayNumber ? 'button active' : 'button'}
                ></button>
            })}
        </div>
    )
}

export default Buttons