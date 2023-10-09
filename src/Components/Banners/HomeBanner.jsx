import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const HomeBanner = () => {


    return (
        <div className='w-full '>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/7NNdPxf/pexels-designecologist-2526105.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg ">
                            <h1 className="mb-5 text-6xl font-normal">"Accept Diversity, <span className='text-5xl font-extrabold'>Celebrate Unity"</span></h1>
                            <p className="mb-5">Discover the magic of diverse celebrations at Aroa Cultural Events Planner. We blend traditions and unity to create unforgettable cultural experiences.</p>
                           <Link to='/about'> <button className=" px-10 py-3 m-2 rounded-full font-bold bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%  ">About us</button></Link>
                           <Link to='/login'> <button className="border-4 border-[#FFBE30] px-8 py-2 m-2 font-bold rounded-full hover:bg-[#FFBE30] ">Get Started</button></Link>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/NmgJB31/pexels-expect-best-1243337.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                            <h1 className="mb-5 text-6xl font-normal">"Accept Diversity, <span className='text-5xl font-extrabold'>Celebrate Unity"</span></h1>
                                <p className="mb-5">Discover the magic of diverse celebrations at Aroa Cultural Events Planner. We blend traditions and unity to create unforgettable cultural experiences.</p>
                                <Link to='/about'> <button className=" px-10 py-3 m-2 rounded-full font-bold bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%  ">About us</button></Link>
                                <Link to='/login'> <button className="border-4 border-[#FFBE30] px-8 py-2 m-2 font-bold rounded-full hover:bg-[#FFBE30] ">Get Started</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/QFCJKwV/pexels-rayn-l-3163677.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                            <h1 className="mb-5 text-6xl font-normal">"Accept Diversity, <span className='text-5xl font-extrabold'>Celebrate Unity"</span></h1>
                                <p className="mb-5">Discover the magic of diverse celebrations at Aroa Cultural Events Planner. We blend traditions and unity to create unforgettable cultural experiences.</p>
                                <Link to='/about'> <button className=" px-10 py-3 m-2 rounded-full font-bold bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%  ">About us</button></Link>
                                <Link to='/login'> <button className="border-4 border-[#FFBE30] px-8 py-2 m-2 font-bold rounded-full hover:bg-[#FFBE30] ">Get Started</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Yy9xKYy/pexels-rdne-stock-project-7249196.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                            <h1 className="mb-5 text-6xl font-normal">"Accept Diversity, <span className='text-5xl font-extrabold'>Celebrate Unity"</span></h1>
                                <p className="mb-5">Discover the magic of diverse celebrations at Aroa Cultural Events Planner. We blend traditions and unity to create unforgettable cultural experiences.</p>
                                <Link to='/about'> <button className=" px-10 py-3 m-2 rounded-full font-bold bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%  ">About us</button></Link>
                           <Link to='/login'> <button className="border-4 border-[#FFBE30] px-8 py-2 m-2 font-bold rounded-full hover:bg-[#FFBE30] ">Get Started</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>

        </div>

    );
};

export default HomeBanner;