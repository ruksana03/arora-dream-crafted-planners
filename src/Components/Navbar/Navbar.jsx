import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineUser, AiOutlineClose} from "react-icons/ai";


const Navbar = () => {

    const [isSearchVisible, setSearchVisible] = useState(false);
    const [isLoginVisible, setLoginVisible] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };

    const toggleLogin = () => {
        setLoginVisible(!isLoginVisible);
    };

    const navLinks = <>
        <li className="my-auto font-bold"><NavLink to="/"
            style={({ isActive, isPending }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "white" : "#FFBE30",
                };
            }}>Home</NavLink></li>
        <li className="my-auto font-bold"><NavLink to='/allservices'>All Services</NavLink></li>
        <li className="my-auto font-bold"><NavLink to='/events'>Events</NavLink></li>
        <li className="my-auto font-bold" ><NavLink to='/gallery'>Gallery</NavLink></li>
        <li className="my-auto font-bold" ><NavLink to='/about'>About</NavLink></li>
        <li className="my-auto font-bold"><NavLink to='/blogs'>Blogs</NavLink></li>
        <li className="my-auto font-bold"><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div className="mx-28 my-2 bg-transparent sticky  z-10 text-white hover:bg-black">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow rounded-box w-52 text-center">
                            <li className="flex ">
                                <Link></Link>
                            </li>
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/'><h1 style={{ background: '-webkit-linear-gradient(left, #FFB92E, #FF5B0B, #FFD034)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className="text-3xl font-extrabold hover:from-[#FF5B0B]  hover:to-yellow-500">Arora Cultural <br /><span className="text-2xl font-extrabold">Events Planner</span></h1></Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-center">
                        <li>
                            <div className="flex ">
                                <Link></Link>
                            </div>
                        </li>
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <button className="text-white font-extrabold border-4 border-[#FFBE30] rounded-full p-3" onClick={toggleLogin}><AiOutlineUser></AiOutlineUser></button>
                    <button className="text-white font-extrabold border-4 border-[#FFBE30] rounded-full p-3" onClick={toggleSearch}><AiOutlineSearch></AiOutlineSearch></button>
                    {isSearchVisible && (
                        <div className="absolute top-0 right-0 mt-12 mr-4 p-2 bg-white border border-gray-300 rounded shadow-lg">
                            <input type="text" placeholder="Search..." className="border rounded p-2" />
                            <button className="bg-[#FFBE30] text-white p-2 rounded"><AiOutlineSearch></AiOutlineSearch></button>
                        </div>
                    )}
                    {isLoginVisible && (
                        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
                            <div className="bg-white p-4 rounded shadow-lg">
                                {/* Your login content here */}
                                <h2>Login Page</h2>
                                {/* Add your login form or content */}
                                <button className="text-6xl font-extrabold text-black" onClick={toggleLogin}><AiOutlineClose></AiOutlineClose></button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;