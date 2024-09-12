import style from '../assats/css/conHeader.module.css';
import home_1 from '../assats/img/home.jpg';

const ConHeader = () => {
    return (
        <div className={style.content}>
            <div className={style.con_img}>
                <img src={home_1} alt="" />
            </div>
            <div className={style.con_titel}>
                <div className={style.titel_h1}>
                    <h1>Новая коллекция </h1>
                </div>
                <div className={style.titel_p}>
                    <p>
                        Наши новые поставки мебели в <br />
                        скандинавском стиле приятно вас удивят
                    </p>
                </div>
                <button className={style.titel_button}>
                    Смотреть
                </button>
            </div>
        </div>
    );
};

export default ConHeader;