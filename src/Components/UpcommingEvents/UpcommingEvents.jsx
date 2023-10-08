import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import UpcommingEventCard from "./UpcommingEventCard";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const UpcommingEvents = () => {
    const [upcommingEvents, setUpcommingEvents] = useState([]);
    // const [dataLength, setDataLength] = useState();

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setUpcommingEvents(data));

    }, [])
    console.log(upcommingEvents)

    const [timeLeft, setTimeLeft] = useState({
        days: 15,
        hours: 10,
        minutes: 24,
        seconds: 33,
    });


    useEffect(() => {
        const interval = setInterval(() => {

            const newTimeLeft = { ...timeLeft };
            newTimeLeft.seconds--;

            if (newTimeLeft.seconds < 0) {
                newTimeLeft.seconds = 59;
                newTimeLeft.minutes--;

                if (newTimeLeft.minutes < 0) {
                    newTimeLeft.minutes = 59;
                    newTimeLeft.hours--;

                    if (newTimeLeft.hours < 0) {
                        newTimeLeft.hours = 23;
                        newTimeLeft.days--;

                        if (newTimeLeft.days < 0) {
                            clearInterval(interval);
                        }
                    }
                }
            }


            setTimeLeft(newTimeLeft);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [timeLeft]);


    return (
        <div className="mx-28 my-6">
            <hr className="bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% p-0.5 w-1/12" />
            <div>
                <h1 className="text-2xl text-[#757575] my-4">OUR UPCOMMING EVENTS</h1>
                <h1 className="text-4xl font-normal">Explore Our Latest <span className="font-bold">Awesome Events</span></h1>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max my-4">
                    <div className="flex flex-col border-2 border-[#757575] text-[#757575] p-2 rounded-lg">
                        <span className="countdown text-5xl">
                            <span style={{ '--value': timeLeft.days }}>{timeLeft.days}</span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col border-2 border-[#757575] text-[#757575] p-2 rounded-lg">
                        <span className="countdown text-5xl">
                            <span style={{ '--value': timeLeft.hours }}>{timeLeft.hours}</span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col border-2 border-[#757575] text-[#757575] p-2 rounded-lg">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ '--value': timeLeft.minutes }}>{timeLeft.minutes}</span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col border-2 border-[#757575] text-[#757575] p-2 rounded-lg">
                        <span className="countdown text-5xl">
                            <span style={{ '--value': timeLeft.seconds }}>{timeLeft.seconds}</span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
            <div className="h-full" >
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
                    slidesPerView={4}
                >
                    {upcommingEvents.map((upcommingEvent) => (<SwiperSlide key={upcommingEvent.id}> <UpcommingEventCard key={upcommingEvent} upcommingEvent={upcommingEvent}></UpcommingEventCard> </SwiperSlide>))}

                </Swiper>

            </div>
        </div>
    );
};

export default UpcommingEvents;