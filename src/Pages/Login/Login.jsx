import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import useAuth from '../../Hooks/useAuth';
// import JoinUsBanner from '../../Components/Banners/JoinUsBanner';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate()
    const { signIn } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

      

        // creating a new user
        signIn(email, password)
            .then(res => {
                toast.success('User logged in successfully');
                navigate('/')
            })
            .catch(error => {
                toast.error('Error!!! Email Password is not matched ')
            })

    }

    return (
        <div>
            {/* <JoinUsBanner></JoinUsBanner> */}
            <div className="hero min-h-screen bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%">
                <div className="hero-content flex-col my-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit'  className=" px-10 py-3 m-2 rounded-full font-bold bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% w-full text-white">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                            <SocialLogin />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;