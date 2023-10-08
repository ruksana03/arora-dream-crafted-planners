

const ShowEventCard = ({event}) => {
    const {id,img,place,title,viewers,ticketSellingNumber,description,topic} = event;
    console.log(event)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 m-4 gap-4">
            <div>
                <img className="h-full" src={img} alt="" />
            </div>
            <div className="lg:col-span-2 my-2">
                <p className=" text-xl font-semibold">{place} <span className="text-2xl font-bold">{title}</span></p>
                <p className="text-lg font-bold text-[#FF9B23]">Viewer:{viewers}</p>
                <p className="text-base text-[#878787] font-bold">Number Of Selling Ticket : <span className="font-extrabold text-black"> {ticketSellingNumber}</span></p>
                <p className="text-base text-[#878787] font-bold">{topic}</p>
                <p className="text-sm text-[#878787]">{description}</p>
            </div>
        </div>
    );
};

export default ShowEventCard;