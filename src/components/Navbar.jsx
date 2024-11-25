import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/learn'>Learn</NavLink></li>
            <li><NavLink to='/tutorial'>Tutorial</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
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
                <img className="w-10" src="public/Bonjour.png" alt="" />
                <Link to='/'><a className="btn btn-ghost text-md md:text-xl">Lingo Bingo</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                        <span>A</span>
                    </div>
                </div>
                <Link to='/auth/login'><a className="btn btn-sm md:btn-md btn-outline rounded-full px-5 md:px-10">Login</a></Link>
            </div>
        </div>
    );
};

export default Navbar;