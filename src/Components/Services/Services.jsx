import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";


const Services = () => {
    const [services, setServices] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    console.log(services)


    return (
        <div className="mx-28 my-10">
            <hr className="bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% p-0.5 w-1/12" />
            <div className="my-10 text-left">
                <h2 className="text-3xl text-[#757575]  font-normal ">Arora Cultural <br /> <span className="text-5xl text-black font-bold">Event</span> <span className="text-5xl"> Services</span></h2>
                <p style={{ background: '-webkit-linear-gradient(left, #FFB92E, #FF5B0B, #FFD034)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className=" text-lg font-medium text-[#757575] ">Explore our services and make your cultural events more colorful.</p>
            </div>
            <div className="grid  gap-6 mt-8 grid-cols-1 lg:grid-cols-2">
                {
                    services.slice(0, dataLength).map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                }
            </div>
            <div className="mt-6 mb-24 text-center">
                <div className={dataLength === services.length ? 'hidden' : ''}>
                    <Link to='/allservices'>
                        <button onClick={() => setDataLength(services.length)} className="btn bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% text-white font-extrabold text-lg ">See All Services</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;