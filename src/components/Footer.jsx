import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center text-lg bg-gray-50 text-base-content rounded p-10">
            <nav className="flex flex-wrap justify-center gap-5 md:gap-10">
                <Link to="/" className="hover:text-success hover:font-semibold">Home</Link>
                <Link to="/learn" className="hover:text-success hover:font-semibold">Learn</Link>
                <Link to="/tutorial" className="hover:text-success hover:font-semibold">Tutorials</Link>
                <Link to="/about" className="hover:text-success hover:font-semibold">About</Link>
            </nav>
            <div className="flex justify-center gap-5 text-2xl md:text-3xl mt-5">
                <Link to="https://www.facebook.com/">
                    <FaFacebook />
                </Link>
                <Link to="https://www.instagram.com/">
                    <FaInstagram />
                </Link>
                <Link to="https://www.github.com/">
                    <FaGithub />
                </Link>
            </div>
            <aside className="text-sm mt-5">
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved by{" "}
                    <Link
                        to="https://github.com/ornobaadi"
                        className="text-emerald-600 font-normal hover:font-semibold"
                    >
                        Ornob Aadi
                    </Link>
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
