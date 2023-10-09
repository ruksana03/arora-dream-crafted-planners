import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            Error 404
            <Link to='/'><button className=" px-10 py-3 m-2 rounded-full font-bold bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% w-full text-white">Back to home</button></Link>
        </div>
    );
};

export default ErrorPage;