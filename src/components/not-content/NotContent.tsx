import './NotContent.scss';

import notImg from '../../img/listening.png';

const NotContent = () => {
    return (
        <div className='not-content'>
            <img src={notImg} alt="Сьогодні жодних св'ят" />
            <h2 className='not_title'>
                Сьогодні немає жодних свят, <br />
                або ми їх просто не знаємо.
            </h2>
        </div>
    )
}

export default NotContent