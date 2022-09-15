import React from "react";
import { Routes, Route } from "react-router";
import Header from "./Header";
import CustomerHome from "./CustomerHome";
import Pets from "./Pets";

const Appointments = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<CustomerHome />} />
        <Route path="/apps" element={<Appointments />} />
        <Route path="/pets" element={<Pets />} />
        {/* <Route path="/logout" element={<Home />} /> */}
      </Routes>
    </div>
  );
};

export default Appointments;
