'use client';

import React from 'react';
import { Autoplay, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = ({ data }) => {
  return (
    <section className="w-full h-screen ">
      <div className="h-full">
        <Swiper
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Autoplay, ]}
          className="h-full  rounded-xl"
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.image}
              className="relative h-full  rounded-xl"
            >
              <div
                className="absolute inset-0 h-[80%] w-full bg-cover bg-center bg-no-repeat  rounded-xl"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              <div className="absolute inset-0 h-[80%] w-full bg-black opacity-20"></div>
              <div className="relative z-10 h-full flex items-center justify-center ">
                <div className="text-center">
                  <p className="text-xl sm:text-6xl lg:text-5xl font-bold text-white">
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSlider;
