import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl text-[#403F3F] mb-5 mt-8">Find Us On</h1>
      <div className="max-w-xs flex flex-col rounded-lg shadow-sm">
        <button
          type="button"
          className="py-4 px-4 inline-flex items-center gap-x-2 rounded-t-md font-medium focus:z-10 border border-gray-200 bg-white text-[#706F6F] dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          <FaFacebook className="text-blue-500"></FaFacebook> Facebook
        </button>
        <button
          type="button"
          className="-mt-px py-4 px-4 inline-flex items-center gap-x-2 font-medium focus:z-10 border border-gray-200 bg-white text-[#706F6F] dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          <FaTwitter className="text-sky-500"></FaTwitter> Twitter
        </button>
        <button
          type="button"
          className="-mt-px py-4 px-4 inline-flex items-center gap-x-2 rounded-b-md font-medium focus:z-10 border border-gray-200 bg-white text-[#706F6F] dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          <FaInstagram className="text-purple-500"></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
