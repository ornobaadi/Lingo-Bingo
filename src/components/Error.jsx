import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-3xl flex flex-col items-center gap-10">
                        <img className="w-1/2" src="/Error.png" alt="" />
                        <h1 className="text-5xl text-error font-bold">ERROR 404 : Page not found</h1>
                        <Link to='/'><button className="btn btn-success">Back to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;