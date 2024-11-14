import { AiOutlineEye } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  console.log(news);
  const { title, author, thumbnail_url, details, total_view, rating } = news;

  return (
    <div className="bg-white overflow-hidden border">
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-96 object-cover mb-2"
      />

      <div className="p-4">
        <div className="flex items-center mb-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-gray-800">{author.name}</h3>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-800">{title}</h2>

        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{details}</p>
        <button className="text-blue-500 text-sm font-semibold mt-3">
          Read More
        </button>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-yellow-500">
            <FaStar />
            <span className="ml-1 text-sm font-medium">{rating.number}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <AiOutlineEye />
            <span className="ml-1 text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
NewsCard.propTypes = {
  news: PropTypes.object,
};
export default NewsCard;
