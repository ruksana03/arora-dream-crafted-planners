import { useEffect, useState } from "react";
import ShowAllServicesCard from "./ShowAllServicesCard";


const ShowAllServices = () => {
    const [services, setServices] = useState([]);
    const [dataLength, setDataLength] = useState();

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    console.log(services)
    return (
        <div className=" mx-28 my-6">
            <hr className="bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% p-0.5 w-1/12" />
            <div>

                <p style={{ background: '-webkit-linear-gradient(left, #FFB92E, #FF5B0B, #FFD034)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className=" text-5xl font-bold text-[#757575] ">Explore our All services </p>
            </div>

            <div className="grid  gap-6 mt-8 grid-cols-1">
                {
                    services.slice(0, dataLength).map(service => <ShowAllServicesCard key={service.id} service={service}></ShowAllServicesCard>)
                }
            </div>

        </div>
    );
};

export default ShowAllServices;