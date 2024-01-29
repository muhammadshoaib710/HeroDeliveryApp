import React from "react";
import { Sdata } from "../MapData/Sdata";

const DeliveryNumber = () => {
  return (
    <>
      
      <div className="DeliveryNumber">
        <h2>Delivery Hero by the Numbers</h2>
        <div className="container CardContainer">
          <div className="row ">
            {Sdata.map((items) => {
              return <div className="col-md-3 DeliveryCard" key={items.id}>
                <h1>{items.heading}</h1>
                <p>{items.text}</p>
              </div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryNumber;
