import { FaHandshake } from "react-icons/fa6";
import { GiBalloons,GiDecapitation } from "react-icons/gi";
import { VscInspect } from "react-icons/vsc";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { FcIdea } from "react-icons/fc";

const WhyArora = () => {
    return (
        <div className=" mx-16 md:mx-20 lg:mx-28">
            <hr className="bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% p-0.5 w-1/12 my-4" />
            <h1 style={{ background: '-webkit-linear-gradient(left, #FFB92E, #FF5B0B, #FFD034)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className=" text-4xl font-extrabold py-4">Why You Should Choose Us</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="my-8">
                    <h1 className="text-[#757575]  text-2xl font-medium">We Are Arora Group</h1>
                    <p className="my-4 text-6xl font-normal text-black"><span className="font-extrabold text-black">NO.1</span> Events <br /> Planner</p>

                    <p className="text-base font-normal my-4">Choose our event management service for a seamless and unforgettable experience. Our dedicated team brings creativity, precision, and passion to every event, ensuring that your cultural celebrations are nothing short of spectacular. With attention to detail, a flair for innovation, and a commitment to honoring traditions, we transform ordinary events into extraordinary memories. Trust us to create moments that resonate with diversity, unity, and the vibrant spirit of cultural heritage. Make your celebration truly exceptional with Aroa Cultural Events Planner</p>

                    <button className="btn w-full bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% text-white font-extrabold text-lg">Join Us</button>
                </div>
                <div className="lg:my-10">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
                        <div className="bg-[#F7F7F7] p-2 flex flex-col justify-center items-center text-center lg:py-9 px-9 hover:bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% hover:text-white">
                            <button><FaHandshake className="text-2xl lg:text-4xl text-[#FF5107] hover:text-white "></FaHandshake></button>
                            <h1 className="text-lg font-bold">Friendly Team</h1>
                            <p className="text-xs text-[#757575]">More than 100 teams</p>
                        </div>
                        <div className="bg-[#F7F7F7] p-2 flex flex-col justify-center items-center text-center lg:py-9 px-9 hover:bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% hover:text-white">
                            <button><GiBalloons className="text-2xl lg:text-4xl text-[#FF5107] hover:text-white"></GiBalloons></button>
                            <h1  className="text-lg font-bold">Perfect Vanues</h1>
                            <p className="text-xs text-[#757575]">Unlock ideal venues for memorable events. </p>
                        </div>
                        <div className="bg-[#F7F7F7] p-2 flex flex-col justify-center items-center text-center lg:py-9 px-9 hover:bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% hover:text-white">
                            <button><VscInspect className="text-2xl lg:text-4xl text-[#FF5107] hover:text-white"></VscInspect></button>
                            <h1  className="text-lg font-bold">Unique Scenario</h1>
                            <p className="text-xs text-[#757575]">Crafting unforgettable experiences.</p>
                        </div>
                        <div className="bg-[#F7F7F7] p-2 flex flex-col justify-center items-center text-center lg:py-9 px-9 hover:bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% hover:text-white">
                            <button><GiDecapitation className="text-2xl lg:text-4xl text-[#FF5107] hover:text-white"></GiDecapitation></button>
                            <h1  className="text-lg font-bold">Unforgettable Time</h1>
                            <p className="text-xs text-[#757575]">Moments that linger forever</p>
                        </div>
                        <div className="bg-[#F7F7F7] p-2 flex flex-col justify-center items-center text-center lg:py-9 px-9 hover:bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% hover:text-white">
                            <button><PiPhoneCallDuotone className="text-2xl lg:text-4xl text-[#FF5107] hover:text-white"></PiPhoneCallDuotone></button>
                            <h1  className="text-lg font-bold">24/7 Hours Support</h1>
                            <p className="text-xs text-[#757575]">Anywhere Anytime</p>
                        </div>
                        <div className="bg-[#F7F7F7] p-2 flex flex-col justify-center items-center text-center lg:py-9 px-9 hover:bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% hover:text-white">
                            <button><FcIdea className="text-2xl lg:text-4xl text-[#FF5107] hover:text-white"></FcIdea></button>
                            <h1  className="text-lg font-bold">Brilant idea</h1>
                            <p className="text-xs text-[#757575]">We have million idea</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyArora;