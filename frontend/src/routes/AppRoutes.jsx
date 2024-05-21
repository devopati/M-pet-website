import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  ABOUT_PAGE,
  ANIMALS_PAGE,
  CONTACT_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  REQUESTS_PAGE,
  WELCOME_PAGE,
} from "../constants/route-paths";
import {
  AboutPage,
  AnimalsPage,
  ContactsPage,
  Login,
  MyRequestsPage,
  Register,
  Welcome,
} from "../pages";
import WelcomeNavbar from "../components/navbars/WelcomeNavbar";
import Footer from "../components/containers/Footer";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <div className="bg-slate-50">
      <WelcomeNavbar />
      <Routes location={location} key={location.pathname}>
        <Route path={WELCOME_PAGE} element={<Welcome />} />

        <Route path={REGISTER_PAGE} element={<Register />} />
        <Route path={LOGIN_PAGE} element={<Login />} />

        <Route path={ANIMALS_PAGE} element={<AnimalsPage />} />
        <Route path={REQUESTS_PAGE} element={<MyRequestsPage />} />
        <Route path={ABOUT_PAGE} element={<AboutPage />} />
        <Route path={CONTACT_PAGE} element={<ContactsPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default AppRoutes;
