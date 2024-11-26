import { Link } from "react-router-dom";
import { FaBookOpen, FaLanguage, FaPlayCircle, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";

const Home = () => {
    return (
        <div className="container mx-auto ">
            <section>
                <div className="hero min-h-[600px]">
                    <div className="hero-content text-center">
                        <div className="max-w-2xl">
                            <video
                            autoPlay
                            loop
                            muted
                            src="/Language.mp4"></video>
                            <h1 className="text-2xl md:text-5xl py-10 font-bold leading-snug">The best way to learn or practice a language</h1>
                            {/* <p className="py-5">
                        Speak a new language, unlock a new world
                    </p> */}
                            <div className="space-x-5">
                                <Link to='/learn'><button className="btn btn-neutral hover:bg-gray-800 rounded-full px-10 mb-10">Start Learning</button></Link>
                                {/* <button className="btn btn-outline rounded-full px-10">Explore</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 px-5 md:px-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-5">About Us</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Welcome to our language learning platform! We are dedicated to helping you expand your vocabulary and master new languages.
                    Through engaging lessons, interactive tutorials, and practice sessions, learning a language becomes both fun and effective.
                </p>
            </section>
            {/* Stats  */}
            <section className="py-10 bg-gray-100 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-5">Our Success So Far</h2>
                <div className="flex justify-around flex-col md:flex-row  gap-10">
                    <div className="stat flex flex-col items-center">
                        <FaUsers className="text-5xl text-primary mb-3" />
                        <p className="stat-title">Users</p>
                        <p className="stat-value">
                            <CountUp start={0} end={15000} duration={5} />
                        </p>
                    </div>
                    <div className="stat flex flex-col items-center">
                        <FaBookOpen className="text-5xl text-secondary mb-3" />
                        <p className="stat-title">Lessons</p>
                        <p className="stat-value">
                            <CountUp start={0} end={1200} duration={5} />
                        </p>
                    </div>
                    <div className="stat flex flex-col items-center">
                        <FaLanguage className="text-5xl text-accent mb-3" />
                        <p className="stat-title">Vocabularies</p>
                        <p className="stat-value">
                            <CountUp start={0} end={25000} duration={5} />
                        </p>
                    </div>
                    <div className="stat flex flex-col items-center">
                        <FaPlayCircle className="text-5xl text-info mb-3" />
                        <p className="stat-title">Tutorials</p>
                        <p className="stat-value">
                            <CountUp start={0} end={500} duration={5} />
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;