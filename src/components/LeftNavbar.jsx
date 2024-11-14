import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])
  return (
    <div>
      <h1 className="font-semibold text-xl text-[#403F3F]">All Category</h1>
      <div className="flex flex-col mt-5 space-y-3">
        {categories.map(category => (<NavLink to={`category/${category.category_id}`} className={({isActive}) => isActive ? "bg-[#E7E7E7] font-semibold pl-6 text-[#403F3F] py-3 rounded-lg" : "font-semibold text-[#9F9F9F] pl-6 rounded-lg"} key={category.category_id}>{category.category_name}</NavLink>) )}
      </div>
    </div>
  );
};

export default LeftNavbar
