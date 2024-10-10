import React from "react";
import { AiOutlineArrowRight, AiTwotoneCalendar } from "react-icons/ai";

const HomePage = () => {
  return (
    <div>
      <img
        src="https://picsum.photos/id/1/1440/600"
        alt=""
        className="w-full"
      />
 <section className="max-w-6xl mx-auto py-12"> {/*px-4  */}
  <div className="flex justify-between items-center">
    <h2 className="text-4xl font-semibold text-gray-800">New Products</h2>
    <button className="mt-4 border-2 border-orange-500 text-orange-500 bg-white py-2 px-10 rounded hover:bg-orange-500 hover:text-white transition duration-300">View All</button>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
    {/* <!-- Product 1 --> */}
    <div className="bg-[#f7f7f7] shadow-md rounded-sm overflow-hidden">
      <img src="https://picsum.photos/id/1/720/900" alt="Stylish chair" className="w-full h-72 object-cover" />
      <div className="p-4">
        <a href="#" className="text-xl font-bold text-gray-800">Stylish chair</a>
        <p className="text-gray-600 mb-2 ">Stylish cafe chair</p>
        <div className="text-red-500 text-lg font-semibold">2,500,000 VND</div>
        <button className="rounded-sm mt-4 border-2 border-[#CA8A04] text-[#CA8A04] bg-white py-2 px-4  hover:bg-[#CA8A04] hover:text-white transition duration-300 w-full font-semibold">Add to cart</button>
      </div>
    </div>
    {/* <!-- Product 2 --> */}
    <div className="bg-[#f7f7f7] shadow-md rounded-sm overflow-hidden">
      <img src="https://picsum.photos/id/1/720/900" alt="Stylish chair" className="w-full h-72 object-cover" />
      <div className="p-4">
        <a href="#" className="text-xl font-bold text-gray-800">Lydia chair</a>
        <p className="text-gray-600 mb-2 ">Stylish cafe chair</p>
        <div className="text-red-500 text-lg font-semibold">1,800,000 VND</div>
        <button className="rounded-sm mt-4 border-2 border-[#CA8A04] text-[#CA8A04] bg-white py-2 px-4  hover:bg-[#CA8A04] hover:text-white transition duration-300 w-full font-semibold">Add to cart</button>
      </div>
    </div>
    {/* <!-- Product 3 --> */}
    <div className="bg-[#f7f7f7] shadow-md rounded-sm overflow-hidden">
      <img src="https://picsum.photos/id/1/720/900" alt="Stylish chair" className="w-full h-72 object-cover" />
      <div className="p-4">
        <a className="text-xl font-bold text-gray-800">Luxury big sofa</a>
        <p className="text-gray-600 mb-2 ">Stylish cafe chair</p>
        <div className="text-red-500 text-lg font-semibold">2,000,000 VND</div>
        <button className="rounded-sm mt-4 border-2 border-[#CA8A04] text-[#CA8A04] bg-white py-2 px-4  hover:bg-[#CA8A04] hover:text-white transition duration-300 w-full font-semibold">Add to cart</button>
      </div>
    </div>
    {/* <!-- Product 4 --> */}
    <div className="bg-[#f7f7f7] shadow-md rounded-sm overflow-hidden">
      <img src="https://picsum.photos/id/1/720/900" alt="Stylish chair" className="w-full h-72 object-cover" />
      <div className="p-4">
        <a className="text-xl font-bold text-gray-800">Robust table and stool</a>
        <p className="text-gray-600 mb-2 ">Stylish cafe chair</p>
        <div className="text-red-500 text-lg font-semibold">4,500,000 VND</div>
        <button className="rounded-sm mt-4 border-2 border-[#CA8A04] text-[#CA8A04] bg-white py-2 px-4  hover:bg-[#CA8A04] hover:text-white transition duration-300 w-full font-semibold">Add to cart</button>
      </div>
    </div>
  </div>
</section>
{/* //////////// */}
<div className="container mx-auto max-w-6xl  py-4">
        <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-4xl font-semibold text-gray-800">Gallery</h2>
                <button className="border-2 border-orange-500 text-orange-500 bg-white py-2 px-10 rounded hover:bg-orange-500 hover:text-white transition duration-300">View all gallery</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <img src="https://picsum.photos/id/1/406/270" alt="Gallery Image 1" className="w-full  object-cover rounded"/>
                <img src="https://picsum.photos/id/2/406/270" alt="Gallery Image 1" className="w-full  object-cover rounded"/>
                <img src="https://picsum.photos/id/3/406/270" alt="Gallery Image 1" className="w-full  object-cover rounded"/>
                <img src="https://picsum.photos/id/4/406/270" alt="Gallery Image 1" className="w-full  object-cover rounded"/>
                <img src="https://picsum.photos/id/5/406/270" alt="Gallery Image 1" className="w-full  object-cover rounded"/>
                <img src="https://picsum.photos/id/6/406/270" alt="Gallery Image 1" className="w-full  object-cover rounded"/>
            </div>
        </section>
        <section>
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-semibold text-gray-800">New Products</h2>
            <button className="border-2 border-orange-500 text-orange-500 bg-white py-2 px-10 rounded hover:bg-orange-500 hover:text-white transition duration-300">View all new</button>
            </div>
            <div className="grid grid-cols-4 gap-5 mb-6">
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://picsum.photos/id/100/720/900" alt="News Image 1" className="w-full h-44 object-cover rounded mb-2"/>
                    <p className="flex items-cente"> <span className="pt-1"><AiTwotoneCalendar /> </span>24/04/2024</p>
                    <p className="text-gray-600 font-semibold mb-2 ">A bedroom must have something like this</p>
                    <a href="#" className="text-red-500 flex">Xem chi tiết <span className="pt-1 ml-1"> <AiOutlineArrowRight /></span></a>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://picsum.photos/id/100/720/900" alt="News Image 1" className="w-full h-44 object-cover rounded mb-2"/>
                    <p className="flex items-cente"> <span className="pt-1"><AiTwotoneCalendar /> </span>24/04/2024</p>
                    <p className="text-gray-600 font-semibold mb-2 ">A bedroom must have something like this</p>
                    <a href="#" className="text-red-500 flex">Xem chi tiết <span className="pt-1 ml-1"> <AiOutlineArrowRight /></span></a>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://picsum.photos/id/100/720/900" alt="News Image 1" className="w-full h-44 object-cover rounded mb-2"/>
                    <p className="flex items-cente"> <span className="pt-1"><AiTwotoneCalendar /> </span>24/04/2024</p>
                    <p className="text-gray-600 font-semibold mb-2 ">A bedroom must have something like this</p>
                    <a href="#" className="text-red-500 flex">Xem chi tiết <span className="pt-1 ml-1"> <AiOutlineArrowRight /></span></a>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <img src="https://picsum.photos/id/100/720/900" alt="News Image 1" className="w-full h-44 object-cover rounded mb-2"/>
                    <p className="flex items-cente"> <span className="pt-1"><AiTwotoneCalendar /> </span>24/04/2024</p>
                    <p className="text-gray-600 font-semibold mb-2 ">A bedroom must have something like this</p>
                    <a href="#" className="text-red-500 flex">Xem chi tiết <span className="pt-1 ml-1"> <AiOutlineArrowRight /></span></a>
                </div>
            </div>
        </section>
    </div>
    </div>
  );
};

export default HomePage;
