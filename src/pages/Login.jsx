import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { setUser, signInAuth } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInAuth(email, password)
      .then((loginUser) => {
        setUser(loginUser.user), form.reset();
        form.reset();
        navigate(location?.state ? location.state : "")

      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-2/4 bg-white mx-auto my-10 p-10">
      <h1 className="text-[#403F3F] text-3xl font-semibold text-center mb-8">
        Login your account
      </h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="font-semibold text-[#403F3F]">Email address</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="py-4 px-4 outline-none input-bordered bg-[#f3f3f3]"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-semibold text-[#403F3F]">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            className="py-4 px-4 outline-none input-bordered bg-[#f3f3f3]"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="py-3 bg-[#403F3F] text-white font-medium">
            Login
          </button>
        </div>
        <p className="text-center font-semibold text-[#706F6F] mt-4 gap-1 flex">
          Do Not Have An Account ?
          <NavLink className="text-[#F75B5F]" to="/auth/register">
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
