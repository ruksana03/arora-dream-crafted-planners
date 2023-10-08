import HomeBanner from "../../Components/Banners/HomeBanner";
import ArorasUpdate from "../../Components/FqaAndLetestWork/ArorasUpdate";
import Services from "../../Components/Services/Services";
import WhyArora from "../../Components/WhyArora/WhyArora";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Services></Services>
            <WhyArora></WhyArora>
            <ArorasUpdate></ArorasUpdate>
        </div>
    );
};

export default Home;