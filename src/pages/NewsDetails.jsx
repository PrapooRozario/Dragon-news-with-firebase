import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/RightNavbar";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div className="font-poppins my-5">
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 mt-8">
        <section className="col-span-9">
          <h1 className="font-semibold text-xl text-[#403F3F]">Dragon News</h1>
          <div className="card bg-base-100 mt-5">
            <figure>
              <img
                src={news.image_url}
                alt={news.title}
              />
            </figure>
            <div className="">
              <h2 className="font-bold text-2xl my-5 text-[#403F3F]">{news.title}</h2>
              <p className="text-[#706F6F] mb-5">{news.details
              }</p>
              <div className="">
                <Link to={`/category/${news.category_id}`} className="text-white px-6 py-3 bg-[#D72050] font-medium">All news in this category</Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
