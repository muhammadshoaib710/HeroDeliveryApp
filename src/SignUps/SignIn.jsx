import React, { useState } from "react";
import cycle from "../Assests/cycle.png";
import SignUps from "./SignUps";
import Service from "../components/Service";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Submit Form Data
  const handleForm = () => {
    console.log(name, company, phone, message);
  };

  const input = (
    <input
      type="text"
      className="form-control"
      placeholder="Saad@example.com"
      onChange={(e) => setName(e.target.value)}
    />
  );
  const field1 = (
    <input
      type="text"
      className="form-control"
      placeholder="Karim@example.com"
      onChange={(e) => setCompany(e.target.value)}
    />
  );
  const field2 = (
    <input
      type="text"
      className="form-control"
      placeholder="Phone Number"
      onChange={(e) => setPhone(e.target.value)}
    />
  );
  const field3 = (
    <textarea
      typeof="text"
      className="form-control"
      placeholder="Every bussiness is unique give us some information about your bussiness so we can configure accordingly"
      onChange={(e) => setMessage(e.target.value)}
    ></textarea>
  );
  const button = (
    <button className="btn btn-success" onClick={handleForm}>
      Next
    </button>
  );

  const service = <Service />;
  return (
    <>
      <div className="sign2">
        <SignUps
          title="Start your free Hassle Free Journey"
          para="All-in-one inventory, fulfillment and accounting software."
          number1="1"
          acount="Acount"
          number2="2"
          Personal="Personal"
          number3="3"
          Intergration="Integration"
          emailHead="Your Name"
          Cname="Company Name"
          phone="Phone Number"
          message="Comapny Basic Infromation"
          image={cycle}
          input1={input}
          input2={field1}
          input3={field2}
          input4={field3}
          service={service}
          button={button}
        />
      </div>
    </>
  );
};

export default SignIn;
