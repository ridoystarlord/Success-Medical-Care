import React from "react";
import Banner from "../Banner/Banner";
import Faqs from "../Faqs/Faqs";
import Ourquality from "../Ourquality/Ourquality";
import Servicedepartment from "../Servicedepartment/Servicedepartment";
import Testpricing from "../Testpricing/Testpricing";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Ourquality></Ourquality>
      <Servicedepartment></Servicedepartment>
      <Testpricing></Testpricing>
      <Faqs></Faqs>
    </div>
  );
};

export default Home;
