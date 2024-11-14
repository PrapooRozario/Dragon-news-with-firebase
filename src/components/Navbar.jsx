import { NavLink } from "react-router-dom";

const Navbar = () => {
  return <div className="flex justify-between items-center">
    <div></div>
    <div className="flex gap-5 *:text-[#706F6F]">
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Career</NavLink>
    </div>
    <div className="flex items-center gap-2">
      <img src="/src/assets/user.png" alt="user" />
      <button className="bg-[#403F3F] px-8 text-white py-2">Login</button>
    </div>
  </div>;
};

export default Navbar;
