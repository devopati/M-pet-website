import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const DeliveryInfo = () => {
  // const { curr_pet } = useSelector((state) => state.auth);
  const curr_pet = JSON.parse(localStorage.getItem("pet"));
  return (
    <div className="flex flex-row gap-8 ml-[160px] pb-14 pt-14">
      <div className="pr-[40px]">
        <p className=" ml-6 text-2xl font-bold">Delivery Information</p>
        <div className=" ml-6 gap-5 flex flex-row mt-6">
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="First name"
          />
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="Last name"
          />
        </div>
        <div className=" ml-6 gap-5 flex flex-row mt-6">
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="email"
            placeholder="Email address"
          />
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="Street"
          />
        </div>
        <div className=" mt-6 ml-6 gap-5 flex flex-row">
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="City"
          />
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="State"
          />
        </div>
        <div className=" mt-6 ml-6 gap-5 flex flex-row">
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="Zip Code"
          />
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            placeholder="Country"
          />
        </div>
        <div className=" mt-6 ml-6 gap-5 flex flex-row">
          {" "}
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
              <p>Ksh:{curr_pet.price + ".00"}</p>
            </div>
            <hr />
            <div className="mb-3">
              <p className=" text-lg font-medium">Delivery fee</p>
              <p className=" text-md font-light">Ksh: 0.00</p>
            </div>
            <hr />
            <div className="font-semibold">
              <b className=" mr-3">Total-</b>
              <b>Ksh: {curr_pet.price + ".00"}</b>
            </div>
          </div>
          <button
            onClick={() => toast.error("An error occurred making payments")}
            className=" ml-9 hover:bg-slate-600   border rounded-md font-semibold bg-blue-600 text-white text-center text-sm h-[40px] w-[200px]"
          >
            MAKE PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
