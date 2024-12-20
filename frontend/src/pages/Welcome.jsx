import React, { useEffect } from "react";
import WelcomeNavbar from "../components/navbars/WelcomeNavbar";
import AuthenticationModal from "../components/modals/AuthenticationModal";
import { ToastContainer, toast } from "react-toastify";
import WelcomeTopContainer from "./components/WelcomeTopContainer";
import HomeHeroContainer from "./components/HomeHeroContainer";
import FAQContainer from "./components/FAQContainer";

const Welcome = () => {
  return (
    <div>
      {/* <WelcomeNavbar /> */}
      <WelcomeTopContainer />

      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-red-700 dark:text-white">
              Pet Wellness and Health
            </h2>
            <h2 class="mb-4 text-xl tracking-tight font-semibold text-purple-500 dark:text-white">
              Veterinary Care is Key:
            </h2>
            <p class="mb-4">
              Maintaining your pet's well-being requires a multi-faceted
              approach. Regular veterinary checkups and vaccinations are crucial
              for catching health concerns early and preventing illnesses.
              Providing a balanced diet and regular exercise keeps your pet's
              body and mind healthy. Don't forget dental care and grooming,
              which prevent hygiene issues and potential problems. Creating a
              safe environment by pet-proofing your home and staying observant
              of your pet's behavior allows you to address any concerns
              promptly. Finally, mental stimulation and access to fresh water
              keep your furry friend happy and thriving.
            </p>
            <p>
              By incorporating these practices and consulting your veterinarian,
              you can ensure your pet lives a long and fulfilling life.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1509205477838-a534e43a849f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGRvZyUyMHBldHxlbnwwfHwwfHx8MA%3D%3D"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1681881833990-077d00629f18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHBldHN8ZW58MHx8MHx8fDA%3D"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <HomeHeroContainer />

      <FAQContainer />

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md sm:text-center">
            <h2 class="mb-4 text-2xl tracking-tight font-semibold text-slate-700 sm:text-3xl dark:text-white">
              Sign up for our newsletter
            </h2>
            <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div class="relative w-full">
                  <label
                    for="email"
                    class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-700 border-blue-600 sm:rounded-none sm:rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                We care about the protection of your data.{" "}
                <a
                  href="#"
                  class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
