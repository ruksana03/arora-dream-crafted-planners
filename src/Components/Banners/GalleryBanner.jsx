import { Link } from "react-router-dom";


const GalleryBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/RgRzB7p/pexels-rayn-l-3163677.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl font-medium">EVENT GALLERY</h1>
                        <p className="mb-5 text-5xl font-bold">ARORA'S <span style={{ background: '-webkit-linear-gradient(left, #FFB92E, #FF5B0B, #FFD034)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GALLERY</span> </p>
                        <div className="flex justify-around items-center ">
                        <Link to='/'><button className="my-8">Home</button></Link>
                        <p>|</p>
                        <p>Our Gallery</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GalleryBanner;