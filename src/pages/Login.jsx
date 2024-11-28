import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const { userLogin, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user); // Save user to context
                navigate(location?.state?.from || '/', { replace: true });
            })
            .catch((error) => {
                setError({ ...error, google: error.message });
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state?.from || '/', { replace: true });
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
            });
    };

    const handleForgetPassword = () => {
        const email = emailRef.current?.value || "";
        navigate("/auth/forget-password", { state: { email } });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 ">
                <h2 className="text-2xl font-semibold text-center">Login to your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            ref={emailRef}
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        {error.login && (
                            <label className="label text-red-600 text-sm">{error.login}</label>
                        )}
                        <label onClick={handleForgetPassword} className="label">
                            <span className="label-text-alt link link-hover">Forgot password?</span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                    <h2 className="text-center py-5">
                        Don&#39;t have an Account?{" "}
                        <Link className="font-semibold link-hover" to="/auth/signup">
                            Sign Up
                        </Link>
                    </h2>
                    <div>
                        <h2 className="text-center font-medium">Or</h2>
                    </div>
                    {error.google && (
                        <label className="label text-red-600 text-sm">{error.google}</label>
                    )}
                </form>
                <button onClick={handleGoogleSignIn} className="btn btn-wide md:w-[368px] mx-auto">
                    <FaGoogle /> Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
