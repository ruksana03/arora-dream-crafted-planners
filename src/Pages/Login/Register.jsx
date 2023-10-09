import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import JoinUsBanner from '../../Components/Banners/JoinUsBanner';


const Register = () => {

    const { createUser ,handleUpdateProfile } = useAuth();
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const password = event.target.password.value;

        // console.log(name,img)

        // validation 
        if (password.length < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            toast.error('Password must be at least 6 characters and contain at least one capital letter and one special character');
            return 
        }

        // creating a new user
        createUser(email, password)
            .then(res => {
                handleUpdateProfile(name, img)
                    .then(() => {
                        toast.success('User created successfully');
                        navigate('/')

                    })
            })
            .catch(error => {
                toast.error('Error!!!!!!')
            })


    }
    return (
        <div>
            {/* <JoinUsBanner></JoinUsBanner> */}
            <div className="hero min-h-screen bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90%">
                <div className="hero-content flex-col my-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered" name='name' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" name='img' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className=" px-10 py-3 m-2 rounded-full font-bold bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% w-full text-white">Register</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <SocialLogin />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;