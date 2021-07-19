import React from 'react';
import s from './style.module.css'


const headerMenu = [
    {
        title: 'Ставка дня',
        link: '/'
    },
    {
        title: 'Букмекеры',
        link: '/bookies'
    },
    {
        title: 'Бонусы',
        link: '/bonuses'
    },
    {
        title: 'Статистика',
        link: '/statistic'
    },
]
const Header = () => {
    return (
        <header>
            <div className={s.headerMainMenu}>
                <ul className={s.menuList}>
                    {
                        headerMenu.map((item, index) =>
                            <li className={index === 0 ? 'default current active parent' : ''}><a
                                href={item.link}>{item.title}</a></li>)
                    }
                </ul>
            </div>
            <div className="mobileContainer">
                <div className="navBurger" role="navigation" id="navToggle"></div>
            </div>
        </header>
    )
}

export default Header;