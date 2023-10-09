import { Link } from "react-router-dom";
import Fqa from "./Fqa";
import LetestWork from "./LetestWork";


const ArorasUpdate = () => {
    return (
        <div className="mx-4 md:mx-12 lg:mx-28 my-12">
            <div>
                <hr className="bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% p-0.5 w-1/12" />
                <h1 style={{ background: '-webkit-linear-gradient(left, #FFB92E, #FF5B0B, #FFD034)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className=" text-4xl font-extrabold py-4">Our Latest Update</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-4 w-full ">
                <div className="w-full md:w-full lg:w-1/2">
                    <h1 className="text-[#757575]  text-2xl font-medium">Find Your Answers</h1>
                    <p className="my-4 text-6xl font-normal text-black">Ask & <span className="font-extrabold text-black">Questions</span>  </p>
                    <Fqa></Fqa>
                </div>
                <div className="w-full md:w-full lg:w-1/2">
                    <h1 className="text-[#757575]  text-2xl font-medium">Our Blogs</h1>
                    <p className="my-4 text-6xl font-normal text-black">Latest <span className="font-extrabold text-black">News</span>  </p>
                    <LetestWork></LetestWork>
                </div>
            </div>
            <div className="text-center">
                <h1 className=" text-4xl font-extrabold py-4">For Add Your Blogs & Ask your Question?</h1>
          <Link to='/joinUs'><button className="btn text-black border-2 border-[#FF9B23]  hover:bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% p-0.5 w-1/2 hover:text-white text-base font-bold">Join US</button></Link>
            </div>
        </div>
    );
};

export default ArorasUpdate;