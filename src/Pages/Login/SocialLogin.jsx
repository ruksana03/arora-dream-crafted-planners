import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SocialLogin = () => {
    const { user, googleLogin } = useContext(AuthContext);

    const handleGoogleLogin = (media) => {
        media()
            .then(res => console.log(res))
            .catch(err=> console.log(err))
    }

    console.log(user)
    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button
                    onClick={() => handleGoogleLogin(googleLogin)}
                    className="btn btn-primary btn-sm">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;