import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="bg-[#f3f3f3] p-3 flex items-center gap-3">
      <div className="bg-[#D72050] w-fit px-4 py-2">
        <p className=" text-lg text-white">Latest</p>
      </div>
      <Marquee>
        <p className="mr-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, consequuntur?</p>
        <p className="mr-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, consequuntur?</p>
        <p className="mr-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, consequuntur?</p>
        <p className="mr-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, consequuntur?</p>
        <p className="mr-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, consequuntur?</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
