import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { useRef } from 'react';
import { product } from '../../helpers/content';
import 'swiper/scss';
import 'swiper/css/pagination';
import ArrowFromSlider from '../../assets/svg/arrowFromSlider';

const SliderMain = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <div className="section-two__slider-buttons">
        <div
          ref={navigationPrevRef}
          className="section-two__slider-button"
        >
          <ArrowFromSlider />
        </div>
        <div
          ref={navigationNextRef}
          className="section-two__slider-button"
        >
          <ArrowFromSlider />
        </div>
      </div>
      <Swiper
        className="section-two__slider"
        spaceBetween={15}
        slidesPerView={4}
        navigation={{
          // Both prevEl & nextEl are null at render so this does not work
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation]}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {product.map((el) => (
          <SwiperSlide
            className="section-two__slide"
            key={el.id}
          >
            <div className="section-two__slide-src">{el.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderMain;
