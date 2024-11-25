import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="min-h-[700px] flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 ">
                <h2 className="text-2xl font-semibold text-center ">Register your account</h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Sign Up</button>
                    </div>
                </form>
                <h2 className="text-center font-semibold"> Already have an Account? <Link className="text-red-500" to='/auth/login'>Login</Link> </h2>
            </div>
        </div>
    );
};

export default Signup;