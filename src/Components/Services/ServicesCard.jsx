import { MdOutlineWatchLater, MdPlace } from "react-icons/md";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
    const { id, title, img, ticketPrice, startTime, endTime, place, description } = service;
    console.log(service)
    return (
        <div className="flex flex-col md:flex-row lg:flex-row gap-6 bg-[#F7F7F7] hover:border-2 border-[#FFB12B] px-3 py-4">
            <div className="w-3/5 h-full flex">
                <p className=" md:absolute lg:absolute z-10 py-7 px-5 text-2xl font-extrabold text-white bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%">26 <br /> june</p>
                <img className="w-full" src={img} alt="" />

            </div>
            <div className="my-5">
                <h1 className="text-lg font-extrabold">{title}</h1>
                <p className="text-lg text-[#FFBE30]">Tickets from ${ticketPrice}</p>
                <div className="flex gap-5 items-center mt-2">
                    <button className="bg-white p-2 rounded-full border-2 border-[#FFBE30]"><MdOutlineWatchLater className="text-[#FFBE30]"></MdOutlineWatchLater></button>
                    <p className="text-[#95A5A8]">Start {startTime} - {endTime}</p>
                </div>
                <div className="flex gap-5 items-center my-2">
                    <button className="bg-white p-2 rounded-full border-2 border-[#FFBE30]"><MdPlace className="text-[#FFBE30]"></MdPlace></button>
                    <p className="text-[#95A5A8]">{place}</p>
                </div>

                <Link to={`/service/${id}`}>
                    <button className="btn w-full text-[#95A5A8] border-2 border-[#FF5107] hover:bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%  hover:text-white">
                        DETAILS
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default ServicesCard;