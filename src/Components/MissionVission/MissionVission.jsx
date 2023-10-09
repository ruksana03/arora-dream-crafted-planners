import { Link } from "react-router-dom";


const MissionVission = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 my-12 mx-28">
            <div>
                <h1 className="text-2xl text-[#757575] my-8">We are Arora Group</h1>
                <h1 className="text-5xl text-[#333333]"><span className="font-bold my-8">No.1</span> Events Management</h1>
             <Link to='/login'><button className="my-4 btn bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% text-white text-sm rounded-full px-10 font-bold">GET STARTED!</button></Link>
            </div>
            <div className="m-4">
                <hr className="bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% p-0.5 w-1/3" />
                <h1 className="text-[#333333] text-lg font-bold my-4">"Our Mission: Celebrating Diversity, Fostering Unity" </h1>
                <p className="text-[#333333] text-sm font-medium my-3">At Aroa Cultural Events Planner, our mission is to celebrate the rich tapestry of cultural diversity while promoting unity among communities. We're dedicated to crafting unforgettable events that showcase the beauty of traditions and bring people closer together.</p>

                <h1 className="italic text-gray-700 font-bold">"Embrace, Unite, Inspire: Our Cultural Mission "</h1>
                <p className="italic text-gray-700 font-semibold">Our cultural mission at Aroa Cultural Events Planner is simple yet profound: we embrace cultural diversity, unite hearts and minds, and inspire lasting connections through vibrant celebrations. Join us in our mission to create unique, unforgettable cultural experiences.</p>
            </div>
            <div className="m-4">
            <hr  className="bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% p-0.5 w-1/3" />
                <h1 className="text-[#333333] text-lg font-bold my-4">"Our Vision: Bridging Cultures, Inspiring Tomorrow "</h1>
                <p className="text-[#333333] text-sm font-medium my-3">At Aroa Cultural Events Planner, our vision is to be a catalyst for change by bridging cultures through extraordinary events. We aspire to inspire a more inclusive and harmonious world where diversity is celebrated as a source of strength</p>

                <h1 className="italic text-gray-700 font-bold">"Shaping the Future of Cultural Celebrations "</h1>
                <p className="italic text-gray-700 font-semibold">Our vision is to lead the way in shaping the future of cultural celebrations. We strive to create innovative, immersive experiences that not only honor traditions but also spark curiosity, understanding, and a shared appreciation for the world's diverse cultures.</p>
            </div>
        </div>
    );
};

export default MissionVission;