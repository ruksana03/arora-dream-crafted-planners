import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";


const LetestWork = () => {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (

        <div className="grid grid-cols-1 gap-4 mt-8" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
            {
                blogs.map(blog => <NewsCard key={blog.id} blog={blog}></NewsCard>)
            }
        </div>


    );
};

export default LetestWork;