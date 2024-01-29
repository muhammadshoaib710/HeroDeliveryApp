import React, { useState } from "react";
import cycle from "../Assests/cycle.png";

const SignUps = (props) => {
  return (
    <>
      <div className="SignUp">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 leftBox">
              <h1>{props.title}</h1>
              <p>{props.para}</p>

              <div className="VerifyStep">
                <div>
                  <li className="Acount">{props.number1}</li>
                  <h6>{props.acount}</h6>
                </div>
                <div>
                  <li className="Personal">{props.number2}</li>
                  <h6>{props.Personal}</h6>
                </div>
                <div>
                  <li className="Integration">{props.number3}</li>
                  <h6>{props.Integration}</h6>
                </div>
              </div>
              <div>
                <h5>{props.emailHead}</h5>
                {props.input1}
                <h4>{props.Cname}</h4>
                {props.input2}
                <h5>{props.phone}</h5>
                {props.input3}
                <h4>{props.message}</h4>
                {props.input4}
              </div>
              {props.button}
            </div>
            <div className="col-md-6">
              <img className="CycleRight" src={props.image} />
            </div>
          </div>
        </div>
      </div>
      <div>{props.service}</div>
    </>
  );
};

export default SignUps;
