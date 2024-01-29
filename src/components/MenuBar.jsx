import React from "react";
import { Rdata } from "../MapData/Rdata";
const MenuBar = () => {
  return (
    <>
      <div className="Menu ">
        <div className="container ">
          <div className="row">
            {Rdata.map((items) => {
              return (
                <div className="col-md-4 RightResource ">
                  <span>{items.head}</span>
                  <h1>{items.title}</h1>
                  <p>{items.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
