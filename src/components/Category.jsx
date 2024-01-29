import React from "react";
import service from "../Assests/service1.png";
import service2 from "../Assests/service2.png";
import service3 from "../Assests/service3.png";

const Category = () => {
  return (
    <>
      <div className="Category">
        <div className="container CardService">
          <div className="services-heading">
            <h6>Category</h6>
            <h5>We Offer Best Services</h5>
          </div>
          <div className="row Cards">
            <div className="col-md-4">
              <div className="card-section">
                <img src={service} />
                <h6>Streamlined Order Management</h6>
                <p>
                  Simplify your business with Delivery Hero's streamlined order
                  management
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="section2">
                <img src={service2} />
                <h6>Real-Time Inventory Tracking</h6>
                <p>
                  Stay in control with Delivery Hero's real-time inventory
                  tracking.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-section">
                <img src={service3} />
                <h6>Effortless Shipping Label Generation</h6>
                <p>Simplify shipping labels effortlessly with Delivery Hero.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
