import { useLoaderData, useParams } from "react-router-dom";
import ServicesBanner from "../../Components/Banners/ServicesBanner";


const ServiceDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();
    console.log(id, services)
    const idInt = parseInt(id)
    const service = services.find(service => service.id === idInt)

    console.log(idInt, service)


    return (
        <div>
            <div>
                <ServicesBanner></ServicesBanner>
            </div>
            <div className="mx-28 my-4 border-2 border-[#FF5107] rounded-lg items-center text-center p-4 hover:bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% hover:text-white">
                <img className="mx-auto rounded-lg mb-4" src={service.img} alt="" />
                <h1 className="text-3xl font-bold">{service.title}</h1>
                <p className="text-xl font-semibold" >{service.ticketPrice}</p>
                <p className="text-xl font-semibold">{service.date} {service.month}</p>
                <p className="text-xl font-semibold">{service.startTime} {service.endTime}</p>
                <p className="text-xl font-bold">{service.place}</p>
                <p className="text-xl font-bold" >{service.language}</p>
                <p className="mx-auto text-xs font-bold">{service.description}</p>
                <button className="btn w-full my-3 text-lg font-bold ">Start Booking</button>
            </div>
        </div>
    );
};

export default ServiceDetails;