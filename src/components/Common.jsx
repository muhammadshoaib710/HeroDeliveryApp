import React from "react";
import Home from "./Home";
import Category from "./Category";
import Email from "./Email";
import DeliveryNumber from "./DeliveryNumber";
import Resources from "./Resources";
import MenuBar from "./MenuBar";
import Service from "./Service";

const Common = () => {
  return (
    <>
      <Home />
      <Category />
      <Resources />
      <Service />
      <DeliveryNumber />
      <Email />
      <MenuBar />
    </>
  );
};

export default Common;
