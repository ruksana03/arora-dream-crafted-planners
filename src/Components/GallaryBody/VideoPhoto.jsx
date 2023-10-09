import { useEffect, useState } from "react";
import VideoPhotoCard from "./VideoPhotoCard";
import AOS from "aos";
import "aos/dist/aos.css";



const VideoPhoto = () => {

    const [allPhotoVideo, setAllPhotoVideo] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);


    useEffect(() => {
        fetch('photoVideo.json')
            .then(res => res.json())
            .then(data => setAllPhotoVideo(data));
    }, [])

    console.log(allPhotoVideo)
    return (
        <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12">
                {allPhotoVideo.map((photoVideo) => (
                    <div
                        key={photoVideo.id}
                        className="relative group overflow-hidden bg-white rounded-md shadow-lg hover:shadow-xl  hover:shadow-[gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%]"
                        data-aos="fade-up" // Specify the animation type here
                    >
                        <VideoPhotoCard key={photoVideo.id} photoVideo={photoVideo}></VideoPhotoCard>
                    </div>

                ))}
            </div>


        </div>
    );
};

export default VideoPhoto;