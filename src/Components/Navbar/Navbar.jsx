import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import Login from "../../Pages/Login/Login";
import useAuth from "../../Hooks/useAuth";
import { BiSolidFlorist } from "react-icons/bi";


const Navbar = () => {

    const [isSearchVisible, setSearchVisible] = useState(false);
    // const [isLoginVisible, setLoginVisible] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    const { user, logOut } = useAuth()



    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };

    // const toggleLogin = () => {
    //     setLoginVisible(!isLoginVisible);
    // };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks =
        <>
            <li className="my-auto text-lg font-bold"><NavLink to="/"
                style={({ isActive, isPending }) => {
                    return {
                        background: isActive
                            ? "linear-gradient(to right, #FF5107 10%, #FF5107 30%, #FF9B23 90%)" : "transparent",
                        fontWeight: isActive ? "bold" : "normal",
                        color: isPending ? "white" : "white",
                    };
                }}>Home</NavLink>
            </li>
            <li className="my-auto text-lg font-bold"><NavLink to='/allservices'
                style={({ isActive, isPending }) => {
                    return {
                        background: isActive
                            ? "linear-gradient(to right, #FF5107 10%, #FF5107 30%, #FF9B23 90%)" : "transparent",
                        fontWeight: isActive ? "bold" : "normal",
                        color: isPending ? "white" : "white",
                    };
                }}
            >Services</NavLink>
            </li>
            <li className="my-auto text-lg font-bold"><NavLink to='/events'
                style={({ isActive, isPending }) => {
                    return {
                        background: isActive
                            ? "linear-gradient(to right, #FF5107 10%, #FF5107 30%, #FF9B23 90%)" : "transparent",
                        fontWeight: isActive ? "bold" : "normal",
                        color: isPending ? "white" : "white",
                    };
                }}
            >Events</NavLink>
            </li>
            <li className="my-auto text-lg font-bold" ><NavLink to='/gallery'
                style={({ isActive, isPending }) => {
                    return {
                        background: isActive
                            ? "linear-gradient(to right, #FF5107 10%, #FF5107 30%, #FF9B23 90%)" : "transparent",
                        fontWeight: isActive ? "bold" : "normal",
                        color: isPending ? "white" : "white",
                    };
                }}
            >Gallery</NavLink>
            </li>
            <li className="my-auto text-lg font-bold" ><NavLink to='/about'
                style={({ isActive, isPending }) => {
                    return {
                        background: isActive
                            ? "linear-gradient(to right, #FF5107 10%, #FF5107 30%, #FF9B23 90%)" : "transparent",
                        fontWeight: isActive ? "bold" : "normal",
                        color: isPending ? "white" : "white",
                    };
                }}
            >About</NavLink>
            </li>
            <li className="my-auto text-lg font-bold"><NavLink to='/blogs'
                style={({ isActive, isPending }) => {
                    return {
                        background: isActive
                            ? "linear-gradient(to right, #FF5107 10%, #FF5107 30%, #FF9B23 90%)" : "transparent",
                        fontWeight: isActive ? "bold" : "normal",
                        color: isPending ? "white" : "white",
                    };
                }}
            >Blogs</NavLink>
            </li>
            <li className="my-auto text-lg font-bold"><NavLink to='/contact'
                style={({ isActive, isPending }) => {
                    return {
                        background: isActive
                            ? "linear-gradient(to right, #FF5107 10%, #FF5107 30%, #FF9B23 90%)" : "transparent",
                        fontWeight: isActive ? "bold" : "normal",
                        color: isPending ? "white" : "white",
                    };
                }}
            >Contact</NavLink>
            </li>
            <li className="my-auto text-lg font-bold"><NavLink to='/JoinUs'
                style={({ isActive, isPending }) => {
                    return {
                        background: isActive
                            ? "linear-gradient(to right, #FF5107 10%, #FF5107 30%, #FF9B23 90%)" : "transparent",
                        fontWeight: isActive ? "bold" : "normal",
                        color: isPending ? "white" : "white",
                    };
                }}
            >Join Us</NavLink>
            </li>
        </>

    return (
        <div className={`px-4 sm:px-10 lg:px-28 py-2 sticky z-10 text-white ${isScrolled ? "bg-black lg:bg-[#333333]" : "bg-black lg:bg-transparent"}`}>
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
                    <Link to='/'><h1 className="text-white text-3xl font-bold ">  Arora <br /><span style={{ background: '-webkit-linear-gradient(left, #FFB92E, #FF5B0B, #FFD034)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className=" flex gap-2 items-center text-xl font-extrabold hover:from-[#FF5B0B]  hover:to-yellow-500">Events Planner <BiSolidFlorist className="text-[#FF5107] text-3xl"></BiSolidFlorist> </span> </h1></Link>

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
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm text-black btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn text-black btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                                <li className="text-black">
                                    Search Here
                                    <button className="text-white font-extrabold border-4 border-[#FFBE30] rounded-full p-3" onClick={toggleSearch}><AiOutlineSearch></AiOutlineSearch></button>
                                    {isSearchVisible && (
                                        <div className="absolute top-0 right-0 mt-12 mr-4 p-2 bg-white border border-gray-300 rounded shadow-lg">
                                            <input type="text" placeholder="Search..." className="border rounded p-2" />
                                            <button className="bg-[#FFBE30] text-white p-2 rounded"><AiOutlineSearch></AiOutlineSearch></button>
                                        </div>
                                    )}
                                </li>


                            </ul>
                        </div>
                            : <Link to='/login'><button
                            className="text-white font-extrabold border-4 border-[#FFBE30] rounded-full p-3">
                            <AiOutlineUser></AiOutlineUser>
                        </button></Link>

                    }


                 
                </div>
            </div>
        </div>
    );
};

export default Navbar;