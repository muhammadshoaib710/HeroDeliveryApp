import React, { useState } from "react";
import SignUps from "./SignUps";
import cycle from "../Assests/cycle.png";
import Service from "../components/Service";
import { NavLink, useNavigate } from "react-router-dom";

const Sign = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  // Submit Email
  const SubmitEmail = () => {
    console.log(email);
    navigate("/register");
  };

  // Input Fields
  const input = (
    <input
      type="email"
      className="form-control"
      placeholder="name@example.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
  const button = (
    <button className="btn btn-success" onClick={SubmitEmail}>
      Next
    </button>
  );
  const service = <Service />;
  return (
    <>
      <SignUps
        title="Start your free Hassle Free Journey"
        para="All-in-one inventory, fulfillment and accounting software."
        number1="1"
        acount="Acount"
        number2="2"
        Personal="Personal"
        number3="3"
        Intergration="Integration"
        emailHead="EmailAddress"
        image={cycle}
        input1={input}
        service={service}
        button={button}
      />
    </>
  );
};

export default Sign;
