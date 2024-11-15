import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { signUpAuth, updateProfileAuth, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setError({});

    const nameRegex = /^[a-zA-Z\s]+$/;
    const urlRegex =
      /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Errors Handle
    if (!nameRegex.test(name)) {
      setError({ nameErrorMessage: "Only letters and spaces are allowed." });
      return;
    }
    if (!urlRegex.test(photo)) {
      setError({ photoErrorMessage: "Please enter a valid URL." });
      return;
    }
    if (!emailRegex.test(email)) {
      setError({ emailErrorMessage: "Please enter a valid email address." });
      return;
    }
    if (!passwordRegex.test(password)) {
      setError({
        passwordErrorMessage: "Password should be at least 8 characters.",
      });
      return;
    }

    signUpAuth(email, password)
      .then((user) => {
        setUser(user.user);
        updateProfileAuth(name, photo);
        navigate("/");
      })
      .catch((error) => alert(error.code));
    form.reset();
  };
  return (
    <div className="w-2/4 bg-white mx-auto my-10 p-10">
      <h1 className="text-[#403F3F] text-3xl font-semibold text-center mb-8">
        Register your account
      </h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="font-semibold text-[#403F3F]">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="py-4 px-4 outline-none input-bordered bg-[#f3f3f3]"
          />
          <p className="text-[13px] text-red-500 mt-2">
            {error.nameErrorMessage}
          </p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-semibold text-[#403F3F]">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter your Photo URL"
            className="py-4 px-4 outline-none input-bordered bg-[#f3f3f3]"
          />
          <p className="text-[13px] text-red-500 mt-2">
            {error.photoErrorMessage}
          </p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-semibold text-[#403F3F]">Email address</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="py-4 px-4 outline-none input-bordered bg-[#f3f3f3]"
          />
          <p className="text-[13px] text-red-500 mt-2">
            {error.emailErrorMessage}
          </p>
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
          />
          <p className="text-[13px] text-red-500 mt-2">
            {error.passwordErrorMessage}
          </p>
        </div>

        <label className="flex items-center gap-3 mt-3">
          <input type="checkbox" className="checkbox" />
          <span className="text-[#706F6F]">
            Accept <span className="font-semibold">Term & Conditions</span>
          </span>
        </label>

        <div className="form-control mt-6">
          <button className="py-3 bg-[#403F3F] text-white font-medium">
            Register
          </button>
        </div>
        <p className="text-center font-semibold text-[#706F6F] mt-4 gap-1 flex">
          Already Have An Account ?
          <NavLink className="text-[#F75B5F]" to="/auth/login">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
