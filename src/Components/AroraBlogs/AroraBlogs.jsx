import { useEffect, useState } from "react";
import NewsCard from "../FqaAndLetestWork/NewsCard";
import { Link } from "react-router-dom";


const AroraBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    // const [blogLength, setBlogLength] = useState(3);
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div>
            <div className="mt-24">
                {
                    isShow ? blogs.map((blog) => (<NewsCard key={blog.id} blog={blog}></NewsCard>)) : blogs.slice(0, 3).map((blog) => (<NewsCard key={blog.id} blog={blog}></NewsCard>))

                }
            </div>


            {blogs.length > 2 && <button onClick={() => setIsShow(!isShow)} className="w-full rounded-xl px-5 py-2 bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% block mx-auto my-8 text-white font-semibold text-xl">
                {isShow ? "See less" : "See more"}</button>}
          
            <div>



            </div>
        </div>

    );
};

export default AroraBlogs;