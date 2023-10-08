

const ContactForm = () => {
    return (
        <div className="mx-28 my-12">
            <div className="my-10">
                <hr className="bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% p-0.5 w-1/4" />
                <h1 className="text-[#757575] text-lg font-semibold">CONTACT US</h1>
                <h1 className="text-5xl font-normal">Keep In Touch <span className="font-bold">With Arora Group</span></h1>
            </div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <input
                        type="text"
                        className="bg-[#F7F7F7] focus:border-[#FF9B23] border-transparent border-2 rounded-md  outline-none py-3 px-3 transition border-solid duration-300 hover:border-gray-300"
                        placeholder="Your Name..."
                    />
                    <input
                        type="email"
                        className="bg-[#F7F7F7] focus:border-[#FF9B23] border-transparent border-2 rounded-md outline-none py-3 px-3 transition border-solid duration-300 hover:border-gray-300"
                        placeholder="Email Address..."
                    />
                    <input
                        type="text"
                        className="bg-[#F7F7F7] focus:border-[#FF9B23] border-transparent border-2 rounded-md outline-none py-3 px-3 transition border-solid duration-300 hover:border-gray-300"
                        placeholder="Your City..."
                    />
                     <input
                        type="number"
                        className="bg-[#F7F7F7] focus:border-[#FF9B23] border-transparent border-2 rounded-md outline-none py-3 px-3 transition border-solid duration-300 hover:border-gray-300"
                        placeholder="Phone Number..."
                    />



                </div>
                <div className="my-8">
                    <textarea
                        className="bg-[#F7F7F7] focus:border-[#FF9B23] border-transparent border-2 rounded-md w-full outline-none py-3 px-3 transition border-solid duration-300 hover:border-gray-300"
                        placeholder="Your Massage..."
                    ></textarea>

                </div>
            </div>
            <div>
                <button className="btn bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% mx-auto text-white font-semibold text-sm w-full"> Send Mail </button>
            </div>
        </div>
    );
};

export default ContactForm;