import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <>
        <div className="Footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 firstFoooter">
                <h1>Delivery Hero</h1>
                <p>Empower your online business with Delivery Hero</p>
              </div>
              <div className="col-md-2 SecondFoooter">
                <h1>Company</h1>
                <ul>
                  <li>Help/FAQ</li>
                  <li>Press</li>
                  <li>Affilates</li>
                </ul>
              </div>
              <div className="col-md-2 SecondFoooter">
                <h1>More</h1>
                <ul>
                  <li>Report</li>
                  <li>Features</li>
                  <li>Reviews</li>
                </ul>
              </div>
              <div className="col-md-3 SocialMedia">
                <FaFacebook className="facebookIcon" />
                <FaInstagram className="instaIcon" />
                <FaPinterest className="Pinterest" />
              </div>
            </div>
            <p className="LastFooter">All rights reserved Delivery Hero</p>
          </div>
        </div>
      </>
    </>
  );
};

export default Footer;
