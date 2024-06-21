import React from "react";



const MyRequestsPage = () => {
 
  return <div className="ml-[150px]">
   <div>
   <h1 className="  tracking-[3px] mt-4 text-[25px]  font-semibold ">Request about different breeds</h1>
   </div>
   <div className=" border rounded-md mr-[200px] bg-blue-200">
    <form className="p-6" action="">
    <div className=" mt-6 flex flex-row gap-[20px]">
      <h3 className=" font-semibold mr-6">Type of Pet:</h3>
    <label  className=" mr-4" htmlFor="dog">Dog
        <input className="border-orange-100  gap-4 ml-3" required id="dog" type="radio" value='dog' name="dog"  />
      </label>
      <label  className=" mr-4" htmlFor="cat">Cat 
        <input className="border-orange-100  border gap-4 ml-3" required id="cat" type="radio" name="cat"  />
      </label>
      <label  className=" mr-4" htmlFor="other">Other 
        <input className=" border-orange-100 gap-4 ml-3" required type="radio" id="other" name="other" value='other'  />
      </label>
    </div>
    
      
      
      
     <div className="flex flex-col gap-7 mt-6 ">
     <div className=" flex items-center mt-4">
     <label className=" font-semibold">Type of breed:
        <input className=" shadow dark:bg-gray-800 dark:border-gray-700 rounded-sm border-orange-100 text-sm h-5 ml-6 focus:bg-none outline-none" type="text" placeholder="Pet breed" />
      </label>
     </div>
     <label className="gap-4 mr-4 font-semibold" for="age"> Age of pet: <input className=" shadow dark:bg-gray-800 dark:border-gray-700 border-orange-100 rounded-md w-[200px] ml-9" id="age" type="number" name="age" min="1" max="120" /></label>
      <div className=" font-semibold flex items-center mt-4">
        Description
      
        <textarea className=" shadow dark:bg-gray-800 dark:border-gray-700 rounded-md border-orange-100 w-[200px]  text-sm ml-9" placeholder="Describe the breed here...." name=""></textarea>
      
      </div>
      
     </div>
     
     <button className=" mt-7 hover:bg-slate-600   border rounded-md font-semibold bg-blue-600 text-white text-center text-md h-[40px] w-[150px]">Submit</button>
      

    </form>
   </div>

  </div>;
};

export default MyRequestsPage;
