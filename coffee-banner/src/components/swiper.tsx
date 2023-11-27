// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SelectCoffee from './selectCoffee';
import ChooseWidth from './chooseWidth';
import CustomizeTitle from './customizeTitle';

export default () => {
  return (
    <Swiper
      className="swiper"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <SelectCoffee></SelectCoffee>
      </SwiperSlide>
      <SwiperSlide>
        <ChooseWidth></ChooseWidth>
      </SwiperSlide>
      <SwiperSlide>
        <CustomizeTitle></CustomizeTitle>
      </SwiperSlide>
    </Swiper>
  );
};
