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

const EventsBanner = () => {
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
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/V2DMdZY/pexels-pixabay-302100.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg ">
                        <h1 className="mb-5 text-4xl font-normal">"Relive Our Memorable Moments:<span className='text-3xl font-extrabold'> Past Events That Define Us"</span></h1>
                        <p className="mb-5">Relive the magic of our past events, each a testament to our dedication and creativity. Browse through our event gallery and experience the joy, diversity, and unity that define us.</p>
                       <Link to='/contact'> <button className=" px-10 py-3 m-2 rounded-full font-bold bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%  ">Share Your Feedback</button></Link>
                       <Link to='/login'><button className="border-4 border-[#FFBE30] px-8 py-2 m-2 font-bold rounded-full hover:bg-[#FFBE30] ">Get Started</button></Link>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/CWhpz9g/pexels-brett-sayles-6424244.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-normal">"Relive Our Memorable Moments:<span className='text-3xl font-extrabold'> Past Events That Define Us"</span></h1>
                            <p className="mb-5">Relive the magic of our past events, each a testament to our dedication and creativity. Browse through our event gallery and experience the joy, diversity, and unity that define us.</p>
                            <Link to='/contact'> <button className=" px-10 py-3 m-2 rounded-full font-bold bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%  ">Share Your Feedback</button></Link>
                            <Link to='/login'><button className="border-4 border-[#FFBE30] px-8 py-2 m-2 font-bold rounded-full hover:bg-[#FFBE30] ">Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/cC3WGkZ/pexels-adhwaith-chandran-15167464.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-normal">"Relive Our Memorable Moments:<span className='text-3xl font-extrabold'> Past Events That Define Us"</span></h1>
                            <p className="mb-5">Relive the magic of our past events, each a testament to our dedication and creativity. Browse through our event gallery and experience the joy, diversity, and unity that define us.</p>
                            <Link to='/contact'> <button className=" px-10 py-3 m-2 rounded-full font-bold bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%  ">Share Your Feedback</button></Link>
                    <Link to='/login'><button className="border-4 border-[#FFBE30] px-8 py-2 m-2 font-bold rounded-full hover:bg-[#FFBE30] ">Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    </div>
    );
};

export default EventsBanner;