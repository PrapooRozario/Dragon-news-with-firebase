import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutAuth, loading } = useContext(AuthContext);
  console.log(user, loading);
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex gap-5 *:text-[#706F6F]">
        <NavLink to="/">Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Career</NavLink>
      </div>
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div
            className={
              !user?.photoURL
                ? ""
                : user?.photoURL
                ? "border-2 border-black w-10 rounded-full"
                : ""
            }
          >
            <img
              src={
                user && user?.email
                  ? user?.photoURL
                    ? user?.photoURL
                    : "/src/assets/user.png"
                  : "/src/assets/user.png"
              }
            />
          </div>
        </div>

        {user && user?.email ? (
          <button
            onClick={signOutAuth}
            className="bg-[#403F3F] px-8 text-white py-2"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/auth/login"
            className="bg-[#403F3F] px-8 text-white py-2"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
