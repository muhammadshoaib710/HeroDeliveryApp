import React from "react";
import { CgMail } from "react-icons/cg";
import sendIcon from '../Assests/Group 77.png'
const Email = () => {
  return (
    <>
      <div className="EmailForm ">
        <div className="container EmailSection">
        <img src={sendIcon} className="sendIcon" />
          <div className="row">
            <div className="col-md-12 emailtext">
              <h2>
                Subscribe to get information, latest news and updates about
                delivery Hero{" "}
              </h2>
            </div>
            <div className="col-md-12 InputSection">
              <div className="inputEmail">
                <CgMail />
                <span>Your Email</span>
              </div>
              <button className="btn">Subscribe</button>
            </div>
          </div>
               
        </div>
      </div>
    </>
  );
};

export default Email;
