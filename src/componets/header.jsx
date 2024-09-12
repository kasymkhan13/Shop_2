import style from '../assats/css/header.module.css';

import logo from '../assats/img/Без названия.png';
import header_1 from '../assats/img/icons/header_1.svg';
import header_2 from '../assats/img/icons/header_2.svg';
import header_3 from '../assats/img/icons/header_3.svg';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Header = () => {

    const [nav, setNav] = useState(false);

    return (
        <header className={style.header}>
            <div className={style.box}>
                <div className={style.logo_img}>
                    <img src={logo} alt="" />
                </div>
                <div className={style.box_input}>
                    <input type="text" placeholder='Поиск'/>
                </div>
                <ul  className={nav ? [style.menu, style.active].join(' ') : [style.menu]}>
                    <li>Коллекции</li>
                    <li>Мебель</li>
                    <li>Освещение</li>
                    <li>Аксессуары</li>
                    <li>Доставка</li>
                </ul> 
                <div className={style.sity}>
                    <p>Астана</p>
                </div>
                <div className={style.icon}>
                    <div className={style.icon_img}>
                        <img src={header_1} alt="" />
                    </div>
                    <div className={style.icon_img}>
                        <img src={header_2} alt="" />
                    </div>
                    <div className={style.icon_img}>
                        <img src={header_3} alt="" />
                    </div>
                </div>
                <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                    {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
                </div>
            </div>
        </header>
    );
};

export default Header;