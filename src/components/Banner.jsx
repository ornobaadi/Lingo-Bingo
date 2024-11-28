/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <section>
                <div className="hero min-h-[600px] bg-[#FAFAFA]">
                    <div className="hero-content text-center">
                        <div className="max-w-2xl" data-aos="fade-up">
                            <video autoPlay playsinline loop muted src="/Language.mp4"></video>
                            <h1 className="text-2xl md:text-5xl py-10 font-bold leading-snug animate__animated animate__fadeIn">
                                The best way to learn or practice a language
                            </h1>
                            <div className="space-x-5">
                                <Link to='/learn'>
                                    <button className="btn btn-neutral hover:bg-gray-800 rounded-box px-10 mb-10 animate__animated animate__bounceIn">
                                        Start Learning
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;