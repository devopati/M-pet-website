import React from "react";

const AboutPage = () => {
  return (
    <div className="w-[60%] ml-[60px] h-[320px] mt-[40px]">
      <div className=" mt-6">
        <h1 className="text-3xl pb-4 font-semibold">About Us</h1>
      </div>
      <div>
        <h1 className="text-xl pb-4 font-semibold">
          Making Homes Whole, One Paw Print at a Time
        </h1>
        <p className="text-gray-600 sp">
          At M-pet, we believe that every pet deserves a loving forever home.
          That's why we're dedicated to rescuing homeless animals, providing
          them with the care and medical attention they need, and finding them
          perfect matches with caring adopters.
        </p>
      </div>

      <div>
        <h1 className="text-xl pb-4 font-semibold">Our Story</h1>
        <p className="text-gray-600 sp">
          M-pet began in 2023 with a simple mission: to help animals in need.
          Founded by m-petters, who has always had a passion for animal
          welfare,We saw a growing number of abandoned pets and knew something
          had to be done. Since then, we've grown into a passionate team
          dedicated to making a difference in the lives of animals and the
          families who adopt them.
        </p>
      </div>

      {/* <div className="mt-7">
        <button className=" hover:bg-slate-600   border rounded-md font-semibold bg-blue-600 text-white text-center text-md h-[40px] w-[150px]">
          Explore more
        </button>
      </div> */}
    </div>
  );
};

export default AboutPage;
