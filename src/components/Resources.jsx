import React from "react";
import { FaFileAlt } from "react-icons/fa";
import Resource from "../Assests/Resource.jpg";
import { NavLink } from "react-router-dom";
import { Rdata } from "../MapData/Rdata";

const Resources = () => {
  return (
    <>
      <div className="Resources">
        <div className="container RowResource">
          <h1 className="leftResource">
            Everything you need to run and{" "}
            <span className="growSpan">grow your</span>
            <span className="leftSpan">eCommerce business</span>
          </h1>
          <div className="row ">
            {Rdata.map((data) => {
              return (
                <div className="col-md-6 RightResource">
                  <span className="svg">{data.head}</span>
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  <NavLink to="/management">{data.Link}</NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
