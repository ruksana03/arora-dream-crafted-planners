import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();
    console.log(id, services)
    const idInt = parseInt(id)
    const service = services.find(service => service.id === idInt)

    console.log(idInt, service)


    return (
        <div>
            ServiceDetails
        </div>
    );
};

export default ServiceDetails;