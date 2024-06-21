import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const DeliveryInfo = () => {
  const { curr_pet } = useSelector((state) => state.auth);
  console.log(curr_pet);
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
              <p>Ksh:{200.0}</p>
            </div>
            <hr />
            <div className="mb-3">
              <p className=" text-lg font-medium">Delivery fee</p>
              <p className=" text-md font-light">Ksh: 0.00</p>
            </div>
            <hr />
            <div className="font-semibold">
              <b className=" mr-3">Total-</b>
              <b>Ksh: {200.0}</b>
            </div>
          </div>
          <button
            onClick={() => toast.error("An error occurred making payments")}
            className=" ml-9 hover:bg-slate-600   border rounded-md font-semibold bg-blue-600 text-white text-center text-sm h-[40px] w-[200px]"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default DeliveryInfo;
