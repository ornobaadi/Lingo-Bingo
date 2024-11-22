import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="hero bg-[#FAFAFA] min-h-[600px]">
            <div className="hero-content text-center">
                <div className="max-w-2xl">
                <video 
                        src="/Language.mp4" 
                        autoPlay 
                        loop 
                        muted 
                        className="w-full mb-5 rounded-lg"
                    />
                    <h1 className="text-5xl py-5 font-bold leading-snug">The best way to learn or practice a language</h1>
                    {/* <p className="py-5">
                        Speak a new language, unlock a new world
                    </p> */}
                    <div className="space-x-5">
                        <Link to='/learn'><button className="btn btn-neutral hover:bg-gray-800 rounded-full px-10">Start Learning</button></Link>
                        {/* <button className="btn btn-outline rounded-full px-10">Explore</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;