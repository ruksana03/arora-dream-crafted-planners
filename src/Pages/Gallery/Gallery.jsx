import GalleryBanner from "../../Components/Banners/GalleryBanner";
import Type from "../../Components/GallaryBody/Type";
import VideoPhoto from "../../Components/GallaryBody/VideoPhoto";


const Gallery = () => {
    return (
        <div>
            <GalleryBanner></GalleryBanner>
            <Type></Type>
            <VideoPhoto></VideoPhoto>
        </div>
    );
};

export default Gallery;