"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const BakerySlider = () => {
  const images = [
    "/bakeryImage/IMG-20250721-WA0004.jpg",
    "/bakeryImage/IMG-20250721-WA0005.jpg",
    "/bakeryImage/IMG-20250721-WA0006.jpg",
    "/bakeryImage/IMG-20250721-WA0007.jpg",
    "/bakeryImage/IMG-20250721-WA0008.jpg",
  ];

  return (
    <div className="relative bg-black text-white rounded-xl overflow-hidden mt-[120px]  ">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="h-[300px] md:h-[400px] w-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={src}
              alt={`Slide ${i}`}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BakerySlider;
