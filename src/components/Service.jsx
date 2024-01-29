import React from "react";
import image1 from "../Assests/image 27.png";
import image2 from "../Assests/image 28.png";
import image3 from "../Assests/image 29.png";
import image4 from "../Assests/image 30.png";
import image5 from "../Assests/image 31.png";
const Service = () => {
  return (
    <>
      <div className="Service">
        <div className="container">
          <div className="row DeliveryImage">
            <div className="col-md-2 ">
              <img src={image1} />
            </div>
            <div className="col-md-2">
              <img src={image2} />
            </div>
            <div className="col-md-2">
              <img src={image3} />
            </div>
            <div className="col-md-2">
              <img src={image4} />
            </div>
            <div className="col-md-2">
              <img src={image5} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
