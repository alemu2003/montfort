import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules"; 
import "aos/dist/aos.css";
import AOS from "aos";

export default function Explore() {
 
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
      data-aos="fade-up"
    >
    
      <h2
        className="font-bold text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-6 font-sulphur"
        data-aos="fade-down" 
      >
        Explore More
      </h2>

   
      <Swiper
        slidesPerView={1} 
        spaceBetween={30} 
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]} 
        className="mySwiper w-full sm:w-10/12 md:w-full"
      >
        <SwiperSlide>
          <div
            className="relative group"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <img
              src="/image/back.JPG"
              alt="Example 1"
              className="full h-[350px] sm:h-[400px] md:h-[450px]  p-8 rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0">
      
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative group"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <img
              src="/image/front.JPG"
              alt="Example 1"
              className="full h-[350px] sm:h-[400px] md:h-[450px]  p-8 rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0">
      
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative group"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <img
              src="/image/hard.JPG"
              alt="Example 1"
              className="full h-[350px] sm:h-[400px] md:h-[450px]  p-8 rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0">
      
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative group"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <img
              src="/image/ruka.JPG"
              alt="Example 1"
              className="full h-[350px] sm:h-[400px] md:h-[450px]  p-8 rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0">
      
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative group"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <img
              src="/image/st.JPG"
              alt="Example 1"
              className="full h-[350px] sm:h-[400px] md:h-[450px]  p-8 rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0">
      
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative group"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <img
              src="/image/teacher.JPG"
              alt="Example 1"
              className="full h-[350px] sm:h-[400px] md:h-[450px]  p-8 rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0">
      
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative group"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <img
              src="/image/ruka1.JPG"
              alt="Example 1"
              className="full h-[350px] sm:h-[400px] md:h-[450px]  p-8 rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0">
      
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative group"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <img
              src="/image/ruka2.JPG"
              alt="Example 1"
              className="full h-[350px] sm:h-[400px] md:h-[450px]  p-8 rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0">
      
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative group"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <img
              src="/image/ruka3.JPG"
              alt="Example 1"
              className="full h-[350px] sm:h-[400px] md:h-[450px]  p-8 rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0">
      
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative group"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <img
              src="/image/ruka4.JPG"
              alt="Example 1"
              className="full h-[350px] sm:h-[400px] md:h-[450px]  p-8 rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0">
      
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
