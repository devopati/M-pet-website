import React from "react";

const DeliveryInfo = () => {
  return (
    <form className="flex flex-row gap-8 ml-[160px]">
      <div className="pr-[40px]">
        <p className=" ml-6 text-2xl font-bold">Delivery Information</p>
        <div className=" ml-6 gap-5 flex flex-row mt-6">
          <input
            className=" text-md h-6 outline-none focus:border-gray-300 focus:outline-none"
            type="text"
            placeholder="First name"
          />
          <input
            className="h-6 outline-none focus:border-gray-400 focus:outline-none"
            type="text"
            placeholder="Last name"
          />
        </div>
        <div className=" ml-6 gap-5 flex flex-row mt-6">
          <input
            className="h-6 outline-none focus:border-gray-300 focus:outline-none"
            type="email"
            placeholder="Email address"
          />
          <input
            className="h-6 outline-none focus:border-gray-300 focus:outline-none"
            type="text"
            placeholder="Street"
          />
        </div>
        <div className=" mt-6 ml-6 gap-5 flex flex-row">
          <input
            className="h-6 outline-none focus:border-gray-300 focus:outline-none"
            type="text"
            placeholder="City"
          />
          <input
            className="h-6 outline-none focus:border-gray-300 focus:outline-none"
            type="text"
            placeholder="State"
          />
        </div>
        <div className=" mt-6 ml-6 gap-5 flex flex-row">
          <input
            className="h-6 outline-none focus:border-gray-300 focus:outline-none"
            type="text"
            placeholder="Zip Code"
          />
          <input
            className="h-6 outline-none focus:border-gray-300 focus:outline-none"
            type="text"
            placeholder="Country"
          />
        </div>
        <div className=" mt-6 ml-6 gap-5 flex flex-row">
          {" "}
          <input
            className="h-6 outline-none focus:border-gray-300 focus:outline-none"
            type="text"
            placeholder="Phone"
          />
        </div>
      </div>
      <div className="flex">
        <div className="">
          <div className=" mb-7 w-[300px] mt-[55px] p-5 border border-gray-400">
            <div className="mb-3">
              <p className="font-medium">Price tag</p>
              <p>Ksh:</p>
            </div>
            <hr />
            <div className="mb-3">
              <p className=" text-lg font-medium">Delivery fee</p>
              <p className=" text-md font-light">Ksh</p>
            </div>
            <hr />
            <div className="font-semibold">
              <b className=" mr-3">Total-</b>
              <b>Ksh:</b>
            </div>
          </div>
          <button className=" ml-9 hover:bg-slate-600   border rounded-md font-semibold bg-blue-600 text-white text-center text-sm h-[40px] w-[200px]"><a href="/pay">PROCEED TO PAYMENT</a></button>
        </div>
       
      </div>
    </form>
  );
};

export default DeliveryInfo;
