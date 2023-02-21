import React from "react";
import "./tracker.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner/Banner";
import CoinsTable from "../../components/CoinsTable";

const Market = () => {
  return (
    <div className="tContainer">
      <Header />
      <Banner />
      <CoinsTable />
    </div>
  );
};

export default Market;
