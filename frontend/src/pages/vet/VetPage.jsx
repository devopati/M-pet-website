import React from "react";
import { CustomImages } from "../../assets/images";
import VetCard from "./VetCard";
import Book from "./Book";
import PlanCard from "./PlanCard";

const VetPage = () => {
  return (
    <div>
      <section class="bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-pink-400">
              Welcome to Veterinary Services
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Full-service veterinary practice dedicated to the overall
              well-being of your pet. We offer preventative care, general
              surgery, dental care, radiology, ultrasound and on-site laboratory
              testing
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              {/* Get started */}
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              {/* Speak to Sales */}
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={CustomImages.pets} alt="mockup" />
          </div>
        </div>
      </section>

      <div className="flex justify-center gap-14 flex-wrap mt-14">
        {/* <VetCard />
        <VetCard /> */}
      </div>

      <div
        style={{
          backgroundImage:
            "url('https://preview.colorlib.com/theme/petvet/images/bg_1.jpg.webp')",
          // height: "661px",
          backgroundPosition: "50% 50%",
        }}
      >
        <Book />
      </div>

      {/* <div className="grid grid-cols-3 place-items-center">
        <PlanCard title={"Basic Plan"} price={399} />
        <PlanCard title={"Premium Plan"} price={799} premium />
      </div> */}
    </div>
  );
};

export default VetPage;
