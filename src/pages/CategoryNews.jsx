import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";
const CategoryNews = () => {
  const { data } = useLoaderData();
  return (
    <div>
        <h1 className="font-semibold text-xl text-[#403F3F] mb-5">Dragon News Home</h1>
    <div className="space-y-5">
      {data.map((news, idx) => (
        <NewsCard key={idx} news={news}></NewsCard>
      ))}
    </div>
    </div>
  );
};

export default CategoryNews;
