

const UpcommingEventCard = ({ upcommingEvent }) => {
    console.log(upcommingEvent)
    const { id, title, img, ticketPrice, startTime, date, month, endTime, place, description } = upcommingEvent;
    return (
        <div className=" h-full">
            <p className=" py-2 px-3  text-2xl font-extrabold text-white bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%">{date}  {month}</p>
            <img className="w-full h-full" src={img} alt="" />

        </div>
    );
};

export default UpcommingEventCard;