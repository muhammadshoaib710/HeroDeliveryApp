import React from "react";
import Home from "./Home";
import Service from "./Service";
import { M2data } from "../MapData/M2data";
import { M1data } from "../MapData/M1data";
import { M3data } from "../MapData/M3data";
import { M4data } from "./../MapData/M4data";
import { M5data } from "../MapData/M5data";

const Management = () => {
  return (
    <>
      <Home />
      <div className="Management">
        <div className="container">
          <div className="M1Head">
            <h4>ONE PLATFORM FOR ALL SALES CHANNELS</h4>
            <h1>Centralized inventory management</h1>
          </div>
          <div className="row M1Row ">
            {M1data.map((data) => {
              return (
                <div className="col-md-6 M1Side" key={data.id}>
                  <div className="M1SideDES">
                    <span>{data.head}</span>
                    <h2>{data.title}</h2>
                  </div>
                  <p>{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container M1Manage">
          <div className="M1Head">
            <h4>ONE SOLUTION FOR YOUR OVERALL RETAIL MANAGEMENT</h4>
            <h1>Order Management and Fulfillment Made Easy</h1>
          </div>
          <div className="row M1Row ">
            {M2data.map((data) => {
              return (
                <div className="col-md-6 M1Side" key={data.id}>
                  <div className="M1SideDES">
                    <span>{data.head}</span>
                    <h2>{data.title}</h2>
                  </div>
                  <p>{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container M1Manage">
          <div className="M1Head">
            <h4>ONE PLATFORM FOR ALL YOUR SHIPPING NEEDS</h4>
            <h1>Ship 10X Faster, Grow 100X Faster!</h1>
          </div>
          <div className="row M1Row ">
            {M3data.map((data) => {
              return (
                <div className="col-md-6 M1Side" key={data.id}>
                  <div className="M1SideDES">
                    <span>{data.head}</span>
                    <h2>{data.title}</h2>
                  </div>
                  <p>{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container M4Manage">
          <div className="M1Head">
            <h1>ONE PLATFORM FOR ALL ACCOUNTING TASKS</h1>
          </div>
          <div className="row M1Row ">
            {M4data.map((data) => {
              return (
                <div className="col-md-6 M1Side" key={data.id}>
                  <div className="M1SideDES">
                    <span>{data.head}</span>
                    <h2>{data.title}</h2>
                  </div>
                  <p>{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container M5Manage">
          <div className="M1Head">
            <h1>ONE PLATFORM FOR POWERFUL REPORTING</h1>
          </div>
          <div className="row M1Row ">
            {M5data.map((data) => {
              return (
                <div className="col-md-6 M1Side" key={data.id}>
                  <div className="M1SideDES">
                    <span>{data.head}</span>
                    <h2>{data.title}</h2>
                  </div>
                  <p>{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Service />
    </>
  );
};

export default Management;
