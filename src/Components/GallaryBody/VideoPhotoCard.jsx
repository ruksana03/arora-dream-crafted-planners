

const VideoPhotoCard = ({photoVideo}) => {
    const {id,type,img,name,place,description} = photoVideo;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default VideoPhotoCard;