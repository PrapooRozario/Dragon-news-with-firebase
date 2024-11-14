import FindUs from "./FindUs";
import SocialLogin from "./SocialLogin";

const RightNavbar = () => {
  return <div>
    <h1 className="font-semibold text-xl text-[#403F3F] mb-5">Login With</h1>
    <SocialLogin></SocialLogin>
    <FindUs></FindUs>
  </div>;
};

export default RightNavbar;
