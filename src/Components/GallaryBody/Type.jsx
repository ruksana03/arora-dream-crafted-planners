import { FaPhotoVideo , FaVideo ,FaStar} from "react-icons/fa";

const Type = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-12 my-10">
            <div className="flex justify-center items-center gap-4">
                <button><FaStar></FaStar></button>
                <h1 className="text-xl"><span className="font-semibold">All</span> Gallery</h1>
            </div>
            <div className="flex justify-center items-center gap-4">
                <button><FaPhotoVideo></FaPhotoVideo></button>
                <h1 className="text-xl"><span className="font-semibold">Video</span> Gallery</h1>
            </div>
            <div className="flex justify-center items-center gap-4">
                <button><FaVideo></FaVideo></button>
                <h1 className="text-xl"><span className="font-semibold">Photo</span> Gallery</h1>
            </div>
        </div>
    );
};

export default Type;