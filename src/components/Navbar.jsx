import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/learn'>Learn</NavLink></li>
            <li><NavLink to='/tutorial'>Tutorial</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            {user && (
                <li><NavLink to='/profile'>My Profile</NavLink></li>
            )}
        </>
    );

    return (
        <div className="navbar mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <Link to='/'><a className="btn p-0 btn-ghost text-md md:text-xl">
                    <img className="w-10" src="/Bonjour.webp" alt="" />Lingo Bingo</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {user && user?.photoURL && (
                    <Link to='/profile'><img className="w-8 h-8 md:h-12 md:w-12  object-cover rounded-full" src={user.photoURL} alt="User" /></Link>
                )}

                {user && user?.email ? (
                    <button onClick={logOut} className="btn btn-sm md:btn-md btn-outline rounded-box px-5 md:px-10">
                        Logout
                    </button>
                ) : (
                    <Link to='/auth/login'>
                        <a className="btn btn-sm md:btn-md btn-outline rounded-box px-5 md:px-10">Login</a>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;