import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Autoplay } from "swiper/modules";
import useIcons from "~/hooks/imageHooks/useIcons";
import useArrow from "~/hooks/imageHooks/useArrow";
import { useLoaderData } from "react-router";

export default function OurCustomersSwiper() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const arrow = useArrow();
  const { home } = useLoaderData() as { home: any };

  return (
    <div className="w-full relative">
      <div className="flex items-center justify-center gap-[44px] w-full mt-6">
        
        {/* Previous Button */}
        <button
          type="button"
          className="cursor-pointer focus:outline-none absolute top-[50%] translate-y-[-50%] z-10 left-[10px]"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <img
            loading="lazy"
            src={arrow.smallGold}
            alt="Previous"
            className="w-7 h-7 rotate-180"
          />
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="cursor-pointer focus:outline-none absolute top-[50%] translate-y-[-50%] z-10 right-[10px]"
          onClick={() => swiperInstance?.slideNext()}
        >
          <img
            loading="lazy"
            src={arrow.smallGold}
            alt="Next"
            className="w-7 h-7"
          />
        </button>
      </div>

      <Swiper
        effect="cards"
        loop={true}
        loopAdditionalSlides={home.testimonials.length}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="mySwiper w-[307.059px] h-[413.25px] scale-75 lg:scale-100"
      >
        {home.testimonials.map((item: any, index: number) => (
          <SwiperSlide key={index} className="rounded-[18px]">
            <TestimonialCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function TestimonialCard({ data }: { data: any }) {
  const { isActive } = useSwiperSlide();
  const icon = useIcons();

  return (
    <div
      className={`w-full h-full rounded-[18px] px-[7px] py-[21px] transition-all duration-300 
        ${isActive ? "bg-[#EBEBEB]" : "bg-[#C6A45A33]"}
      `}
    >
      {/* FIXED OPACITY ISSUE */}
      <div className="flex flex-col items-start justify-between w-full h-full opacity-100">
        
        <div className="flex flex-col items-start gap-[10px]">
          
          <div className="flex items-center gap-2 ml-[12px]">
            {/* Rating badge if needed */}
          </div>

          <div className="flex flex-col items-start">
            
            <img
              loading="lazy"
              src={icon.quotes}
              alt=""
            />

            {/* REVIEW TEXT */}
            <p className="text-[#111111] font-semibold text-[15px] leading-[156.667%] px-[7px]">
              {data.message}
            </p>
          </div>

          <hr className="w-[85%] border-2 border-[#3536354D] mx-auto" />
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3 mt-6">
          
          <img
            loading="lazy"
            src={data.image}
            alt={data.author}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <p className="font-semibold text-gray-900">
              {data.name}
            </p>

            <p className="text-sm text-gray-500">
              {data.position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}