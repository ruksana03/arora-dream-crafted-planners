import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const navigate = useNavigate()
    const { user, googleLogin } = useContext(AuthContext);


    const handleGoogleLogin = (media) => {
        media()
            .then(res => {
                toast.success('User logged in successfully');
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    
    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button
                    onClick={() => handleGoogleLogin(googleLogin)}
                    className=" px-10 py-3 m-2 rounded-full font-bold bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% w-full text-white">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;