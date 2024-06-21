import React from "react";

const AboutPage = () => {
  return (
    <div className="w-[60%] ml-[60px] h-[320px] mt-[40px]">
      <div className=" mt-6">
        <h1 className="text-purple-700 text-4xl tracking-[4px] pb-4 font-semibold">About Us</h1>
      </div>
      <div>
        <p className="text-gray-600 sp"> A variety of animal supplies and pet accessories are also sold in our pet shops. The products sold include: food, treats, toys, collars, leashes, cat litter, cages and aquariums. We offer a house sitting business- provides the service of looking after peoples' homes while they are away on business or vacation.</p>
      </div>
      <div className="mt-7">
      <button className=" hover:bg-slate-600   border rounded-md font-semibold bg-blue-600 text-white text-center text-md h-[40px] w-[150px]"><a href="/animals">Explore more</a></button>
      </div>
    </div>
    
  );
};

export default AboutPage;
