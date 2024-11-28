import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const ForgetPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleResetPassword = () => {
        if (!email) {
            alert("Please enter a valid email address.");
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent! Redirecting to Gmail...");
                window.location.href = "https://mail.google.com";
            })
            .catch((error) => {
                console.error("Error sending password reset email:", error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-center mb-4">Reset Your Password</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control mt-6">
                    <button
                        onClick={handleResetPassword}
                        className="btn btn-neutral w-full"
                    >
                        Reset Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
