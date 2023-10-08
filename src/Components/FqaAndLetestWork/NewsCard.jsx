

const NewsCard = ({ blog }) => {
    const { id, img, title, date, description } = blog;
    return (
        <div className='border-2 border-[#E8E8E8] p-4 flex w-full'>
            <div className="w-1/2">
                <img src={img} alt="" className="w-full h-full" />
            </div>
            <div className="ml-6 flex flex-col gap-2">
                <h1 className="text-lg font-bold">{title}</h1>
                <p className="text-[#FF9B23] text-sm font-bold">{date}</p>
                <p className=" overflow-hidden line-clamp-1 text-xs text-[#757575]">{description}</p>
                <button className="btn border-2 border-[#FF9B23] text-black font-extrabold text-xs hover:bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%">View Details</button>
                {/* <Link to={`/blog/${id}`}><button className='btn w-full text-white bg-[#9873FF]'>Read About</button></Link> */}
            </div>
        </div>

    );
};

export default NewsCard;