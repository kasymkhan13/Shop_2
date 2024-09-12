import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

import style from '../assats/css/conNav.module.css';


import card_1 from '../assats/img/nav/01.svg';
import card_2 from '../assats/img/nav/02.svg';
import card_3 from '../assats/img/nav/03.svg';
import card_4 from '../assats/img/nav/04.svg';
import card_5 from '../assats/img/nav/05.svg';
import card_6 from '../assats/img/nav/06.svg';



const ContNav = () => {
    return (
        <div className={style.swiper}>
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={6}
            navigation
            breakpoints={{
                320: {
                  slidesPerView: 3, 
                },
                480: {
                  slidesPerView: 4, 
                },
                760: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 5, 
                },
                1200: {
                  slidesPerView: 6, 
                }
              }}
            className={style.swiper_wrapper}
        >
            <SwiperSlide >
                <div className={style.swiper_slide}>
                    <img src={card_1} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.swiper_slide}>
                    <img src={card_2} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.swiper_slide}>
                    <img src={card_3} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.swiper_slide}>
                    <img src={card_4} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.swiper_slide}>
                    <img src={card_5} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.swiper_slide}>
                    <img src={card_6} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className={style.swiper_slide}>
                    <img src={card_1} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.swiper_slide}>
                    <img src={card_2} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.swiper_slide}>
                    <img src={card_3} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    );
};

export default ContNav;