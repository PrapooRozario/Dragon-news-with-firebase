import moment from "moment";

const Header = () => {
  return (
    <div className="space-y-3 mt-10">
      <img className="mx-auto" src="/src/assets/logo.png" alt="logo" />

      <p className="text-lg text-[#403F3F] text-center">
        Journalism Without Fear or Favour
      </p>
      <p className="text-lg text-center">{moment().format("MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
