import ServicesBanner from "../../Components/Banners/ServicesBanner";
import ShowAllServices from "../../Components/ShowAllServices/ShowAllServices";
import UpcommingEvents from "../../Components/UpcommingEvents/UpcommingEvents";



const AllServices = () => {
    return (
        <div>
            <ServicesBanner></ServicesBanner>
            <UpcommingEvents></UpcommingEvents>
            <ShowAllServices></ShowAllServices>
        </div>
    );
};

export default AllServices;