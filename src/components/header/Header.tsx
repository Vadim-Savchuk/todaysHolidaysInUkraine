import './Header.scss';

import getDateToday from '../../functions/getDateToday';

import logoImg from '../../img/calendar.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logoImg} alt="Calendar logo" />
                <span className='logo_text'>Що сьогодні ?</span>
            </div>
            <div className='date'>{getDateToday()}</div>
        </header>
    )
}

export default Header