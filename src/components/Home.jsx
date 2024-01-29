import React from "react";
import cycle from "../Assests/cycle.png";

const Home = () => {
  return (
    <>
      <div className="HeroSection">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-side">
                <h3>Empower your online business with Delivery Hero</h3>
                <h6>Elevate Your Business with Delivery Hero</h6>
                <p>
                  Deliver success with Delivery Hero: Your all-in-one solution
                  for easy order management, real-time inventory tracking, and
                  seamless shipping label generation. Simplify your online
                  business on social media
                </p>
                <button className="btn ">Find out more</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-side">
                <img className="CycleImg" src={cycle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
