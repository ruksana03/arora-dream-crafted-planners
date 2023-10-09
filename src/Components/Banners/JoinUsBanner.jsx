import { Link } from "react-router-dom";


const JoinUsBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Jxqr6rh/pexels-fauxels-3184418.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl font-medium">JOIN OUR GROUPS</h1>
                        <p className="mb-5 text-5xl font-bold">ARORA'S <span style={{ background: '-webkit-linear-gradient(left, #FFB92E, #FF5B0B, #FFD034)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FAMILY</span> </p>
                        <div className="flex justify-around items-center ">
                        <Link to='/'><button className="my-8">Home</button></Link>
                        <p>|</p>
                        <Link to='/about'><p>About Us</p></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JoinUsBanner;