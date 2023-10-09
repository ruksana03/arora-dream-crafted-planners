import { Option, Select } from "@material-tailwind/react";
import EventsBanner from "../../Components/Banners/EventsBanner";
import ShowEvents from "../../Components/ShowEvents/ShowEvents";

import { GrGroup, GrPlan } from "react-icons/gr";
import { SiEventstore } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { AiOutlineApple, AiFillGoogleCircle, AiFillWindows, AiFillYahoo } from "react-icons/ai";
import { Link } from "react-router-dom";



const Events = () => {
    return (
        <div>
            <EventsBanner></EventsBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-28" >
            <div className="border-2 bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% p-12" >
                    <div className=" font-extrabold text-lg lg:text-2xl text-white my-16">
                        <div className="flex flex-col lg:flex-row gap-4 my-2">
                            <GrGroup className="text-6xl text-white"></GrGroup>
                            <h1>  Find Best Event On Arora Group</h1>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 my-8">
                            <SiEventstore className="text-4xl text-white"></SiEventstore>
                            <h1>Find Our Best Events</h1>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 my-2">
                            <GrPlan className="text-6xl text-white"></GrPlan>
                            <h1>Explore Our Best Planning Events</h1>
                        </div>
                    </div>
                    <div className="">
                        <details className="dropdown mb-32">
                            <summary className="m-1 btn w-full"><SlCalender className="text-2xl"></SlCalender> Add to Calender</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">


                                <Link>
                                    <div className="flex gap-2 items-center border-2 my-1 rounded-lg p-1">
                                        <AiOutlineApple className="text-4xl"></AiOutlineApple>
                                        <h1 className="text-center text-xl">Apple Calender</h1>
                                    </div>
                                </Link>

                                <Link>
                                    <div className="flex gap-2 items-center border-2 my-1 rounded-lg p-1">
                                        <AiFillGoogleCircle className="text-4xl" ></AiFillGoogleCircle>
                                        <h1 className="text-center text-xl">Google <span className="text-xs text-[#878787]">(online)</span></h1>
                                    </div>
                                </Link>

                                <Link>
                                    <div className="flex gap-2 items-center border-2 my-1 rounded-lg p-1">
                                        <AiFillWindows className="text-4xl"></AiFillWindows>
                                        <h1 className="text-center text-xl">Outlook <span className="text-xs text-[#878787]">(online)</span></h1>
                                    </div>
                                </Link>

                                <Link>
                                    <div className="flex gap-2 items-center border-2 my-1 rounded-lg p-1">
                                        <AiFillWindows className="text-4xl"></AiFillWindows>
                                        <h1 className="text-center text-xl">Outlook.com </h1>
                                    </div>
                                </Link>
                                <Link>
                                    <div className="flex gap-2 items-center border-2 my-1 rounded-lg p-1">
                                        <AiFillYahoo className="text-4xl"></AiFillYahoo>
                                        <h1 className="text-center text-xl">Yahoo <span className="text-xs text-[#878787]">(online)</span></h1>
                                    </div>
                                </Link>
                            </ul>
                        </details>
                        <h1>Google Map Search</h1>
                    </div>
                </div>

                <div className=" lg:col-span-2 mt-8"> <ShowEvents></ShowEvents></div>
            </div>
            

        </div>
    );
};

export default Events;