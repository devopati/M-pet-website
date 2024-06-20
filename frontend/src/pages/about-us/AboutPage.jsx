import React from "react";

const AboutPage = () => {
  return (
    <div className="w-[60%] ml-[60px] h-[320px] mt-[40px]">
      <div className=" mt-6">
        <h1 className="text-3xl pb-4 font-semibold">About Us</h1>
      </div>
      <div>
        <p className="text-gray-600 sp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorum
        eius, maiores cumque ipsum aperiam ut deleniti aspernatur amet impedit
        quibusdam labore at soluta sapiente quis adipisci nihil maxime eligendi!
        Vel atque optio possimus eligendi cupiditate, facere in nisi quia
        distinctio, numquam at reiciendis corrupti ipsam nobis a eaque
        explicabo, quae delectus asperiores iusto maxime obcaecati? Error
        quaerat beatae molestias?</p>
      </div>
      <div className="mt-7">
      <button className=" hover:bg-slate-600   border rounded-md font-semibold bg-blue-600 text-white text-center text-md h-[40px] w-[150px]">Explore more</button>
      </div>
    </div>
    
  );
};

export default AboutPage;
