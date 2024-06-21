import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyRequestsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="ml-[60px]">
      <div>
        <h1 className=" mt-4 text-[25px]  font-semibold ">
          Request about different breeds
        </h1>
      </div>
      <div>
        <form action="">
          <div className=" mt-6 flex flex-row gap-[20px]">
            <label htmlFor="dog">
              Dog
              <input required id="dog" type="radio" value="dog" name="dog" />
            </label>
            <label htmlFor="cat">
              Cat
              <input required id="cat" type="radio" name="cat" />
            </label>
            <label htmlFor="other">
              Other
              <input
                required
                type="radio"
                id="other"
                name="other"
                value="other"
              />
            </label>
          </div>

          <div className="flex flex-col gap-7 mt-6 ">
            <div className=" flex items-center mt-4">
              <label className="">
                Type of breed
                <input
                  className=" border-gray-400 text-sm h-3 ml-5 focus:bg-none outline-none"
                  type="text"
                  placeholder="Dog/cat breed"
                />
              </label>
            </div>
            <div className=" flex items-center mt-4">
              Description
              <textarea
                className=" border-gray-400 text-sm ml-5"
                placeholder="Describe the breed here...."
                name=""
              ></textarea>
            </div>
          </div>
          <button
            onClick={() => {
              toast.success("Your request has been sent successfully");
              navigate("/");
            }}
            className=" mt-7 hover:bg-slate-600   border rounded-md font-semibold bg-blue-600 text-white text-center text-md h-[40px] w-[150px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyRequestsPage;
