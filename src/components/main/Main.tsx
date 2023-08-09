import { useState } from 'react';

import date from '../../data/data';

import getDate from '../../functions/getDate';

import Buttons from '../buttons/Buttons';
import Description from '../description/Description';
import NotContent from '../not-content/NotContent';

import './Main.scss';

const Main = () => {
    const [holidayNumber, setHolidayNumber] = useState<number>(0);

    const todayHollidays = date.filter((day) => {
        return day.date === getDate();
    });

    const showHolidayHandler = (id: number): void => {
        const index = todayHollidays.findIndex(elem => elem.id === id);

        setHolidayNumber(index);
    }

    return (
        <main className='main'>
            {todayHollidays[0] ? (
                <>
                    <h1 className='title'>Сьогоднішні св'ята</h1>

                    <div className='content'>
                        <Buttons todayHollidays={todayHollidays} showHolidayHandler={showHolidayHandler} holidayNumber={holidayNumber} />
                        <Description todayHollidays={todayHollidays} holidayNumber={holidayNumber} />
                    </div>
                </>

            ) : (
                <NotContent />
            )}
        </main>
    )
}

export default Main