import AroraBlogs from "../../Components/AroraBlogs/AroraBlogs";
import AroraLetestBlogs from "../../Components/AroraBlogs/AroraLetestBlogs";
import BlogsBanner from "../../Components/Banners/BlogsBanner";


const Blogs = () => {
    return (
        <div>
           <BlogsBanner></BlogsBanner>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-28">
            <div className="lg:col-span-2 mt-8">
            <hr className="bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% p-0.5 w-1/12" />
                <AroraBlogs></AroraBlogs>
            </div>
            <div className="ml-4 mt-8 ">
            <hr className="bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% p-0.5 w-1/4" />
                <AroraLetestBlogs></AroraLetestBlogs>
            </div>
           </div>
        </div>
    );
};

export default Blogs;